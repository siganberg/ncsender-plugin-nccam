import { test } from 'node:test';
import assert from 'node:assert/strict';
import { loadStep, LIBRARY } from './helpers.js';
import * as N from '../src/core/index.js';

const tools = N.normalizeTools(LIBRARY);

async function make(file, change = (j) => j, lib = tools, up = 'top') {
  const mesh = N.orient(await loadStep(file), up);
  const job = change(N.defaultJob(N.analyze(mesh)));
  const p = N.toolpaths(N.plan(mesh, lib, job));
  return { mesh, p };
}

// Cuts the program on a 0.2 mm grid and compares it with the part's top.
// Columns on a wall are skipped: half of them belong to either side.
function check(mesh, p) {
  const { hm, collisions } = N.simulate(p, 0.2);
  const ph = N.partHeights(mesh, hm);
  let gouges = 0;
  for (let i = 0; i < ph.length; i++) {
    if (ph[i] === -Infinity) continue;
    const nb = [i - 1, i + 1, i - hm.nx, i + hm.nx];
    if (nb.some((k) => k < 0 || k >= ph.length || Math.abs(ph[k] - ph[i]) > 0.01)) continue;
    if (ph[i] - hm.h[i] > 0.02) gouges++;
  }
  return { gouges, collisions: collisions.length, hm, ph };
}

test('bracket: pocket, corners, two through holes, cut-out', async () => {
  const { mesh, p } = await make('bracket.step');
  assert.deepEqual(p.ops.map((o) => o.kind), ['face', 'pocket', 'hole', 'corners', 'cutout']);
  const hole = p.ops.find((o) => o.kind === 'hole');
  assert.equal(hole.centers.length, 2);
  assert.equal(hole.zBottom, -0.3);
  assert.equal(p.ops.find((o) => o.kind === 'corners').tool.diameter, 3.175);
  const r = check(mesh, p);
  assert.equal(r.collisions, 0);
  assert.equal(r.gouges, 0);
});

test('bracket: the pocket and holes are cut to size', async () => {
  const { mesh, p } = await make('bracket.step');
  const { hm, ph } = check(mesh, p);
  const at = (x, y) => { const i = Math.round((x - hm.x0) / hm.cell) + Math.round((y - hm.y0) / hm.cell) * hm.nx; return [hm.h[i], ph[i]]; };
  assert.ok(Math.abs(at(45, 40)[0] - 10) < 0.01, 'pocket floor at 10');
  assert.ok(Math.abs(at(21, 21)[0] - 10) < 0.05, 'pocket corner reached by the 1/8" end mill');
  assert.ok(at(95, 25)[0] < 0, 'hole goes through');
  assert.ok(Math.abs(at(80, 40)[0] - 18) < 0.01, 'top faced to 18');
});

test('stepped: step, pocket around an island, blind hole', async () => {
  const { mesh, p } = await make('stepped.step');
  assert.deepEqual(p.ops.map((o) => o.kind).sort(), ['cutout', 'face', 'hole', 'pocket', 'step']);
  assert.equal(p.ops.find((o) => o.kind === 'hole').zBottom, 4);
  const r = check(mesh, p);
  assert.equal(r.collisions, 0);
  assert.equal(r.gouges, 0);
  const { hm } = r;
  const i = Math.round((35 - hm.x0) / hm.cell) + Math.round((30 - hm.y0) / hm.cell) * hm.nx;
  assert.ok(hm.h[i] > 19.99, 'island left standing');
});

test('a drill of the same size drills the holes', async () => {
  const lib = N.normalizeTools([...LIBRARY, { id: 9, toolId: 9, toolNumber: 3, name: '10 mm drill', type: 'drill', diameter: 10, dimensions: { flute_length: 40 } }]);
  const { mesh, p } = await make('bracket.step', (j) => j, lib);
  const op = p.ops.find((o) => o.kind === 'drill');
  assert.ok(op);
  assert.equal(op.centers.length, 2);
  assert.equal(check(mesh, p).collisions, 0);
});

test('without the facing pass, cuts start from the stock top', async () => {
  const { mesh, p } = await make('bracket.step', (j) => ({ ...j, disabled: { face: true } }));
  const r = check(mesh, p);
  assert.equal(r.collisions, 0);
});

test('tabs hold the part at their height', async () => {
  const { p } = await make('bracket.step');
  const cut = p.ops.find((o) => o.kind === 'cutout');
  const zs = new Set(cut.moves.filter((m) => !m.r).map((m) => Math.round(m.z * 1000) / 1000));
  assert.ok(zs.has(2), 'tab top at 2 mm');
  assert.ok(zs.has(-0.3), 'cut through');
  const { p: noTabs } = await make('bracket.step', (j) => ({ ...j, tabs: { ...j.tabs, enabled: false } }));
  const zs2 = new Set(noTabs.ops.find((o) => o.kind === 'cutout').moves.map((m) => Math.round(m.z * 1000) / 1000));
  assert.ok(!zs2.has(2));
});

test('tab size: 1 x 1 mm in aluminum, and as set', async () => {
  assert.deepEqual(N.tabDefaults('aluminum'), { height: 1, length: 1 });
  assert.deepEqual(N.tabDefaults('mdf'), { height: 2, length: 2 });
  // How long the tool stays at tab height over one tab, along the path
  const span = (p, top) => {
    const cut = p.ops.find((o) => o.kind === 'cutout');
    let run = 0, best = 0, prev = null;
    for (const m of cut.moves) { if (prev && !m.r && Math.abs(m.z - top) < 1e-6 && Math.abs(prev.z - top) < 1e-6) { run += Math.hypot(m.x - prev.x, m.y - prev.y); best = Math.max(best, run); } else run = 0; prev = m; }
    return best;
  };
  const al = (await make('bracket.step', (j) => ({ ...j, material: 'aluminum', tabs: { ...j.tabs, ...N.tabDefaults('aluminum') } }))).p;
  const big = (await make('bracket.step', (j) => ({ ...j, tabs: { ...j.tabs, height: 4, length: 6 } }))).p;
  const alSpan = span(al, 1), bigSpan = span(big, 4);
  assert.ok(alSpan > 0, 'tabs at 1 mm in aluminum');
  assert.ok(bigSpan > 0, 'tabs at 4 mm as set');
  assert.ok(Math.abs(bigSpan - alSpan - 5) < 0.05, `${bigSpan} vs ${alSpan}`);
});

test('upside down, the pocket faces away and is reported', async () => {
  const { p } = await make('bracket.step', (j) => j, tools, 'bottom');
  assert.ok(p.warnings.some((w) => w.kind === 'undercut'));
});

test('a chamfer in the model with no V-bit of its angle is reported, left square', async () => {
  // The library's only V-bit is 60°: a 45° chamfer needs a 90° one
  const { p } = await make('chamfered.step');
  assert.ok(p.warnings.some((w) => w.kind === 'chamfer' && /90° V-bit/.test(w.text)));
  assert.ok(!p.ops.some((o) => o.kind === 'chamfer'));
});

