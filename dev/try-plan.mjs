import { loadStep, LIBRARY } from '../tests/helpers.js';
import { orient } from '../src/core/mesh.js';
import { plan, defaultJob } from '../src/core/plan.js';
import { analyze } from '../src/core/mesh.js';
import { normalizeTools } from '../src/core/tools.js';
for (const f of process.argv.slice(2)) {
  const m = orient(await loadStep(f), 'top');
  const a = analyze(m);
  const t0 = Date.now();
  const p = plan(m, normalizeTools(LIBRARY), defaultJob(a));
  console.log(f, a.size.map(v=>v.toFixed(2)), 'floors', a.floors, 'ms', Date.now()-t0);
  for (const o of p.ops) console.log(' ', o.id, o.kind, o.label, '|', o.detail, '|', o.tool.name, o.zTop, '->', o.zBottom, JSON.stringify(o.feeds));
  for (const w of p.warnings) console.log('  !', w.text);
}
