// Toolpaths for each operation, as moves in part coordinates (mm):
// { r: true } for a rapid, otherwise a feed move at f mm/min.
//
// Climb milling with M3: pocket walls are followed counter-clockwise and
// outside edges clockwise, which is the direction Clipper already gives
// outer loops and holes.
import * as C from './clip.js';
import { FINISHES, tabDefaults } from './tools.js';

const CLEAR = 3; // mm above the stock for moves between cuts
// Material 3D roughing can leave over the surface: a layer's stair plus the
// allowance, and a margin. Rapids come down no lower than this above it.
const LAYER_LEFT = 3.5;

export function depthLevels(zTop, zBottom, stepdown) {
  const n = Math.max(1, Math.ceil((zTop - zBottom) / stepdown - 1e-6));
  return Array.from({ length: n }, (_, i) => zTop - ((i + 1) * (zTop - zBottom)) / n);
}

class Path {
  constructor(clearZ) { this.moves = []; this.clearZ = clearZ; this.at = null; }
  rapid(x, y, z) { this.push({ r: true, x, y, z }); }
  feed(x, y, z, f) { this.push({ x, y, z, f }); }
  push(m) {
    const a = this.at;
    if (a && Math.abs(a.x - m.x) < 1e-6 && Math.abs(a.y - m.y) < 1e-6 && Math.abs(a.z - m.z) < 1e-6) return;
    this.moves.push(m);
    this.at = m;
  }
  // Up, across, then down to just above the surface the cut starts from.
  goTo(x, y, zSurface) {
    if (this.at) this.rapid(this.at.x, this.at.y, this.clearZ);
    this.rapid(x, y, this.clearZ);
    this.rapid(x, y, zSurface + 1);
  }
  retract() { if (this.at) this.rapid(this.at.x, this.at.y, this.clearZ); }
}

// A closed loop walked by distance.
class Loop {
  constructor(points) {
    this.p = points;
    this.s = [0];
    for (let i = 1; i <= points.length; i++) {
      const a = points[i - 1], b = points[i % points.length];
      this.s.push(this.s[i - 1] + Math.hypot(b[0] - a[0], b[1] - a[1]));
    }
    this.length = this.s[points.length];
  }
  at(dist) {
    const L = this.length, d = ((dist % L) + L) % L;
    let i = 1;
    while (i < this.s.length - 1 && this.s[i] < d) i++;
    const a = this.p[i - 1], b = this.p[i % this.p.length];
    const seg = this.s[i] - this.s[i - 1] || 1;
    const f = (d - this.s[i - 1]) / seg;
    return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f];
  }
  // Distances of the corners between two distances (s1 may pass one lap).
  breaks(s0, s1) {
    const out = [];
    const L = this.length;
    for (let lap = Math.floor(s0 / L); lap * L <= s1; lap++) {
      for (let i = 0; i < this.p.length; i++) {
        const d = lap * L + this.s[i];
        if (d > s0 + 1e-9 && d < s1 - 1e-9) out.push(d);
      }
    }
    return out;
  }
  nearest([x, y]) {
    let best = 0, bd = Infinity;
    for (let i = 0; i < this.p.length; i++) {
      const d = (this.p[i][0] - x) ** 2 + (this.p[i][1] - y) ** 2;
      if (d < bd) { bd = d; best = this.s[i]; }
    }
    return best;
  }
}

// Walks a loop from distance s0 to s1. z(s) gives the depth; inside a tab
// the tool stays at tab height.
function walk(path, loop, s0, s1, z, f, tab) {
  const stops = [...loop.breaks(s0, s1), s1];
  if (tab) for (const t of tab.edges(s0, s1)) stops.push(t);
  stops.sort((a, b) => a - b);
  let prev = s0;
  for (const s of stops) {
    if (s - prev < 1e-9) continue;
    const mid = (prev + s) / 2;
    const lift = tab && tab.inside(mid) ? tab.top : -Infinity;
    const [ax, ay] = loop.at(prev);
    const za = Math.max(z(prev), lift);
    // Onto the loop where the stretch starts: a tool arriving from another
    // loop at the same depth would otherwise cut straight to the next
    // corner, past the point the link was checked against
    const a = path.at;
    if (a && (Math.abs(a.z - za) > 1e-6 || Math.abs(a.x - ax) > 1e-6 || Math.abs(a.y - ay) > 1e-6)) path.feed(ax, ay, za, f);
    const [x, y] = loop.at(s);
    path.feed(x, y, Math.max(z(s), lift), f);
    prev = s;
  }
}

