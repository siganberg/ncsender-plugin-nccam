import * as C from './clip.js';

// The part as triangles: built from occt-import-js output, turned so the
// chosen side faces up, analysed for what can be cut from the top, and
// sliced into horizontal sections.

// One mesh from every solid in the file. `faces` keeps each CAD face's
// triangle range, so a click on a triangle can name its face.
export function meshFromOcct(result) {
  const pos = [], idx = [], faces = [], names = [];
  for (const m of result.meshes || []) {
    const base = pos.length / 3, triBase = idx.length / 3;
    const p = m.attributes.position.array;
    for (let i = 0; i < p.length; i++) pos.push(p[i]);
    const ix = m.index.array;
    for (let i = 0; i < ix.length; i++) idx.push(ix[i] + base);
    for (const f of m.brep_faces || []) faces.push({ first: f.first + triBase, last: f.last + triBase });
    if (m.name) names.push(m.name);
  }
  return { positions: Float64Array.from(pos), indices: Uint32Array.from(idx), faces, solids: (result.meshes || []).length, names };
}

export function meshBounds(mesh) {
  const p = mesh.positions;
  const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < p.length; i += 3) for (let k = 0; k < 3; k++) {
    if (p[i + k] < min[k]) min[k] = p[i + k];
    if (p[i + k] > max[k]) max[k] = p[i + k];
  }
  return { min, max, size: [max[0] - min[0], max[1] - min[1], max[2] - min[2]] };
}

export function triangleNormal(mesh, t) {
  const p = mesh.positions, i = mesh.indices;
  const a = i[t * 3] * 3, b = i[t * 3 + 1] * 3, c = i[t * 3 + 2] * 3;
  const ux = p[b] - p[a], uy = p[b + 1] - p[a + 1], uz = p[b + 2] - p[a + 2];
  const vx = p[c] - p[a], vy = p[c + 1] - p[a + 1], vz = p[c + 2] - p[a + 2];
  const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
  const len = Math.hypot(nx, ny, nz);
  return len > 0 ? [nx / len, ny / len, nz / len] : [0, 0, 0];
}

// Rotation (3x3, row-major) that turns direction n onto +Z.
export function rotationToUp(n) {
  const [x, y, z] = n;
  if (z > 0.999999) return [1, 0, 0, 0, 1, 0, 0, 0, 1];
  if (z < -0.999999) return [1, 0, 0, 0, -1, 0, 0, 0, -1];
  // Axis n × Z, angle acos(n·Z)
  let ax = y, ay = -x;
  const s = Math.hypot(ax, ay); ax /= s; ay /= s;
  const c = z, sn = s, t = 1 - c;
  return [
    t * ax * ax + c, t * ax * ay, ay * sn,
    t * ax * ay, t * ay * ay + c, -ax * sn,
    -ay * sn, ax * sn, c,
  ];
}

export const UP_DIRECTIONS = {
  top: [0, 0, 1], bottom: [0, 0, -1],
  front: [0, -1, 0], back: [0, 1, 0],
  left: [-1, 0, 0], right: [1, 0, 0],
};

// A copy turned by `rot`, then moved so its lowest corner is at 0,0,0.
export function transformMesh(mesh, rot) {
  const p = mesh.positions, out = new Float64Array(p.length);
  for (let i = 0; i < p.length; i += 3) {
    const x = p[i], y = p[i + 1], z = p[i + 2];
    out[i] = rot[0] * x + rot[1] * y + rot[2] * z;
    out[i + 1] = rot[3] * x + rot[4] * y + rot[5] * z;
    out[i + 2] = rot[6] * x + rot[7] * y + rot[8] * z;
  }
  const moved = { positions: out, indices: mesh.indices, faces: mesh.faces };
  const { min } = meshBounds(moved);
  for (let i = 0; i < out.length; i += 3) { out[i] -= min[0]; out[i + 1] -= min[1]; out[i + 2] -= min[2]; }
  // Drop float noise so flat faces land on exact heights
  for (let i = 0; i < out.length; i++) out[i] = Math.round(out[i] * 1e6) / 1e6;
  return moved;
}

