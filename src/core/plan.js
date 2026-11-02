// From a part (turned so the cut side is up) to a list of operations, each
// with a tool from the Tool Library.
//
// The part is cut in height bands. The heights are the part's top, every
// flat upward face (pocket floors, steps) and its bottom. Between two
// heights the walls are vertical, so what to remove in that band is the
// stock minus the part's section just above the band's floor. Each piece of
// that area becomes one operation: a pocket, a hole, a step, or (at the
// bottom, around the outside) the cut-out.
import { analyze, slice, triangleNormal, SHARE_3D } from './mesh.js';
import { partHeights } from './sim.js';
import * as C from './clip.js';
import { feeds, FINISHES, tabDefaults } from './tools.js';
import { len, num } from './units.js';

const EPS = 0.01;
const TINY = 0.05; // mm²: smaller leftovers are not worth a tool
// 3D: a part more than SHARE_3D sloped or curved (share of its surface) is
// roughed in layers and finished with a ball end mill
const LAYER_3D = 2; // mm: thickest stair the roughing leaves for the ball
const ALLOW_3D = 0.3; // mm left on the surface for the finishing pass
const FLOOR_3D = 25; // mm²: a flat floor this big gets a layer of its own
const SIMPLIFY_3D = 0.1; // mm: roughing outlines may stray this far (< ALLOW_3D)
const NARROW_3D = 0.5; // mm: narrower leftovers of the roughing aren't chased with a smaller tool
// Height of the ridges between finishing passes
export const RIDGE_3D = { fast: 0.1, balanced: 0.05, smooth: 0.02 };

export const ZERO_POINTS = ['back-left', 'back-center', 'back-right', 'left-center', 'center', 'right-center', 'front-left', 'front-center', 'front-right'];

export function defaultJob(analysis) {
  return {
    material: 'mdf', finish: 'balanced',
    stock: { fit: true, margin: 2, extraTop: 1, width: analysis.size[0] + 4, depth: analysis.size[1] + 4, thickness: analysis.size[2] + 1 },
    zero: { xy: 'front-left', z: 'top' },
    tabs: { enabled: true, count: 4, ...tabDefaults('mdf') },
    throughDepth: 0.3,
    disabled: {}, toolOverride: {},
  };
}

export function stockBox(analysis, job) {
  const [w, d, h] = analysis.size;
  const s = job.stock;
  const W = s.fit ? w + 2 * s.margin : Math.max(w, s.width);
  const D = s.fit ? d + 2 * s.margin : Math.max(d, s.depth);
  const T = s.fit ? h + s.extraTop : Math.max(h, s.thickness);
  return { minX: (w - W) / 2, minY: (d - D) / 2, maxX: (w + W) / 2, maxY: (d + D) / 2, bottom: 0, top: T, width: W, depth: D, thickness: T };
}

// Work coordinates: part coordinates minus this point.
export function zeroPoint(stock, zero) {
  // 'front-left', 'left-center', 'center', ...
  const words = zero.xy.split('-');
  let x = (stock.minX + stock.maxX) / 2, y = (stock.minY + stock.maxY) / 2;
  if (words.includes('left')) x = stock.minX;
  if (words.includes('right')) x = stock.maxX;
  if (words.includes('front')) y = stock.minY;
  if (words.includes('back')) y = stock.maxY;
  return { x, y, z: zero.z === 'bed' ? stock.bottom : stock.top };
}

// Downward-facing triangles, seen from above, with their highest point.
function overhangs(mesh) {
  const p = mesh.positions, ix = mesh.indices, out = [];
  for (let t = 0; t < ix.length / 3; t++) {
    const n = triangleNormal(mesh, t);
    if (n[2] > -1e-3) continue;
    const v = [ix[t * 3] * 3, ix[t * 3 + 1] * 3, ix[t * 3 + 2] * 3];
    const loop = v.map((k) => [p[k], p[k + 1]]);
    if (Math.abs(C.loopArea(loop)) < 1e-6) continue;
    out.push({ loop: C.loopArea(loop) > 0 ? loop : loop.reverse(), maxZ: Math.max(...v.map((k) => p[k + 2])) });
  }
  return out;
}