test('G-code: ASCII, tool changes, work coordinates', async () => {
  const { p } = await make('bracket.step');
  const g = N.gcode(p, { name: 'bracket.step', safeZHeightMm: -5, numbering: 'slot' });
  assert.ok(!/[^\x0a\x20-\x7e]/.test(g), 'ASCII only');
  assert.deepEqual(g.match(/M6 T\d+/g), ['M6 T5', 'M6 T1', 'M6 T3', 'M6 T1']);
  assert.ok(g.includes('G53 G0 Z-5'));
  assert.ok(g.trimEnd().endsWith('M30'));
  // Zero at the front left corner on top: the stock spans X0..124, Z -19..0
  const xs = [...g.matchAll(/X(-?[\d.]+)/g)].map((m) => +m[1]);
  const zs = [...g.matchAll(/(?<!G53 G0 )Z(-?[\d.]+)/g)].map((m) => +m[1]);
  assert.ok(Math.min(...zs) >= -19.3 - 1e-6 && Math.max(...zs) <= 3);
  assert.ok(Math.min(...xs) > -20 && Math.max(...xs) < 145);
  for (const line of g.split('\n')) assert.ok(!/\(.*\(/.test(line), `nested comment: ${line}`);
});

test('Tool Numbering picks the T number', () => {
  const t = { id: 68, toolId: 68, toolNumber: 4 };
  assert.equal(N.toolNumber(t, 'slot'), 4);
  assert.equal(N.toolNumber(t, 'toolId'), 68);
  assert.equal(N.toolNumber({ id: 87, toolId: 87, toolNumber: null }, 'slot'), 87);
});

test('zero points', () => {
  const s = { minX: -2, minY: -2, maxX: 122, maxY: 82, top: 19, bottom: 0 };
  assert.deepEqual(N.zeroPoint(s, { xy: 'front-left', z: 'top' }), { x: -2, y: -2, z: 19 });
  assert.deepEqual(N.zeroPoint(s, { xy: 'center', z: 'bed' }), { x: 60, y: 40, z: 0 });
  assert.deepEqual(N.zeroPoint(s, { xy: 'back-right', z: 'top' }), { x: 122, y: 82, z: 19 });
  assert.deepEqual(N.zeroPoint(s, { xy: 'left-center', z: 'top' }), { x: -2, y: 40, z: 19 });
});

test('holes are cut one at a time, each to full depth', async () => {
  const { p } = await make('bracket.step');
  const hole = p.ops.find((o) => o.kind === 'hole');
  // Which hole each feed move is in, in order: one run per hole
  const which = hole.moves.filter((m) => !m.r && m.z < 17).map((m) => (Math.hypot(m.x - hole.centers[0].x, m.y - hole.centers[0].y) < 6 ? 0 : 1));
  const runs = which.filter((h, i) => i === 0 || h !== which[i - 1]).length;
  assert.equal(runs, 2);
});

test('only the sides the tool can reach are offered', async () => {
  const { sides, best } = N.sides(await loadStep('bracket.step'));
  assert.equal(best, 'top');
  assert.equal(sides.top.reachable, true);
  for (const s of ['bottom', 'front', 'back', 'left', 'right']) assert.equal(sides[s].reachable, false, s);
});

test('a plate with only through cuts can go either face up', async () => {
  const { sides } = N.sides(await loadStep('plate.step'));
  assert.equal(sides.top.reachable, true);
  assert.equal(sides.bottom.reachable, true);
  for (const s of ['front', 'back', 'left', 'right']) assert.equal(sides[s].reachable, false, s);
});

test('a chamfered plate can go either way up; upside down the cut-out stays outside the chamfer', async () => {
  const raw = await loadStep('onshape-plate.step');
  const { sides, best } = N.sides(raw);
  assert.equal(best, 'top');
  assert.ok(sides.top.reachable && sides.bottom.reachable);
  for (const s of ['front', 'back', 'left', 'right']) assert.equal(sides[s].reachable, false, s);
  const mesh = N.orient(raw, 'bottom');
  const p = N.toolpaths(N.plan(mesh, tools, N.defaultJob(N.analyze(mesh))));
  assert.ok(p.warnings.some((w) => w.kind === 'edges'));
  assert.ok(!p.warnings.some((w) => w.kind === 'undercut'));
  const r = check(mesh, p);
  assert.equal(r.gouges, 0);
  assert.equal(r.collisions, 0);
});

test('the same slot five times is one operation, each cut on its own', async () => {
  const mesh = N.orient(await loadStep('plate.step'), 'top');
  const p = N.toolpaths(N.plan(mesh, tools, N.defaultJob(N.analyze(mesh))));
  const slots = p.ops.filter((o) => o.kind === 'pocket');
  assert.equal(slots.length, 1);
  assert.equal(slots[0].count, 5);
  assert.equal(slots[0].label, 'Cut 5 openings');
  const r = check(mesh, p);
  assert.equal(r.gouges, 0);
  assert.equal(r.collisions, 0);
});

test('rapids never move sideways and down together', async () => {
  const { p } = await make('bracket.step');
  const g = N.gcode(p, { safeZHeightMm: -5 }).split('\n');
  let mode = null;
  for (const line of g) {
    if (/^G1\b/.test(line)) mode = 'G1';
    if (/^G0\b/.test(line) && !line.startsWith('G53')) mode = 'G0';
    if (/^M6/.test(line)) mode = null;
    if (mode === 'G0' && !line.startsWith('G53') && /[XY]/.test(line)) assert.ok(!/Z/.test(line), `rapid with XY and Z: ${line}`);
  }
});

test('imperial: sizes read in inches, the program stays in mm', async () => {
  assert.equal(N.units.len(6.35, 'in'), '0.25 in');
  assert.equal(N.units.len(6.35), '6.4 mm');
  assert.equal(N.units.toMm(0.5, 'in'), 12.7);
  assert.equal(N.units.unitsFrom('imperial'), 'in');
  const { p } = await make('bracket.step', (j) => ({ ...j, units: 'in' }));
  const hole = p.ops.find((o) => o.kind === 'hole');
  assert.match(hole.detail, /^Ø0\.\d+ in through/);
  assert.ok(!p.ops.some((o) => / mm\b/.test(o.detail || '')), 'no mm in the details');
  assert.ok(N.gcode(p).includes('G21'));
});

test('Slot numbering: a tool in no slot gets a number past the magazine, never a slot', () => {
  const lib = [
    { id: 1, toolId: 1, toolNumber: 1 }, { id: 2, toolId: 2, toolNumber: 2 },
    { id: 3, toolId: 3, toolNumber: null }, // Tool ID 3, but slot 3 holds another tool
    { id: 84, toolId: 84, toolNumber: 3 },
    { id: 20, toolId: 20, toolNumber: null }, // free past the magazine: keeps its ID
    { id: 5, toolId: 5, toolNumber: null }, // inside the magazine: next free number
  ];
  const num = N.makeNumbering('slot', lib, 6, 99);
  const t = (id) => N.toolNumber(lib.find((x) => x.id === id), num);
  assert.equal(t(84), 3);
  assert.equal(t(20), 20);
  assert.equal(t(3), 7);
  assert.equal(t(5), 8);
  assert.equal(N.toolNumber(lib[2], N.makeNumbering('toolId', lib, 6)), 3);
});

// A box as a faceted STEP file (a mesh saved as STEP), outward triangles.
function facetedBox(w, d, h, unit = 'SI_UNIT(.MILLI.,.METRE.)', extra = '') {
  const c = (i) => [i & 1 ? w : 0, i & 2 ? d : 0, i & 4 ? h : 0];
  const tris = [[0, 2, 1], [1, 2, 3], [4, 5, 6], [5, 7, 6], [0, 1, 4], [1, 5, 4], [2, 6, 3], [3, 6, 7], [0, 4, 2], [2, 4, 6], [1, 3, 5], [3, 7, 5]];
  let id = 100;
  const lines = [], faces = [];
  for (const t of tris) {
    const pts = t.map((i) => { lines.push(`#${++id}=CARTESIAN_POINT('',(${c(i).join(',')}));`); return `#${id}`; });
    lines.push(`#${++id}=POLY_LOOP('',(${pts.join(',')}));`);
    lines.push(`#${++id}=FACE_OUTER_BOUND('',#${id - 1},.T.);`);
    lines.push(`#${++id}=FACE_SURFACE('',(#${id - 1}),#9,.T.);`);
    faces.push(`#${id}`);
  }
  return ['ISO-10303-21;', 'HEADER;', 'ENDSEC;', 'DATA;',
    `#1=(LENGTH_UNIT() NAMED_UNIT(*) ${unit});`, ...lines, extra,
    `#2=CLOSED_SHELL('',(${faces.join(',')}));`, "#3=FACETED_BREP('',#2);", 'ENDSEC;', 'END-ISO-10303-21;'].join('\n');
}

test('a mesh saved as STEP is read without OCCT, in its own unit', () => {
  const mm = N.meshFromFacetedStep(new TextEncoder().encode(facetedBox(30, 20, 10)));
  assert.equal(mm.indices.length / 3, 12);
  assert.deepEqual(N.meshBounds(mm).size, [30, 20, 10]);
  assert.ok(Math.abs(N.meshVolume(mm) - 6000) < 1e-6);
  const a = N.analyze(N.orient(mm, 'top'));
  assert.deepEqual(a.floors, [10]);
  assert.equal(a.undercut, false);
  const metre = N.meshFromFacetedStep(facetedBox(0.03, 0.02, 0.01, 'SI_UNIT($,.METRE.)'));
  assert.deepEqual(N.meshBounds(metre).size.map((v) => +v.toFixed(9)), [30, 20, 10]);
  const inch = N.meshFromFacetedStep(facetedBox(1, 1, 1, "CONVERSION_BASED_UNIT('INCH',#5) LENGTH_UNIT() NAMED_UNIT(#6)"));
  assert.deepEqual(N.meshBounds(inch).size, [25.4, 25.4, 25.4]);
});

test('a STEP file with real CAD faces, or an unknown unit, goes to OCCT', async () => {
  const { readFileSync } = await import('node:fs');
  for (const f of ['bracket.step', 'chamfered.step', 'onshape-plate.step']) {
    assert.equal(N.meshFromFacetedStep(readFileSync(new URL(`./fixtures/${f}`, import.meta.url))), null, f);
  }
  assert.equal(N.meshFromFacetedStep(facetedBox(1, 1, 1, "CONVERSION_BASED_UNIT('FURLONG',#5) LENGTH_UNIT() NAMED_UNIT(#6)")), null);
  assert.equal(N.meshFromFacetedStep(facetedBox(1, 1, 1, undefined, "#99=ADVANCED_FACE('',(#1),#9,.T.);")), null);
});

test('triangles in no order merge in one go (a faceted mask hung here)', () => {
  // A 60 x 60 grid of squares, two triangles each, shuffled
  const tris = [];
  for (let i = 0; i < 60; i++) for (let j = 0; j < 60; j++) {
    tris.push([[i, j], [i + 1, j], [i + 1, j + 1]], [[i, j], [i + 1, j + 1], [i, j + 1]]);
  }
  let s = 1;
  for (let k = tris.length - 1; k > 0; k--) { s = (s * 16807) % 2147483647; const r = s % (k + 1); [tris[k], tris[r]] = [tris[r], tris[k]]; }
  const t = Date.now();
  const u = N.clip.unionMany(tris);
  assert.ok(Date.now() - t < 10000);
  assert.ok(Math.abs(N.clip.area(u) - 3600) < 0.01);
});

// A dome R mm across on a plinth h mm tall, w mm square: curved on top,
// flat around it, vertical outside walls. Outward triangles.
function domeOnPlinth(R = 20, h = 4, w = 50, n = 48, rings = 16) {
  const pos = [], idx = [];
  const v = (x, y, z) => (pos.push(x, y, z), pos.length / 3 - 1);
  const c = w / 2;
  // Dome rings from the equator (on the plinth) up to the pole
  const ring = [];
  for (let k = 0; k < rings; k++) {
    const a = (k / rings) * (Math.PI / 2);
    ring.push(Array.from({ length: n }, (_, i) => { const t = (i / n) * 2 * Math.PI; return v(c + R * Math.cos(a) * Math.cos(t), c + R * Math.cos(a) * Math.sin(t), h + R * Math.sin(a)); }));
  }
  const pole = v(c, c, h + R);
  for (let k = 0; k + 1 < rings; k++) for (let i = 0; i < n; i++) {
    const a = ring[k][i], b = ring[k][(i + 1) % n], d = ring[k + 1][i], e = ring[k + 1][(i + 1) % n];
    idx.push(a, b, e, a, e, d);
  }
  for (let i = 0; i < n; i++) idx.push(ring[rings - 1][i], ring[rings - 1][(i + 1) % n], pole);
  // Plinth top: from its square edge in to the dome's equator, as a fan of quads
  const sq = Array.from({ length: n }, (_, i) => {
    const t = (i / n) * 2 * Math.PI, s = c / Math.max(Math.abs(Math.cos(t)), Math.abs(Math.sin(t)));
    return [c + s * Math.cos(t), c + s * Math.sin(t)];
  });
  const top = sq.map(([x, y]) => v(x, y, h)), bot = sq.map(([x, y]) => v(x, y, 0));
  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    idx.push(top[i], top[j], ring[0][j], top[i], ring[0][j], ring[0][i]); // plinth top
    idx.push(bot[i], bot[j], top[j], bot[i], top[j], top[i]); // outside wall
  }
  const mid = v(c, c, 0);
  for (let i = 0; i < n; i++) idx.push(bot[(i + 1) % n], bot[i], mid); // bottom
  return { positions: Float64Array.from(pos), indices: Uint32Array.from(idx), faces: [], solids: 1, names: [] };
}

const BALL = N.normalizeTools([...LIBRARY, { id: 9, toolId: 9, toolNumber: 4, name: '1/4" Ball End Mill', type: 'ball', diameter: 6.35, dimensions: { flute_length: 25 } }]);

// Cut below the part, rapids into material, and how much is left over the
// part. The simulation puts the tool on the nearest grid node (up to 0.14 mm
// off), which on a steep slope is a deep cut that isn't there: a column is
// measured against the lowest part height around it.
function check3d(mesh, p) {
  const { hm, collisions } = N.simulate(p, 0.2);
  const ph = N.partHeights(mesh, hm);
  let gouges = 0, sum = 0, cells = 0;
  const nx = hm.nx;
  for (let i = 0; i < ph.length; i++) {
    let low = ph[i];
    for (const k of [i - 1, i + 1, i - nx, i + nx, i - nx - 1, i - nx + 1, i + nx - 1, i + nx + 1]) if (k >= 0 && k < ph.length) low = Math.min(low, ph[k]);
    if (low === -Infinity) continue;
    if (low - hm.h[i] > 0.02) gouges++;
    sum += hm.h[i] - ph[i]; cells++;
  }
  return { gouges, collisions: collisions.length, meanLeft: sum / cells };
}

test('a curved part is roughed in layers and finished with a ball end mill', () => {
  for (const finish of ['fast', 'smooth']) {
    const mesh = N.orient(domeOnPlinth(), 'top');
    const c = check3d(mesh, N.toolpaths(N.plan(mesh, BALL, { ...N.defaultJob(N.analyze(mesh)), finish })));
    assert.equal(c.gouges, 0, finish);
    assert.equal(c.collisions, 0, finish);
  }
  const mesh = N.orient(domeOnPlinth(), 'top');
  const a = N.analyze(mesh);
  assert.ok(a.slopedShare > 0.2);
  const p = N.toolpaths(N.plan(mesh, BALL, N.defaultJob(a)));
  assert.deepEqual(p.ops.map((o) => o.kind), ['face', 'rough3d', 'finish3d', 'cutout']);
  const [rough, finish] = [p.ops[1], p.ops[2]];
  assert.equal(rough.tool.kind, 'flat');
  assert.equal(finish.tool.kind, 'ball');
  // The plinth's top is a real floor: a layer lands on it
  assert.ok(rough.layers.some((l) => Math.abs(l.z - 4) < 1e-6));
  assert.ok(!p.warnings.some((w) => w.kind === 'sloped'));
  const c = check3d(mesh, p);
  assert.equal(c.gouges, 0);
  assert.equal(c.collisions, 0);
  assert.ok(c.meanLeft < 0.15, `mean left ${c.meanLeft}`);
});

test('without the finishing pass the roughing leaves its allowance, never less', () => {
  const mesh = N.orient(domeOnPlinth(), 'top');
  const p = N.toolpaths(N.plan(mesh, BALL, N.defaultJob(N.analyze(mesh))));
  p.ops.find((o) => o.kind === 'finish3d').enabled = false;
  const c = check3d(mesh, p);
  assert.equal(c.gouges, 0);
  assert.equal(c.collisions, 0);
  assert.ok(c.meanLeft > 0.3);
});

test('Smooth passes closer than Fast; with no ball end mill a flat one finishes and says so', () => {
  const mesh = N.orient(domeOnPlinth(), 'top');
  const rows = (finish) => {
    const p = N.toolpaths(N.plan(mesh, BALL, { ...N.defaultJob(N.analyze(mesh)), finish }));
    return new Set(p.ops.find((o) => o.kind === 'finish3d').moves.filter((m) => !m.r).map((m) => m.y.toFixed(3))).size;
  };
  assert.ok(rows('smooth') > rows('fast') * 1.5);
  const p = N.plan(mesh, tools, N.defaultJob(N.analyze(mesh)));
  assert.equal(p.ops.find((o) => o.kind === 'finish3d').tool.kind, 'flat');
  assert.ok(p.warnings.some((w) => w.kind === 'noball'));
});

test('a chamfer or two is still 2.5D; the choice can be forced either way', async () => {
  for (const f of ['chamfered.step', 'onshape-plate.step']) {
    const mesh = N.orient(await loadStep(f), 'top');
    const job = N.defaultJob(N.analyze(mesh));
    assert.ok(!N.plan(mesh, BALL, job).ops.some((o) => o.kind === 'rough3d'), f);
    assert.ok(N.plan(mesh, BALL, { ...job, surface3d: true }).ops.some((o) => o.kind === 'rough3d'), f);
  }
  const dome = N.orient(domeOnPlinth(), 'top');
  assert.ok(!N.plan(dome, BALL, { ...N.defaultJob(N.analyze(dome)), surface3d: false }).ops.some((o) => o.kind === 'rough3d'));
});

// An ellipsoid with semi-axes a, b, c (curved all over), outward triangles.
function ellipsoid(a, b, c, n = 40, m = 24) {
  const pos = [], idx = [];
  for (let i = 0; i <= m; i++) for (let j = 0; j < n; j++) {
    const v = (i / m) * Math.PI - Math.PI / 2, u = (j / n) * 2 * Math.PI;
    pos.push(a * Math.cos(v) * Math.cos(u), b * Math.cos(v) * Math.sin(u), c * Math.sin(v));
  }
  for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) {
    const p = i * n + j, q = i * n + ((j + 1) % n), r = (i + 1) * n + j, s = (i + 1) * n + ((j + 1) % n);
    idx.push(p, q, s, p, s, r);
  }
  return { positions: Float64Array.from(pos), indices: Uint32Array.from(idx), faces: [], solids: 1, names: [] };
}