// A copy sized by [sx, sy, sz] in its own axes (each > 0).
export function scaleMesh(mesh, [sx, sy, sz]) {
  if (sx === 1 && sy === 1 && sz === 1) return mesh;
  if (!(sx > 0 && sy > 0 && sz > 0)) throw new Error('A size must be more than 0.');
  const p = mesh.positions, out = new Float64Array(p.length);
  for (let i = 0; i < p.length; i += 3) { out[i] = p[i] * sx; out[i + 1] = p[i + 1] * sy; out[i + 2] = p[i + 2] * sz; }
  return { ...mesh, positions: out };
}

export const orient = (mesh, up) => transformMesh(mesh, rotationToUp(typeof up === 'string' ? UP_DIRECTIONS[up] : up));

// What the top of the part looks like to a 3-axis machine:
// - floors: heights of the flat, upward faces (pocket floors, steps, top)
// - undercut: faces that look down from above the bottom (needs a flip)
// - sloped: faces neither flat nor vertical (chamfers, fillets, 3D shapes)
export function analyze(mesh, tol = 1e-3) {
  const { max, size } = meshBounds(mesh);
  const top = max[2];
  const floors = new Map(); // height -> flat area there
  let undercutArea = 0, slopedArea = 0, totalArea = 0;
  const p = mesh.positions, ix = mesh.indices;
  const nTri = ix.length / 3;
  for (let t = 0; t < nTri; t++) {
    const a = ix[t * 3] * 3, b = ix[t * 3 + 1] * 3, c = ix[t * 3 + 2] * 3;
    const n = triangleNormal(mesh, t);
    const ux = p[b] - p[a], uy = p[b + 1] - p[a + 1], uz = p[b + 2] - p[a + 2];
    const vx = p[c] - p[a], vy = p[c + 1] - p[a + 1], vz = p[c + 2] - p[a + 2];
    const ar = Math.hypot(uy * vz - uz * vy, uz * vx - ux * vz, ux * vy - uy * vx) / 2;
    totalArea += ar;
    const zMid = (p[a + 2] + p[b + 2] + p[c + 2]) / 3;
    if (n[2] > 1 - tol) { const z = Math.round(zMid * 1000) / 1000; floors.set(z, (floors.get(z) || 0) + ar); }
    else if (n[2] < -(1 - tol)) { if (zMid > tol) undercutArea += ar; }
    else if (Math.abs(n[2]) > tol) {
      // A downward-facing slope is an undercut; an upward one a 3D surface
      if (n[2] < 0) undercutArea += ar; else slopedArea += ar;
    }
  }
  // Faces that look down only matter when a real share of the part sits
  // under them: a chamfer or fillet on the bottom edge is just left square,
  // a sideways hole or slot can't be cut at all.
  const faceDown = undercutArea > 1e-3 * totalArea;
  const m = faceDown ? missedShare(mesh) : { inside: 0, total: 0 };
  return {
    size, top,
    floors: [...floors.keys()].sort((x, y) => y - x),
    floorAreas: Object.fromEntries(floors),
    undercut: faceDown && m.inside > MISSED_LIMIT,
    squareEdges: faceDown && m.inside <= MISSED_LIMIT,
    sloped: slopedArea > 1e-3 * totalArea,
    undercutArea, slopedArea, totalArea, slopedShare: totalArea > 0 ? slopedArea / totalArea : 0, missed: m.inside, missedTotal: m.total,
  };
}

const MISSED_LIMIT = 0.05;