const rect = (b) => [[[b.minX, b.minY], [b.maxX, b.minY], [b.maxX, b.maxY], [b.minX, b.maxY]]];
const sameD = (a, b) => Math.abs(a - b) < 0.05;

// A hole: one loop, every point the same distance from the middle.
function asCircle(region) {
  if (region.length !== 1) return null;
  const loop = region[0];
  if (loop.length < 12) return null;
  // The middle of the bounds: slice points bunch up, so their mean drifts
  const b = C.bounds([loop]);
  const cx = (b.minX + b.maxX) / 2, cy = (b.minY + b.maxY) / 2;
  const rs = loop.map(([x, y]) => Math.hypot(x - cx, y - cy));
  const r = rs.reduce((a, b) => a + b, 0) / rs.length;
  return rs.every((q) => Math.abs(q - r) < Math.max(0.03, r * 0.01)) ? { x: cx, y: cy, d: 2 * r } : null;
}

const opened = (region, r) => C.offset(C.offset(region, -r), r);
const coverage = (region, r) => {
  const a = C.area(region);
  return a > 0 ? C.area(opened(region, r)) / a : 0;
};
const fluteOk = (tool, depth) => !tool.fluteLength || tool.fluteLength + 1e-6 >= depth;
const fmt = (v) => (Math.round(v * 10) / 10).toString();

