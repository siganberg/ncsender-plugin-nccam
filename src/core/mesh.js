import { partHeights } from './sim.js';

// The part as triangles: built from occt-import-js output, turned so the
// chosen side faces up, analysed for what can be cut from the top, and
// sliced into horizontal sections.

// One mesh from every solid in the file. `faces` keeps each CAD face's
// triangle range, so a click on a triangle can name its face.
export function meshFromOcct(result) {
  const pos = [], idx = [], faces = [], names = [];
  for (const m of result.meshes || []) {
    const base = pos.length / 3, triBase = idx.length / 3;
    const p = m.attributes.position.array;
    for (let i = 0; i < p.length; i++) pos.push(p[i]);
    const ix = m.index.array;
    for (let i = 0; i < ix.length; i++) idx.push(ix[i] + base);
    for (const f of m.brep_faces || []) faces.push({ first: f.first + triBase, last: f.last + triBase });
    if (m.name) names.push(m.name);
  }
  return { positions: Float64Array.from(pos), indices: Uint32Array.from(idx), faces, solids: (result.meshes || []).length, names };
}

export function meshBounds(mesh) {
  const p = mesh.positions;
  const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < p.length; i += 3) for (let k = 0; k < 3; k++) {
    if (p[i + k] < min[k]) min[k] = p[i + k];
    if (p[i + k] > max[k]) max[k] = p[i + k];
  }
  return { min, max, size: [max[0] - min[0], max[1] - min[1], max[2] - min[2]] };
}

export function triangleNormal(mesh, t) {
  const p = mesh.positions, i = mesh.indices;
  const a = i[t * 3] * 3, b = i[t * 3 + 1] * 3, c = i[t * 3 + 2] * 3;
  const ux = p[b] - p[a], uy = p[b + 1] - p[a + 1], uz = p[b + 2] - p[a + 2];
  const vx = p[c] - p[a], vy = p[c + 1] - p[a + 1], vz = p[c + 2] - p[a + 2];
  const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
  const len = Math.hypot(nx, ny, nz);
  return len > 0 ? [nx / len, ny / len, nz / len] : [0, 0, 0];
}

// Rotation (3x3, row-major) that turns direction n onto +Z.
export function rotationToUp(n) {
  const [x, y, z] = n;
  if (z > 0.999999) return [1, 0, 0, 0, 1, 0, 0, 0, 1];
  if (z < -0.999999) return [1, 0, 0, 0, -1, 0, 0, 0, -1];
  // Axis n × Z, angle acos(n·Z)
  let ax = y, ay = -x;
  const s = Math.hypot(ax, ay); ax /= s; ay /= s;
  const c = z, sn = s, t = 1 - c;
  return [
    t * ax * ax + c, t * ax * ay, ay * sn,
    t * ax * ay, t * ay * ay + c, -ax * sn,
    -ay * sn, ax * sn, c,
  ];
}

export const UP_DIRECTIONS = {
  top: [0, 0, 1], bottom: [0, 0, -1],
  front: [0, -1, 0], back: [0, 1, 0],
  left: [-1, 0, 0], right: [1, 0, 0],
};

// A copy turned by `rot`, then moved so its lowest corner is at 0,0,0.
export function transformMesh(mesh, rot) {
  const p = mesh.positions, out = new Float64Array(p.length);
  for (let i = 0; i < p.length; i += 3) {
    const x = p[i], y = p[i + 1], z = p[i + 2];
    out[i] = rot[0] * x + rot[1] * y + rot[2] * z;
    out[i + 1] = rot[3] * x + rot[4] * y + rot[5] * z;
    out[i + 2] = rot[6] * x + rot[7] * y + rot[8] * z;
  }
  const moved = { positions: out, indices: mesh.indices, faces: mesh.faces };
  const { min } = meshBounds(moved);
  for (let i = 0; i < out.length; i += 3) { out[i] -= min[0]; out[i + 1] -= min[1]; out[i + 2] -= min[2]; }
  // Drop float noise so flat faces land on exact heights
  for (let i = 0; i < out.length; i++) out[i] = Math.round(out[i] * 1e6) / 1e6;
  return moved;
}