// Chamfers drawn in the model: connected upward faces all at one slope (a
// flat band along an edge, or a cone round a hole), between two heights and
// no wider than CHAMFER_WIDEST. A fillet's slope keeps changing, so it isn't
// one. Each: angle (from vertical, as a V-bit's half angle), bottom and top
// heights, width, its triangles and their area.
const CHAMFER_WIDEST = 12;
// skip: triangles that aren't chamfers (a thread's flanks); besides: ones a
// chamfer may border though they slope (a thread and where it runs out)
export function chamferBands(mesh, { skip = null, besides = null } = {}) {
  const p = mesh.positions, ix = mesh.indices, nTri = ix.length / 3;
  const nz = new Float64Array(nTri).fill(NaN);
  // A cone's facets lean a degree or so either way of its true slope
  const slopeTol = Math.sin((1.5 * Math.PI) / 180);
  for (let t = 0; t < nTri; t++) {
    const n = triangleNormal(mesh, t);
    if (n[2] > 0.17 && n[2] < 0.985 && !skip?.has(t)) nz[t] = n[2]; // 10° to 80° from flat, not a thread's flank
  }
  // Triangles at the same slope that share a corner are one band
  const parent = Array.from({ length: nTri }, (_, i) => i);
  const find = (i) => { while (parent[i] !== i) i = parent[i] = parent[parent[i]]; return i; };
  const byPoint = new Map(), around = new Map(); // corner -> sloped triangles; -> all
  const keyOf = (v) => `${Math.round(p[v] * 1e4)},${Math.round(p[v + 1] * 1e4)},${Math.round(p[v + 2] * 1e4)}`;
  for (let t = 0; t < nTri; t++) for (let k = 0; k < 3; k++) {
    const key = keyOf(ix[t * 3 + k] * 3);
    const list = around.get(key);
    if (list) list.push(t); else around.set(key, [t]);
  }
  for (let t = 0; t < nTri; t++) {
    if (Number.isNaN(nz[t])) continue;
    for (let k = 0; k < 3; k++) {
      const v = ix[t * 3 + k] * 3;
      const key = `${Math.round(p[v] * 1e4)},${Math.round(p[v + 1] * 1e4)},${Math.round(p[v + 2] * 1e4)}`;
      const list = byPoint.get(key);
      if (list) list.push(t); else byPoint.set(key, [t]);
    }
  }
  for (const list of byPoint.values()) {
    list.sort((a, b) => nz[a] - nz[b]);
    for (let k = 1; k < list.length; k++) if (nz[list[k]] - nz[list[k - 1]] < slopeTol) parent[find(list[k])] = find(list[k - 1]);
  }
  const groups = new Map();
  for (let t = 0; t < nTri; t++) {
    if (Number.isNaN(nz[t])) continue;
    const g = find(t);
    if (!groups.has(g)) groups.set(g, []);
    groups.get(g).push(t);
  }
  const out = [];
  for (const tris of groups.values()) {
    let lo = Infinity, hi = -Infinity, nMin = Infinity, nMax = -Infinity, area = 0;
    for (const t of tris) {
      nMin = Math.min(nMin, nz[t]); nMax = Math.max(nMax, nz[t]);
      const a = ix[t * 3] * 3, b = ix[t * 3 + 1] * 3, c = ix[t * 3 + 2] * 3;
      for (const v of [a, b, c]) { lo = Math.min(lo, p[v + 2]); hi = Math.max(hi, p[v + 2]); }
      area += Math.abs((p[b] - p[a]) * (p[c + 1] - p[a + 1]) - (p[c] - p[a]) * (p[b + 1] - p[a + 1])) / 2 / nz[t];
    }
    if (nMax - nMin > 2 * slopeTol) continue; // curving: a fillet or a 3D shape
    // A chamfer meets flat and vertical faces only; a ring of a dome or a
    // fillet's facets meet other slopes
    const mine = new Set(tris);
    let alone = true;
    for (const t of tris) {
      for (let k = 0; k < 3 && alone; k++) for (const u of around.get(keyOf(ix[t * 3 + k] * 3))) {
        if (mine.has(u) || besides?.has(u)) continue; // a thread's flank may border it
        const z = triangleNormal(mesh, u)[2];
        if (Math.abs(z) < 0.985 && Math.abs(z) > 0.03) { alone = false; break; }
      }
      if (!alone) break;
    }
    if (!alone) continue;
    const nzm = (nMin + nMax) / 2;
    const angle = (Math.asin(nzm) * 180) / Math.PI; // from vertical: 90° less the slope
    const h = hi - lo, w = h * Math.tan((angle * Math.PI) / 180);
    if (h < 0.1 || w > CHAMFER_WIDEST) continue;
    out.push({ angle, zb: lo, zt: hi, h, w, tris, area });
  }
  return out;
}

