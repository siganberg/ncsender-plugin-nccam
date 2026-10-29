// The heavy work, run in a Web Worker (or in the page if workers are
// blocked): reading the STEP file, planning and making the toolpaths.
// Messages: { id, type, ...args } -> { id, ok, result | error }.
import occtFactory from 'occt-import-js';
import * as N from './core/index.js';

const STEP_OPTIONS = { linearUnit: 'millimeter', linearDeflectionType: 'absolute_value', linearDeflection: 0.01, angularDeflection: 0.05 };

export function createEngine() {
  let occt = null, raw = null, part = null, wasm = null;

  const handlers = {
    async init({ wasmBinary }) { wasm = wasmBinary; return true; },

    async load({ bytes }) {
      occt ||= await occtFactory({ wasmBinary: wasm });
      const r = occt.ReadStepFile(new Uint8Array(bytes), STEP_OPTIONS);
      if (!r.success || !r.meshes?.length) throw new Error('This file has no solid ncCAM can read. Export it again as STEP (AP214 or AP242).');
      raw = N.meshFromOcct(r);
      return { solids: raw.solids, size: N.meshBounds(raw).size, ...N.sides(raw) };
    },

    // up: a side name or a direction (from a clicked face)
    async orient({ up }) {
      part = N.orient(raw, up);
      const analysis = N.analyze(part);
      return { positions: Float32Array.from(part.positions), indices: part.indices.slice(), faces: part.faces, analysis };
    },

    // A clicked face of the part as it is now goes on top
    async tilt({ normal }) {
      part = N.orient(part, normal);
      const analysis = N.analyze(part);
      return { positions: Float32Array.from(part.positions), indices: part.indices.slice(), faces: part.faces, analysis };
    },

    async plan({ tools, job, limits, paths, gcodeOptions, timing }) {
      const p = N.plan(part, tools, job, limits);
      if (paths) N.toolpaths(p);
      const seconds = paths ? N.runTime(p, timing) : 0;
      const gcode = paths ? N.gcode(p, gcodeOptions) : '';
      // Moves go back packed: x, y, z, feed (0 for a rapid)
      for (const op of p.ops) {
        if (!op.moves) continue;
        const t = new Float32Array(op.moves.length * 4);
        op.moves.forEach((m, i) => { t[i * 4] = m.x; t[i * 4 + 1] = m.y; t[i * 4 + 2] = m.z; t[i * 4 + 3] = m.r ? 0 : m.f; });
        op.track = t;
        delete op.moves;
      }
      return { plan: p, gcode, seconds };
    },
  };

  return async function handle(msg) {
    const fn = handlers[msg.type];
    if (!fn) throw new Error(`unknown request ${msg.type}`);
    return fn(msg);
  };
}
