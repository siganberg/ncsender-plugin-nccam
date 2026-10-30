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