export function meshVolume(mesh) {
  const p = mesh.positions, ix = mesh.indices;
  let v = 0;
  for (let t = 0; t < ix.length; t += 3) {
    const a = ix[t] * 3, b = ix[t + 1] * 3, c = ix[t + 2] * 3;
    v += p[a] * (p[b + 1] * p[c + 2] - p[b + 2] * p[c + 1]) - p[a + 1] * (p[b] * p[c + 2] - p[b + 2] * p[c]) + p[a + 2] * (p[b] * p[c + 1] - p[b + 1] * p[c]);
  }
  return Math.abs(v / 6);
}

// How much more a cut from the top leaves than the part itself, as a share
// of the part: everything under the part's top surface stays. `inside`
// leaves out a narrow band just outside the part's footprint on the bed:
// a chamfer or rounded edge around the outside overhangs it and is only
// left square, so it counts in `total` alone. A sideways hole, a pocket
// that opens downwards or a wide ledge counts in both.
export function missedShare(mesh) {
  const { min, max } = meshBounds(mesh);
  const w = max[0] - min[0], d = max[1] - min[1];
  const cell = Math.max(0.05, Math.sqrt((w * d) / 250000));
  const grid = { x0: min[0], y0: min[1], cell, nx: Math.ceil(w / cell) + 1, ny: Math.ceil(d / cell) + 1 };
  const { h, mat } = columns(mesh, grid);
  const outline = C.union(C.regions(C.unionEvenOdd(slice(mesh, min[2] + 0.01))).map((r) => r[0]));
  const inside = footprintMask(outline, grid);
  // An edge's overhang is narrow; a ledge wider than this counts in full
  const band = footprintMask(C.offset(outline, Math.min(3, 0.15 * Math.min(w, d))), grid);
  let all = 0, over = 0;
  for (let i = 0; i < h.length; i++) {
    if (!(h[i] > min[2])) continue;
    const left = Math.max(0, h[i] - min[2] - mat[i]); // air under the top that stays
    all += left;
    if (inside[i] || !band[i]) over += left;
  }
  const vol = meshVolume(mesh), a = cell * cell;
  if (!(vol > 0)) return { inside: 0, total: 0 };
  return { inside: (over * a) / vol, total: (all * a) / vol };
}

// For each grid column: the part's top (-Infinity where there is none) and
// how much material the column passes through (up-facing surfaces end
// material, down-facing ones start it: their heights add up to its length).
function columns(mesh, grid) {
  const n = grid.nx * grid.ny;
  const h = new Float32Array(n).fill(-Infinity), mat = new Float32Array(n);
  const p = mesh.positions, ix = mesh.indices;
  for (let t = 0; t < ix.length; t += 3) {
    const a = ix[t] * 3, b = ix[t + 1] * 3, c = ix[t + 2] * 3;
    const ax = p[a], ay = p[a + 1], az = p[a + 2], bx = p[b], by = p[b + 1], bz = p[b + 2], cx = p[c], cy = p[c + 1], cz = p[c + 2];
    const det = (by - cy) * (ax - cx) + (cx - bx) * (ay - cy);
    if (Math.abs(det) < 1e-12) continue;
    // Outward normal's z has the sign of the projected area (CCW = up)
    const up = ((bx - ax) * (cy - ay) - (by - ay) * (cx - ax)) > 0 ? 1 : -1;
    const i0 = Math.max(0, Math.ceil((Math.min(ax, bx, cx) - grid.x0) / grid.cell)), i1 = Math.min(grid.nx - 1, Math.floor((Math.max(ax, bx, cx) - grid.x0) / grid.cell));
    const j0 = Math.max(0, Math.ceil((Math.min(ay, by, cy) - grid.y0) / grid.cell)), j1 = Math.min(grid.ny - 1, Math.floor((Math.max(ay, by, cy) - grid.y0) / grid.cell));
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
      // Half-open edges, so a column on a shared edge counts one triangle
      const x = grid.x0 + (i + 0.5e-3) * grid.cell, y = grid.y0 + (j + 0.7e-3) * grid.cell;
      const l1 = ((by - cy) * (x - cx) + (cx - bx) * (y - cy)) / det;
      const l2 = ((cy - ay) * (x - cx) + (ax - cx) * (y - cy)) / det;
      const l3 = 1 - l1 - l2;
      if (l1 < 0 || l2 < 0 || l3 < 0) continue;
      const z = l1 * az + l2 * bz + l3 * cz;
      const k = j * grid.nx + i;
      if (z > h[k]) h[k] = z;
      mat[k] += up * z;
    }
  }
  return { h, mat };
}

