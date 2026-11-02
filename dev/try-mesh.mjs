// Reads a mesh file (STL, 3MF, or a mesh saved as STEP) and times the steps.
// node dev/try-mesh.mjs <file>
import { readFileSync } from 'node:fs';
import * as N from '../src/core/index.js';
const file = process.argv[2];
const T = async (l, f) => { const t = performance.now(); const r = await f(); console.log(l.padEnd(8), Math.round(performance.now() - t), 'ms', 'heap', Math.round(process.memoryUsage().heapUsed / 1e6), 'MB'); return r; };
const bytes = readFileSync(file);
const m = await T('read', () => (/\.(step|stp)$/i.test(file) ? N.meshFromFacetedStep(bytes) : N.meshFromFile(bytes, file)));
console.log('triangles', m.indices.length / 3, 'solids', m.solids, 'size', N.meshBounds(m).size.map((v) => v.toFixed(2)).join(' x '), 'volume', N.meshVolume(m).toFixed(0));
const s = await T('sides', () => N.sides(m));
console.log('best', s.best);