// Down from zFrom to zTo along the loop, then one full lap at zTo.
// Returns where on the loop the lap ended.
function rampAndLap(path, loop, start, zFrom, zTo, fd, tab) {
  const rampLen = Math.max(0, (zFrom - zTo) / Math.tan((fd.rampAngle * Math.PI) / 180));
  if (loop.length < 1 || rampLen < 1e-6) {
    const [x, y] = loop.at(start);
    path.feed(x, y, tab && tab.inside(start) ? Math.max(zTo, tab.top) : zTo, fd.plunge);
    walk(path, loop, start, start + loop.length, () => zTo, fd.feed, tab);
    return start;
  }
  const end = start + rampLen;
  walk(path, loop, start, end, (s) => zFrom - ((s - start) / rampLen) * (zFrom - zTo), Math.min(fd.feed, fd.plunge * 2), tab);
  walk(path, loop, end, end + loop.length, () => zTo, fd.feed, tab);
  return end;
}

// Offset rings from the wall inward until nothing is left.
function rings(region, first, step, arc) {
  const out = [];
  for (let d = first, guard = 0; guard < 500; d += step, guard++) {
    const loops = C.simplify(C.cleanLoops(C.offset(region, -d, arc), 0.001), 0.005);
    if (!loops.length) break;
    out.push(loops);
  }
  return out;
}

// Rings nested into trees, cut innermost first. Loops that follow one
// another without leaving the cut form a chain; each chain starts with an
// entry ramp.
function chains(levels) {
  const nodes = levels.map((loops, depth) => loops.map((l) => ({ loop: l, depth, kids: [] })));
  for (let d = 1; d < nodes.length; d++) {
    for (const n of nodes[d]) {
      const parent = nodes[d - 1].find((p) => C.pointInLoop(n.loop[0], p.loop) && Math.sign(C.loopArea(p.loop)) === Math.sign(C.loopArea(n.loop)))
        || nodes[d - 1].find((p) => C.pointInLoop(n.loop[0], p.loop));
      (parent || nodes[0][0]).kids.push(n);
    }
  }
  const out = [];
  const emit = (n) => {
    if (!n.kids.length) { out.push([n.loop]); return; }
    for (const k of n.kids) emit(k);
    out[out.length - 1].push(n.loop);
  };
  // Islands are holes in the outer ring; they hang off it like any other loop.
  for (const root of nodes[0] || []) if (C.loopArea(root.loop) > 0) emit(root);
  for (const root of nodes[0] || []) if (C.loopArea(root.loop) <= 0 && !nodes[0].some((p) => p.kids.includes(root))) emit(root);
  return out;
}

// Inside the area the tool's center may use (nonzero winding over loops).
function inside(pt, loops) {
  let w = 0;
  for (const l of loops) if (C.pointInLoop(pt, l)) w += C.loopArea(l) > 0 ? 1 : -1;
  return w > 0;
}

// A straight move at depth is only safe if it stays where the tool may go.
function linkClear(a, b, allowed) {
  const n = Math.max(2, Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) / 0.2));
  for (let i = 1; i < n; i++) {
    const t = i / n;
    if (!inside([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t], allowed)) return false;
  }
  return true;
}