test('a 3D part is offered lying down, not standing on end', () => {
  const s = N.sides(ellipsoid(10, 12, 30));
  assert.ok(s.sides[s.best].height < 25, `${s.best} is ${s.sides[s.best].height} mm tall`);
  // A 2.5D part still goes by what can be reached, not by height
  const plate = N.sides(N.orient(domeOnPlinth(20, 4, 50), 'top'));
  assert.equal(plate.best, 'top');
});

// Openings inside the part's outline left standing more than 0.5 mm high
function uncutOpenings(mesh, p) {
  const { hm } = N.simulate(p, 0.2);
  const ph = N.partHeights(mesh, hm);
  const fp = p.ops.find((o) => o.kind === 'cutout').region;
  let n = 0;
  for (let i = hm.nx; i < ph.length - hm.nx; i++) {
    if ([ph[i], ph[i - 1], ph[i + 1], ph[i - hm.nx], ph[i + hm.nx]].some((v) => v !== -Infinity) || hm.h[i] <= 0.5) continue;
    if (fp.some((l) => N.clip.pointInLoop([hm.x0 + (i % hm.nx) * hm.cell, hm.y0 + Math.floor(i / hm.nx) * hm.cell], l))) n++;
  }
  return n;
}

test('in 3D, holes and slots too narrow for the roughing end mill are cleared by a smaller one', async () => {
  const lib = N.normalizeTools([...LIBRARY.map((t) => ({ ...t, dimensions: undefined })), { id: 9, toolId: 9, name: 'ball', type: 'ball', diameter: 6.35 }]);
  for (const f of ['plate.step', 'bracket.step']) {
    const mesh = N.orient(await loadStep(f), 'top');
    const p = N.toolpaths(N.plan(mesh, lib, { ...N.defaultJob(N.analyze(mesh)), surface3d: true }));
    const rest = p.ops.find((o) => o.kind === 'rest3d');
    assert.ok(rest, f);
    assert.ok(rest.tool.diameter < 6, f);
    assert.equal(uncutOpenings(mesh, p), 0, f);
    const c = check3d(mesh, p);
    assert.equal(c.gouges, 0, f);
    assert.equal(c.collisions, 0, f);
    assert.ok(!p.warnings.some((w) => w.kind === 'notool'), f);
  }
  // With nothing smaller, it says so instead of leaving them silently
  const big = N.normalizeTools([{ id: 1, name: '1/4" flat', type: 'flat', diameter: 6.35 }, { id: 9, name: 'ball', type: 'ball', diameter: 6.35 }]);
  const plate = N.orient(await loadStep('plate.step'), 'top');
  assert.ok(N.plan(plate, big, { ...N.defaultJob(N.analyze(plate)), surface3d: true }).warnings.some((w) => w.kind === 'notool' && /stay uncut/.test(w.text)));
});

