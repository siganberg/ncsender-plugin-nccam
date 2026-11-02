// A STEP file that is only a triangle mesh (FACETED_BREP: every face a flat
// POLY_LOOP, as mesh converters and scanners write them) read straight into
// ncCAM's mesh. OCCT reads these too, but makes each triangle its own solid:
// a 20 000-triangle mask took 100 s. Anything else (curved faces, holes in
// faces, assemblies, an unknown unit) returns null and goes to OCCT.

const MESH_ONLY = new Set([
  'CARTESIAN_POINT', 'POLY_LOOP', 'FACE_OUTER_BOUND', 'FACE_SURFACE', 'FACE', 'PLANE', 'AXIS2_PLACEMENT_3D', 'DIRECTION',
  'CLOSED_SHELL', 'OPEN_SHELL', 'FACETED_BREP', 'SHELL_BASED_SURFACE_MODEL',
]);
// Entities that would change the shape if ignored: then OCCT reads it
const NEEDS_OCCT = /^(ADVANCED_FACE|EDGE_LOOP|FACE_BOUND|ORIENTED_FACE|ORIENTED_CLOSED_SHELL|BREP_WITH_VOIDS|MAPPED_ITEM|ITEM_DEFINED_TRANSFORMATION|NEXT_ASSEMBLY_USAGE_OCCURRENCE|MANIFOLD_SOLID_BREP)$/;

const PREFIX = { EXA: 1e21, PETA: 1e18, TERA: 1e15, GIGA: 1e12, MEGA: 1e9, KILO: 1e6, HECTO: 1e5, DECA: 1e4, DECI: 100, CENTI: 10, MILLI: 1, MICRO: 1e-3, NANO: 1e-6 };
const NAMED = { MILLIMETRE: 1, MILLIMETER: 1, MM: 1, CENTIMETRE: 10, CENTIMETER: 10, METRE: 1000, METER: 1000, INCH: 25.4, IN: 25.4, FOOT: 304.8, FT: 304.8 };

