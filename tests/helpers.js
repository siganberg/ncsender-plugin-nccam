// Loads a fixture STEP file into ncCAM's mesh (node only).
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { meshFromOcct } from '../src/core/mesh.js';
const require = createRequire(import.meta.url);
let occt;
export async function loadStep(name) {
  occt ||= await require('occt-import-js')();
  const bytes = new Uint8Array(readFileSync(new URL(`./fixtures/${name}`, import.meta.url)));
  const r = occt.ReadStepFile(bytes, { linearUnit: 'millimeter', linearDeflectionType: 'absolute_value', linearDeflection: 0.01, angularDeflection: 0.05 });
  if (!r.success) throw new Error('STEP read failed');
  return meshFromOcct(r);
}
export const LIBRARY = [
  { id: 1, toolId: 1, toolNumber: 1, name: '1/4" Flat End Mill', type: 'flat', diameter: 6.35, dimensions: { flute_length: 25 } },
  { id: 3, toolId: 3, toolNumber: null, name: '1/8" Flat End Mill', type: 'flat', diameter: 3.175, dimensions: { flute_length: 12 } },
  { id: 5, toolId: 5, toolNumber: 5, name: '1" Surfacing bit', type: 'surfacing', diameter: 25.4 },
  { id: 7, toolId: 7, toolNumber: 2, name: '60° V-bit', type: 'v-bit', diameter: 12.7 },
];
