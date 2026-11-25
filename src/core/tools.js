// Tool Library entries as ncCAM uses them, and speeds and feeds per material.
import { startingFeeds, MATERIALS as FEED_MATERIALS } from 'ncsender-feeds';

// Speeds and feeds by material come from ncsender-feeds (QuickCut's
// startingFeeds as a library), so every plugin starts from the same numbers.
// Change a material there, not here.
export const MATERIALS = FEED_MATERIALS;

// A material ncCAM no longer lists, as one it does: Plastic split into
// HDPE, Acrylic and Polycarbonate.
const RENAMED = { plastic: 'acrylic' };
export const materialKey = (m) => RENAMED[m] || (MATERIALS[m] ? m : 'mdf');

// Fast cuts harder and skips the finishing pass; Smooth takes lighter steps.
export const FINISHES = {
  fast: { name: 'Fast', feed: 1.15, stepdown: 1.2, stepover: 1.1, allowance: 0 },
  balanced: { name: 'Balanced', feed: 1, stepdown: 1, stepover: 1, allowance: 0.2 },
  smooth: { name: 'Smooth', feed: 0.85, stepdown: 0.8, stepover: 0.7, allowance: 0.25 },
};

const ENDMILL_TYPES = new Set(['flat', 'flat end mill', 'endmill', 'end mill', 'flat_end_mill']);

export function toolKind(tool) {
  const t = String(tool.type || '').toLowerCase().replace(/[-_]/g, ' ');
  // Shaped router bits a library often files as flat (keyhole, roundover,
  // cove, bowl): they cut a profile, not a wall or a floor. Only for flat:
  // a cove or core-box bit filed as ball is a round-nose bit, a bowl bit
  // filed as surfacing flattens slabs
  const shaped = /keyhole|round ?over|\bcove\b|bowl|ogee|dovetail/i.test(tool.name || '');
  if (ENDMILL_TYPES.has(t) || t.startsWith('flat')) return shaped ? 'profile' : 'flat';
  if (!t && shaped) return 'profile';
  if (t.startsWith('surfac')) return 'surfacing';
  if (t.startsWith('drill')) return 'drill';
  if (t.startsWith('ball')) return 'ball';
  if (t.startsWith('v')) return 'vbit';
  if (t.startsWith('chamfer')) return 'chamfer';
  if (t.startsWith('thread')) return 'threadmill';
  return t || 'flat';
}

// The T number M6 asks for: Settings -> Tool Changer -> Tool Numbering picks
// the Tool ID or the magazine slot. `numbering` is 'toolId', 'slot', or what
// makeNumbering returns.
export function toolNumber(tool, numbering) {
  const mode = typeof numbering === 'string' ? numbering : numbering?.mode;
  if (mode === 'toolId') return tool.toolId ?? tool.id;
  if (tool.toolNumber) return tool.toolNumber;
  return numbering?.manual?.get(tool.id) ?? tool.toolId ?? tool.id;
}

// Slot numbering reads T<n> as slot n, and a number past the magazine as a
// change by hand. A tool in no slot gets a number of its own past the
// magazine: its Tool ID when that is free, else the next free one. Never a
// number inside the magazine, which would load the tool in that slot.
export function makeNumbering(mode, tools, slots = 0, probe = null) {
  if (mode === 'toolId') return { mode };
  const taken = new Set(tools.filter((t) => t.toolNumber).map((t) => t.toolNumber));
  for (let n = 1; n <= slots; n++) taken.add(n);
  if (probe) taken.add(probe);
  const manual = new Map();
  const loose = tools.filter((t) => !t.toolNumber);
  for (const t of loose) {
    const id = t.toolId ?? t.id;
    if (id > slots && !taken.has(id)) { manual.set(t.id, id); taken.add(id); }
  }
  let next = slots + 1;
  for (const t of loose) {
    if (manual.has(t.id)) continue;
    while (taken.has(next)) next++;
    manual.set(t.id, next); taken.add(next);
  }
  return { mode, manual };
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
      ...(/^(vbit|chamfer)$/.test(toolKind(t)) ? { angle: vAngle(t) } : {}),
      ...(toolKind(t) === 'threadmill' ? threadMill(t) : {}),
    }));
}