test('3D asked for but no end mill reaches: cut in 2.5D, and the switch still shows it is on', async () => {
  const short = N.normalizeTools(LIBRARY.map((t) => ({ ...t, dimensions: { flute_length: 8 } })));
  const mesh = N.orient(await loadStep('stepped.step'), 'top');
  const job = { ...N.defaultJob(N.analyze(mesh)), surface3d: true };
  const p = N.plan(mesh, short, job);
  assert.equal(p.mode3d, true);
  assert.equal(p.did3d, false);
  assert.ok(p.ops.some((o) => o.kind === 'pocket'));
  assert.ok(p.warnings.some((w) => w.kind === 'notool' && /2\.5D/.test(w.text)));
  // Switched off, it stays off
  assert.equal(N.plan(mesh, short, { ...job, surface3d: false }).mode3d, false);
});

test('a mesh STEP with a face that is not convex goes to OCCT', () => {
  // An L-shaped flat face: a fan from its first corner would cover the notch
  const text = ['ISO-10303-21;', 'HEADER;', 'ENDSEC;', 'DATA;', '#1=(LENGTH_UNIT() NAMED_UNIT(*) SI_UNIT(.MILLI.,.METRE.));',
    ...[[2, 0], [2, 1], [1, 1], [1, 2], [0, 2], [0, 0]].map(([x, y], i) => `#${10 + i}=CARTESIAN_POINT('',(${x},${y},0.));`),
    "#20=POLY_LOOP('',(#10,#11,#12,#13,#14,#15));", "#21=FACE_OUTER_BOUND('',#20,.T.);", "#22=FACE_SURFACE('',(#21),#9,.T.);",
    "#2=CLOSED_SHELL('',(#22));", "#3=FACETED_BREP('',#2);", 'ENDSEC;', 'END-ISO-10303-21;'].join('\n');
  assert.equal(N.meshFromFacetedStep(text), null);
  // The same corners in convex order read fine
  const square = text.replace("(#10,#11,#12,#13,#14,#15)", '(#10,#14,#15)');
  assert.ok(N.meshFromFacetedStep(square));
});

test('the simulation still catches a rapid into material on a coarse grid', () => {
  const stock = { minX: 0, minY: 0, maxX: 100, maxY: 60, top: 20, bottom: 0 };
  const tool = { id: 1, kind: 'flat', diameter: 6.35 };
  const run = (moves, cell) => N.simulate({ stock, ops: [{ id: 'a', enabled: true, tool, moves }] }, cell).collisions.length;
  // Straight through the stock at half height
  const through = [{ r: true, x: -10, y: 30, z: 10 }, { r: true, x: 110, y: 30, z: 10 }];
  // Past the stock's edge, 1 mm into it
  const graze = [{ r: true, x: -10, y: -2.175, z: 10 }, { r: true, x: 110, y: -2.175, z: 10 }];
  // Past the edge, 0.2 mm clear of it
  const clear = [{ r: true, x: -10, y: -3.375, z: 10 }, { r: true, x: 110, y: -3.375, z: 10 }];
  for (const cell of [0.2, 0.65]) {
    assert.ok(run(through, cell) > 0, `through, ${cell}`);
    assert.ok(run(graze, cell) > 0, `graze, ${cell}`);
    assert.equal(run(clear, cell), 0, `clear, ${cell}`);
  }
});

// How far a flat end mill's moves go into the part, exactly: at points
// along each cutting move, the tool's bottom disc against the part's
// section just above it (positive: into the part).
function flatGouge(mesh, op) {
  const r = op.tool.diameter / 2, cache = new Map();
  // Just above z; a slice through an edge can leave a sliver loop, so a
  // little higher until it doesn't
  const sec = (z) => {
    const k = z.toFixed(3);
    if (!cache.has(k)) {
      let L;
      for (const e of [0.002, 0.0037, 0.0051, 0.0077, 0.0093]) { L = N.slice(mesh, z + e); if (!L.some((l) => Math.abs(N.clip.loopArea(l)) < 1e-3)) break; }
      cache.set(k, L);
    }
    return cache.get(k);
  };
  const segDist = (px, py, a, b) => { const dx = b[0] - a[0], dy = b[1] - a[1], L = dx * dx + dy * dy; const t = L ? Math.max(0, Math.min(1, ((px - a[0]) * dx + (py - a[1]) * dy) / L)) : 0; return Math.hypot(a[0] + dx * t - px, a[1] + dy * t - py); };
  let worst = 0, prev = null;
  for (const m of op.moves) {
    if (prev && !m.r && m.z > 0.01) {
      const steps = Math.max(1, Math.ceil(Math.hypot(m.x - prev.x, m.y - prev.y) / 0.2));
      for (let k = 0; k <= steps; k++) {
        const t = k / steps, x = prev.x + (m.x - prev.x) * t, y = prev.y + (m.y - prev.y) * t;
        let inside = false, d = Infinity;
        for (const l of sec(Math.round((prev.z + (m.z - prev.z) * t) * 1000) / 1000)) {
          if (N.clip.pointInLoop([x, y], l)) inside = !inside;
          for (let i = 0; i < l.length; i++) d = Math.min(d, segDist(x, y, l[i], l[(i + 1) % l.length]));
        }
        worst = Math.max(worst, inside ? r + d : r - d);
      }
    }
    prev = m;
  }
  return worst;
}

// A closed mesh of square columns, height H(i, j) (1 mm cells).
function columns(H, nx, ny) {
  const pos = [], idx = [];
  const quad = (a, b, c, d) => { const o = pos.length / 3; pos.push(...a, ...b, ...c, ...d); idx.push(o, o + 1, o + 2, o, o + 2, o + 3); };
  const h = (i, j) => (i < 0 || j < 0 || i >= nx || j >= ny ? 0 : H(i, j));
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
    const z = h(i, j);
    if (z <= 0) continue;
    quad([i, j, z], [i + 1, j, z], [i + 1, j + 1, z], [i, j + 1, z]);
    quad([i, j, 0], [i, j + 1, 0], [i + 1, j + 1, 0], [i + 1, j, 0]);
    const e = h(i + 1, j); if (e < z) quad([i + 1, j, e], [i + 1, j + 1, e], [i + 1, j + 1, z], [i + 1, j, z]);
    const w = h(i - 1, j); if (w < z) quad([i, j + 1, w], [i, j, w], [i, j, z], [i, j + 1, z]);
    const n = h(i, j + 1); if (n < z) quad([i + 1, j + 1, n], [i, j + 1, n], [i, j + 1, z], [i + 1, j + 1, z]);
    const s = h(i, j - 1); if (s < z) quad([i, j, s], [i + 1, j, s], [i + 1, j, z], [i, j, z]);
  }
  return { positions: Float64Array.from(pos), indices: Uint32Array.from(idx), faces: [], solids: 1, names: [] };
}
// A 60 x 60 x 12 block, a 30 x 30 pocket 6 deep, a 4 mm slot 4 deeper in its floor
const slotPart = () => columns((i, j) => (i >= 28 && i < 32 && j >= 20 && j < 40 ? 2 : i >= 15 && i < 45 && j >= 15 && j < 45 ? 6 : 12), 60, 60);

test('3D roughing, its wall laps and rest roughing never cut into the part', async () => {
  const lib = N.normalizeTools([...LIBRARY.map((t) => ({ ...t, dimensions: undefined })), { id: 9, toolId: 9, name: 'ball', type: 'ball', diameter: 6.35 }]);
  const parts = { dome: domeOnPlinth(), slot: slotPart(), stepped: await loadStep('stepped.step'), plate: await loadStep('plate.step') };
  for (const [name, raw] of Object.entries(parts)) {
    const mesh = N.orient(raw, 'top');
    const p = N.toolpaths(N.plan(mesh, lib, { ...N.defaultJob(N.analyze(mesh)), surface3d: true }));
    for (const op of p.ops.filter((o) => o.kind === 'rough3d' || o.kind === 'rest3d')) {
      assert.ok(flatGouge(mesh, op) < 0.005, `${name} ${op.kind}: ${flatGouge(mesh, op)} mm into the part`);
    }
  }
});

test('with the 3D roughing switched off, rest roughing never rapids into stock', () => {
  const lib = N.normalizeTools([...LIBRARY.map((t) => ({ ...t, dimensions: undefined })), { id: 9, toolId: 9, name: 'ball', type: 'ball', diameter: 6.35 }]);
  const mesh = N.orient(slotPart(), 'top');
  const job = { ...N.defaultJob(N.analyze(mesh)), surface3d: true };
  const rough = N.plan(mesh, lib, job).ops.find((o) => o.kind === 'rough3d');
  const p = N.toolpaths(N.plan(mesh, lib, { ...job, disabled: { [rough.id]: true } }));
  assert.ok(p.ops.some((o) => o.kind === 'rest3d' && o.enabled));
  assert.equal(N.simulate(p, 0.2).collisions.length, 0);
});

// The 12 outward triangles of a w x d x h box, as corner triples
function boxTris(w, d, h) {
  const c = (i) => [i & 1 ? w : 0, i & 2 ? d : 0, i & 4 ? h : 0];
  return [[0, 2, 1], [1, 2, 3], [4, 5, 6], [5, 7, 6], [0, 1, 4], [1, 5, 4], [2, 6, 3], [3, 6, 7], [0, 4, 2], [2, 4, 6], [1, 3, 5], [3, 7, 5]].map((t) => t.map(c));
}

