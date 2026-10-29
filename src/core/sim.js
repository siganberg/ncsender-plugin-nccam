// Material removal on a heightmap: the stock is a grid of columns, and every
// move lowers the columns under the tool. Used by the preview and by the
// tests (a cut below the part is a gouge).

export class HeightMap {
  constructor(stock, cell) {
    this.cell = cell;
    this.x0 = stock.minX; this.y0 = stock.minY;
    this.nx = Math.max(2, Math.ceil((stock.maxX - stock.minX) / cell) + 1);
    this.ny = Math.max(2, Math.ceil((stock.maxY - stock.minY) / cell) + 1);
    this.h = new Float32Array(this.nx * this.ny).fill(stock.top);
    this.op = new Uint8Array(this.nx * this.ny); // which op last cut each column, 1-based
    this.top = stock.top;
    this.bottom = stock.bottom;
  }
  static cellFor(stock, maxCells = 600 * 600) {
    const a = (stock.maxX - stock.minX) * (stock.maxY - stock.minY);
    return Math.max(0.1, Math.sqrt(a / maxCells));
  }
}

// The tool's end as rings of columns around its center: how far above the
// tip each one is (0 for a flat end).
export function toolStamp(tool, cell) {
  const r = tool.diameter / 2;
  const n = Math.ceil(r / cell);
  const out = [];
  for (let j = -n; j <= n; j++) for (let i = -n; i <= n; i++) {
    const d = Math.hypot(i, j) * cell;
    if (d > r + 1e-6) continue;
    const dd = Math.min(d, r);
    let dz = 0;
    if (tool.kind === 'ball') dz = r - Math.sqrt(Math.max(0, r * r - dd * dd));
    else if (tool.kind === 'vbit' || tool.kind === 'chamfer' || tool.kind === 'drill') {
      const half = ((tool.angle || (tool.kind === 'drill' ? 118 : 60)) * Math.PI) / 360;
      dz = dd / Math.tan(half);
    }
    out.push(i, j, dz);
  }
  return Float32Array.from(out);
}

// Cuts from a to b. Returns true if a rapid ran into material.
export function cutMove(hm, stamp, a, b, rapid, opIndex) {
  const len = Math.hypot(b.x - a.x, b.y - a.y);
  const steps = Math.max(1, Math.ceil(len / (hm.cell * 0.5)));
  let hit = false;
  for (let k = rapid ? 0 : 1; k <= steps; k++) {
    const t = k / steps;
    const cx = (a.x + (b.x - a.x) * t - hm.x0) / hm.cell;
    const cy = (a.y + (b.y - a.y) * t - hm.y0) / hm.cell;
    const z = a.z + (b.z - a.z) * t;
    if (z >= hm.top) continue;
    const ci = Math.round(cx), cj = Math.round(cy);
    for (let s = 0; s < stamp.length; s += 3) {
      const i = ci + stamp[s], j = cj + stamp[s + 1];
      if (i < 0 || j < 0 || i >= hm.nx || j >= hm.ny) continue;
      const idx = j * hm.nx + i;
      const zz = z + stamp[s + 2];
      if (hm.h[idx] > zz + 1e-4) {
        if (rapid) { if (hm.h[idx] > zz + 0.05) hit = true; continue; }
        hm.h[idx] = zz;
        hm.op[idx] = opIndex + 1;
      }
    }
  }
  return hit;
}

// Plays a whole program; collisions lists the rapids that hit material.
export function simulate(p, cell) {
  const hm = new HeightMap(p.stock, cell || HeightMap.cellFor(p.stock));
  const collisions = [];
  p.ops.forEach((op, oi) => {
    if (!op.enabled || !op.moves) return;
    const stamp = toolStamp(op.tool, hm.cell);
    let prev = null;
    for (const m of op.moves) {
      if (prev && cutMove(hm, stamp, prev, m, !!m.r, oi)) collisions.push({ op: op.id, at: m });
      prev = m;
    }
  });
  return { hm, collisions };
}

// The part's top surface on the same grid (-Infinity where there is none).
export function partHeights(mesh, hm) {
  const out = new Float32Array(hm.nx * hm.ny).fill(-Infinity);
  const p = mesh.positions, ix = mesh.indices;
  for (let t = 0; t < ix.length; t += 3) {
    const a = ix[t] * 3, b = ix[t + 1] * 3, c = ix[t + 2] * 3;
    const ax = p[a], ay = p[a + 1], az = p[a + 2], bx = p[b], by = p[b + 1], bz = p[b + 2], cx = p[c], cy = p[c + 1], cz = p[c + 2];
    const det = (by - cy) * (ax - cx) + (cx - bx) * (ay - cy);
    if (Math.abs(det) < 1e-12) continue;
    const i0 = Math.max(0, Math.floor((Math.min(ax, bx, cx) - hm.x0) / hm.cell)), i1 = Math.min(hm.nx - 1, Math.ceil((Math.max(ax, bx, cx) - hm.x0) / hm.cell));
    const j0 = Math.max(0, Math.floor((Math.min(ay, by, cy) - hm.y0) / hm.cell)), j1 = Math.min(hm.ny - 1, Math.ceil((Math.max(ay, by, cy) - hm.y0) / hm.cell));
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
      const x = hm.x0 + i * hm.cell, y = hm.y0 + j * hm.cell;
      const l1 = ((by - cy) * (x - cx) + (cx - bx) * (y - cy)) / det;
      const l2 = ((cy - ay) * (x - cx) + (ax - cx) * (y - cy)) / det;
      const l3 = 1 - l1 - l2;
      if (l1 < -1e-9 || l2 < -1e-9 || l3 < -1e-9) continue;
      const z = l1 * az + l2 * bz + l3 * cz;
      const idx = j * hm.nx + i;
      if (z > out[idx]) out[idx] = z;
    }
  }
  return out;
}
