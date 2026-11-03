// From a part (turned so the cut side is up) to a list of operations, each
// with a tool from the Tool Library.
//
// The part is cut in height bands. The heights are the part's top, every
// flat upward face (pocket floors, steps) and its bottom. Between two
// heights the walls are vertical, so what to remove in that band is the
// stock minus the part's section just above the band's floor. Each piece of
// that area becomes one operation: a pocket, a hole, a step, or (at the
// bottom, around the outside) the cut-out.
import { analyze, slice, triangleNormal, chamferBands, findThread, threadName, areaFacing, SHARE_3D } from './mesh.js';
import { partHeights } from './sim.js';
import * as C from './clip.js';
import { feeds, FINISHES, MATERIALS, tabDefaults } from './tools.js';
import { len, num } from './units.js';
import { tabSpots } from './paths.js';

const EPS = 0.01;
const TINY = 0.05; // mm²: smaller leftovers are not worth a tool
const CHAMFER_OUT = 0.25; // mm: a chamfering V-bit's tip runs this far outside the edge
// 3D: a part more than SHARE_3D sloped or curved (share of its surface) is
// roughed in layers and finished with a ball end mill
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
// mm: a drill this much smaller than a hole (or 6% of it) still drills it
const DRILL_UNDER = 0.25;

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
    // The ball finishes the stairs between layers in one go, so no thicker
    // than a step-down for either tool, as they will run (the user may pick others)
    const asRun = (id, t) => tools.find((x) => x.id === job.toolOverride?.[id]) || t;
    const step = Math.min(opFeeds(asRun('rough3d', rough)).stepdown, opFeeds(asRun('finish3d', finisher)).stepdown);
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
      // exact: the outline itself, for what cuts right to it (wall laps, rest
      // roughing); region, simplified, for the clearing that leaves ALLOW_3D
      const layer = { zFrom, z: bottom ? -job.throughDepth : z, exact: region, region: C.simplify(region, SIMPLIFY_3D), fresh: C.area(fresh) >= TINY && C.offset(fresh, -0.5).length ? C.simplify(fresh, SIMPLIFY_3D) : [] };
      if (C.area(region) >= TINY || layer.fresh.length) layers.push(layer);
      prev = open;
      zFrom = z;
    }
    if (!layers.length) return false;
    const ridge = RIDGE_3D[job.finish] ?? RIDGE_3D.balanced;
    const r3 = add({ id: 'rough3d', kind: 'rough3d', label: 'Rough the 3D shape', tool: take(rough), zTop: analysis.top, zBottom: layers[layers.length - 1].z, region: ring, layers, allowance: ALLOW_3D, detail: `${layers.length} layers · ${L(ALLOW_3D)} left` });
    // What the roughing end mill can't get into (holes, slots, tight
    // corners): a smaller one clears it, layer by layer, to the wall
    // The roughing tool as it will run (the user may have picked another)
    const rr = (tools.find((t) => t.id === job.toolOverride?.[r3.id]) || rough).diameter / 2;
    // Only pieces at least NARROW_3D across: a curved outline has slivers in
    // every hollow, too thin to matter and too many to chase with a tool
    const narrow = layers.map((l) => {
      const inner = C.offset(l.exact, -ALLOW_3D);
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
        const rest = layers.map((l, k) => ({ zFrom: l.zFrom, z: l.z, region: C.area(narrow[k]) >= TINY ? C.intersection(l.exact, C.offset(narrow[k], 2 * sr + 0.5)) : [] })).filter((l) => l.region.length);
        after = add({ kind: 'rest3d', label: 'Clear where the big end mill can\u2019t reach', tool: take(small), zTop: analysis.top, zBottom: rest[rest.length - 1].z, region: C.union(rest.flatMap((l) => l.region)), layers: rest, after: r3.id, detail: `${rest.length} layers · holes, slots, corners` }).id;
      }
      const tool = small || rough;
      const left = leftBy(tool);
      // Thin wedges are only inside corners, rounded to the tool; anything
      // half a millimetre across is a hole or slot left standing
      if (C.offset(left, -0.25).length) warnings.push({ kind: 'notool', text: `Some holes or slots are narrower than ${tool.name} and stay uncut: add a smaller end mill to the Tool Library.` });
      else if (C.area(left) >= TINY) warnings.push({ kind: 'corners', text: `Inside corners stay rounded to ${L(tool.diameter / 2)}: no smaller end mill in your library.` });
    }
    add({ id: 'finish3d', kind: 'finish3d', label: 'Finish the 3D surface', tool: take(finisher), zTop: analysis.top, zBottom: 0, region: footprint, after, ridge, detail: `Parallel passes${job.finish === 'fast' ? '' : ' and waterlines on steep walls'} · ${len(ridge, job.units, job.units === 'in' ? 4 : 2)} ridges`, steep: job.finish !== 'fast', left: step + ALLOW_3D + 1.2 });
    warnings.push({ kind: 'surface3d', text: `Curved faces are cut in 3D: roughed in ${layers.length} layers, then ${finisher.name} follows the surface.` });
    return true;
  }


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

  // 4. Holes: a drill of the same size; otherwise an end mill spirals down,
  // after a drill a little smaller than the hole (a pilot), if there is one;
  // with no end mill that fits, that drill alone (a note says how much under).
  // Faces the threads explain: their flanks, and where they run out
  const threadTris = new Set(), threadRing = new Set();
  for (const h of holes.values()) {
    const last = cutHole(h);
    if (last) millThreads(h, last);
  }
  function cutHole(h) {
    const n = h.centers.length;
    const depth = h.zTop - h.zBottom;
    const what = `Ø${L(h.d)} ${h.through ? 'through' : `${L(h.zTop - h.zBottom)} deep`}`;
    const drillOp = (t, label, detail, extra = {}) => add({ kind: 'drill', label, tool: take(t), zTop: h.zTop, zBottom: h.zBottom, centers: h.centers, detail, ...extra });
    const drill = drills.find((t) => sameD(t.diameter, h.d) && fluteOk(t, depth));
    if (drill) return drillOp(drill, n > 1 ? `Drill ${n} holes` : 'Drill the hole', what);
    const near = drills.filter((t) => t.diameter < h.d && h.d - t.diameter <= Math.max(DRILL_UNDER, h.d * 0.06) && fluteOk(t, depth)).sort((a, b) => b.diameter - a.diameter)[0];
    const region = h.regions.flat().length ? h.regions.flatMap((r) => r) : [];
    // A round hole: the largest end mill narrower than it clears all of it
    // (no offsets needed; a thread's shadow makes them slow), one already in
    // use if there is one
    const fits = flats.filter((t) => t.diameter <= maxD && fluteOk(t, depth) && t.diameter / 2 < h.d / 2 - 1e-6);
    let tool = fits.find((t) => used.has(t.id)) || fits[0] || null;
    if (!tool || tool.diameter > h.d - 0.4) tool = flats.find((t) => t.diameter <= h.d - 0.4 && fluteOk(t, depth)) || null;
    // With a pilot the end mill needs no room to spiral down: any a little
    // smaller than the hole (and no wider than the pilot, so it drops in)
    // rounds it to size
    let borer = !tool && near ? flats.find((t) => t.diameter < h.d - 0.02 && t.diameter <= near.diameter + 0.05 && fluteOk(t, depth)) : null;
    let pilotDrill = near, bottom = h.zBottom;
    // A through hole no end mill reaches through: a drill pilots it all the
    // way (the break-through too), then an end mill long enough for the part
    // itself, no wider than the pilot, rounds it to size down to its bottom
    // The end mill runs one circle, so it must reach the pilot's wall: a
    // pilot plus twice the end mill as wide as the hole, or a tube of stock
    // would come loose in it
    if (!tool && !borer && h.through) {
      for (const pd of drills.filter((t) => t.diameter < h.d - 0.05 && fluteOk(t, depth)).sort((a, b) => b.diameter - a.diameter)) {
        const em = flats.find((t) => t.diameter < h.d - 0.02 && t.diameter <= pd.diameter + 0.05 && pd.diameter + 2 * t.diameter >= h.d + 0.1 && fluteOk(t, h.zTop));
        if (em) { borer = em; pilotDrill = pd; bottom = Math.max(h.zBottom, h.zTop - (em.fluteLength || Infinity)); break; }
      }
    }
    if (borer) {
      const pilot = drillOp(pilotDrill, n > 1 ? `Drill ${n} pilot holes` : 'Drill a pilot hole', `${what} · then ${L(h.d)} with an end mill`, { pilot: true });
      if (bottom > h.zBottom + 1e-6) warnings.push({ kind: 'drill', text: `${n > 1 ? `The ${n} ${what} holes are` : `The ${what} hole is`} cut to size down to the part's bottom with ${borer.name} (too short to break through; the pilot does): check the bottom edge for fuzz.` });
      return add({ kind: 'hole', label: n > 1 ? `Cut ${n} holes to size` : 'Cut the hole to size', tool: take(borer), zTop: h.zTop, zBottom: bottom, region, centers: h.centers, bore: true, after: pilot.id, detail: `${what} · from the pilot` });
    }
    if (!tool) {
      if (!near) { warnings.push({ kind: 'notool', text: `No drill or end mill fits the ${what} hole${n > 1 ? 's' : ''}.` }); return null; }
      const under = L(h.d - near.diameter, job.units === 'in' ? 4 : 2);
      warnings.push({ kind: 'drill', text: `${n > 1 ? `The ${n} ${what} holes are` : `The ${what} hole is`} drilled with ${near.name}, ${under} under size: no end mill fits to cut ${n > 1 ? 'them' : 'it'} to size.` });
      return drillOp(near, n > 1 ? `Drill ${n} holes` : 'Drill the hole', `${what} · ${under} under size`);
    }
    const pilot = near ? drillOp(near, n > 1 ? `Drill ${n} pilot holes` : 'Drill a pilot hole', `${what} · then ${L(h.d)} with an end mill`, { pilot: true }) : null;
    return add({ kind: 'hole', label: n > 1 ? `Cut ${n} holes` : 'Cut the hole', tool: take(tool), zTop: h.zTop, zBottom: h.zBottom, region, centers: h.centers, detail: `${what} · spiral`, ...(pilot ? { after: pilot.id } : {}) });
  }

  // Threads modeled in a hole: a single-form thread mill on a helix, after
  // the hole is cut to the thread's minor diameter
  function millThreads(h, holeOp) {
    const found = new Map();
    for (const c of h.centers) {
      const th = analysis.sloped ? threadCached(mesh, c, Math.max(0, h.zBottom), h.zTop) : null;
      if (!th) continue;
      for (const t of th.tris) threadTris.add(t);
      for (const t of th.ring) threadRing.add(t);
      const name = threadName(th);
      if (!found.has(name)) found.set(name, { th, name, centers: [] });
      found.get(name).centers.push(c);
    }
    // The hole as it is cut: a drill leaves its own size and a point (a
    // cone of stock above the bottom); an end mill the hole's size, flat
    const drilled = holeOp.kind === 'drill';
    const cutD = drilled ? holeOp.tool.diameter : h.d;
    const cone = drilled ? holeOp.tool.diameter / 2 / Math.tan((59 * Math.PI) / 180) : 0;
    // From the stock's top when it isn't flattened: the reach counts from there
    const top = job.disabled?.face ? Math.max(h.zTop, stock.top) : h.zTop;
    for (const { th, name, centers } of found.values()) {
      const n = centers.length, what = `${n > 1 ? `${n} ` : ''}${name} thread${n > 1 ? 's' : ''}`;
      // The tooth at the tip; the tip above whatever the hole left at its bottom
      const zFloor = (h.through ? -job.throughDepth : h.zBottom) + cone + 0.05;
      const zLow = Math.max(zFloor, th.zLo - th.pitch / 4), zHigh = Math.min(h.zTop, th.zHi + th.pitch / 2);
      const mills = tools.filter((t) => t.kind === 'threadmill');
      // Into the hole as cut; the pitch; deep enough; and on the helix the
      // neck stays inside the crests: (major - cut + neck) / 2 < minor / 2
      const fit = (t) => t.cut < Math.min(cutD, th.minor) - 0.05 && th.pitch >= t.pitchMin - 1e-6 && th.pitch <= t.pitchMax + 1e-6 && t.reach >= top - zLow - 1e-6 && t.cut - t.neck > th.major - th.minor + 0.04;
      const id = `thread${name}@${fmt(h.zTop)}-${fmt(h.zBottom)}`;
      const picked = tools.find((t) => t.id === job.toolOverride?.[id] && mills.includes(t));
      if (picked && !fit(picked)) warnings.push({ kind: 'thread', text: `${picked.name} doesn't fit the ${what} (too wide for the hole or its crests, the wrong pitch, or too short), so ncCAM picks another.` });
      const tool = (picked && fit(picked) ? picked : null) || mills.filter(fit).sort((a, b) => b.cut - a.cut)[0];
      if (zLow >= zHigh - th.pitch) { warnings.push({ kind: 'thread', text: `${what[0].toUpperCase()}${what.slice(1)}: the drill's point leaves too little of the hole to thread, so ${n > 1 ? 'they are' : 'it is'} left for a tap.` }); continue; }
      if (!tool) {
        const why = !mills.length ? 'no thread mill in your Tool Library' : `no thread mill in your Tool Library fits (under ${L(Math.min(cutD, th.minor))} with a neck that clears the crests, a ${num(th.pitch, 'mm')} mm pitch, reaching ${L(top - zLow)})`;
        warnings.push({ kind: 'thread', text: `${what[0].toUpperCase()}${what.slice(1)}: ${why}, so ${n > 1 ? 'the holes are' : 'the hole is'} cut to the thread's minor diameter for a tap.` });
        continue;
      }
      if (tool.reachAssumed) warnings.push({ kind: 'thread', text: `${tool.name}: its reach isn't in the Tool Library, so ncCAM takes ${L(tool.reach)} (3 × its ${L(tool.cut)} cutter). Check it reaches ${L(top - zLow)} below the shank.` });
      if (['mdf', 'softwood', 'hardwood', 'foam'].includes(job.material)) warnings.push({ kind: 'thread', text: `Threads cut in ${MATERIALS[job.material].name.toLowerCase()} won't hold a screw well.` });
      add({ id, kind: 'thread', label: n > 1 ? `Mill ${n} threads` : 'Mill the thread', tool: take(tool), zTop: h.zTop, zBottom: zLow, centers, thread: { ...th, name, zLow, zHigh }, after: holeOp.id, count: n, detail: `${name} · ${L(zHigh - zLow)} deep · ${th.hand === 'left' ? 'left' : 'right'}-hand` });
    }
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

  // 6. Chamfers, with a V-bit along each edge after the cut-out (so it runs
  // in the cut-out's slot and in emptied pockets): the ones drawn in the
  // model, and (an option) every top edge of a flat face.
  const vbits = tools.filter((t) => (t.kind === 'vbit' || t.kind === 'chamfer') && t.angle > 0 && t.angle < 180);
  const half = (t) => (t.angle * Math.PI) / 360;
  const deg = (a) => `${Math.round(a * 10) / 10}\u00b0`;
  const vFits = (t, w) => t.diameter / 2 >= w + CHAMFER_OUT + 0.1 && (!t.fluteLength || t.fluteLength >= (w + CHAMFER_OUT) / Math.tan(half(t)) - 1e-6);
  const cut = ops.find((o) => o.kind === 'cutout');
  const slotW = cut && !job.disabled?.cutout ? cut.tool.diameter : 0;
  // After the cut-out, the stock past its slot still stands
  const standing = C.difference(rect(stock), C.offset(footprint, Math.max(0, slotW - 0.05)));
  let lifted = false; // a chamfer lifts over the tabs
  const tabTop = job.tabs.enabled ? (job.tabs.height ?? tabDefaults(job.material).height) : 0;
  // Each tab, as far as a V-bit's cone (tr wide) can reach it: the bridge
  // along the edge, across the cut-out's slot
  const tabZones = (tr) => {
    if (!cut || job.disabled?.cutout || !job.tabs.enabled) return [];
    const r = cut.tool.diameter / 2, bridge = job.tabs.length ?? tabDefaults(job.material).length;
    const rad = bridge / 2 + r + tr + 0.5;
    return tabSpots(footprint, r, job).map(([x, y]) => Array.from({ length: 24 }, (_, i) => [x + rad * Math.cos((i * Math.PI) / 12), y + rad * Math.sin((i * Math.PI) / 12)]));
  };
  // One pass: the tip on `lo`'s outline grown CHAMFER_OUT, down to zTip,
  // only where the cone (R wide at z, the bit tr) reaches nothing else: no
  // wall above z, no ledge past the edge below it, no standing stock; and,
  // with `keep`, only there. null when nothing is left to cut.
  function chamferPass({ lo, z, zTip, R, tr, which = 'all', keep = null }) {
    if (zTip < -job.throughDepth + 0.1) return { skipped: true }; // into the spoilboard
    const hi = z < analysis.top - EPS ? section(z + EPS) : [];
    const under = C.cleanLoops(C.difference(section(Math.max(zTip, EPS) + EPS), C.offset(lo, 0.01)), TINY);
    // Outside edges: where the tip goes below the tabs' top, the bit lifts
    // over each tab (the slot goes deeper than the tip everywhere else)
    const overTabs = job.tabs.enabled && zTip <= Math.max(EPS, tabTop + 0.2);
    const lifts = overTabs ? tabZones(tr) : [];
    const bad = C.union([...C.offset(hi, tr + 0.1), ...C.offset(standing, tr + 0.1), ...C.offset(under, R + 0.1), ...lifts]);
    const loops = [];
    let skipped = false;
    for (const [outer, ...holes] of C.regions(C.offsetMiter(lo, CHAMFER_OUT))) {
      if (which !== 'inside') loops.push(outer);
      if (which !== 'outside') loops.push(...holes);
    }
    // Only loops with something to cut: a stretch of 0.5 mm clear of `bad`
    const inside = (q, loops2) => { let w = 0; for (const l of loops2) if (C.pointInLoop(q, l)) w += C.loopArea(l) > 0 ? 1 : -1; return w > 0; };
    const inBad = (q) => (keep && !inside(q, keep)) || inside(q, bad);
    const cuts = loops.filter((l) => {
      let run = 0;
      for (let i = 0; i < l.length; i++) {
        const a = l[i], b = l[(i + 1) % l.length], len = Math.hypot(b[0] - a[0], b[1] - a[1]), k = Math.max(1, Math.ceil(len / 0.25));
        for (let j = 0; j < k; j++) {
          if (inBad([a[0] + ((b[0] - a[0]) * j) / k, a[1] + ((b[1] - a[1]) * j) / k])) run = 0;
          else if ((run += len / k) >= 0.5) return true;
        }
      }
      return false;
    });
    return cuts.length ? { pass: { z, depth: z - zTip, loops: cuts, bad, keep }, skipped, overTabs: overTabs && lifts.length > 0 && which !== 'inside' } : { skipped };
  }

  // Drawn in the model: each band of one slope, by the V-bit of that angle
  let chamferArea = 0;
  const chamferTris = new Set();
  if (!did3d && analysis.sloped) {
    const byAngle = new Map();
    for (const band of chamferBands(mesh, { skip: threadTris, besides: threadRing })) {
      for (const t of band.tris) chamferTris.add(t); // found: said below whether it's cut
      const key = Math.round(band.angle * 2) / 2;
      if (!byAngle.has(key)) byAngle.set(key, []);
      byAngle.get(key).push(band);
    }
    for (const [angle, bands] of byAngle) {
      const wide = Math.max(...bands.map((b) => b.w));
      const fit = vbits.filter((t) => Math.abs(t.angle / 2 - angle) <= 1.5);
      const picked = tools.find((t) => t.id === job.toolOverride?.[`chamfers${angle}`] && fit.includes(t));
      const tool = picked || fit.filter((t) => vFits(t, wide)).sort((a, b) => a.diameter - b.diameter)[0];
      const what = `${deg(angle)} chamfer${bands.length > 1 ? 's' : ''}`;
      if (!tool) {
        warnings.push({ kind: 'chamfer', text: fit.length ? `The ${what} ${bands.length > 1 ? 'are' : 'is'} wider than any ${deg(angle * 2)} V-bit in your Tool Library can cut, so ${bands.length > 1 ? 'they stay' : 'it stays'} square.` : `The ${what} need${bands.length > 1 ? '' : 's'} a ${deg(angle * 2)} V-bit, so ${bands.length > 1 ? 'they stay' : 'it stays'} square. Add one to your Tool Library.` });
        continue;
      }
      const passes = [], show = [];
      let skipped = false;
      // Chamfers between the same heights, as wide: one pass along all of them
      const alike = new Map();
      for (const band of bands) {
        const key = [band.zb, band.zt, band.w].map((v) => v.toFixed(3)).join('|');
        if (!alike.has(key)) alike.set(key, []);
        alike.get(key).push(band);
      }
      for (const group of alike.values()) {
        const band = group[0], loops = [];
        for (const b of group) for (const t of b.tris) {
          const v = [0, 1, 2].map((k) => { const i = mesh.indices[t * 3 + k] * 3; return [mesh.positions[i], mesh.positions[i + 1]]; });
          loops.push(C.loopArea(v) < 0 ? v.reverse() : v);
        }
        const seen = C.unionMany(loops);
        const where = C.offset(seen, CHAMFER_OUT + 0.3);
        // The wall's top, where the chamfer starts
        const lo = C.cleanLoops(C.unionEvenOdd(slice(mesh, band.zb + Math.min(EPS, band.h / 4))), TINY);
        const r = chamferPass({ lo, z: band.zt, zTip: band.zb - CHAMFER_OUT / Math.tan(half(tool)), R: band.w + CHAMFER_OUT, tr: tool.diameter / 2, keep: where });
        skipped ||= r.skipped; lifted ||= !!r.overTabs;
        if (r.pass) { passes.push(r.pass); show.push({ z: band.zt, loops: seen }); }
      }
      if (skipped) warnings.push({ kind: 'chamfer', text: `Some ${what} are too low to cut without reaching the spoilboard.` });
      if (!passes.length) continue;
      add({ id: `chamfers${angle}`, kind: 'chamfer', label: 'Cut the chamfers', tool: take(tool), zTop: analysis.top, zBottom: Math.min(...passes.map((l) => l.z - l.depth)), region: footprint, levels: passes, show, angle, count: bands.length, size: wide, detail: `${bands.length} chamfer${bands.length > 1 ? 's' : ''} \u00b7 ${L(wide)} wide \u00b7 ${deg(angle * 2)} bit` });
    }
  }
  // Sloped faces the chamfers and threads explain, each counted once
  const explained = new Set([...threadRing, ...chamferTris]);
  chamferArea = areaFacing(mesh, explained, 1);
  const threadBelow = areaFacing(mesh, threadRing, -1);
  // Faces looking down besides the threads' lower flanks
  if (analysis.squareEdges && analysis.undercutArea - threadBelow > 1e-3 * (analysis.totalArea || Infinity)) warnings.push({ kind: 'edges', text: 'Chamfers or rounded edges face down on this side, so they are left square.' });
  // Sloped faces besides the chamfers (fillets, curves): what 3D is for
  const curved = analysis.sloped && analysis.slopedArea - chamferArea > 1e-3 * (analysis.slopedArea / Math.max(analysis.slopedShare, 1e-9));
  if (curved && !did3d) warnings.push({ kind: 'sloped', text: chamferArea > 0 ? 'Other sloped or curved faces (fillets) aren\u2019t cut in 3D, so they are left square.' : 'Sloped or curved faces (chamfers, fillets) aren\u2019t cut in 3D yet, so they are left square.' });

  // The option: every top edge of a flat face, chamfered `size` wide
  if (job.chamfer?.size > 0) {
    const w = job.chamfer.size, which = job.chamfer.edges || 'all';
    const picked = tools.find((t) => t.id === job.toolOverride?.chamfer && vbits.includes(t));
    // A 90° bit makes the usual 45° chamfer; else the angle nearest to it
    const tool = picked || vbits.filter((t) => vFits(t, w)).sort((a, b) => Math.abs(a.angle - 90) - Math.abs(b.angle - 90) || a.diameter - b.diameter)[0];
    if (!tool) warnings.push({ kind: 'chamfer', text: vbits.length ? `No V-bit in your Tool Library is wide enough for a ${L(w)} chamfer.` : 'Adding a chamfer to top surfaces needs a V-bit in your Tool Library.' });
    else {
      const depth = (w + CHAMFER_OUT) / Math.tan(half(tool));
      // Flat faces: every floor in 2.5D; in 3D only real ones, not a mesh's stray flat triangles
      const levels = [analysis.top, ...analysis.floors.filter((z) => z < analysis.top - EPS && z > EPS && (!did3d || (analysis.floorAreas[z] || 0) >= FLOOR_3D))];
      const passes = [];
      let skipped = false;
      for (const z of levels) {
        const lo = C.cleanLoops(C.unionEvenOdd(slice(mesh, z - EPS)), TINY);
        if (!lo.length) continue;
        const r = chamferPass({ lo, z, zTip: z - depth, R: w + CHAMFER_OUT, tr: tool.diameter / 2, which });
        skipped ||= r.skipped; lifted ||= !!r.overTabs;
        if (r.pass) passes.push(r.pass);
      }
      if (skipped) warnings.push({ kind: 'chamfer', text: `Some edges are too low to chamfer ${L(w)} without cutting the spoilboard.` });
      if (!passes.length) warnings.push({ kind: 'chamfer', text: `No ${chamferArea > 0 ? 'other ' : ''}edge can take a ${L(w)} chamfer with ${tool.name}.` });
      else add({ id: 'chamfer', kind: 'chamfer', label: 'Add Chamfer to top surfaces', tool: take(tool), zTop: analysis.top, zBottom: Math.min(...passes.map((l) => l.z - l.depth)), region: footprint, levels: passes, show: passes.map((l) => ({ z: l.z, loops: l.loops })), size: w, detail: `${L(w)} wide \u00b7 ${Math.round(tool.angle)}\u00b0 bit \u00b7 ${{ all: 'all edges', outside: 'outside edges', inside: 'pockets and holes' }[which]}` });
    }
  }

  if (lifted && ops.some((o) => o.kind === 'chamfer')) warnings.push({ kind: 'chamfer', text: 'The chamfer lifts over the tabs: sand those spots after breaking the part free.' });

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
    // Threads and chamfers took the user's pick already, if it fits
    const over = op.kind === 'thread' || op.kind === 'chamfer' ? null : job.toolOverride?.[op.id];
    if (over) { const t = tools.find((x) => x.id === over); if (t) op.tool = t; }
    op.enabled = !job.disabled?.[op.id];
    // A bore needs its pilot, a thread its hole: off with them
    const parent = (op.bore || op.kind === 'thread') && ops.find((o) => o.id === op.after);
    if (parent && op.enabled && !parent.enabled) {
      op.enabled = false;
      warnings.push({ kind: 'notool', text: `\u201c${op.label}\u201d is off too: it needs \u201c${parent.label}\u201d first.` });
    }
    op.feeds = opFeeds(op.kind === 'chamfer' ? { ...op.tool, diameter: Math.min(op.tool.diameter, 2 * (op.size + CHAMFER_OUT)) } : op.kind === 'thread' ? { ...op.tool, diameter: op.tool.cut ?? op.tool.diameter } : op.tool);
    if (op.kind === 'thread') {
      // Feed per tooth is at the cutter's edge; its centre goes round a much
      // smaller circle, so slower
      const D = op.thread.major, d = op.tool.cut ?? op.tool.diameter;
      op.feeds = { ...op.feeds, feed: Math.max(20, Math.round((op.feeds.feed * (D - d)) / D)) };
    }
    // The part's top on a grid fine enough for the finishing tool
    if (op.kind === 'finish3d') op.surface = surfaceGrid(mesh, stock, Math.min(0.2, op.tool.diameter / 16));
  }
  return { analysis, stock, zero: zeroPoint(stock, job.zero), ops: order(ops), warnings, job, mode3d: use3d, did3d, curved };
}

// Flatten first and cut out last. In between, an operation waits for any
// higher one over the same area; otherwise the tool already in the spindle
// goes next, to save tool changes. Corner clean-ups follow their pocket.
function order(ops) {
  const first = ops.filter((o) => o.kind === 'face');
  const last = [...ops.filter((o) => o.kind === 'cutout'), ...ops.filter((o) => o.kind === 'chamfer')];
  const mid = ops.filter((o) => o.kind !== 'face' && o.kind !== 'cutout' && o.kind !== 'chamfer');
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

// Threads found per part and hole: the plan runs again on every change
const THREADS = new WeakMap();
function threadCached(mesh, c, zLo, zHi) {
  if (!THREADS.has(mesh)) THREADS.set(mesh, new Map());
  const memo = THREADS.get(mesh), key = [c.x, c.y, c.d, zLo, zHi].map((v) => v.toFixed(3)).join(',');
  if (!memo.has(key)) memo.set(key, findThread(mesh, c, zLo, zHi));
  return memo.get(key);
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
