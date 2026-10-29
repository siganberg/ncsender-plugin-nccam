import { loadStep, LIBRARY } from '../tests/helpers.js';
import * as N from '../src/core/index.js';
for (const f of process.argv.slice(2)) {
  const m = N.orient(await loadStep(f), 'top');
  let t = Date.now();
  const p = N.toolpaths(N.plan(m, N.normalizeTools(LIBRARY), N.defaultJob(N.analyze(m))));
  const tPlan = Date.now() - t; t = Date.now();
  const g = N.gcode(p, { name: f });
  const { hm, collisions } = N.simulate(p, 0.2);
  const ph = N.partHeights(m, hm);
  let gouge = 0, worst = 0, left = 0;
  for (let i = 0; i < ph.length; i++) {
    if (ph[i] === -Infinity) continue;
    const ii = i % hm.nx, jj = (i / hm.nx) | 0;
    const nb = [i - 1, i + 1, i - hm.nx, i + hm.nx].filter((k) => k >= 0 && k < ph.length);
    if (ii === 0 || jj === 0 || nb.some((k) => Math.abs(ph[k] - ph[i]) > 0.01)) continue; // on a wall
    const d = ph[i] - hm.h[i];
    if (d > 0.02) { gouge++; worst = Math.max(worst, d); }
    if (hm.h[i] - ph[i] > 0.3) left++;
  }
  console.log(f, 'plan+paths ms', tPlan, 'sim ms', Date.now() - t, 'lines', g.split('\n').length, 'min', (N.runTime(p) / 60).toFixed(1), 'collisions', collisions.length, 'gouge cells', gouge, 'worst', worst.toFixed(3), 'uncut cells', left);
  if (process.env.WHERE) { for (let i = 0, n = 0; i < ph.length && n < 8; i++) { if (ph[i] !== -Infinity && ph[i] - hm.h[i] > 0.02) { n++; console.log('   at', (hm.x0 + (i % hm.nx) * hm.cell).toFixed(2), (hm.y0 + ((i / hm.nx) | 0) * hm.cell).toFixed(2), ph[i], hm.h[i], 'op', p.ops[hm.op[i]-1]?.id); } } }
  for (const o of p.ops) console.log('  ', o.id, o.kind, o.tool.name, o.moves.length, 'moves');
}