test('STL, binary and text, reads as mm', async () => {
  const tris = boxTris(30, 20, 10);
  const bin = new Uint8Array(84 + tris.length * 50), dv = new DataView(bin.buffer);
  dv.setUint32(80, tris.length, true);
  tris.forEach((t, k) => t.flat().forEach((v, i) => dv.setFloat32(84 + k * 50 + 12 + i * 4, v, true)));
  const txt = `solid box\n${tris.map((t) => `facet normal 0 0 0\nouter loop\n${t.map((p) => `vertex ${p.join(' ')}`).join('\n')}\nendloop\nendfacet`).join('\n')}\nendsolid box\n`;
  for (const [what, bytes] of [['binary', bin], ['text', new TextEncoder().encode(txt)]]) {
    const m = await N.meshFromFile(bytes, `box.${what === 'binary' ? 'STL' : 'stl'}`);
    assert.deepEqual(N.meshBounds(m).size, [30, 20, 10], what);
    assert.ok(Math.abs(N.meshVolume(m) - 6000) < 1e-6, what);
    assert.equal(N.analyze(N.orient(m, 'top')).undercut, false, what);
  }
  await assert.rejects(N.meshFromFile(new TextEncoder().encode('<html>not found</html>'), 'x.stl'));
});

// A zip (stored, or deflated where asked), zip64 if asked
async function zip(files, zip64 = false) {
  const enc = new TextEncoder(), parts = [], central = [];
  let off = 0;
  for (const [name, text, deflate] of files) {
    const raw = enc.encode(text);
    const data = deflate ? new Uint8Array(await new Response(new Blob([raw]).stream().pipeThrough(new CompressionStream('deflate-raw'))).arrayBuffer()) : raw;
    const nm = enc.encode(name), loc = new Uint8Array(30 + nm.length), lv = new DataView(loc.buffer);
    lv.setUint32(0, 0x04034b50, true); lv.setUint16(8, deflate ? 8 : 0, true); lv.setUint32(18, data.length, true); lv.setUint32(22, raw.length, true); lv.setUint16(26, nm.length, true); loc.set(nm, 30);
    const extra = zip64 ? 28 : 0, cen = new Uint8Array(46 + nm.length + extra), cv = new DataView(cen.buffer);
    cv.setUint32(0, 0x02014b50, true); cv.setUint16(10, deflate ? 8 : 0, true);
    cv.setUint32(20, zip64 ? 0xffffffff : data.length, true); cv.setUint32(24, zip64 ? 0xffffffff : raw.length, true);
    cv.setUint16(28, nm.length, true); cv.setUint16(30, extra, true); cv.setUint32(42, zip64 ? 0xffffffff : off, true); cen.set(nm, 46);
    if (zip64) { const e = 46 + nm.length; cv.setUint16(e, 1, true); cv.setUint16(e + 2, 24, true); cv.setBigUint64(e + 4, BigInt(raw.length), true); cv.setBigUint64(e + 12, BigInt(data.length), true); cv.setBigUint64(e + 20, BigInt(off), true); }
    parts.push(loc, data); central.push(cen); off += loc.length + data.length;
  }
  const cdSize = central.reduce((n, c) => n + c.length, 0), tail = [];
  if (zip64) {
    const z = new Uint8Array(56), zv = new DataView(z.buffer);
    zv.setUint32(0, 0x06064b50, true); zv.setBigUint64(32, BigInt(files.length), true); zv.setBigUint64(40, BigInt(cdSize), true); zv.setBigUint64(48, BigInt(off), true);
    const loc = new Uint8Array(20), lv = new DataView(loc.buffer);
    lv.setUint32(0, 0x07064b50, true); lv.setBigUint64(8, BigInt(off + cdSize), true);
    tail.push(z, loc);
  }
  const end = new Uint8Array(22), ev = new DataView(end.buffer);
  ev.setUint32(0, 0x06054b50, true); ev.setUint16(10, zip64 ? 0xffff : files.length, true); ev.setUint32(12, cdSize, true); ev.setUint32(16, zip64 ? 0xffffffff : off, true);
  const all = [...parts, ...central, ...tail, end], out = new Uint8Array(all.reduce((n, a) => n + a.length, 0));
  let p = 0; for (const a of all) { out.set(a, p); p += a.length; }
  return out;
}

test('3MF: units, objects in other files, transforms, mirroring, modifiers, zip64', async () => {
  const tris = boxTris(1, 1, 1);
  const pts = tris.flat();
  const mesh = `<mesh><vertices>${pts.map((p) => `<vertex x="${p[0]}" y="${p[1]}" z="${p[2]}"/>`).join('')}</vertices><triangles>${tris.map((_, k) => `<triangle v1="${k * 3}" v2="${k * 3 + 1}" v3="${k * 3 + 2}"/>`).join('')}</triangles></mesh>`;
  const ns = 'xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02" xmlns:p="http://schemas.microsoft.com/3dmanufacturing/production/2015/06"';
  // In inches: a 1" cube stretched to 2 x 1 x 1 by a component, and a mirrored
  // copy moved 3" along X; a print modifier that isn't geometry
  const objects = `<?xml version="1.0"?><model unit="inch" ${ns}><resources><object id="1" type="model">${mesh}</object><object id="2" type="other">${mesh}</object></resources><build/></model>`;
  const root = `<?xml version="1.0"?><model unit="inch" ${ns}><resources>
    <object id="5" type="model"><components><component p:path="/3D/Objects/o.model" objectid="1" transform="2 0 0 0 1 0 0 0 1 0 0 0"/><component p:path="/3D/Objects/o.model" objectid="2"/></components></object>
  </resources><build><item objectid="5"/><item objectid="5" transform="-1 0 0 0 1 0 0 0 1 5 0 0"/></build></model>`;
  const rels = `<?xml version="1.0"?><Relationships><Relationship Target="/3D/3dmodel.model" Id="r" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/></Relationships>`;
  for (const zip64 of [false, true]) {
    const bytes = await zip([['_rels/.rels', rels], ['3D/3dmodel.model', root], ['3D/Objects/o.model', objects, true]], zip64);
    const m = await N.meshFromFile(bytes, 'part.3mf');
    assert.equal(m.solids, 2, `zip64 ${zip64}`);
    // 0..2" and 3..5" along X, 1" deep and tall
    assert.deepEqual(N.meshBounds(m).min.map((v) => +v.toFixed(6)), [0, 0, 0]);
    assert.deepEqual(N.meshBounds(m).size.map((v) => +v.toFixed(6)), [127, 25.4, 25.4]);
    // Both copies outward (the mirrored one turned back): volume adds up
    assert.ok(Math.abs(N.meshVolume(m) - 2 * 2 * 25.4 ** 3) < 1e-3);
  }
});

test('a part scales in X, Y and Z together or each alone', () => {
  const box = { positions: Float64Array.from(boxTris(30, 20, 10).flat(2)), indices: Uint32Array.from({ length: 36 }, (_, i) => i), faces: [], solids: 1, names: [] };
  assert.equal(N.scaleMesh(box, [1, 1, 1]), box);
  const even = N.scaleMesh(box, [2, 2, 2]), flat = N.scaleMesh(box, [1, 1, 0.5]);
  assert.deepEqual(N.meshBounds(even).size, [60, 40, 20]);
  assert.ok(Math.abs(N.meshVolume(even) - 8 * 6000) < 1e-6);
  assert.deepEqual(N.meshBounds(flat).size, [30, 20, 5]);
  assert.ok(Math.abs(N.meshVolume(flat) - 3000) < 1e-6);
  assert.deepEqual(N.meshBounds(box).size, [30, 20, 10]); // the original is untouched
  assert.throws(() => N.scaleMesh(box, [1, 0, 1]));
  // A dome made flatter gets fewer roughing layers
  const dome = domeOnPlinth();
  const layers = (m) => N.plan(N.orient(m, 'top'), BALL, { ...N.defaultJob(N.analyze(N.orient(m, 'top'))), surface3d: true }).ops.find((o) => o.kind === 'rough3d').layers.length;
  assert.ok(layers(N.scaleMesh(dome, [1, 1, 0.5])) < layers(dome));
});

test('shrinking past a hairline needle in an outline leaves no spike', async () => {
  const C = await import('../src/core/clip.js');
  // From a 3D roughing layer of the mask: a needle 4 µm wide at its tip on
  // the right edge. A plain Clipper offset left a point 6 mm into the part.
  const loop = [[-20, 190], [5.372, 190], [5.372, 197.15], [5.372, 197.412], [5.37, 197.414], [5.368, 197.412], [5.352, 197.346], [5.352, 197.345], [5.6, 198.999], [5.352, 205], [-20, 205]];
  const out = C.offset([loop], -6.37);
  assert.ok(out.length);
  const xs = out.flat().map((q) => q[0]);
  assert.ok(Math.max(...xs) < 5.352 - 6.37 + 0.3, `furthest point at x ${Math.max(...xs)}`);
});

test('a V-bit\'s angle comes from taper_angle (half of it), else its name', () => {
  const t = N.normalizeTools([
    { id: 1, name: 'V', type: 'v-bit', diameter: 6.35, dimensions: { taper_angle: 30 } },
    { id: 2, name: 'SpeTool 90 Deg V Bit', type: 'v-bit', diameter: 6.35 },
    { id: 3, name: 'Whiteside 60 degree Vee', type: 'v-bit', diameter: 6.35 },
    { id: 4, name: 'Engraver', type: 'v-bit', diameter: 3 },
    { id: 5, name: 'End mill', type: 'flat', diameter: 6 },
  ]);
  assert.deepEqual(t.map((x) => x.angle), [60, 90, 60, 90, undefined]);
});

