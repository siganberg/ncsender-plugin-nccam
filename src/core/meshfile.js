// Mesh files read into ncCAM's mesh, in mm: STL (binary or text: triangles,
// no unit, read as mm) and 3MF (a zip of XML models, with a unit, objects
// made of other objects, and where each sits on the build plate).

const UNITS = { micron: 0.001, millimeter: 1, centimeter: 10, inch: 25.4, foot: 304.8, meter: 1000 };

export async function meshFromFile(bytes, name = '') {
  const u8 = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  if (/\.stl$/i.test(name)) return meshFromStl(u8);
  if (/\.3mf$/i.test(name)) return meshFrom3mf(u8);
  return null;
}

const mesh = (pos, idx, solids = 1) => ({ positions: pos instanceof Float64Array ? pos : Float64Array.from(pos), indices: idx instanceof Uint32Array ? idx : Uint32Array.from(idx), faces: [], solids, names: [] });

export function meshFromStl(u8) {
  const dv = new DataView(u8.buffer, u8.byteOffset, u8.byteLength);
  // Binary: 80 bytes, a count, then 50 bytes a triangle (normal, 3 corners, 2 spare)
  if (u8.byteLength >= 84) {
    const n = dv.getUint32(80, true);
    if (84 + n * 50 === u8.byteLength) {
      const pos = new Float64Array(n * 9), idx = new Uint32Array(n * 3);
      for (let t = 0; t < n; t++) {
        const o = 84 + t * 50 + 12;
        for (let k = 0; k < 9; k++) pos[t * 9 + k] = dv.getFloat32(o + k * 4, true);
        idx[t * 3] = t * 3; idx[t * 3 + 1] = t * 3 + 1; idx[t * 3 + 2] = t * 3 + 2;
      }
      if (!n) throw new Error('This STL file has no triangles.');
      return mesh(pos, idx);
    }
  }
  const text = new TextDecoder().decode(u8);
  if (!/^\s*solid/.test(text)) throw new Error('This isn’t an STL file ncCAM can read.');
  const pos = [];
  for (const m of text.matchAll(/vertex\s+(\S+)\s+(\S+)\s+(\S+)/g)) pos.push(+m[1], +m[2], +m[3]);
  const n = Math.floor(pos.length / 9);
  if (!n || pos.some((v) => !Number.isFinite(v))) throw new Error('This STL file has no triangles ncCAM can read.');
  pos.length = n * 9;
  return mesh(pos, Array.from({ length: n * 3 }, (_, i) => i));
}

// ---------- 3MF ----------