// lift: how high to go over what's in the way between loops (in 3D the
// part itself can stand far above the layer)
function pocket(path, region, r, fd, zTop, zBottom, allowance, lift = null) {
  const step = Math.min(fd.stepover, r * 0.95);
  // Stock left for a finishing pass hides coarser corners
  const levels = rings(region, r + allowance, step, allowance >= 0.2 ? 0.05 : undefined);
  if (!levels.length) return;
  const allowed = C.offset(region, -(r + allowance) + 0.01);
  const cs = chains(levels);
  let zFrom = zTop;
  for (const z of depthLevels(zTop, zBottom, fd.stepdown)) {
    for (const chain of cs) {
      let loop = new Loop(chain[0]);
      let [sx, sy] = loop.at(0);
      path.goTo(sx, sy, zFrom);
      path.feed(sx, sy, zFrom, fd.plunge);
      let end = rampAndLap(path, loop, 0, zFrom, z, fd);
      for (let i = 1; i < chain.length; i++) {
        const from = loop.at(end);
        const next = new Loop(chain[i]);
        const s = next.nearest(from);
        if (!linkClear(from, next.at(s), allowed)) {
          // Something is in the way: lift and come down on the next loop
          [sx, sy] = next.at(s);
          const up = lift ?? zFrom + 1;
          path.rapid(from[0], from[1], up);
          path.rapid(sx, sy, up);
          if (up > zFrom + 1) path.rapid(sx, sy, zFrom + 1);
          path.feed(sx, sy, z, fd.plunge);
        }
        walk(path, next, s, s + next.length, () => z, fd.feed);
        loop = next;
        end = s;
      }
    }
    zFrom = z;
  }
  path.retract();
}

// One lap of each wall at the finished size, in passes no deeper than the
// cutting length allows.
function finishWalls(path, region, r, fd, zTop, zBottom, maxDepth) {
  const loops = C.simplify(C.cleanLoops(C.offset(region, -r), 0.001), 0.005);
  for (const pts of loops) {
    const loop = new Loop(pts);
    const [x, y] = loop.at(0);
    path.goTo(x, y, zTop);
    for (const z of depthLevels(zTop, zBottom, maxDepth)) {
      path.feed(x, y, z, fd.plunge);
      walk(path, loop, 0, loop.length, () => z, fd.feed * 0.9);
    }
    path.retract();
  }
}

// Only the stretches of the wall the bigger tool couldn't reach.
function corners(path, region, r, bigR, fd, zTop, zBottom) {
  const left = C.cleanLoops(C.difference(region, C.offset(C.offset(region, -bigR), bigR)), 0.01);
  if (!left.length) return;
  const near = C.offset(left, r + 0.5);
  for (const pts of C.simplify(C.cleanLoops(C.offset(region, -r), 0.001), 0.005)) {
    const loop = new Loop(pts);
    const n = Math.max(8, Math.ceil(loop.length / 0.25));
    const inside = Array.from({ length: n }, (_, i) => near.some((l) => C.pointInLoop(loop.at((i / n) * loop.length), l)));
    if (inside.every(Boolean)) { finishWalls(path, region, r, fd, zTop, zBottom, fd.stepdown); return; }
    // Runs of samples near a corner, starting after an outside sample
    const first = inside.indexOf(false);
    for (let k = 0; k < n; k++) {
      const i = (first + k) % n;
      if (!inside[i] || inside[(i - 1 + n) % n]) continue;
      let j = i;
      while (inside[(j + 1) % n] && j - i < n) j++;
      const s0 = (i / n) * loop.length, s1 = ((j + 1) / n) * loop.length;
      const [x, y] = loop.at(s0);
      path.goTo(x, y, zTop);
      let forward = true;
      for (const z of depthLevels(zTop, zBottom, fd.stepdown)) {
        const ds = [...loop.breaks(s0, s1), s1];
        const route = forward ? ds : [...ds.slice(0, -1).reverse(), s0];
        const [cx, cy] = loop.at(forward ? s0 : s1);
        path.feed(cx, cy, z, fd.plunge);
        for (const d of route) { const [px, py] = loop.at(d); path.feed(px, py, z, fd.feed); }
        forward = !forward;
      }
      path.retract();
    }
  }
}

function face(path, stock, r, fd, zTop, zBottom) {
  const step = Math.min(fd.stepover, r * 1.6);
  const x0 = stock.minX - r - 2, x1 = stock.maxX + r + 2;
  for (const z of depthLevels(zTop, zBottom, fd.stepdown)) {
    let y = stock.minY + r * 0.6;
    path.goTo(x0, y, zTop);
    path.feed(x0, y, z, fd.plunge);
    let dir = 1;
    for (;;) {
      path.feed(dir > 0 ? x1 : x0, y, z, fd.feed);
      if (y >= stock.maxY - r * 0.6 - 1e-6) break;
      y = Math.min(y + step, stock.maxY - r * 0.6);
      path.feed(dir > 0 ? x1 : x0, y, z, fd.feed);
      dir = -dir;
    }
  }
  path.retract();
}