// Chamfer cells: how deep the cut goes below the part's top, against what a
// chamfer `w` wide allows at that distance from the edge.
function chamferCheck(mesh, p, w) {
  const op = p.ops.find((o) => o.kind === 'chamfer');
  const tan = Math.tan((op.tool.angle * Math.PI) / 360);
  const { hm, collisions } = N.simulate(p, 0.1);
  const ph = N.partHeights(mesh, hm);
  const low = (i) => Math.min(ph[i], ...[i - 1, i + 1, i - hm.nx, i + hm.nx, i - hm.nx - 1, i - hm.nx + 1, i + hm.nx - 1, i + hm.nx + 1].filter((k) => k >= 0 && k < ph.length).map((k) => ph[k]));
  const edge = (i) => {
    const x = i % hm.nx, y = Math.floor(i / hm.nx);
    let best = 99;
    for (let d = 1; d < 60 && d * hm.cell < best; d++) for (let dy = -d; dy <= d; dy++) for (let dx = -d; dx <= d; dx++) {
      if (Math.max(Math.abs(dx), Math.abs(dy)) !== d) continue;
      const k = (y + dy) * hm.nx + x + dx;
      if (k >= 0 && k < ph.length && ph[k] < ph[i] - 0.5) best = Math.min(best, Math.hypot(dx, dy) * hm.cell);
    }
    return best - hm.cell / 2;
  };
  let over = 0, deepest = 0;
  for (let i = 0; i < ph.length; i++) {
    if (ph[i] === -Infinity || low(i) === -Infinity) continue;
    const d = Math.min(ph[i], low(i)) - hm.h[i];
    if (d <= 0.05) continue;
    deepest = Math.max(deepest, d);
    if (d > Math.max(0, w - edge(i) + 0.15) / tan + 0.1) over++;
  }
  return { collisions: collisions.length, over, deepest, op };
}

const VLIB = N.normalizeTools([...LIBRARY, { id: 9, toolId: 9, name: '90 Deg V-bit', type: 'v-bit', diameter: 6.35, dimensions: { taper_angle: 45, flute_length: 3.175 } }]);

test('chamfer the edges: a 90° V-bit after the cut-out, 1 mm on every top edge', async () => {
  const { mesh, p } = await make('stepped.step', (j) => ({ ...j, chamfer: { size: 1, edges: 'all' } }), VLIB);
  const ops = p.ops.map((o) => o.kind);
  assert.equal(ops.at(-1), 'chamfer');
  assert.ok(ops.indexOf('cutout') < ops.indexOf('chamfer'));
  const r = chamferCheck(mesh, p, 1);
  assert.equal(r.op.tool.name, '90 Deg V-bit');
  assert.equal(r.collisions, 0);
  assert.equal(r.over, 0);
  assert.ok(r.deepest > 0.8 && r.deepest < 1.1, `deepest ${r.deepest}`);
  // Off by default
  const { p: off } = await make('stepped.step', (j) => j, VLIB);
  assert.ok(!off.ops.some((o) => o.kind === 'chamfer'));
});

test('chamfer only the outside, or only pockets and holes', async () => {
  const levels = async (edges) => (await make('stepped.step', (j) => ({ ...j, chamfer: { size: 1, edges } }), VLIB)).p.ops.find((o) => o.kind === 'chamfer').levels.reduce((n, l) => n + l.loops.length, 0);
  const [all, outside, inside] = [await levels('all'), await levels('outside'), await levels('inside')];
  assert.ok(outside > 0 && inside > 0);
  assert.equal(outside + inside, all);
});

test('a chamfer that would reach the tabs lifts over them and says so', async () => {
  // 2 mm with a 60° bit goes 3.9 mm down a 5 mm plate: the tabs are 2 mm high
  const { mesh, p } = await make('plate.step', (j) => ({ ...j, chamfer: { size: 2, edges: 'all' } }));
  assert.ok(p.warnings.some((w) => w.kind === 'chamfer' && /lifts over the tabs/.test(w.text)));
  assert.ok(!p.warnings.some((w) => w.kind === 'chamfer' && /too low/.test(w.text)));
  const r = chamferCheck(mesh, p, 2);
  assert.equal(r.op.tool.angle, 60);
  assert.equal(r.collisions, 0);
  assert.equal(r.over, 0);
  // The outside edge is cut, in stretches between the tabs
  assert.ok(r.op.levels.some((l) => l.loops.length > 1), 'outside loop kept');
  // Each tab keeps its full height: no V-bit cut below the tab's top over it
  const { hm } = N.simulate(p, 0.2);
  const cut = p.ops.find((o) => o.kind === 'cutout');
  const tabTop = p.job.tabs.height ?? 2;
  const spots = N.tabSpots(cut.region, cut.tool.diameter / 2, p.job);
  assert.equal(spots.length, p.job.tabs.count);
  // The plate's stock is its own size: look at the tab where it joins the
  // part, just inside the stock's edge
  const cx = hm.x0 + (hm.nx * hm.cell) / 2, cy = hm.y0 + (hm.ny * hm.cell) / 2;
  for (let [x, y] of spots) {
    const d = Math.hypot(cx - x, cy - y), ux = (cx - x) / d, uy = (cy - y) / d;
    while (x < hm.x0 + 0.3 || y < hm.y0 + 0.3 || x > hm.x0 + hm.nx * hm.cell - 0.3 || y > hm.y0 + hm.ny * hm.cell - 0.3) { x += ux * 0.1; y += uy * 0.1; }
    const i = Math.floor((y - hm.y0) / hm.cell) * hm.nx + Math.floor((x - hm.x0) / hm.cell);
    assert.ok(Math.abs(hm.h[i] - tabTop) < 0.05, `tab at ${x.toFixed(1)},${y.toFixed(1)}: ${hm.h[i]}`);
  }
});

test('no V-bit: chamfering says so and adds nothing', async () => {
  const { p } = await make('stepped.step', (j) => ({ ...j, chamfer: { size: 1 } }), tools.filter((t) => t.kind !== 'vbit'));
  assert.ok(!p.ops.some((o) => o.kind === 'chamfer'));
  assert.ok(p.warnings.some((w) => w.kind === 'chamfer' && /needs a V-bit/.test(w.text)));
});

test('resizing goes along the axes of the part as it sits, and stays with it when turned', async () => {
  const { createEngine } = await import('../src/engine.js');
  const engine = createEngine();
  const call = (type, args = {}) => engine({ type, ...args });
  const tris = boxTris(10, 20, 30);
  const txt = `solid box\n${tris.map((t) => `facet normal 0 0 0\nouter loop\n${t.map((p) => `vertex ${p.join(' ')}`).join('\n')}\nendloop\nendfacet`).join('\n')}\nendsolid box\n`;
  await call('load', { bytes: new TextEncoder().encode(txt), name: 'box.stl' });
  const size = (r) => r.analysis.size.map((v) => Math.round(v * 1000) / 1000);
  // Front face up: the file's Y (20) is the height
  let r = await call('orient', { up: 'front' });
  assert.equal(size(r)[2], 20);
  // Half the height, as it sits
  r = await call('rescale', { by: [1, 1, 0.5] });
  assert.equal(size(r)[2], 10);
  assert.deepEqual([size(r)[0], size(r)[1]].sort((a, b) => a - b), [10, 30]);
  // Turned to the top, the part keeps that shape: 10 x 10 x 30
  r = await call('orient', { up: 'top' });
  assert.deepEqual(size(r), [10, 10, 30]);
  // A saved size and turn come back the same
  const again = createEngine();
  await again({ type: 'load', bytes: new TextEncoder().encode(txt), name: 'box.stl', scale: r.scale });
  assert.deepEqual(size(await again({ type: 'orient', up: { rot: r.rot } })), [10, 10, 30]);
  // Back to the file's size; older saves ([x, y, z] in the file's axes) still read
  r = await call('rescale', { scale: [1, 1, 1] });
  assert.deepEqual(size(r), [10, 20, 30]);
  await again({ type: 'load', bytes: new TextEncoder().encode(txt), name: 'box.stl', scale: [2, 1, 1] });
  assert.deepEqual(size(await again({ type: 'orient', up: 'top' })), [20, 20, 30]);
});

// How much of the part's top is left uncut or cut into, on a 0.1 mm grid
function leftAndGouged(mesh, p) {
  const { hm, collisions } = N.simulate(p, 0.1);
  const ph = N.partHeights(mesh, hm);
  const low = (i) => Math.min(ph[i], ...[i - 1, i + 1, i - hm.nx, i + hm.nx, i - hm.nx - 1, i - hm.nx + 1, i + hm.nx - 1, i + hm.nx + 1].filter((k) => k >= 0 && k < ph.length).map((k) => ph[k]));
  let left = 0, gouged = 0;
  for (let i = 0; i < ph.length; i++) {
    if (ph[i] === -Infinity || low(i) === -Infinity) continue;
    left = Math.max(left, hm.h[i] - ph[i]);
    gouged = Math.max(gouged, Math.min(ph[i], low(i)) - hm.h[i]);
  }
  return { left, gouged, collisions: collisions.length };
}

test('chamfers drawn in the model are found and cut with a V-bit of their angle', async () => {
  for (const [file, count, width] of [['chamfered.step', 1, 2], ['onshape-plate.step', 6, 1]]) {
    const bands = N.chamferBands(N.orient(await loadStep(file), 'top'));
    assert.equal(bands.length, count, file);
    assert.ok(bands.every((b) => Math.abs(b.angle - 45) < 0.5 && Math.abs(b.w - width) < 0.05), file);
    const { mesh, p } = await make(file, (j) => j, VLIB);
    const op = p.ops.find((o) => o.kind === 'chamfer');
    assert.equal(op.tool.name, '90 Deg V-bit', file);
    assert.equal(p.ops.at(-1), op, file);
    assert.ok(!p.warnings.some((w) => w.kind === 'sloped' || w.kind === 'chamfer'), file);
    const r = leftAndGouged(mesh, p);
    assert.equal(r.collisions, 0, file);
    assert.ok(r.left < 0.05, `${file}: ${r.left} mm left`);
    assert.ok(r.gouged < 0.05, `${file}: ${r.gouged} mm into the part`);
    // Off, the chamfer stays square
    const off = await make(file, (j) => ({ ...j, disabled: { [op.id]: true } }), VLIB);
    assert.ok(leftAndGouged(off.mesh, off.p).left > width * 0.9, file);
  }
  // No chamfers in a part without them
  for (const f of ['bracket.step', 'stepped.step', 'plate.step']) assert.equal(N.chamferBands(N.orient(await loadStep(f), 'top')).length, 0, f);
  // A fillet isn't a chamfer
  assert.equal(N.chamferBands(N.orient(domeOnPlinth(), 'top')).length, 0);
});

