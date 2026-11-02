// A mesh STEP through the 3D plan: timings, ops, gouges against the part.
// node dev/try-3d.mjs <file.stp> [side,side...]
import { readFileSync } from 'node:fs';
import * as N from '../src/core/index.js';
const lib = N.normalizeTools([
  { id: 1, toolId: 1, toolNumber: 1, name: '1/4" Flat End Mill', type: 'flat', diameter: 6.35 },
  { id: 3, toolId: 3, toolNumber: 3, name: '1/8" Flat End Mill', type: 'flat', diameter: 3.175 },
  { id: 4, toolId: 4, toolNumber: 4, name: '1/4" Ball End Mill', type: 'ball', diameter: 6.35 },
  { id: 5, toolId: 5, toolNumber: 5, name: '1" Surfacing bit', type: 'surfacing', diameter: 25.4 },
]);
const raw = N.meshFromFacetedStep(readFileSync(process.argv[2]));
const T = (l, f) => { const t = performance.now(); const r = f(); console.log(l.padEnd(10), String(Math.round(performance.now() - t)).padStart(6), 'ms'); return r; };
for (const up of (process.argv[3] || 'front').split(',')) {
  const m = N.orient(raw, up), a = N.analyze(m);
  console.log('==', up, 'size', a.size.map(Math.round), 'share', a.slopedShare.toFixed(2));
  const p = T('plan', () => N.plan(m, lib, N.defaultJob(a)));
  console.log(p.ops.map((o) => `${o.kind}[${o.tool.name}] ${o.detail}`).join('\n'), '\nwarnings', p.warnings.map((w) => w.kind));
  T('toolpaths', () => N.toolpaths(p));
  console.log('moves', p.ops.map((o) => `${o.kind}:${o.moves.length}`).join(' '));
  const g = T('gcode', () => N.gcode(p, {}));
  console.log('gcode lines', g.split('\n').length, 'run time', Math.round(N.runTime(p) / 60), 'min');
  const { hm, collisions } = T('sim', () => N.simulate(p, 0.25));
  const ph = N.partHeights(m, hm);
  let gouge = 0, worst = 0, left = 0, cells = 0, maxLeft = 0;
  // Below the lowest part height around it: a wall cell is half of either side
  const low = (i) => { let v = ph[i]; for (const k of [i - 1, i + 1, i - hm.nx, i + hm.nx, i - hm.nx - 1, i - hm.nx + 1, i + hm.nx - 1, i + hm.nx + 1]) if (k >= 0 && k < ph.length) v = Math.min(v, ph[k]); return v; };
  for (let i = 0; i < ph.length; i++) {
    if (ph[i] === -Infinity || low(i) === -Infinity) continue;
    const d = Math.min(ph[i], low(i)) - hm.h[i];
    if (d > 0.05) { gouge++; worst = Math.max(worst, d); }
    cells++; left += Math.max(0, hm.h[i] - ph[i]); maxLeft = Math.max(maxLeft, hm.h[i] - ph[i]);
  }
  const by = {};
  for (let i = 0; i < ph.length; i++) if (ph[i] !== -Infinity && low(i) !== -Infinity && low(i) - hm.h[i] > 0.05) { const k = p.ops[hm.op[i] - 1]?.kind; by[k] = (by[k] || 0) + 1; }
  console.log('gouges by op', by, 'collisions by op', collisions.map((c) => p.ops.find((o) => o.id === c.op).kind + '@' + [c.at.x, c.at.y, c.at.z].map((v) => v.toFixed(1)).join(',')).slice(0, 10));
  console.log('collisions', collisions.length, 'gouges>0.05', gouge, 'worst', worst.toFixed(3), 'mean left', (left / cells).toFixed(3), 'max left', maxLeft.toFixed(2));
}
