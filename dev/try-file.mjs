import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import * as N from '../src/core/index.js';
import { LIBRARY } from '../tests/helpers.js';
const require = createRequire(import.meta.url);
const occt = await require('occt-import-js')();
const r = occt.ReadStepFile(new Uint8Array(readFileSync(process.argv[2])), { linearUnit: 'millimeter', linearDeflectionType: 'absolute_value', linearDeflection: 0.01, angularDeflection: 0.05 });
const raw = N.meshFromOcct(r);
const { sides, best } = N.sides(raw);
console.log('best', best, Object.fromEntries(Object.entries(sides).map(([k, v]) => [k, v.reachable])));
for (const up of ['top', 'bottom']) {
  const m = N.orient(raw, up);
  const a = N.analyze(m);
  const p = N.toolpaths(N.plan(m, N.normalizeTools(LIBRARY), N.defaultJob(a)));
  const { hm, collisions } = N.simulate(p, 0.2);
  const ph = N.partHeights(m, hm);
  let g = 0;
  for (let i = 0; i < ph.length; i++) { if (ph[i] === -Infinity) continue; const nb = [i - 1, i + 1, i - hm.nx, i + hm.nx]; if (nb.some((k) => k < 0 || k >= ph.length || Math.abs(ph[k] - ph[i]) > 0.01)) continue; if (ph[i] - hm.h[i] > 0.02) g++; }
  console.log(up, 'missed', (a.missed * 100).toFixed(2) + '%', 'undercut', a.undercut, 'edges', a.squareEdges, 'ops', p.ops.map((o) => o.kind).join(','), 'gouges', g, 'collisions', collisions.length, p.warnings.map((w) => w.kind));
}