// Which grid columns lie inside the loops (even-odd, by rows).
function footprintMask(loops, grid) {
  const mask = new Uint8Array(grid.nx * grid.ny);
  for (let j = 0; j < grid.ny; j++) {
    const y = grid.y0 + j * grid.cell, xs = [];
    for (const loop of loops) for (let k = 0; k < loop.length; k++) {
      const [x1, y1] = loop[k], [x2, y2] = loop[(k + 1) % loop.length];
      if ((y1 <= y) !== (y2 <= y)) xs.push(x1 + ((y - y1) / (y2 - y1)) * (x2 - x1));
    }
    xs.sort((p, q) => p - q);
    for (let k = 0; k + 1 < xs.length; k += 2) {
      const i0 = Math.max(0, Math.ceil((xs[k] - grid.x0) / grid.cell)), i1 = Math.min(grid.nx - 1, Math.floor((xs[k + 1] - grid.x0) / grid.cell));
      for (let i = i0; i <= i1; i++) mask[j * grid.nx + i] = 1;
    }
  }
  return mask;
}

// The part's section at height z: closed loops (any orientation).
export function slice(mesh, z) {
  const p = mesh.positions, ix = mesh.indices;
  const segs = [];
  const nTri = ix.length / 3;
  for (let t = 0; t < nTri; t++) {
    const v = [ix[t * 3] * 3, ix[t * 3 + 1] * 3, ix[t * 3 + 2] * 3];
    const pts = [];
    for (let k = 0; k < 3; k++) {
      const a = v[k], b = v[(k + 1) % 3];
      const za = p[a + 2] - z, zb = p[b + 2] - z;
      if ((za < 0) !== (zb < 0)) {
        const f = za / (za - zb);
        pts.push([p[a] + (p[b] - p[a]) * f, p[a + 1] + (p[b + 1] - p[a + 1]) * f]);
      }
    }
    if (pts.length === 2) segs.push(pts);
  }
  return chain(segs);
}