export function plan(mesh, tools, job, limits = {}) {
  const L = (v) => len(v, job.units), n = (v) => num(v, job.units);
  const analysis = analyze(mesh);
  const stock = stockBox(analysis, job);
  const fin = FINISHES[job.finish] || FINISHES.balanced;
  const warnings = [];
  // job.surface3d: true or false when the user chose, else from the shape
  const use3d = job.surface3d ?? analysis.slopedShare > SHARE_3D;
  if (analysis.squareEdges) warnings.push({ kind: 'edges', text: 'Chamfers or rounded edges face down on this side, so they are left square.' });
  if (analysis.undercut) warnings.push({ kind: 'undercut', text: 'Some features face the other side, so they can’t be reached from the top. Cut this side, then turn the part over for a second setup.' });

  const flats = tools.filter((t) => t.kind === 'flat').sort((a, b) => b.diameter - a.diameter);
  const drills = tools.filter((t) => t.kind === 'drill');
  const surfacers = tools.filter((t) => t.kind === 'surfacing').sort((a, b) => b.diameter - a.diameter);
  const used = new Map(); // tool id -> times picked, so ops share tools
  const take = (t) => { if (t) used.set(t.id, (used.get(t.id) || 0) + 1); return t; };
  const maxD = (job.material === 'aluminum' ? 8 : 12.8);

  // What stays at height z: the section there plus everything above it seen
  // from the top, so a face that looks down (a chamfer on the bottom edge) is
  // never cut into.
  // Highest first: the shadow of everything above z is the first k of them.
  const above = analysis.undercutArea > 0 ? overhangs(mesh).sort((a, b) => b.maxZ - a.maxZ) : [];
  // Shadows are built on the nearest one made with fewer triangles, so
  // levels taken from the top down add a few triangles each (a mesh part
  // has thousands, and 3D roughing has dozens of levels).
  const shadows = [];
  const shadow = (z) => {
    let lo = 0, hi = above.length;
    while (lo < hi) { const mid = (lo + hi) >> 1; if (above[mid].maxZ > z + EPS) lo = mid + 1; else hi = mid; }
    const k = lo;
    if (!k) return [];
    let base = null;
    for (const s of shadows) if (s.k <= k && (!base || s.k > base.k)) base = s;
    if (base?.k === k) return base.loops;
    const add = above.slice(base ? base.k : 0, k).map((t) => t.loop);
    const loops = C.unionMany(base ? [...base.loops, ...add] : add);
    shadows.push({ k, loops });
    return loops;
  };
  // The triangles' shadows meet edge to edge with rounding cracks between
  // them (a filleted edge has thousands): grow and shrink by 2 µm to close
  // them, or every crack becomes a pocket.
  const sections = new Map();
  const section = (z) => {
    if (sections.has(z)) return sections.get(z);
    const s = C.unionEvenOdd(slice(mesh, z + EPS));
    const over = shadow(z);
    const out = over.length ? C.offset(C.offset(C.union([...s, ...over]), 0.002), -0.002) : s;
    sections.set(z, out);
    return out;
  };
  const bottomSection = section(0);
  const footprint = C.union(C.regions(bottomSection).map((r) => r[0]));
  const ops = [];
  let nextId = 1;
  const add = (op) => { op.id = op.id || `op${nextId++}`; ops.push(op); return op; };

  // Largest end mill that clears most of the region; a tool already in use
  // wins when it does nearly as well, to save tool changes.
  function roughTool(region, depth, allowance) {
    const ok = flats.filter((t) => t.diameter <= maxD && fluteOk(t, depth) && C.offset(region, -(t.diameter / 2 + allowance)).length);
    if (!ok.length) return null;
    const scored = ok.map((t) => ({ t, c: coverage(region, t.diameter / 2) }));
    const best = scored.find((s) => s.c >= 0.85) || scored.reduce((a, b) => (b.c > a.c ? b : a));
    const shared = scored.find((s) => used.has(s.t.id) && s.c >= Math.min(0.85, best.c * 0.98));
    return (shared || best).t;
  }

  // A smaller end mill for the corners the first one can't reach.
  function cornerTool(region, rough, depth) {
    const left = C.cleanLoops(C.difference(region, opened(region, rough.diameter / 2)), TINY);
    if (C.area(left) < TINY) return null;
    const smaller = flats.filter((t) => t.diameter < rough.diameter - 1e-6 && fluteOk(t, depth));
    if (!smaller.length) return { tool: null, left };
    const base = C.area(left);
    const pick = smaller.find((t) => C.area(C.cleanLoops(C.difference(region, opened(region, t.diameter / 2)), TINY)) < base * 0.25) || smaller[smaller.length - 1];
    return { tool: pick, left };
  }

  const opFeeds = (tool) => feeds(tool, job.material, job.finish, limits);

  // 1. Flatten the top when the stock is taller than the part.
  if (stock.top > analysis.top + EPS) {
    const tool = surfacers[0] || flats[0];
    if (tool) add({ id: 'face', kind: 'face', label: 'Flatten the top', tool: take(tool), zTop: stock.top, zBottom: analysis.top, region: rect(stock), detail: `${L(stock.top - analysis.top)} off the top` });
  }

  // 2. A 3D part: rough it in layers, then finish the surface.
  // 3D unless it was asked for but can't be done (no tool long enough):
  // then the part is cut in 2.5D, with a warning, rather than not at all
  const did3d = use3d && plan3d();
  function plan3d() {
    const depth = analysis.top + job.throughDepth;
    const fits = (t) => t.diameter <= maxD && fluteOk(t, depth);
    const rough = flats.find((t) => used.has(t.id) && fits(t)) || flats.find(fits);
    if (!rough) { warnings.push({ kind: 'notool', text: `No end mill is long enough to rough the 3D shape (${L(depth)}), so it is cut in 2.5D.` }); return false; }
    // A ball near 1/4" for the finish: detail without too many passes
    const balls = tools.filter((t) => t.kind === 'ball' && fits(t)).sort((a, b) => Math.abs(a.diameter - 6.35) - Math.abs(b.diameter - 6.35));
    const finisher = balls[0] || rough;
    if (!balls.length) warnings.push({ kind: 'noball', text: `No ball end mill in your Tool Library is long enough, so ${rough.name} finishes the 3D surface. A ball end mill leaves it much smoother.` });
    // Layers no more than a step-down apart, landing on every flat floor
    const step = Math.min(opFeeds(rough).stepdown, LAYER_3D);
    // Only floors with real area: a mesh has stray flat triangles everywhere
    const keys = [analysis.top, ...analysis.floors.filter((z) => z < analysis.top - EPS && z > EPS && (analysis.floorAreas[z] || 0) >= FLOOR_3D), 0];
    const zs = [];
    for (let k = 1; k < keys.length; k++) {
      const n = Math.max(1, Math.ceil((keys[k - 1] - keys[k]) / step - 1e-6));
      for (let i = 1; i <= n; i++) zs.push(i === n ? keys[k] : keys[k - 1] - (i * (keys[k - 1] - keys[k])) / n);
    }
    // Around the part, wide enough for both tools; it may run past the
    // stock's edge (air), or a narrow margin would leave the edge uncut
    const ring = C.offset(footprint, Math.max(rough.diameter, finisher.diameter) + 1);
    // Each layer clears what the one above cleared, a little lower. A spot
    // first open at this height (a mesh that isn't closed, or rounding) had
    // nothing above it cut: it is `fresh`, cut from the top.
    const layers = [];
    let zFrom = analysis.top, prev = null;
    for (const z of zs) {
      // At the bottom only openings through the part; the cut-out does the rest
      const bottom = z <= EPS;
      const open = C.cleanLoops(C.difference(bottom ? footprint : ring, section(bottom ? 0 : z)), TINY);
      const region = prev ? C.cleanLoops(C.intersection(open, prev), TINY) : open;
      const fresh = prev ? C.cleanLoops(C.difference(open, prev), TINY) : [];
      // Mesh outlines have a point every few tenths: within 0.1 mm still
      // leaves 0.2 of ALLOW_3D for the finish, and halves the work of the
      // clearing rings (each one an offset of the whole outline)
      const layer = { zFrom, z: bottom ? -job.throughDepth : z, region: C.simplify(region, SIMPLIFY_3D), fresh: C.area(fresh) >= TINY && C.offset(fresh, -0.5).length ? C.simplify(fresh, SIMPLIFY_3D) : [] };
      if (C.area(region) >= TINY || layer.fresh.length) layers.push(layer);
      prev = open;
      zFrom = z;
    }
    if (!layers.length) return false;
    const ridge = RIDGE_3D[job.finish] ?? RIDGE_3D.balanced;
    const r3 = add({ kind: 'rough3d', label: 'Rough the 3D shape', tool: take(rough), zTop: analysis.top, zBottom: layers[layers.length - 1].z, region: ring, layers, allowance: ALLOW_3D, detail: `${layers.length} layers · ${L(ALLOW_3D)} left` });
    // What the roughing end mill can't get into (holes, slots, tight
    // corners): a smaller one clears it, layer by layer, to the wall
    const rr = rough.diameter / 2;
    // Only pieces at least NARROW_3D across: a curved outline has slivers in
    // every hollow, too thin to matter and too many to chase with a tool
    const narrow = layers.map((l) => {
      const inner = C.offset(l.region, -ALLOW_3D);
      const bits = C.cleanLoops(C.difference(inner, opened(inner, rr)), TINY);
      return C.regions(bits).filter((g) => C.offset(g, -NARROW_3D / 2).length).flat();
    });
    let after = r3.id;
    if (narrow.some((x) => C.area(x) >= TINY)) {
      const smaller = flats.filter((t) => t.diameter < rough.diameter - 1e-6 && fits(t));
      // What a tool leaves of the narrow places, clearing each layer to the wall
      const leftBy = (t) => layers.map((l, k) => (C.area(narrow[k]) >= TINY ? C.cleanLoops(C.difference(narrow[k], opened(l.region, t.diameter / 2)), TINY) : [])).flat();
      // The largest that leaves a quarter or less, else the smallest
      const base = C.area(narrow.flat());
      const small = smaller.find((t) => C.area(leftBy(t)) <= base * 0.25) || smaller[smaller.length - 1];
      if (small) {
        const sr = small.diameter / 2;
        const rest = layers.map((l, k) => ({ zFrom: l.zFrom, z: l.z, region: C.area(narrow[k]) >= TINY ? C.simplify(C.intersection(l.region, C.offset(narrow[k], 2 * sr + 0.5)), SIMPLIFY_3D) : [] })).filter((l) => l.region.length);
        after = add({ kind: 'rest3d', label: 'Clear where the big end mill can\u2019t reach', tool: take(small), zTop: analysis.top, zBottom: rest[rest.length - 1].z, region: C.union(rest.flatMap((l) => l.region)), layers: rest, after: r3.id, detail: `${rest.length} layers · holes, slots, corners` }).id;
      }
      const tool = small || rough;
      const left = leftBy(tool);
      // Thin wedges are only inside corners, rounded to the tool; anything
      // half a millimetre across is a hole or slot left standing
      if (C.offset(left, -0.25).length) warnings.push({ kind: 'notool', text: `Some holes or slots are narrower than ${tool.name} and stay uncut: add a smaller end mill to the Tool Library.` });
      else if (C.area(left) >= TINY) warnings.push({ kind: 'corners', text: `Inside corners stay rounded to ${L(tool.diameter / 2)}: no smaller end mill in your library.` });
    }
    add({ kind: 'finish3d', label: 'Finish the 3D surface', tool: take(finisher), zTop: analysis.top, zBottom: 0, region: footprint, after, ridge, detail: `Parallel passes${job.finish === 'fast' ? '' : ' and waterlines on steep walls'} · ${len(ridge, job.units, job.units === 'in' ? 4 : 2)} ridges`, steep: job.finish !== 'fast' });
    warnings.push({ kind: 'surface3d', text: `Curved faces are cut in 3D: roughed in ${layers.length} layers, then ${finisher.name} follows the surface.` });
    return true;
  }

  if (analysis.sloped && !did3d) warnings.push({ kind: 'sloped', text: 'Sloped or curved faces (chamfers, fillets) aren\u2019t cut in 3D yet, so they are left square.' });

  // 3. Bands from the top down (2.5D: everything else).
  const levels = did3d ? [] : [analysis.top, ...analysis.floors.filter((z) => z < analysis.top - EPS && z > EPS), 0];
  // A feature that keeps its shape through several bands (a hole through a
  // pocket's floor height) is one feature from its top to its lowest floor.
  const features = [];
  const sameShape = (a, b) => {
    const aa = C.area(a), ab = C.area(b);
    if (Math.abs(aa - ab) > Math.max(TINY, aa * 0.005)) return false;
    const ba = C.bounds(a), bb = C.bounds(b);
    return Math.abs(ba.minX - bb.minX) < 0.01 && Math.abs(ba.maxX - bb.maxX) < 0.01 && Math.abs(ba.minY - bb.minY) < 0.01 && Math.abs(ba.maxY - bb.maxY) < 0.01;
  };
  for (let k = 1; k < levels.length; k++) {
    const zTop = levels[k - 1], zFloor = levels[k];
    const rest = C.difference(rect(stock), section(zFloor));
    for (const region of C.regions(rest)) {
      if (C.area(region) < TINY || !C.offset(region, -0.05).length) continue; // a sliver no tool fits
      const b = C.bounds([region[0]]);
      const outer = b.minX <= stock.minX + 1e-3 || b.maxX >= stock.maxX - 1e-3 || b.minY <= stock.minY + 1e-3 || b.maxY >= stock.maxY - 1e-3;
      let over = null;
      if (outer) {
        if (zFloor === 0) continue; // the cut-out
        over = C.cleanLoops(C.intersection(region, footprint), TINY);
        if (C.area(over) < TINY) continue; // just the outside of the part
      }
      const shape = outer ? over : region;
      const prev = features.find((f) => f.zFloor === zTop && f.outer === outer && sameShape(f.shape, shape));
      if (prev) { prev.zFloor = zFloor; prev.region = region; }
      else features.push({ outer, region, over, shape, zTop, zFloor });
    }
  }

  const holes = new Map();
  for (const { outer, region, over, zTop, zFloor } of features) {
    const through = zFloor === 0;
    const zBottom = through ? -job.throughDepth : zFloor;
    const depth = zTop - zBottom;
    {
      if (outer) {
        const tool = roughTool(C.intersection(region, C.offset(over, 13)), depth, fin.allowance);
        if (!tool) { warnings.push({ kind: 'notool', text: `A step ${L(zTop - zFloor)} deep has no end mill that fits.` }); continue; }
        const area = C.intersection(region, C.offset(over, tool.diameter + 0.5));
        add({ kind: 'step', label: 'Cut the step', tool: take(tool), zTop, zBottom, region: area, walls: region, detail: `${L(zTop - zFloor)} deep` });
        continue;
      }
      const circle = asCircle(region);
      if (circle) {
        const key = `${fmt(circle.d)}|${fmt(zTop)}|${fmt(zBottom)}`;
        if (!holes.has(key)) holes.set(key, { d: circle.d, zTop, zBottom, through, centers: [], regions: [] });
        holes.get(key).centers.push(circle);
        holes.get(key).regions.push(region);
        continue;
      }
      const bb = C.bounds([region[0]]);
      const tool = roughTool(region, depth, fin.allowance);
      const what = `${n(bb.maxX - bb.minX)} × ${L(bb.maxY - bb.minY)} · ${through ? 'through' : `${L(zTop - zFloor)} deep`}`;
      if (!tool) { warnings.push({ kind: 'notool', text: `No end mill fits the pocket ${what}.` }); continue; }
      const op = add({ kind: 'pocket', label: through ? 'Cut the opening' : 'Clear the pocket', tool: take(tool), zTop, zBottom, region, detail: what });
      const corners = cornerTool(region, tool, depth);
      if (corners && corners.tool) {
        add({ kind: 'corners', label: 'Clean the corners', tool: take(corners.tool), zTop, zBottom, region, after: op.id, detail: `Corners too tight for ${tool.name}` });
      } else if (corners) {
        warnings.push({ kind: 'corners', text: `Pocket corners stay rounded to ${L(tool.diameter / 2)}: no smaller end mill in your library.` });
      }
    }
  }

  // 4. Holes: a drill of the same size, otherwise an end mill spirals down.
  for (const h of holes.values()) {
    const n = h.centers.length;
    const depth = h.zTop - h.zBottom;
    const what = `Ø${L(h.d)} ${h.through ? 'through' : `${L(h.zTop - h.zBottom)} deep`}`;
    const drill = drills.find((t) => sameD(t.diameter, h.d) && fluteOk(t, depth));
    if (drill) {
      add({ kind: 'drill', label: n > 1 ? `Drill ${n} holes` : 'Drill the hole', tool: take(drill), zTop: h.zTop, zBottom: h.zBottom, centers: h.centers, detail: what });
      continue;
    }
    const region = h.regions.flat().length ? h.regions.flatMap((r) => r) : [];
    const tool = roughTool(region, depth, 0) || null;
    if (!tool || tool.diameter > h.d - 0.4) {
      const small = flats.find((t) => t.diameter <= h.d - 0.4 && fluteOk(t, depth));
      if (!small) { warnings.push({ kind: 'notool', text: `No drill or end mill fits the ${what} hole${n > 1 ? 's' : ''}.` }); continue; }
      add({ kind: 'hole', label: n > 1 ? `Cut ${n} holes` : 'Cut the hole', tool: take(small), zTop: h.zTop, zBottom: h.zBottom, region, centers: h.centers, detail: `${what} · spiral` });
      continue;
    }
    add({ kind: 'hole', label: n > 1 ? `Cut ${n} holes` : 'Cut the hole', tool: take(tool), zTop: h.zTop, zBottom: h.zBottom, region, centers: h.centers, detail: `${what} · spiral` });
  }

  // 5. Cut the part free.
  if (footprint.length) {
    const depth = analysis.top + job.throughDepth;
    const fits = flats.filter((t) => fluteOk(t, depth) && t.diameter <= maxD);
    const tool = fits.find((t) => used.has(t.id)) || fits.slice().sort((a, b) => Math.abs(a.diameter - 6.35) - Math.abs(b.diameter - 6.35))[0];
    const tabs = job.tabs.enabled ? `${job.tabs.count} tabs` : 'no tabs';
    if (tool) add({ id: 'cutout', kind: 'cutout', label: 'Cut out the part', tool: take(tool), zTop: analysis.top, zBottom: -job.throughDepth, region: footprint, detail: `${L(analysis.top)} · ${tabs}` });
    else warnings.push({ kind: 'notool', text: `No end mill is long enough to cut out the part (${L(depth)}).` });
  }

  // The same pocket more than once (five slots) is one operation over all
  // of them; each is still cut on its own, nearest first.
  const merged = [], into = new Map();
  for (const op of ops) {
    if (op.kind !== 'pocket' && op.kind !== 'corners') { merged.push(op); continue; }
    const after = op.after && into.has(op.after) ? into.get(op.after) : op.after;
    const twin = merged.find((m) => m.kind === op.kind && m.detail === op.detail && m.zTop === op.zTop && m.zBottom === op.zBottom && m.tool.id === op.tool.id && (m.after || null) === (after || null));
    if (twin) {
      twin.region = [...twin.region, ...op.region];
      twin.count = (twin.count || 1) + 1;
      into.set(op.id, twin.id);
    } else merged.push({ ...op, after });
  }
  for (const op of merged) {
    if (!(op.count > 1)) continue;
    if (op.kind === 'pocket') op.label = op.label === 'Cut the opening' ? `Cut ${op.count} openings` : `Clear ${op.count} pockets`;
    if (op.kind === 'corners') op.label = `Clean the corners of ${op.count} pockets`;
  }
  ops.length = 0;
  ops.push(...merged);

  for (const op of ops) {
    const over = job.toolOverride?.[op.id];
    if (over) { const t = tools.find((x) => x.id === over); if (t) op.tool = t; }
    op.enabled = !job.disabled?.[op.id];
    op.feeds = opFeeds(op.tool);
    // The part's top on a grid fine enough for the finishing tool
    if (op.kind === 'finish3d') op.surface = surfaceGrid(mesh, stock, Math.min(0.2, op.tool.diameter / 16));
  }
  return { analysis, stock, zero: zeroPoint(stock, job.zero), ops: order(ops), warnings, job, mode3d: use3d, did3d };
}

