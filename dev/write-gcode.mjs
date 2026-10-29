import { writeFileSync } from 'node:fs';
import { loadStep, LIBRARY } from '../tests/helpers.js';
import * as N from '../src/core/index.js';
const f = process.argv[2];
const m = N.orient(await loadStep(f), 'top');
const p = N.toolpaths(N.plan(m, N.normalizeTools(LIBRARY), N.defaultJob(N.analyze(m))));
writeFileSync(process.argv[3], N.gcode(p, { name: f, safeZHeightMm: -5 }));