const refs = (s) => [...s.matchAll(/#(\d+)/g)].map((m) => +m[1]);

// Millimetres per file unit, or null when the file's length unit is unclear.
function lengthScale(units) {
  const scales = new Set();
  for (const u of units) {
    const conv = u.match(/CONVERSION_BASED_UNIT\s*\(\s*'([^']*)'/);
    if (conv) {
      const s = NAMED[conv[1].trim().toUpperCase()];
      if (!s) return null;
      scales.add(s);
      continue;
    }
    const si = u.match(/SI_UNIT\s*\(\s*(\$|\.(\w+)\.)\s*,\s*\.METRE\.\s*\)/);
    if (!si) return null;
    const s = si[2] ? PREFIX[si[2]] : 1000;
    if (!s) return null;
    scales.add(s);
  }
  return scales.size === 1 ? [...scales][0] : null;
}

// Every `#id = ...;` in the DATA section, split on ';' outside strings.
function* entities(text) {
  const start = text.indexOf('DATA;');
  if (start < 0) return;
  let i = start + 5, from = i, quoted = false;
  for (; i < text.length; i++) {
    const c = text.charCodeAt(i);
    if (c === 39) quoted = !quoted; // ' ('' inside a string flips twice)
    else if (c === 59 && !quoted) { // ;
      const e = text.slice(from, i).trim();
      from = i + 1;
      if (e === 'ENDSEC') return;
      const m = e.match(/^#(\d+)\s*=\s*([\s\S]*)$/);
      if (m) yield [+m[1], m[2]];
    }
  }
}

// A flat polygon turns the same way at every corner (about its normal).
function convex(vs) {
  const n = [0, 0, 0];
  for (let i = 0; i < vs.length; i++) { // Newell's normal
    const a = vs[i], b = vs[(i + 1) % vs.length];
    n[0] += (a[1] - b[1]) * (a[2] + b[2]); n[1] += (a[2] - b[2]) * (a[0] + b[0]); n[2] += (a[0] - b[0]) * (a[1] + b[1]);
  }
  for (let i = 0; i < vs.length; i++) {
    const a = vs[i], b = vs[(i + 1) % vs.length], c = vs[(i + 2) % vs.length];
    const u = [b[0] - a[0], b[1] - a[1], b[2] - a[2]], w = [c[0] - b[0], c[1] - b[1], c[2] - b[2]];
    const turn = (u[1] * w[2] - u[2] * w[1]) * n[0] + (u[2] * w[0] - u[0] * w[2]) * n[1] + (u[0] * w[1] - u[1] * w[0]) * n[2];
    if (turn < -1e-12) return false;
  }
  return true;
}

export function meshFromFacetedStep(bytes) {
  const text = typeof bytes === 'string' ? bytes : new TextDecoder('latin1').decode(bytes);
  // Cheap test first: no POLY_LOOP, not a mesh
  if (!text.startsWith('ISO-10303-21') || !text.includes('POLY_LOOP') || !text.includes('FACETED_BREP')) return null;

  const points = new Map(), loops = new Map(), bounds = new Map(), faces = new Map(), shells = new Map(), breps = [], units = [];
  for (const [id, body] of entities(text)) {
    if (body.startsWith('(')) { // complex entity: units live here
      if (/\bLENGTH_UNIT\s*\(/.test(body)) units.push(body);
      continue;
    }
    const t = body.match(/^([A-Z0-9_]+)\s*\(/);
    if (!t) continue;
    const type = t[1];
    if (NEEDS_OCCT.test(type)) return null;
    if (!MESH_ONLY.has(type)) continue;
    const args = body.slice(t[0].length, body.lastIndexOf(')'));
    if (type === 'CARTESIAN_POINT') {
      const c = args.match(/\(([^()]*)\)\s*$/);
      const v = c ? c[1].split(',').map(Number) : [];
      if (v.length !== 3 || v.some((x) => !Number.isFinite(x))) return null;
      points.set(id, v);
    } else if (type === 'POLY_LOOP') loops.set(id, refs(args.slice(args.indexOf('('))));
    else if (type === 'FACE_OUTER_BOUND') bounds.set(id, { loop: refs(args)[0], reversed: /\.F\.\s*$/.test(args) });
    else if (type === 'FACE_SURFACE' || type === 'FACE') faces.set(id, refs(args.slice(args.indexOf('('), args.indexOf(')') + 1)));
    else if (type === 'CLOSED_SHELL' || type === 'OPEN_SHELL') shells.set(id, refs(args));
    else if (type === 'FACETED_BREP') breps.push(refs(args)[0]);
  }
  const scale = lengthScale(units);
  if (!scale || !breps.length) return null;

  const pos = [], idx = [], out = [];
  for (const shellId of breps) {
    const shell = shells.get(shellId);
    if (!shell) return null;
    for (const faceId of shell) {
      const fb = faces.get(faceId);
      if (!fb || fb.length !== 1) return null; // a face with a hole: OCCT
      const b = bounds.get(fb[0]);
      const loop = b && loops.get(b.loop);
      if (!loop || loop.length < 3) return null;
      const ids = b.reversed ? loop.slice().reverse() : loop;
      const vs = ids.map((p) => points.get(p));
      if (vs.some((v) => !v)) return null;
      // Split into a fan, which is only right for a convex face: an exporter
      // that merges flat triangles can write an L-shaped one. OCCT then.
      if (vs.length > 3 && !convex(vs)) return null;
      const base = pos.length / 3, first = idx.length / 3;
      for (const v of vs) pos.push(v[0] * scale, v[1] * scale, v[2] * scale);
      for (let k = 1; k + 1 < ids.length; k++) idx.push(base, base + k, base + k + 1);
      out.push({ first, last: idx.length / 3 - 1 });
    }
  }
  return { positions: Float64Array.from(pos), indices: Uint32Array.from(idx), faces: out, solids: breps.length, names: [] };
}