// A thread modeled in the round hole at c (x, y, d) between zLo and zHi:
// cut across, its wall swings out and in once a turn, and where it is
// furthest out turns steadily with height, one turn a pitch. Measured on
// the triangles near the hole only, every 0.04 mm: the swing's size and
// angle from the first harmonic of the wall's distance by angle. Returns
// { major, minor, pitch, hand, zLo, zHi, area } or null.
export function findThread(mesh, c, zLo, zHi) {
  const p = mesh.positions, ix = mesh.indices, nTri = ix.length / 3;
  const R = c.d / 2 + 2;
  const near = [];
  for (let t = 0; t < nTri; t++) {
    let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
    for (let k = 0; k < 3; k++) { const v = ix[t * 3 + k] * 3; x0 = Math.min(x0, p[v]); x1 = Math.max(x1, p[v]); y0 = Math.min(y0, p[v + 1]); y1 = Math.max(y1, p[v + 1]); }
    if (Math.hypot(Math.max(0, x0 - c.x, c.x - x1), Math.max(0, y0 - c.y, c.y - y1)) < R) near.push(t);
  }
  const dz = 0.04, samples = [];
  for (let z = zLo + dz / 2; z < zHi; z += dz) {
    let sw = 0, sc = 0, ss = 0, rmin = Infinity, rmax = -Infinity;
    for (const t of near) {
      const pts = [];
      for (let k = 0; k < 3; k++) {
        const a = ix[t * 3 + k] * 3, b = ix[t * 3 + (k + 1) % 3] * 3;
        const za = p[a + 2] - z, zb = p[b + 2] - z;
        if ((za < 0) !== (zb < 0)) { const f = za / (za - zb); pts.push([p[a] + (p[b] - p[a]) * f - c.x, p[a + 1] + (p[b + 1] - p[a + 1]) * f - c.y]); }
      }
      if (pts.length !== 2) continue;
      const ra = Math.hypot(...pts[0]), rb = Math.hypot(...pts[1]);
      if (ra > R || rb > R) continue;
      const len = Math.hypot(pts[1][0] - pts[0][0], pts[1][1] - pts[0][1]);
      const mx = (pts[0][0] + pts[1][0]) / 2, my = (pts[0][1] + pts[1][1]) / 2, r = Math.hypot(mx, my);
      sw += len; sc += len * mx; ss += len * my; // r cosθ, r sinθ
      rmin = Math.min(rmin, ra, rb); rmax = Math.max(rmax, ra, rb);
    }
    // A whole wall round the hole, or nothing to measure here
    if (sw < Math.PI * c.d * 0.8) continue;
    samples.push({ z, rmin, rmax, amp: (2 * Math.hypot(sc, ss)) / sw, phi: Math.atan2(ss, sc) });
  }
  if (globalThis.process?.env?.THREAD_DEBUG) console.log('samples', samples.length, samples.filter((_, k) => k % 10 === 0).map((q) => `${q.z.toFixed(2)}:${q.rmin.toFixed(3)}-${q.rmax.toFixed(3)} amp${q.amp.toFixed(3)} phi${(q.phi * 57.3).toFixed(0)}`).join(' | '));
  // The longest run of heights where the wall swings
  let best = [], run = [];
  for (const q of samples) {
    const swings = q.rmax - q.rmin > 0.08 && q.amp > 0.03;
    const prev = run[run.length - 1];
    // The same wall as below: a countersink or a step above ends the run
    if (swings && (!prev || (q.z - prev.z < dz * 1.5 && Math.abs(q.rmin - prev.rmin) < 0.05 && Math.abs(q.rmax - prev.rmax) < 0.05))) run.push(q);
    else { if (run.length > best.length) best = run; run = swings ? [q] : []; }
  }
  if (run.length > best.length) best = run;
  if (globalThis.process?.env?.THREAD_DEBUG) console.log('run', best.length, 'of', samples.length, best[0]?.z.toFixed(2), best[best.length - 1]?.z.toFixed(2));
  if (best.length < 8) return null;
  // The angle unwrapped up the run: one turn a pitch, the same way all along
  const phi = [best[0].phi];
  for (let k = 1; k < best.length; k++) {
    let d = best[k].phi - best[k - 1].phi;
    while (d > Math.PI) d -= 2 * Math.PI;
    while (d < -Math.PI) d += 2 * Math.PI;
    phi.push(phi[k - 1] + d);
  }
  const run0 = best;
  const fit = (lo, hi) => {
    let n = 0, mz = 0, mp = 0, sxy = 0, sxx = 0;
    for (let k = lo; k < hi; k++) { n++; mz += run0[k].z; mp += phi[k]; }
    mz /= n; mp /= n;
    for (let k = lo; k < hi; k++) { sxy += (run0[k].z - mz) * (phi[k] - mp); sxx += (run0[k].z - mz) ** 2; }
    const slope = sxy / sxx;
    return { slope, at: (k) => mp + slope * (run0[k].z - mz) };
  };
  // Fitted on the middle half, then grown each way while the wall stays on
  // that helix: where the thread runs out at a face, it doesn't
  const q = best.length >> 2;
  let line = fit(q, best.length - q);
  let lo = q, hi = best.length - q;
  while (lo > 0 && Math.abs(phi[lo - 1] - line.at(lo - 1)) < 0.3) lo--;
  while (hi < best.length && Math.abs(phi[hi] - line.at(hi)) < 0.3) hi++;
  line = fit(lo, hi);
  const all = best;
  best = all.slice(lo, hi);
  const zs = best.map((s2) => s2.z), n = zs.length, slope = line.slope;
  let rms = 0;
  for (let k = 0; k < n; k++) rms += (phi[lo + k] - line.at(lo + k)) ** 2;
  rms = Math.sqrt(rms / n);
  const pitch = (2 * Math.PI) / Math.abs(slope);
  const turns = (zs[n - 1] - zs[0]) / pitch;
  if (globalThis.process?.env?.THREAD_DEBUG) console.log('fit pitch', pitch.toFixed(3), 'rms', rms.toFixed(3), 'turns', turns.toFixed(1), 'z', zs[0].toFixed(2), zs[n - 1].toFixed(2));
  if (!(pitch > 0.2 && pitch < 6) || rms > 0.35 || turns < 1.5) return null;
  const med = (a) => a.slice().sort((x, y) => x - y)[a.length >> 1];
  const major = 2 * med(best.map((q) => q.rmax)), minor = 2 * med(best.map((q) => q.rmin));
  const depth = (major - minor) / 2;
  if (depth < 0.3 * pitch || depth > 0.95 * pitch) return null;
  // Its flanks: sloped faces the thread explains, facing up and down
  let area = 0, below = 0;
  const tris = [], ring = [];
  for (const t of near) {
    const a = ix[t * 3] * 3, b = ix[t * 3 + 1] * 3, cc = ix[t * 3 + 2] * 3;
    const zm = (p[a + 2] + p[b + 2] + p[cc + 2]) / 3;
    if (zm < zs[0] - pitch || zm > zs[n - 1] + pitch) continue;
    // A pitch further out too (`ring`): where it runs into a countersink or
    // a face; only its flanks are the thread (`tris`)
    const rc = Math.hypot((p[a] + p[b] + p[cc]) / 3 - c.x, (p[a + 1] + p[b + 1] + p[cc + 1]) / 3 - c.y);
    if (rc > major / 2 + pitch) continue;
    ring.push(t);
    if (rc > major / 2 + 0.1) continue;
    const ux = p[b] - p[a], uy = p[b + 1] - p[a + 1], uz = p[b + 2] - p[a + 2], vx = p[cc] - p[a], vy = p[cc + 1] - p[a + 1], vz = p[cc + 2] - p[a + 2];
    const nz = ux * vy - uy * vx, ar = Math.hypot(uy * vz - uz * vy, uz * vx - ux * vz, nz) / 2;
    if (nz > 0) area += ar; else if (nz < 0) below += ar;
    tris.push(t);
  }
  return { major, minor, pitch, hand: slope > 0 ? 'right' : 'left', zLo: zs[0], zHi: zs[n - 1], area, below, tris, ring };
}