function drill(path, centers, fd, zTop, zBottom, d) {
  const peck = Math.max(0.5, d * 1.5);
  for (const c of centers) {
    path.goTo(c.x, c.y, zTop);
    let z = zTop;
    while (z > zBottom + 1e-6) {
      const next = Math.max(zBottom, z - peck);
      if (z < zTop) path.rapid(c.x, c.y, z + 0.5);
      path.feed(c.x, c.y, next, fd.plunge);
      path.rapid(c.x, c.y, zTop + 1);
      z = next;
    }
    path.retract();
  }
}

// Tabs at even spacing; their edges are where the tool's center lifts.
function makeTabs(length, job, r, zPartBottom) {
  const count = Math.max(0, Math.round(job.tabs.count));
  if (!job.tabs.enabled || !count) return null;
  // The tool's center lifts for the bridge plus its own width
  const bridge = job.tabs.length ?? tabDefaults(job.material).length;
  const width = 2 * r + bridge;
  const spans = Array.from({ length: count }, (_, i) => {
    const mid = ((i + 0.5) / count) * length;
    return [mid - width / 2, mid + width / 2];
  });
  const L = length;
  return {
    top: zPartBottom + (job.tabs.height ?? tabDefaults(job.material).height),
    inside: (s) => { const d = ((s % L) + L) % L; return spans.some(([a, b]) => d > a && d < b); },
    edges: (s0, s1) => {
      const out = [];
      for (let lap = Math.floor(s0 / L); lap * L <= s1; lap++) for (const [a, b] of spans) for (const e of [a, b]) {
        const d = lap * L + e;
        if (d > s0 && d < s1) out.push(d);
      }
      return out;
    },
  };
}

function cutout(path, footprint, r, fd, zTop, zBottom, job, allowance) {
  const passes = [{ off: r + allowance, fd }];
  if (allowance > 0) passes.push({ off: r, fd: { ...fd, feed: Math.round(fd.feed * 0.9) }, finish: true });
  for (const pass of passes) {
    for (const outer of C.regions(footprint).map((g) => g[0])) {
      const grown = C.simplify(C.cleanLoops(C.offset([outer], pass.off), 0.001), 0.005).filter((l) => C.loopArea(l) > 0);
      for (const pts of grown) {
        const loop = new Loop(pts.slice().reverse()); // clockwise: climb on an outside edge
        const tab = makeTabs(loop.length, job, r, 0);
        const [x, y] = loop.at(0);
        path.goTo(x, y, zTop);
        path.feed(x, y, zTop, fd.plunge);
        let s = 0, zFrom = zTop;
        const levels = pass.finish ? depthLevels(zTop, zBottom, Math.max(fd.stepdown, Math.min(3 * 2 * r, zTop - zBottom))) : depthLevels(zTop, zBottom, fd.stepdown);
        for (const z of levels) {
          s = rampAndLap(path, loop, s, zFrom, z, pass.fd, tab);
          zFrom = z;
        }
        path.retract();
      }
    }
  }
}