// Flatten first and cut out last. In between, an operation waits for any
// higher one over the same area; otherwise the tool already in the spindle
// goes next, to save tool changes. Corner clean-ups follow their pocket.
function order(ops) {
  const first = ops.filter((o) => o.kind === 'face');
  const last = ops.filter((o) => o.kind === 'cutout');
  const mid = ops.filter((o) => o.kind !== 'face' && o.kind !== 'cutout');
  const area = (o) => o.region || (o.centers || []).map((c) => circleLoop(c));
  const needs = new Map(mid.map((o) => [o, mid.filter((u) => u !== o && (o.after === u.id || (u.zTop > o.zTop + EPS && C.area(C.intersection(area(o), area(u))) > TINY)))]));
  const done = new Set(), out = [...first];
  let tool = first.length ? first[first.length - 1].tool : null;
  while (done.size < mid.length) {
    const ready = mid.filter((o) => !done.has(o) && needs.get(o).every((u) => done.has(u)));
    const next = ready.find((o) => tool && o.tool.id === tool.id) || ready[0];
    done.add(next); out.push(next); tool = next.tool;
  }
  return [...out, ...last];
}

// The part's top at each grid node (-Infinity where there is none).
function surfaceGrid(mesh, stock, cell) {
  const g = { x0: stock.minX, y0: stock.minY, cell, nx: Math.ceil((stock.maxX - stock.minX) / cell) + 1, ny: Math.ceil((stock.maxY - stock.minY) / cell) + 1 };
  g.h = partHeights(mesh, g);
  return g;
}

function circleLoop(c, n = 32) {
  return Array.from({ length: n }, (_, i) => [c.x + (c.d / 2) * Math.cos((i / n) * 2 * Math.PI), c.y + (c.d / 2) * Math.sin((i / n) * 2 * Math.PI)]);
}

// Tools in the order the program uses them.
export function toolsUsed(p) {
  const out = [];
  for (const op of p.ops) if (op.enabled && !out.some((t) => t.id === op.tool.id)) out.push(op.tool);
  return out;
}