// The standard a thread is (metric, then unified), or its sizes.
const METRIC = [[2, 0.4], [2.5, 0.45], [3, 0.5], [4, 0.7], [5, 0.8], [6, 1], [8, 1.25], [8, 1], [10, 1.5], [10, 1.25], [12, 1.75], [12, 1.25], [16, 2]];
const UNIFIED = [['#2-56', 2.184, 56], ['#4-40', 2.845, 40], ['#6-32', 3.505, 32], ['#8-32', 4.166, 32], ['#10-24', 4.826, 24], ['#10-32', 4.826, 32], ['1/4-20', 6.35, 20], ['1/4-28', 6.35, 28], ['5/16-18', 7.938, 18], ['3/8-16', 9.525, 16], ['1/2-13', 12.7, 13]];
// The area of the faces among `tris` that look up (> 0) or down (< 0)
export function areaFacing(mesh, tris, sign) {
  const p = mesh.positions, ix = mesh.indices;
  let area = 0;
  for (const t of tris) {
    const a = ix[t * 3] * 3, b = ix[t * 3 + 1] * 3, c = ix[t * 3 + 2] * 3;
    const ux = p[b] - p[a], uy = p[b + 1] - p[a + 1], uz = p[b + 2] - p[a + 2], vx = p[c] - p[a], vy = p[c + 1] - p[a + 1], vz = p[c + 2] - p[a + 2];
    const nz = ux * vy - uy * vx, len = Math.hypot(uy * vz - uz * vy, uz * vx - ux * vz, nz);
    if (len > 0 && Math.abs(nz) / len > 1e-3 && Math.abs(nz) / len < 0.999 && Math.sign(nz) === sign) area += len / 2;
  }
  return area;
}