// 3D finishing: back-and-forth passes along X over the part's top (g, a
// height grid). At each grid node the tool goes as low as it can without
// touching the part anywhere under it (a drop cutter on the grid), never
// below zFloor. Passes are spaced for ridges `ridge` high.
function surface3d(path, g, tool, fd, ridge, zFloor, above) {
  const r = tool.diameter / 2, c = g.cell;
  const ball = tool.kind === 'ball';
  // Any point is within half a cell's diagonal of a node, so each node
  // counts as that much nearer: on a steep wall the surface between two
  // nodes can stand far above both, and the tool's edge must still see it.
  const near = c * Math.SQRT1_2, n = Math.ceil((r + near) / c);
  const st = [];
  for (let j = -n; j <= n; j++) for (let i = -n; i <= n; i++) {
    const d = Math.max(0, Math.hypot(i, j) * c - near);
    if (d <= r + 1e-9) st.push(i, j, ball ? r - Math.sqrt(Math.max(0, r * r - d * d)) : 0);
  }
  const { nx, ny, h } = g;
  // The highest surface anywhere under the tool: rapids stop above it
  const under = (i, j) => {
    let z = zFloor;
    for (let s = 0; s < st.length; s += 3) {
      const ii = i + st[s], jj = j + st[s + 1];
      if (ii >= 0 && jj >= 0 && ii < nx && jj < ny && h[jj * nx + ii] > z) z = h[jj * nx + ii];
    }
    return z;
  };
  const drop = (i, j) => {
    let z = -Infinity;
    for (let s = 0; s < st.length; s += 3) {
      const ii = i + st[s], jj = j + st[s + 1];
      if (ii < 0 || jj < 0 || ii >= nx || jj >= ny) continue;
      const v = h[jj * nx + ii] - st[s + 2];
      if (v > z) z = v;
    }
    return z === -Infinity ? null : Math.max(z, zFloor);
  };
  // Where the part is, plus the tool's reach
  let i0 = Infinity, i1 = -1, j0 = Infinity, j1 = -1;
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
    if (h[j * nx + i] === -Infinity) continue;
    if (i < i0) i0 = i; if (i > i1) i1 = i; if (j < j0) j0 = j; if (j > j1) j1 = j;
  }
  if (i1 < 0) return;
  i0 = Math.max(0, i0 - n); i1 = Math.min(nx - 1, i1 + n); j0 = Math.max(0, j0 - n); j1 = Math.min(ny - 1, j1 + n);
  const over = ball ? 2 * Math.sqrt(Math.max(0, 2 * r * ridge - ridge * ridge)) : fd.stepover * 0.5;
  const every = Math.max(1, Math.floor(Math.min(over, r) / c + 1e-9));
  const rows = [];
  for (let j = j0; j <= j1; j += every) rows.push(j);
  if (rows[rows.length - 1] !== j1) rows.push(j1);
  const at = (i, j, z) => ({ x: g.x0 + i * c, y: g.y0 + j * c, z, i, j });
  // A straight move is safe when no node along it needs the tool higher
  const clear = (a, b) => {
    const m = Math.max(1, Math.ceil(Math.hypot(b.i - a.i, b.j - a.j) * 2));
    let top = Math.max(a.z, b.z);
    for (let k = 1; k < m; k++) {
      const t = k / m, z = drop(Math.round(a.i + (b.i - a.i) * t), Math.round(a.j + (b.j - a.j) * t)) ?? zFloor;
      if (z > a.z + (b.z - a.z) * t + 1e-3) top = Math.max(top, z);
    }
    return top;
  };
  let last = null;
  const reach = 3 * every * c + 1e-6;
  rows.forEach((j, k) => {
    // Runs of nodes the tool reaches, simplified, every other row backwards
    const runs = [];
    let run = [];
    for (let i = i0; i <= i1; i++) {
      const z = drop(i, j);
      if (z === null) { if (run.length) runs.push(run); run = []; continue; }
      run.push(at(i, j, z));
    }
    if (run.length) runs.push(run);
    if (k % 2) { runs.reverse(); runs.forEach((x) => x.reverse()); }
    for (const pts of runs) {
      const line = simplifyZ(pts, 0.005);
      const first = line[0];
      if (last && Math.hypot(first.x - last.x, first.y - last.y) <= reach) {
        const top = clear(last, first);
        if (top > Math.max(last.z, first.z) + 1e-6) {
          // Over what's in the way, then down onto the next pass
          path.feed(last.x, last.y, top + 0.5, fd.feed);
          path.feed(first.x, first.y, top + 0.5, fd.feed);
        }
        path.feed(first.x, first.y, first.z, fd.plunge);
      } else {
        // Far: up, across, and down to where stairs from the roughing may be
        path.goTo(first.x, first.y, under(first.i, first.j) + above);
        path.feed(first.x, first.y, first.z, fd.plunge);
      }
      let prev = first;
      for (const q of line.slice(1)) {
        // Steeper than 45° down: plunge rate
        path.feed(q.x, q.y, q.z, prev.z - q.z > Math.hypot(q.x - prev.x, q.y - prev.y) ? fd.plunge : fd.feed);
        prev = q;
      }
      last = prev;
    }
  });
  path.retract();
}