// The files in a zip (stored or deflated), read on demand.
function zipEntries(u8) {
  const dv = new DataView(u8.buffer, u8.byteOffset, u8.byteLength);
  let eocd = -1;
  for (let i = u8.byteLength - 22; i >= Math.max(0, u8.byteLength - 65557); i--) if (dv.getUint32(i, true) === 0x06054b50) { eocd = i; break; }
  if (eocd < 0) throw new Error('This 3MF file is damaged (not a zip).');
  const u64 = (o) => dv.getUint32(o, true) + dv.getUint32(o + 4, true) * 2 ** 32;
  const FULL = 0xffffffff;
  let count = dv.getUint16(eocd + 10, true);
  let p = dv.getUint32(eocd + 16, true);
  // Zip64 (some writers always use it): the real numbers are in a record
  // the locator just before the end record points to
  if ((p === FULL || count === 0xffff) && eocd >= 20 && dv.getUint32(eocd - 20, true) === 0x07064b50) {
    const z = u64(eocd - 12);
    if (dv.getUint32(z, true) !== 0x06064b50) throw new Error('This 3MF file is damaged (zip64).');
    count = u64(z + 32);
    p = u64(z + 48);
  }
  const out = new Map();
  for (let k = 0; k < count; k++) {
    if (p + 46 > u8.byteLength || dv.getUint32(p, true) !== 0x02014b50) break;
    const method = dv.getUint16(p + 10, true);
    let size = dv.getUint32(p + 20, true), usize = dv.getUint32(p + 24, true);
    const nameLen = dv.getUint16(p + 28, true), extraLen = dv.getUint16(p + 30, true), commentLen = dv.getUint16(p + 32, true);
    let local = dv.getUint32(p + 42, true);
    // Zip64 extra field: the sizes and offset that didn't fit, in this order
    for (let e = p + 46 + nameLen; e + 4 <= p + 46 + nameLen + extraLen;) {
      const id = dv.getUint16(e, true), len = dv.getUint16(e + 2, true);
      if (id === 1) {
        let q = e + 4;
        if (usize === FULL) { usize = u64(q); q += 8; }
        if (size === FULL) { size = u64(q); q += 8; }
        if (local === FULL) { local = u64(q); q += 8; }
      }
      e += 4 + len;
    }
    const name = new TextDecoder().decode(u8.subarray(p + 46, p + 46 + nameLen));
    out.set(name.replace(/^\//, ''), { method, size, local });
    p += 46 + nameLen + extraLen + commentLen;
  }
  return {
    has: (n) => out.has(n.replace(/^\//, '')),
    async text(n) {
      const e = out.get(n.replace(/^\//, ''));
      if (!e) throw new Error(`This 3MF file is missing ${n}.`);
      const start = e.local + 30 + dv.getUint16(e.local + 26, true) + dv.getUint16(e.local + 28, true);
      const raw = u8.subarray(start, start + e.size);
      let data = raw;
      if (e.method === 8) data = new Uint8Array(await new Response(new Blob([raw]).stream().pipeThrough(new DecompressionStream('deflate-raw'))).arrayBuffer());
      else if (e.method !== 0) throw new Error('This 3MF file is compressed in a way ncCAM can’t read.');
      return new TextDecoder().decode(data);
    },
  };
}

const attr = (tag, name) => {
  const m = tag.match(new RegExp(`(?:^|\\s)${name}\\s*=\\s*"([^"]*)"`));
  return m ? m[1] : null;
};
// 3MF transforms: 12 numbers, a point [x y z 1] times a 4x3 matrix
const IDENTITY = [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0];
const parseTransform = (s) => {
  const v = (s || '').trim().split(/\s+/).map(Number);
  return v.length === 12 && v.every(Number.isFinite) ? v : IDENTITY;
};
// a then b
const compose = (a, b) => {
  const out = new Array(12);
  for (let r = 0; r < 4; r++) for (let c = 0; c < 3; c++) {
    out[r * 3 + c] = (r < 3 ? 0 : b[9 + c]) + a[r * 3] * b[c] + a[r * 3 + 1] * b[3 + c] + a[r * 3 + 2] * b[6 + c];
  }
  return out;
};

// One model file's objects: id -> { pos, tri } or { components }
function parseModel(text) {
  const unit = UNITS[attr(text.slice(0, 2000).match(/<model\b[^>]*>/)?.[0] || '', 'unit') || 'millimeter'] ?? 1;
  const objects = new Map(), skipped = new Set();
  const re = /<object\b([^>]*)>([\s\S]*?)<\/object>/g;
  for (let m; (m = re.exec(text));) {
    const id = attr(m[1], 'id'), body = m[2];
    // Only parts: not supports or other helpers
    const type = attr(m[1], 'type');
    if (type && type !== 'model') { skipped.add(id); continue; }
    if (body.includes('<mesh')) {
      const pos = [], tri = [];
      for (const v of body.matchAll(/<vertex\b([^>]*)\/?>/g)) pos.push(+attr(v[1], 'x'), +attr(v[1], 'y'), +attr(v[1], 'z'));
      for (const t of body.matchAll(/<triangle\b([^>]*)\/?>/g)) tri.push(+attr(t[1], 'v1'), +attr(t[1], 'v2'), +attr(t[1], 'v3'));
      objects.set(id, { pos, tri });
    } else {
      const components = [...body.matchAll(/<component\b([^>]*)\/?>/g)].map((c) => ({ id: attr(c[1], 'objectid'), path: attr(c[1], 'p:path'), transform: parseTransform(attr(c[1], 'transform')) }));
      objects.set(id, { components });
    }
  }
  const build = [...(text.match(/<build\b[\s\S]*?<\/build>/)?.[0] || '').matchAll(/<item\b([^>]*)\/?>/g)].map((i) => ({ id: attr(i[1], 'objectid'), path: attr(i[1], 'p:path'), transform: parseTransform(attr(i[1], 'transform')) }));
  return { unit, objects, skipped, build };
}

export async function meshFrom3mf(u8) {
  const zip = zipEntries(u8);
  let root = '3D/3dmodel.model';
  if (zip.has('_rels/.rels')) {
    const rels = await zip.text('_rels/.rels');
    const t = [...rels.matchAll(/<Relationship\b([^>]*)\/?>/g)].find((r) => /3dmodel/.test(attr(r[1], 'Type') || ''));
    if (t) root = attr(t[1], 'Target').replace(/^\//, '');
  }
  const models = new Map();
  const model = async (path) => {
    if (!models.has(path)) models.set(path, parseModel(await zip.text(path)));
    return models.get(path);
  };
  const top = await model(root);
  const pos = [], idx = [];
  let solids = 0;
  // An object where it is: its own triangles, or its components', moved
  const place = async (path, id, tf, depth = 0) => {
    if (depth > 16) throw new Error('This 3MF file nests objects too deeply.');
    const mdl = await model(path), o = mdl.objects.get(id);
    if (!o && mdl.skipped.has(id)) return; // a support or a print modifier
    if (!o) throw new Error(`This 3MF file is missing object ${id}.`);
    if (o.components) {
      for (const c of o.components) await place(c.path ? c.path.replace(/^\//, '') : path, c.id, compose(c.transform, tf), depth + 1);
      return;
    }
    const s = mdl.unit, base = pos.length / 3;
    for (let i = 0; i < o.pos.length; i += 3) {
      const x = o.pos[i], y = o.pos[i + 1], z = o.pos[i + 2];
      pos.push((x * tf[0] + y * tf[3] + z * tf[6] + tf[9]) * s, (x * tf[1] + y * tf[4] + z * tf[7] + tf[10]) * s, (x * tf[2] + y * tf[5] + z * tf[8] + tf[11]) * s);
    }
    // A mirroring transform turns the triangles inside out: put them back
    const det = tf[0] * (tf[4] * tf[8] - tf[5] * tf[7]) - tf[1] * (tf[3] * tf[8] - tf[5] * tf[6]) + tf[2] * (tf[3] * tf[7] - tf[4] * tf[6]);
    for (let i = 0; i < o.tri.length; i += 3) {
      if (det < 0) idx.push(base + o.tri[i], base + o.tri[i + 2], base + o.tri[i + 1]);
      else idx.push(base + o.tri[i], base + o.tri[i + 1], base + o.tri[i + 2]);
    }
    solids++;
  };
  for (const item of top.build) await place(item.path ? item.path.replace(/^\//, '') : root, item.id, item.transform);
  if (!idx.length) throw new Error('This 3MF file has no objects to cut.');
  if (pos.some((v) => !Number.isFinite(v)) || idx.some((i) => i >= pos.length / 3)) throw new Error('This 3MF file is damaged (bad vertex numbers).');
  return mesh(pos, idx, solids);
}