export function threadName({ major, pitch, hand }) {
  const lh = hand === 'left' ? ' LH' : '';
  const m = METRIC.find(([d, p]) => Math.abs(major - d) < 0.3 && Math.abs(pitch - p) < 0.04);
  if (m) return `M${m[0]}×${m[1]}${lh}`;
  const u = UNIFIED.find(([, d, tpi]) => Math.abs(major - d) < 0.3 && Math.abs(pitch - 25.4 / tpi) < 0.04);
  if (u) return u[0] + lh;
  return `Ø${Math.round(major * 100) / 100}×${Math.round(pitch * 100) / 100}${lh}`;
}

// Joins slice segments end to end into loops.
function chain(segs) {
  const key = ([x, y]) => `${Math.round(x * 1e4)},${Math.round(y * 1e4)}`;
  const ends = new Map();
  segs.forEach((s, i) => {
    for (const e of [0, 1]) {
      const k = key(s[e]);
      if (!ends.has(k)) ends.set(k, []);
      ends.get(k).push(i);
    }
  });
  const used = new Uint8Array(segs.length);
  const loops = [];
  for (let i = 0; i < segs.length; i++) {
    if (used[i]) continue;
    used[i] = 1;
    const loop = [segs[i][0], segs[i][1]];
    const startKey = key(segs[i][0]);
    let cur = segs[i][1];
    for (let guard = 0; guard < segs.length; guard++) {
      const k = key(cur);
      if (k === startKey) break;
      const next = (ends.get(k) || []).find((j) => !used[j]);
      if (next === undefined) break;
      used[next] = 1;
      const s = segs[next];
      cur = key(s[0]) === k ? s[1] : s[0];
      if (key(cur) !== startKey) loop.push(cur);
    }
    if (loop.length >= 3) loops.push(loop);
  }
  return loops;
}

// Which sides could face up: a side is reachable when cutting from the top
// leaves little of the part uncut (a chamfer on the bottom edge, not a
// sideways hole). The best one leaves the least, then has the least sloped
// surface and sits lowest (steadiest).
// A 3D part (curved all over, cut in 3D) ranks by height after reach: the
// tools must reach its whole height, and a mask is carved lying down, not
// standing on end.
export const SHARE_3D = 0.2;

export function sides(mesh) {
  const out = {};
  for (const side of Object.keys(UP_DIRECTIONS)) {
    const a = analyze(orient(mesh, side));
    out[side] = { reachable: !a.undercut, missed: a.missed, missedTotal: a.missedTotal, undercutArea: a.undercutArea, slopedArea: a.slopedArea, slopedShare: a.slopedShare, height: a.size[2] };
  }
  const order = Object.keys(UP_DIRECTIONS);
  const curved = order.some((s) => out[s].slopedShare > SHARE_3D);
  const ranked = order.slice().sort((x, y) => {
    const a = out[x], b = out[y];
    return (a.reachable === b.reachable ? 0 : a.reachable ? -1 : 1)
      || (curved && Math.abs(a.height - b.height) > 1 ? a.height - b.height : 0)
      || (Math.abs(a.missed - b.missed) > 1e-4 ? a.missed - b.missed : 0)
      || (Math.abs(a.missedTotal - b.missedTotal) > 1e-4 ? a.missedTotal - b.missedTotal : 0)
      || (Math.abs(a.slopedArea - b.slopedArea) > 1e-6 ? a.slopedArea - b.slopedArea : 0)
      || (Math.abs(a.height - b.height) > 1e-6 ? a.height - b.height : 0)
      || order.indexOf(x) - order.indexOf(y);
  });
  // Nothing reachable at all: don't rule any side out, the least bad leads
  if (!ranked.some((s) => out[s].reachable)) for (const s of order) out[s].reachable = true;
  return { sides: out, best: ranked[0] };
}