// Drops points that lie within tol of the line through their neighbours
// (along one pass, so x or y and z).
function simplifyZ(pts, tol) {
  if (pts.length < 3) return pts;
  const keep = new Uint8Array(pts.length);
  keep[0] = keep[pts.length - 1] = 1;
  const stack = [[0, pts.length - 1]];
  while (stack.length) {
    const [a, b] = stack.pop();
    const A = pts[a], B = pts[b];
    const dx = B.x - A.x, dy = B.y - A.y, dz = B.z - A.z;
    const L2 = dx * dx + dy * dy + dz * dz;
    let worst = -1, wd = tol;
    for (let k = a + 1; k < b; k++) {
      const P = pts[k];
      const t = L2 > 0 ? ((P.x - A.x) * dx + (P.y - A.y) * dy + (P.z - A.z) * dz) / L2 : 0;
      const d = Math.hypot(A.x + dx * t - P.x, A.y + dy * t - P.y, A.z + dz * t - P.z);
      if (d > wd) { wd = d; worst = k; }
    }
    if (worst >= 0) { keep[worst] = 1; stack.push([a, worst], [worst, b]); }
  }
  return pts.filter((_, k) => keep[k]);
}

// Visits areas from where the tool is, always going to the closest next.
function nearestFirst(areas, from) {
  const mid = (a) => { const b = C.bounds([a[0]]); return [(b.minX + b.maxX) / 2, (b.minY + b.maxY) / 2]; };
  const left = areas.map((a) => ({ a, m: mid(a) }));
  const out = [];
  let at = from ? [from.x, from.y] : left[0]?.m;
  while (left.length) {
    let best = 0;
    for (let i = 1; i < left.length; i++) if (Math.hypot(left[i].m[0] - at[0], left[i].m[1] - at[1]) < Math.hypot(left[best].m[0] - at[0], left[best].m[1] - at[1])) best = i;
    const [n] = left.splice(best, 1);
    out.push(n.a); at = n.m;
  }
  return out;
}

export function toolpaths(p) {
  const clearZ = p.stock.top + CLEAR;
  const allowance = (FINISHES[p.job.finish] || FINISHES.balanced).allowance;
  // Without the facing pass the top is still at the stock's height
  const faced = p.ops.some((o) => o.kind === 'face' && o.enabled);
  const surface = faced ? p.analysis.top : p.stock.top;
  for (const op of p.ops) {
    const path = new Path(clearZ);
    const zTop = op.kind !== 'face' && op.zTop >= p.analysis.top - 1e-6 ? Math.max(op.zTop, surface) : op.zTop;
    const r = op.tool.diameter / 2, fd = op.feeds;
    const maxFinish = Math.min(op.tool.fluteLength || Infinity, 3 * op.tool.diameter);
    switch (op.kind) {
      case 'face': face(path, p.stock, r, fd, zTop, op.zBottom); break;
      case 'pocket': case 'step': case 'hole':
        // Each separate area (each hole) to full depth before the next
        for (const area of nearestFirst(C.regions(op.region), path.at)) {
          pocket(path, area, r, fd, zTop, op.zBottom, allowance);
          if (allowance > 0) finishWalls(path, area, r, fd, zTop, op.zBottom, maxFinish);
        }
        break;
      case 'corners': {
        const big = p.ops.find((o) => o.id === op.after);
        corners(path, op.region, r, big ? big.tool.diameter / 2 : r * 2, fd, zTop, op.zBottom);
        break;
      }
      case 'rough3d':
        // Each layer from the one above it; the first from the top surface
        for (const layer of op.layers) {
          const from = layer.zFrom >= p.analysis.top - 1e-6 ? zTop : layer.zFrom;
          for (const area of nearestFirst(C.regions(layer.region), path.at)) pocket(path, area, r, fd, from, layer.z, op.allowance, zTop + 1);
          // Opened only at this height: nothing above was cut, so from the top
          for (const area of nearestFirst(C.regions(layer.fresh || []), path.at)) pocket(path, area, r, fd, zTop, layer.z, op.allowance, zTop + 1);
        }
        break;
      case 'finish3d': surface3d(path, op.surface, op.tool, fd, op.ridge, 0, LAYER_LEFT); break;
      case 'drill': drill(path, op.centers, fd, zTop, op.zBottom, op.tool.diameter); break;
      case 'cutout': cutout(path, op.region, r, fd, zTop, op.zBottom, p.job, allowance); break;
    }
    op.moves = path.moves;
  }
  return p;
}
