// Tool Library entries as ncCAM uses them, and speeds and feeds per material.

export const MATERIALS = {
  softwood: { name: 'Softwood', note: 'Pine, cedar', rpm: 18000, chip: 0.012, maxChip: 0.25, stepdown: 0.5, stepover: 0.45, ramp: 5 },
  hardwood: { name: 'Hardwood', note: 'Oak, maple, walnut', rpm: 18000, chip: 0.009, maxChip: 0.2, stepdown: 0.35, stepover: 0.4, ramp: 4 },
  mdf: { name: 'MDF / Plywood', note: 'Sheet goods', rpm: 18000, chip: 0.012, maxChip: 0.25, stepdown: 0.5, stepover: 0.45, ramp: 5 },
  plastic: { name: 'Plastic', note: 'Acrylic, HDPE', rpm: 16000, chip: 0.01, maxChip: 0.2, stepdown: 0.3, stepover: 0.4, ramp: 3 },
  aluminum: { name: 'Aluminum', note: '6061', rpm: 18000, chip: 0.003, maxChip: 0.05, stepdown: 0.1, stepover: 0.25, ramp: 2 },
  foam: { name: 'Foam', note: 'Tooling board', rpm: 12000, chip: 0.02, maxChip: 0.4, stepdown: 1, stepover: 0.6, ramp: 10 },
};

// Fast cuts harder and skips the finishing pass; Smooth takes lighter steps.
export const FINISHES = {
  fast: { name: 'Fast', feed: 1.15, stepdown: 1.2, stepover: 1.1, allowance: 0 },
  balanced: { name: 'Balanced', feed: 1, stepdown: 1, stepover: 1, allowance: 0.2 },
  smooth: { name: 'Smooth', feed: 0.85, stepdown: 0.8, stepover: 0.7, allowance: 0.25 },
};

const ENDMILL_TYPES = new Set(['flat', 'flat end mill', 'endmill', 'end mill', 'flat_end_mill']);

export function toolKind(tool) {
  const t = String(tool.type || '').toLowerCase().replace(/[-_]/g, ' ');
  if (ENDMILL_TYPES.has(t) || t.startsWith('flat')) return 'flat';
  if (t.startsWith('surfac')) return 'surfacing';
  if (t.startsWith('drill')) return 'drill';
  if (t.startsWith('ball')) return 'ball';
  if (t.startsWith('v')) return 'vbit';
  if (t.startsWith('chamfer')) return 'chamfer';
  return t || 'flat';
}

// The T number M6 asks for: Settings -> Tool Changer -> Tool Numbering picks
// the Tool ID or the magazine slot. A tool with no slot is called by its Tool
// ID either way and changed by hand.
export function toolNumber(tool, numbering) {
  if (numbering === 'toolId') return tool.toolId ?? tool.id;
  return tool.toolNumber ?? tool.toolId ?? tool.id;
}

export function normalizeTools(list) {
  return (list || [])
    .filter((t) => t && t.diameter > 0)
    .map((t) => ({
      id: t.id, toolId: t.toolId ?? t.id, toolNumber: t.toolNumber ?? null,
      name: t.name || `${t.diameter} mm ${toolKind(t)}`,
      kind: toolKind(t), diameter: Number(t.diameter),
      fluteLength: Number(t.dimensions?.flute_length) || null,
      flutes: Number(t.metadata?.flutes) || 2,
    }));
}

export function feeds(tool, material, finish, limits = {}) {
  const m = MATERIALS[material] || MATERIALS.mdf;
  const f = FINISHES[finish] || FINISHES.balanced;
  const maxRpm = limits.maxRpm || 24000, minRpm = limits.minRpm || 0;
  const rpm = Math.round(Math.min(maxRpm, Math.max(minRpm, m.rpm)));
  const chip = Math.min(m.maxChip, m.chip * tool.diameter);
  const maxFeed = Math.min(limits.maxFeed || 4000, 4000);
  const feed = Math.round(Math.min(maxFeed, Math.max(150, rpm * tool.flutes * chip * f.feed)));
  return {
    rpm, feed,
    plunge: Math.round(Math.max(60, feed * 0.3)),
    stepdown: Math.max(0.05, tool.diameter * m.stepdown * f.stepdown),
    stepover: Math.max(0.05, tool.diameter * Math.min(0.9, m.stepover * f.stepover)),
    rampAngle: m.ramp,
  };
}