export const orient = (mesh, up) => transformMesh(mesh, rotationToUp(typeof up === 'string' ? UP_DIRECTIONS[up] : up));

// What the top of the part looks like to a 3-axis machine:
// - floors: heights of the flat, upward faces (pocket floors, steps, top)
// - undercut: faces that look down from above the bottom (needs a flip)
// - sloped: faces neither flat nor vertical (chamfers, fillets, 3D shapes)
export function analyze(mesh, tol = 1e-3) {
  const { max, size } = meshBounds(mesh);
  const top = max[2];
  const floors = new Set();
  let undercutArea = 0, slopedArea = 0, totalArea = 0;
  const p = mesh.positions, ix = mesh.indices;
  const nTri = ix.length / 3;
  for (let t = 0; t < nTri; t++) {
    const a = ix[t * 3] * 3, b = ix[t * 3 + 1] * 3, c = ix[t * 3 + 2] * 3;
    const n = triangleNormal(mesh, t);
    const ux = p[b] - p[a], uy = p[b + 1] - p[a + 1], uz = p[b + 2] - p[a + 2];
    const vx = p[c] - p[a], vy = p[c + 1] - p[a + 1], vz = p[c + 2] - p[a + 2];
    const ar = Math.hypot(uy * vz - uz * vy, uz * vx - ux * vz, ux * vy - uy * vx) / 2;
    totalArea += ar;
    const zMid = (p[a + 2] + p[b + 2] + p[c + 2]) / 3;
    if (n[2] > 1 - tol) floors.add(Math.round(zMid * 1000) / 1000);
    else if (n[2] < -(1 - tol)) { if (zMid > tol) undercutArea += ar; }
    else if (Math.abs(n[2]) > tol) {
      // A downward-facing slope is an undercut; an upward one a 3D surface
      if (n[2] < 0) undercutArea += ar; else slopedArea += ar;
    }
  }
  // Faces that look down only matter when a real share of the part sits
  // under them: a chamfer or fillet on the bottom edge is just left square,
  // a sideways hole or slot can't be cut at all.
  const faceDown = undercutArea > 1e-3 * totalArea;
  const missed = faceDown ? missedShare(mesh) : 0;
  return {
    size, top,
    floors: [...floors].sort((x, y) => y - x),
    undercut: faceDown && missed > MISSED_LIMIT,
    squareEdges: faceDown && missed <= MISSED_LIMIT,
    sloped: slopedArea > 1e-3 * totalArea,
    undercutArea, slopedArea, missed,
  };
}

const MISSED_LIMIT = 0.05;

export function meshVolume(mesh) {
  const p = mesh.positions, ix = mesh.indices;
  let v = 0;
  for (let t = 0; t < ix.length; t += 3) {
    const a = ix[t] * 3, b = ix[t + 1] * 3, c = ix[t + 2] * 3;
    v += p[a] * (p[b + 1] * p[c + 2] - p[b + 2] * p[c + 1]) - p[a + 1] * (p[b] * p[c + 2] - p[b + 2] * p[c]) + p[a + 2] * (p[b] * p[c + 1] - p[b + 1] * p[c]);
  }
  return Math.abs(v / 6);
}

// How much more a cut from the top leaves than the part itself, as a share
// of the part: everything under the part's top surface stays.
export function missedShare(mesh) {
  const { min, max } = meshBounds(mesh);
  const w = max[0] - min[0], d = max[1] - min[1];
  const cell = Math.max(0.05, Math.sqrt((w * d) / 250000));
  const grid = { x0: min[0], y0: min[1], cell, nx: Math.ceil(w / cell) + 1, ny: Math.ceil(d / cell) + 1 };
  const h = partHeights(mesh, grid);
  let shadow = 0;
  for (let i = 0; i < h.length; i++) if (h[i] > min[2]) shadow += h[i] - min[2];
  shadow *= cell * cell;
  const vol = meshVolume(mesh);
  return vol > 0 ? Math.max(0, shadow - vol) / vol : 0;
}

