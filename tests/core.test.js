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

test('a chamfer is reported as not cut in 3D', async () => {
  const { p } = await make('chamfered.step');
  assert.ok(p.warnings.some((w) => w.kind === 'sloped'));
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