test('chamfering the edges skips edges the model already chamfers', async () => {
  const { p } = await make('chamfered.step', (j) => ({ ...j, chamfer: { size: 1 } }), VLIB);
  assert.deepEqual(p.ops.filter((o) => o.kind === 'chamfer').map((o) => o.label), ['Cut the chamfers']);
  assert.ok(p.warnings.some((w) => w.kind === 'chamfer' && /No other edge/.test(w.text)));
});

test('chamfering the edges works on the flat faces of a part cut in 3D', () => {
  const lib = N.normalizeTools([...LIBRARY, { id: 9, toolId: 9, name: 'ball', type: 'ball', diameter: 6.35 }, { id: 10, toolId: 10, name: '90 Deg V-bit', type: 'v-bit', diameter: 6.35, dimensions: { taper_angle: 45 } }]);
  const mesh = N.orient(domeOnPlinth(), 'top');
  const p = N.toolpaths(N.plan(mesh, lib, { ...N.defaultJob(N.analyze(mesh)), surface3d: true, chamfer: { size: 1 } }));
  assert.ok(p.did3d);
  const op = p.ops.find((o) => o.kind === 'chamfer');
  // The plinth's square top edge, all the way round
  assert.ok(op && op.levels.length === 1 && op.levels[0].z === 4);
  assert.ok(op.moves.filter((m) => !m.r && Math.abs(m.z - op.levels[0].z + op.levels[0].depth) < 1e-6).length >= 4);
  const r = chamferCheck(mesh, p, 1);
  assert.equal(r.collisions, 0);
  assert.equal(r.over, 0);
});

test('3D rapids don\'t cross a wall thinner than the cleared-height grid', () => {
  // Four fins 0.5 mm thick and 12 mm tall, 3.5 mm apart: the cells either
  // side of a fin are cleared deep, the fin is between their centres
  const pos = [], idx = [];
  const box = (x0, y0, z0, x1, y1, z1) => {
    const b = pos.length / 3;
    for (let i = 0; i < 8; i++) pos.push(i & 1 ? x1 : x0, i & 2 ? y1 : y0, i & 4 ? z1 : z0);
    for (const t of [[0, 2, 1], [1, 2, 3], [4, 5, 6], [5, 7, 6], [0, 1, 4], [1, 5, 4], [2, 6, 3], [3, 6, 7], [0, 4, 2], [2, 4, 6], [1, 3, 5], [3, 7, 5]]) idx.push(...t.map((k) => b + k));
  };
  box(0, 0, 0, 40, 30, 2);
  for (let k = 0; k < 4; k++) box(10.2 + k * 4, 5, 2, 10.7 + k * 4, 25, 14);
  const lib = N.normalizeTools([
    { id: 1, toolId: 1, name: '1/4" Flat End Mill', type: 'flat', diameter: 6.35, dimensions: { flute_length: 25 } },
    { id: 3, toolId: 3, name: '1/8" Flat End Mill', type: 'flat', diameter: 3.175, dimensions: { flute_length: 20 } },
    { id: 4, toolId: 4, name: '1/4" Ball End Mill', type: 'ball', diameter: 6.35, dimensions: { flute_length: 25 } },
  ]);
  const mesh = N.orient({ positions: Float64Array.from(pos), indices: Uint32Array.from(idx), faces: [], solids: 1, names: [] }, 'top');
  const p = N.toolpaths(N.plan(mesh, lib, { ...N.defaultJob(N.analyze(mesh)), surface3d: true }));
  assert.ok(p.ops.some((o) => o.kind === 'rest3d'));
  assert.equal(N.simulate(p, 0.05).collisions.length, 0);
});

test('chamfers on the top edge stand on stock left unfaced', async () => {
  const { p } = await make('stepped.step', (j) => ({ ...j, stock: { ...j.stock, extraTop: 3 }, disabled: { face: true }, chamfer: { size: 1 } }), VLIB);
  assert.ok(p.ops.some((o) => o.kind === 'chamfer'));
  assert.equal(N.simulate(p, 0.1).collisions.length, 0);
  // The top edge's pass goes down from the stock's top, not the model's
  const op = p.ops.find((o) => o.kind === 'chamfer');
  const deepest = Math.min(...op.moves.filter((m) => !m.r).map((m) => m.z));
  assert.ok(op.moves.some((m) => !m.r && Math.abs(m.z - (p.stock.top - op.levels[0].depth)) < 1e-6), `deepest ${deepest}`);
});

test('3D roughing layers follow the finishing ball the user picks', () => {
  const lib = N.normalizeTools([...LIBRARY, { id: 9, toolId: 9, name: '1/4 ball', type: 'ball', diameter: 6.35 }, { id: 10, toolId: 10, name: '1/8 ball', type: 'ball', diameter: 3.175 }]);
  const mesh = N.orient(domeOnPlinth(), 'top');
  const job = { ...N.defaultJob(N.analyze(mesh)), surface3d: true };
  for (const over of [{}, { finish3d: 10 }]) {
    const p = N.plan(mesh, lib, { ...job, toolOverride: over });
    const f = p.ops.find((o) => o.kind === 'finish3d');
    assert.equal(f.tool.name, over.finish3d ? '1/8 ball' : '1/4 ball');
    const gap = Math.max(...p.ops.find((o) => o.kind === 'rough3d').layers.map((l) => l.zFrom - l.z));
    assert.ok(gap <= f.feeds.stepdown + 1e-6, `${f.tool.name}: layers ${gap} apart, step-down ${f.feeds.stepdown}`);
  }
});

test('a drill a little smaller than a hole drills it: a pilot before an end mill, or alone, a note saying how much under', async () => {
  // bracket.step's two Ø10 holes: a 9.8 mm drill is 0.2 mm under
  const drill98 = { id: 20, toolId: 20, name: '9.8 mm drill', type: 'drill', diameter: 9.8, dimensions: { flute_length: 30 } };
  const { p } = await make('bracket.step', (j) => j, N.normalizeTools([...LIBRARY, drill98]));
  const pilot = p.ops.find((o) => o.kind === 'drill' && o.pilot);
  const hole = p.ops.find((o) => o.kind === 'hole');
  assert.ok(pilot && hole && hole.after === pilot.id);
  assert.ok(p.ops.indexOf(pilot) < p.ops.indexOf(hole));
  // No end mill small enough: the drill alone
  const only = N.normalizeTools([drill98, ...LIBRARY.filter((t) => t.type !== 'flat'), { id: 21, toolId: 21, name: '1/2" end mill', type: 'flat', diameter: 12.7, dimensions: { flute_length: 30 } }]);
  const { p: q } = await make('bracket.step', (j) => j, only);
  const d = q.ops.find((o) => o.kind === 'drill');
  assert.ok(d && !d.pilot && /under size/.test(d.detail));
  assert.ok(q.warnings.some((w) => w.kind === 'drill' && /0\.2 mm under size/.test(w.text)));
  // Too far under (more than 0.25 mm or 6%): not a drill for this hole
  const { p: r } = await make('bracket.step', (j) => j, N.normalizeTools([...only.filter((t) => t.id !== 20), { ...drill98, id: 22, diameter: 9.3 }]));
  assert.ok(!r.ops.some((o) => o.kind === 'drill'));
});

test('a hole too tight to spiral: a pilot drill, then an end mill no wider than it rounds it to size', async () => {
  // bracket.step's Ø10 holes, a 9.8 mm drill and a 9.8 mm end mill (too big to spiral down)
  const lib = N.normalizeTools([
    { id: 20, toolId: 20, name: '9.8 mm drill', type: 'drill', diameter: 9.8, dimensions: { flute_length: 30 } },
    { id: 21, toolId: 21, name: '9.8 mm end mill', type: 'flat', diameter: 9.8, dimensions: { flute_length: 30 } },
    { id: 22, toolId: 22, name: '1/2" end mill', type: 'flat', diameter: 12.7, dimensions: { flute_length: 30 } },
  ]);
  const { mesh, p } = await make('bracket.step', (j) => j, lib);
  const pilot = p.ops.find((o) => o.kind === 'drill' && o.pilot);
  const bore = p.ops.find((o) => o.kind === 'hole' && o.bore);
  assert.ok(pilot && bore && bore.after === pilot.id && bore.tool.name === '9.8 mm end mill');
  assert.ok(p.ops.indexOf(pilot) < p.ops.indexOf(bore));
  assert.equal(N.simulate(p, 0.1).collisions.length, 0);
  // The hole comes out Ø10: cut to the bottom out to 5 mm from its middle, not past
  const { hm } = N.simulate(p, 0.05);
  const c = bore.centers[0];
  let rmax = 0;
  for (let i = 0; i < hm.h.length; i++) {
    const x = hm.x0 + (i % hm.nx) * hm.cell, y = hm.y0 + Math.floor(i / hm.nx) * hm.cell, r = Math.hypot(x - c.x, y - c.y);
    if (r < 7 && hm.h[i] < 1) rmax = Math.max(rmax, r);
  }
  assert.ok(rmax > 4.9 && rmax < 5.08, `cut out to r ${rmax}`);
});