// The part's section at height z: closed loops (any orientation).
export function slice(mesh, z) {
  const p = mesh.positions, ix = mesh.indices;
  const segs = [];
  const nTri = ix.length / 3;
  for (let t = 0; t < nTri; t++) {
    const v = [ix[t * 3] * 3, ix[t * 3 + 1] * 3, ix[t * 3 + 2] * 3];
    const pts = [];
    for (let k = 0; k < 3; k++) {
      const a = v[k], b = v[(k + 1) % 3];
      const za = p[a + 2] - z, zb = p[b + 2] - z;
      if ((za < 0) !== (zb < 0)) {
        const f = za / (za - zb);
        pts.push([p[a] + (p[b] - p[a]) * f, p[a + 1] + (p[b + 1] - p[a + 1]) * f]);
      }
    }
    if (pts.length === 2) segs.push(pts);
  }
  return chain(segs);
}

// Joins slice segments end to end into loops.
function chain(segs) {
  const key = ([x, y]) => `${Math.round(x * 1e4)},${Math.round(y * 1e4)}`;
  const ends = new Map();
  segs.forEach((s, i) => {
    for (const e of [0, 1]) {
      const k = key(s[e]);
      if (!ends.has(k)) ends.set(k, []);
      ends.get(k).push(i);
    }
  });
  const used = new Uint8Array(segs.length);
  const loops = [];
  for (let i = 0; i < segs.length; i++) {
    if (used[i]) continue;
    used[i] = 1;
    const loop = [segs[i][0], segs[i][1]];
    const startKey = key(segs[i][0]);
    let cur = segs[i][1];
    for (let guard = 0; guard < segs.length; guard++) {
      const k = key(cur);
      if (k === startKey) break;
      const next = (ends.get(k) || []).find((j) => !used[j]);
      if (next === undefined) break;
      used[next] = 1;
      const s = segs[next];
      cur = key(s[0]) === k ? s[1] : s[0];
      if (key(cur) !== startKey) loop.push(cur);
    }
    if (loop.length >= 3) loops.push(loop);
  }
  return loops;
}

// Which sides could face up: a side is reachable when cutting from the top
// leaves little of the part uncut (a chamfer on the bottom edge, not a
// sideways hole). The best one leaves the least, then has the least sloped
// surface and sits lowest (steadiest).
export function sides(mesh) {
  const out = {};
  for (const side of Object.keys(UP_DIRECTIONS)) {
    const a = analyze(orient(mesh, side));
    out[side] = { reachable: !a.undercut, missed: a.missed, undercutArea: a.undercutArea, slopedArea: a.slopedArea, height: a.size[2] };
  }
  const order = Object.keys(UP_DIRECTIONS);
  const ranked = order.slice().sort((x, y) => {
    const a = out[x], b = out[y];
    return (a.reachable === b.reachable ? 0 : a.reachable ? -1 : 1)
      || (Math.abs(a.missed - b.missed) > 1e-4 ? a.missed - b.missed : 0)
      || (Math.abs(a.slopedArea - b.slopedArea) > 1e-6 ? a.slopedArea - b.slopedArea : 0)
      || (Math.abs(a.height - b.height) > 1e-6 ? a.height - b.height : 0)
      || order.indexOf(x) - order.indexOf(y);
  });
  // Nothing reachable at all: don't rule any side out, the least bad leads
  if (!ranked.some((s) => out[s].reachable)) for (const s of order) out[s].reachable = true;
  return { sides: out, best: ranked[0] };
}