// A single-form thread mill: its cutting diameter and the pitches it cuts
// (from metadata, else a SKU or name like "D3.15×P0.5-0.8", else the
// tool's diameter and any pitch), how deep it reaches below the shank
// (metadata.reach, else 3 × the cutting diameter: `assumed`), and its neck
// (narrower than the cutter; 0.7 × it unless given).
export function threadMill(t) {
  const md = t.metadata || {}, text = [md.sku, t.name, md.notes].filter(Boolean).join(' ');
  const m = text.match(/D\s*(\d+(?:\.\d+)?)\s*[×xX*]\s*P(?:itch)?\s*(\d+(?:\.\d+)?)\s*-\s*(\d+(?:\.\d+)?)/);
  const cut = Number(md.cut_diameter) || (m ? Number(m[1]) : Number(t.diameter));
  const reach = Number(md.reach) || Number(t.dimensions?.neck_length) || 0;
  return {
    cut, pitchMin: Number(md.pitch_min) || (m ? Number(m[2]) : 0), pitchMax: Number(md.pitch_max) || (m ? Number(m[3]) : Infinity),
    reach: reach || 3 * cut, reachAssumed: !reach, neck: Number(md.neck_diameter) || 0.7 * cut,
  };
}

// A V-bit's included angle. The Tool Library keeps half of it in
// dimensions.taper_angle (the Fusion 360 importer writes 30 for a 60° bit);
// else the name says it ("60 degree", "90 Deg", "60°"); else 90°.
export function vAngle(t) {
  const half = Number(t.dimensions?.taper_angle);
  if (half > 0 && half < 90) return half * 2;
  const m = String(t.name || '').match(/(\d{2,3}(?:\.\d+)?)\s*(?:°|º|deg\b|degrees?\b)/i);
  const a = m ? Number(m[1]) : 0;
  return a > 0 && a < 180 ? a : 90;
}

// The spindle's speed range from the controller's settings (ncSender's
// /api/firmware): $30/$31, or $730/$731 when grblHAL's Default spindle
// ($395) is PWM2. A VFD reads $30/$31 too. A range that can't be a router's
// (a laser's 0-1000 left there, say) is flagged by plan() as a warning.
export function spindleRange(settings = {}) {
  const val = (k) => { const v = parseFloat(settings[k]?.value); return Number.isFinite(v) && v > 0 ? v : undefined; };
  const def = settings['395'];
  const name = def?.format ? String(def.format).split(',').map((x) => x.trim())[parseInt(def.value, 10)] : undefined;
  return name === 'PWM2' ? { maxRpm: val('730'), minRpm: val('731') } : { maxRpm: val('30'), minRpm: val('31') };
}

// Below this, a Spindle max is a laser's or a mistake, not a router's
export const LOW_SPINDLE_MAX = 5000;

// limits: the machine's { maxFeed, maxPlunge, maxRpm, minRpm }. The
// finish then scales the feed, the depth per pass and the stepover; no pass
// goes deeper than the flutes, when the Tool Library gives their length.
export function feeds(tool, material, finish, limits = {}) {
  const key = materialKey(material), m = MATERIALS[key];
  const f = FINISHES[finish] || FINISHES.balanced;
  const fluteMm = tool.fluteLength > 0 ? tool.fluteLength : 0;
  const s = startingFeeds(tool.diameter, tool.flutes, key, limits, 'average', { fluteMm });
  const feed = Math.round(Math.min(s.maxFeedMm, Math.max(150, s.feedMm * f.feed)));
  const stepdown = Math.max(0.05, s.stepMm * f.stepdown);
  return {
    rpm: s.rpm, feed,
    // 30 % of the feed, at most 30 % of the starting feed (1200) as the
    // library does, and within the Z max rate ($112)
    plunge: Math.round(Math.min(limits.maxPlunge || Infinity, Math.min(limits.maxFeed || 4000, 4000) * 0.3, Math.max(60, feed * 0.3))),
    stepdown: fluteMm ? Math.min(stepdown, fluteMm) : stepdown,
    stepover: Math.max(0.05, tool.diameter * Math.min(0.9, m.stepover * f.stepover)),
    rampAngle: m.ramp,
  };
}

// Tabs: how tall they stand off the bed and how long a bridge of material
// they leave, in mm. Aluminum holds with less.
export const tabDefaults = (material) => (material === 'aluminum' ? { height: 1, length: 1 } : { height: 2, length: 2 });