// A W x W x H block with a through hole threaded inside: minor diameter
// dMin, thread depth t, pitch P (hand: 1 right, -1 left)
function threadedBlock({ W = 20, H = 8, dMin = 6.65, t = 0.68, P = 1.25, hand = 1, n = 120 } = {}) {
  const pos = [], idx = [], c = W / 2;
  const v = (x, y, z) => (pos.push(x, y, z), pos.length / 3 - 1);
  const r = (a, z) => {
    const u = (((z - (hand * P * a) / (2 * Math.PI)) / P) % 1 + 1) % 1;
    return dMin / 2 + t * Math.min(1, Math.max(0, (0.5 - Math.abs(u - 0.5)) * 2.4));
  };
  const m = Math.round(H / 0.05), wall = [];
  for (let j = 0; j <= m; j++) {
    const z = (H * j) / m;
    wall.push(Array.from({ length: n }, (_, i) => { const a = (2 * Math.PI * i) / n, rr = r(a, z); return v(c + rr * Math.cos(a), c + rr * Math.sin(a), z); }));
  }
  for (let j = 0; j < m; j++) for (let i = 0; i < n; i++) {
    const i1 = (i + 1) % n, v00 = wall[j][i], v10 = wall[j][i1], v01 = wall[j + 1][i], v11 = wall[j + 1][i1];
    idx.push(v00, v01, v10, v10, v01, v11); // facing the hole's axis
  }
  const sq = Array.from({ length: n }, (_, i) => { const a = (2 * Math.PI * i) / n, s = c / Math.max(Math.abs(Math.cos(a)), Math.abs(Math.sin(a))); return [c + s * Math.cos(a), c + s * Math.sin(a)]; });
  const top = sq.map(([x, y]) => v(x, y, H)), bot = sq.map(([x, y]) => v(x, y, 0));
  for (let i = 0; i < n; i++) {
    const i1 = (i + 1) % n;
    idx.push(wall[m][i], top[i], top[i1], wall[m][i], top[i1], wall[m][i1]); // top
    idx.push(wall[0][i], bot[i1], bot[i], wall[0][i], wall[0][i1], bot[i1]); // bottom
    idx.push(bot[i], bot[i1], top[i], bot[i1], top[i1], top[i]); // outside
  }
  return { positions: Float64Array.from(pos), indices: Uint32Array.from(idx), faces: [], solids: 1, names: [] };
}

test('a thread modeled in a hole is found: size, pitch, hand', () => {
  for (const [hand, name] of [[1, 'M8×1.25'], [-1, 'M8×1.25 LH']]) {
    const mesh = N.orient(threadedBlock({ hand }), 'top');
    const th = N.findThread(mesh, { x: 10, y: 10, d: 6.65 }, 0, 8);
    assert.ok(th, name);
    assert.equal(N.threadName(th), name);
    assert.ok(Math.abs(th.pitch - 1.25) < 0.01 && Math.abs(th.major - 8.01) < 0.05 && Math.abs(th.minor - 6.65) < 0.05, JSON.stringify(th));
  }
  // A plain hole has none
  assert.equal(N.findThread(N.orient(threadedBlock({ t: 0 }), 'top'), { x: 10, y: 10, d: 6.65 }, 0, 8), null);
});

test('a modeled thread is milled after its hole, on the helix, with a thread mill that fits', () => {
  const mill = { id: 30, toolId: 30, name: 'thread mill', type: 'thread-mill', diameter: 6, metadata: { sku: 'NFC-D5.0×P1.0-1.5', reach: 15 }, dimensions: { flute_length: 1 } };
  const lib = N.normalizeTools([...LIBRARY, mill]);
  const mesh = N.orient(threadedBlock(), 'top');
  const p = N.toolpaths(N.plan(mesh, lib, { ...N.defaultJob(N.analyze(mesh)), material: 'aluminum' }));
  const t = p.ops.find((o) => o.kind === 'thread');
  assert.ok(t && t.tool.name === 'thread mill' && /M8×1\.25/.test(t.detail));
  const hole = p.ops.find((o) => o.id === t.after);
  assert.ok(hole && p.ops.indexOf(hole) < p.ops.indexOf(t));
  assert.ok(!p.warnings.some((w) => w.kind === 'sloped' || w.kind === 'edges'));
  // The cutter's centre: never further out than (major - cutter) / 2, the
  // helix rising one pitch a turn, counter-clockwise (right-hand, climb)
  const R = (t.thread.major - 5) / 2, c = t.centers[0];
  const ring = t.moves.filter((m) => !m.r && Math.abs(Math.hypot(m.x - c.x, m.y - c.y) - R) < 1e-6);
  assert.ok(ring.length > 100);
  assert.ok(t.moves.every((m) => m.r || Math.hypot(m.x - c.x, m.y - c.y) <= R + 1e-6));
  const a0 = Math.atan2(ring[10].y - c.y, ring[10].x - c.x), a1 = Math.atan2(ring[11].y - c.y, ring[11].x - c.x);
  let da = a1 - a0; if (da < -Math.PI) da += 2 * Math.PI; if (da > Math.PI) da -= 2 * Math.PI;
  assert.ok(da > 0, 'counter-clockwise');
  assert.ok(Math.abs((ring[11].z - ring[10].z) - (1.25 * da) / (2 * Math.PI)) < 1e-6, 'one pitch a turn');
  assert.equal(N.simulate(p, 0.1).collisions.length, 0);
  // No thread mill: the hole at the minor diameter, and a note
  const { ops, warnings } = N.plan(mesh, N.normalizeTools(LIBRARY), N.defaultJob(N.analyze(mesh)));
  assert.ok(!ops.some((o) => o.kind === 'thread'));
  assert.ok(warnings.some((w) => w.kind === 'thread' && /no thread mill/.test(w.text)));
});

test('thread milling is safe whatever cuts the hole and whatever the user picks', () => {
  const mesh = N.orient(threadedBlock(), 'top'); // M8×1.25 through, minor 6.65
  const job = { ...N.defaultJob(N.analyze(mesh)), material: 'aluminum' };
  const mill = (id, cut, extra = {}) => ({ id, toolId: id, name: `mill ${cut}`, type: 'thread-mill', diameter: 6, metadata: { sku: `D${cut}×P1.0-1.5`, reach: 15, ...extra }, dimensions: { flute_length: 1 } });
  const facing = LIBRARY.filter((t) => t.type === 'surfacing');
  const half = { id: 40, toolId: 40, name: '1/2" end mill', type: 'flat', diameter: 12.7, dimensions: { flute_length: 30 } };
  const plan = (lib, j = job) => N.plan(mesh, N.normalizeTools(lib), j);
  // A drill the hole's size, nothing else: threads start above the drill's point
  const drill = { id: 41, toolId: 41, name: '6.65 drill', type: 'drill', diameter: 6.65, dimensions: { flute_length: 30 } };
  let p = plan([...facing, half, drill, mill(30, 5)]);
  let t = p.ops.find((o) => o.kind === 'thread');
  const cone = 6.65 / 2 / Math.tan((59 * Math.PI) / 180);
  assert.ok(t && t.thread.zLow >= -job.throughDepth + cone, `zLow ${t?.thread.zLow}`);
  // A drill under the hole's size and a mill too wide for it: no thread op
  p = plan([...facing, half, { ...drill, diameter: 6.45 }, mill(30, 6.5, { neck_diameter: 4 })]);
  assert.ok(!p.ops.some((o) => o.kind === 'thread'));
  // A picked mill too wide: not used, a note
  const good = mill(30, 5), wide = mill(31, 6.9);
  const base = plan([...LIBRARY, good, wide]);
  const id = base.ops.find((o) => o.kind === 'thread').id;
  p = plan([...LIBRARY, good, wide], { ...job, toolOverride: { [id]: 31 } });
  assert.equal(p.ops.find((o) => o.kind === 'thread').tool.id, 30);
  assert.ok(p.warnings.some((w) => w.kind === 'thread' && /doesn't fit/.test(w.text)));
  // A neck that would rub the crests: not a fit
  p = plan([...LIBRARY, mill(30, 5, { neck_diameter: 4.6 })]);
  assert.ok(!p.ops.some((o) => o.kind === 'thread'));
  // The hole switched off: the thread too
  const hole = base.ops.find((o) => o.id === base.ops.find((x) => x.kind === 'thread').after);
  p = plan([...LIBRARY, good, wide], { ...job, disabled: { [hole.id]: true } });
  assert.equal(p.ops.find((o) => o.kind === 'thread').enabled, false);
});

test('a bore is off when its pilot is', async () => {
  const lib = N.normalizeTools([
    { id: 20, toolId: 20, name: '9.8 mm drill', type: 'drill', diameter: 9.8, dimensions: { flute_length: 30 } },
    { id: 21, toolId: 21, name: '9.8 mm end mill', type: 'flat', diameter: 9.8, dimensions: { flute_length: 30 } },
    { id: 22, toolId: 22, name: '1/2" end mill', type: 'flat', diameter: 12.7, dimensions: { flute_length: 30 } },
  ]);
  const mesh = N.orient(await loadStep('bracket.step'), 'top');
  const job = N.defaultJob(N.analyze(mesh));
  const pilot = N.plan(mesh, lib, job).ops.find((o) => o.pilot);
  const p = N.plan(mesh, lib, { ...job, disabled: { [pilot.id]: true } });
  assert.equal(p.ops.find((o) => o.bore).enabled, false);
});

test('the dialog page is whole: no merge leftovers, one build stamp', async () => {
  const { readFileSync } = await import('node:fs');
  const html = readFileSync(new URL('../config.html', import.meta.url), 'utf8');
  assert.ok(!/^(<<<<<<<|=======|>>>>>>>)/m.test(html), 'conflict markers in config.html');
  assert.equal((html.match(/var BUILD = '/g) || []).length, 1);
  const lib = readFileSync(new URL('../lib/nccam.js', import.meta.url), 'utf8');
  assert.ok(!/^(<<<<<<<|>>>>>>>)/m.test(lib), 'conflict markers in lib/nccam.js');
});
