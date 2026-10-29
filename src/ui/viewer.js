// The 3D view: the part (step 1) or the stock being cut (step 4).
// Z is up, like the machine.
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export const OP_COLORS = { face: '#93a2b4', pocket: '#1abc9c', hole: '#4ea1ff', drill: '#4ea1ff', step: '#2ecc71', corners: '#48d1b4', cutout: '#a78bfa' };

export const STOCK_COLORS = {
  softwood: '#d8b38a', hardwood: '#9c6b45', mdf: '#b59672', plastic: '#d9e2ea', aluminum: '#b9c1c9', foam: '#c7b8a5',
};

// Columns cut below the stock's bottom are holes: not drawn. With flat set,
// the grid is drawn on the bed instead (the underside).
function throughHoles(mat, bottom, flat) {
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uCut = { value: bottom - 0.05 };
    sh.uniforms.uBottom = { value: bottom };
    sh.vertexShader = 'varying float vZ;\nuniform float uBottom;\n' + sh.vertexShader
      .replace('#include <beginnormal_vertex>', '#include <beginnormal_vertex>\n' + (flat ? 'objectNormal = vec3(0.0, 0.0, -1.0);' : ''))
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvZ = transformed.z;\n' + (flat ? 'transformed.z = uBottom;' : ''));
    sh.fragmentShader = 'varying float vZ;\nuniform float uCut;\n' + sh.fragmentShader
      .replace('#include <clipping_planes_fragment>', '#include <clipping_planes_fragment>\nif (vZ < uCut) discard;');
    // The top's normals always point out of the material; a wall triangle
    // that folds over at a curve must not flip its normal, or it shows as a
    // dark or bright streak
    if (!flat) sh.fragmentShader = sh.fragmentShader.replace('#include <normal_fragment_begin>', THREE.ShaderChunk.normal_fragment_begin.replace('gl_FrontFacing ? 1.0 : - 1.0', '1.0'));
  };
  mat.customProgramCacheKey = () => `through-${flat}`;
}

const sel_any = (points, key) => points.some((p) => p.key === key);

// A label that always faces the camera
function textSprite(text, color, height) {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 128;
  const g = c.getContext('2d');
  g.font = '600 84px Inter, system-ui, sans-serif';
  g.fillStyle = '#' + new THREE.Color(color).getHexString();
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(text, 128, 64);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: false, transparent: true }));
  s.scale.set(height * 2, height, 1);
  s.renderOrder = 6;
  return s;
}

export class Viewer {
  constructor() {
    this.el = document.createElement('div');
    this.el.className = 'ncc-viewport';
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.el.appendChild(this.renderer.domElement);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(35, 1, 0.1, 10000);
    this.camera.up.set(0, 0, 1);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.12;
    this.controls.addEventListener('start', () => { this.userMoved = true; });
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x445566, 1.6));
    const sun = new THREE.DirectionalLight(0xffffff, 1.6);
    sun.position.set(-0.6, -1, 1.6);
    this.scene.add(sun);
    const fill = new THREE.DirectionalLight(0xffffff, 0.5);
    fill.position.set(1, 0.6, 0.4);
    this.scene.add(fill);
    this.content = new THREE.Group();
    this.scene.add(this.content);
    this.onFrame = null;
    this.alive = true;
    this.resize = new ResizeObserver(() => this.fit());
    this.resize.observe(this.el);
    const loop = (t) => {
      if (!this.alive) return;
      if (!this.el.isConnected && this.detachedSince && t - this.detachedSince > 3000 && !document.querySelector('.ncc-wrapper')) { this.dispose(); return; }
      if (!this.el.isConnected) this.detachedSince ||= t; else this.detachedSince = 0;
      if (this.onFrame) this.onFrame(t);
      this.controls.update();
      if (this.el.isConnected) this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
    this.setupPicking();
  }

  fit() {
    const w = this.el.clientWidth, h = this.el.clientHeight;
    if (!w || !h) return;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    // Until the operator turns or zooms, keep the part filling the view
    if (!this.userMoved) this.refit();
  }

  clear() {
    for (const c of [...this.content.children]) {
      this.content.remove(c);
      c.traverse((o) => { o.geometry?.dispose(); if (o.material) [].concat(o.material).forEach((m) => m.dispose()); });
    }
    this.pickMesh = null;
    this.markers = null;
  }

  // Looks at a box from the front-left, a little above, as close as it can
  // while the whole box stays in view (margin: share of the view kept clear).
  frame(min, max, margin = 0.08) {
    this.fitBox = [min, max, margin];
    this.userMoved = false;
    this.refit();
  }

  refit() {
    if (!this.fitBox) return;
    const [min, max, margin] = this.fitBox;
    const c = new THREE.Vector3((min[0] + max[0]) / 2, (min[1] + max[1]) / 2, (min[2] + max[2]) / 2);
    const size = Math.max(max[0] - min[0], max[1] - min[1], max[2] - min[2], 1e-3);
    const dir = new THREE.Vector3(-0.45, -0.8, 0.75).normalize();
    const corners = [];
    for (const x of [min[0], max[0]]) for (const y of [min[1], max[1]]) for (const z of [min[2], max[2]]) corners.push(new THREE.Vector3(x, y, z));
    // Each round: move in or out so the box's outline on screen fills the
    // view less the margin, then slide sideways so that outline is centred
    // (perspective makes the near end bigger, so the middle isn't the centre).
    const target = c.clone();
    let d = size * 2;
    const place = () => {
      this.camera.position.copy(target).addScaledVector(dir, d);
      this.camera.near = d / 100; this.camera.far = d * 100;
      this.camera.lookAt(target);
      this.camera.updateMatrixWorld();
      this.camera.updateProjectionMatrix();
    };
    for (let i = 0; i < 8; i++) {
      place();
      let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
      for (const p of corners) {
        const q = p.clone().project(this.camera);
        x0 = Math.min(x0, q.x); x1 = Math.max(x1, q.x); y0 = Math.min(y0, q.y); y1 = Math.max(y1, q.y);
      }
      const ext = Math.max((x1 - x0) / 2, (y1 - y0) / 2);
      if (!(ext > 0)) break;
      const halfH = d * Math.tan((this.camera.fov * Math.PI) / 360), halfW = halfH * this.camera.aspect;
      const right = new THREE.Vector3().setFromMatrixColumn(this.camera.matrixWorld, 0);
      const up = new THREE.Vector3().setFromMatrixColumn(this.camera.matrixWorld, 1);
      target.addScaledVector(right, ((x0 + x1) / 2) * halfW).addScaledVector(up, ((y0 + y1) / 2) * halfH);
      d *= ext / (1 - margin);
    }
    place();
    this.controls.target.copy(target);
    this.controls.update();
  }

  showPart(mesh, overlays = []) {
    this.clear();

    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(mesh.positions, 3));
    g.setIndex(new THREE.BufferAttribute(mesh.indices, 1));
    g.computeVertexNormals();
    const m = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ color: 0x8ea4bb, metalness: 0.15, roughness: 0.55, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 }));
    this.content.add(m);
    this.pickMesh = m;
    const edges = new THREE.LineSegments(new THREE.EdgesGeometry(g, 25), new THREE.LineBasicMaterial({ color: 0x2b3a4c, transparent: true, opacity: 0.55 }));
    this.content.add(edges);
    for (const o of overlays) this.addLoops(o.loops, o.z, o.color, o.dashed, o.opacity);
    g.computeBoundingBox();
    const b = g.boundingBox;
    if (!this.keepCamera) this.frame(b.min.toArray(), b.max.toArray());
  }

  addLoops(loops, z, color, dashed, opacity = 0.95) {
    for (const loop of loops) {
      const pts = loop.map(([x, y]) => new THREE.Vector3(x, y, z));
      const geo = new THREE.BufferGeometry().setFromPoints([...pts, pts[0]]);
      const mat = dashed
        ? new THREE.LineDashedMaterial({ color, dashSize: 2, gapSize: 1.5, transparent: true, opacity, depthTest: false })
        : new THREE.LineBasicMaterial({ color, transparent: true, opacity, depthTest: false });
      const line = new THREE.Line(geo, mat);
      if (dashed) line.computeLineDistances();
      line.renderOrder = 2;
      this.content.add(line);
    }
  }

  // A click (not a drag) on the part reports the face's direction.
  setupPicking() {
    const dom = this.renderer.domElement;
    let down = null;
    dom.addEventListener('pointerdown', (e) => { down = [e.clientX, e.clientY]; });
    dom.addEventListener('pointerup', (e) => {
      if (!down || Math.hypot(e.clientX - down[0], e.clientY - down[1]) > 4) return;
      const r = dom.getBoundingClientRect();
      const ray = new THREE.Raycaster();
      ray.setFromCamera(new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1), this.camera);
      // Markers (zero points) first: each carries the key it stands for
      if (this.markers?.length && this.onMarker) {
        const m = ray.intersectObjects(this.markers)[0];
        if (m) { this.onMarker(m.object.userData.key); return; }
      }
      if (!this.pickMesh || !this.onPick) return;
      const hit = ray.intersectObject(this.pickMesh)[0];
      if (!hit || !hit.face) return;
      const n = hit.face.normal.clone();
      // A face seen from behind is the other side
      if (n.dot(ray.ray.direction) > 0) n.negate();
      this.onPick([n.x, n.y, n.z]);
    });
  }

  // Step 2: the stock with the part inside, the nine zero points on the
  // face Z0 is on, and X/Y/Z arrows (red, green, blue) from the chosen one.
  showZero({ stock, part, points, selected, zFace, color, accent = '#4c6ef5' }) {
    this.clear();

    const W = stock.maxX - stock.minX, D = stock.maxY - stock.minY, T = stock.top - stock.bottom;
    const size = Math.max(W, D, T);
    const box = new THREE.BoxGeometry(W, D, T);
    box.translate((stock.minX + stock.maxX) / 2, (stock.minY + stock.maxY) / 2, (stock.top + stock.bottom) / 2);
    const block = new THREE.Mesh(box, new THREE.MeshStandardMaterial({ color, transparent: true, opacity: 0.45, roughness: 0.9, depthWrite: false }));
    block.renderOrder = 2;
    this.content.add(block);
    this.content.add(new THREE.LineSegments(new THREE.EdgesGeometry(box), new THREE.LineBasicMaterial({ color: new THREE.Color(color).multiplyScalar(0.6) })));
    if (part) {
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(part.positions, 3));
      g.setIndex(new THREE.BufferAttribute(part.indices, 1));
      g.computeVertexNormals();
      this.content.add(new THREE.Mesh(g, new THREE.MeshStandardMaterial({ color: 0x8ea4bb, metalness: 0.15, roughness: 0.55 })));
    }
    const z = zFace === 'bed' ? stock.bottom : stock.top;
    const r = size * 0.014;
    this.markers = [];
    for (const p of points) {
      const sel = p.key === selected;
      const dot = new THREE.Mesh(new THREE.SphereGeometry(sel ? r * 1.3 : r, 24, 16), new THREE.MeshBasicMaterial({ color: sel ? accent : 0xffffff }));
      dot.position.set(p.x, p.y, z);
      dot.userData.key = p.key;
      dot.renderOrder = 4;
      dot.material.depthTest = false;
      if (!sel) {
        const ring = new THREE.Mesh(new THREE.SphereGeometry(r * 1.25, 24, 16), new THREE.MeshBasicMaterial({ color: 0x5e6b75, depthTest: false }));
        ring.renderOrder = 3;
        dot.add(ring);
        // A bigger invisible ball so a finger can hit it
      }
      const hit = new THREE.Mesh(new THREE.SphereGeometry(r * 3.5, 12, 8), new THREE.MeshBasicMaterial({ visible: false }));
      hit.userData.key = p.key;
      dot.add(hit);
      this.markers.push(hit);
      this.content.add(dot);
      if (sel) {
        const pulse = new THREE.Mesh(new THREE.RingGeometry(r * 1.6, r * 2, 40), new THREE.MeshBasicMaterial({ color: accent, transparent: true, depthTest: false, side: THREE.DoubleSide }));
        pulse.position.copy(dot.position);
        pulse.renderOrder = 4;
        this.content.add(pulse);
        this.pulse = pulse;
        const L = size * 0.3;
        for (const [dir, col, label] of [[[1, 0, 0], 0xe74c3c, 'X'], [[0, 1, 0], 0x2ecc71, 'Y'], [[0, 0, 1], 0x4e8cff, 'Z']]) {
          const arrow = new THREE.ArrowHelper(new THREE.Vector3(...dir), dot.position, L, col, L * 0.13, L * 0.055);
          arrow.line.material.depthTest = false; arrow.cone.material.depthTest = false;
          arrow.renderOrder = 5; arrow.line.renderOrder = 5; arrow.cone.renderOrder = 5;
          this.content.add(arrow);
          const sprite = textSprite(label, col, size * 0.05);
          sprite.position.copy(dot.position).add(new THREE.Vector3(...dir).multiplyScalar(L * 1.18));
          this.content.add(sprite);
        }
      }
    }
    const front = textSprite('Front', 0x93a2b4, size * 0.04);
    front.position.set((stock.minX + stock.maxX) / 2, stock.minY - size * 0.08, stock.bottom);
    this.content.add(front);
    if (!this.keepCamera) this.frame([stock.minX, stock.minY, stock.bottom], [stock.maxX, stock.maxY, stock.top]);
    if (!sel_any(points, selected)) this.pulse = null;
    this.onFrame = (t) => {
      if (!this.pulse) return;
      const k = (t % 1600) / 1600;
      this.pulse.scale.setScalar(1 + k * 1.6);
      this.pulse.material.opacity = 0.8 * (1 - k);
      this.pulse.lookAt(this.camera.position);
    };
  }

  // Step 4: the stock as a heightmap, the tool, and the toolpaths.
  showStock(hm, stockColor, part) {
    this.clear();
    this.keepCamera = false;

    const nx = hm.nx, ny = hm.ny, n = nx * ny;
    const pos = new Float32Array(n * 3), col = new Float32Array(n * 3);
    const base = new THREE.Color(stockColor);
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
      const k = j * nx + i;
      pos[k * 3] = hm.x0 + i * hm.cell; pos[k * 3 + 1] = hm.y0 + j * hm.cell; pos[k * 3 + 2] = hm.h[k];
      col[k * 3] = base.r; col[k * 3 + 1] = base.g; col[k * 3 + 2] = base.b;
    }
    const idx = new Uint32Array((nx - 1) * (ny - 1) * 6);
    let q = 0;
    for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx - 1; i++) {
      const a = j * nx + i, b = a + 1, c = a + nx, d = c + 1;
      idx[q++] = a; idx[q++] = b; idx[q++] = d; idx[q++] = a; idx[q++] = d; idx[q++] = c;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('color', new THREE.BufferAttribute(col, 3).setUsage(THREE.DynamicDrawUsage));
    const nor = new Float32Array(n * 3);
    for (let k = 0; k < n; k++) nor[k * 3 + 2] = 1;
    g.setAttribute('normal', new THREE.BufferAttribute(nor, 3).setUsage(THREE.DynamicDrawUsage));
    g.setIndex(new THREE.BufferAttribute(idx, 1));
    // Smooth shading from the surface slope: curved walls read as curves,
    // not as stripes of grid facets
    const topMat = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: false, roughness: 0.8, metalness: stockColor === STOCK_COLORS.aluminum ? 0.5 : 0.05, side: THREE.DoubleSide });
    throughHoles(topMat, hm.bottom, false);
    const top = new THREE.Mesh(g, topMat);
    this.content.add(top);
    this.stock = { hm, geo: g, base, sides: this.makeSides(hm, base) };
    // The underside: the same grid laid flat on the bed, with the same holes
    const underMat = new THREE.MeshStandardMaterial({ color: base.clone().multiplyScalar(0.7), roughness: 0.9, side: THREE.DoubleSide });
    throughHoles(underMat, hm.bottom, true);
    this.content.add(new THREE.Mesh(g, underMat));

    if (part) {
      const pg = new THREE.BufferGeometry();
      pg.setAttribute('position', new THREE.BufferAttribute(part.positions, 3));
      pg.setIndex(new THREE.BufferAttribute(part.indices, 1));
      pg.computeVertexNormals();
      this.partGhost = new THREE.Mesh(pg, new THREE.MeshStandardMaterial({ color: 0x4ea1ff, transparent: true, opacity: 0.25, depthWrite: false }));
      this.partGhost.visible = false;
      this.content.add(this.partGhost);
    }
    this.tool = new THREE.Group();
    this.content.add(this.tool);
    this.frame([hm.x0, hm.y0, hm.bottom], [hm.x0 + (nx - 1) * hm.cell, hm.y0 + (ny - 1) * hm.cell, hm.top]);
  }

  // Walls around the stock that follow its edges as they are cut.
  makeSides(hm, base) {
    const edge = [];
    for (let i = 0; i < hm.nx; i++) edge.push(i);
    for (let j = 1; j < hm.ny; j++) edge.push(j * hm.nx + hm.nx - 1);
    for (let i = hm.nx - 2; i >= 0; i--) edge.push((hm.ny - 1) * hm.nx + i);
    for (let j = hm.ny - 2; j >= 0; j--) edge.push(j * hm.nx);
    const pos = new Float32Array(edge.length * 6);
    const idx = [];
    for (let e = 0; e < edge.length; e++) {
      const k = edge[e], x = hm.x0 + (k % hm.nx) * hm.cell, y = hm.y0 + Math.floor(k / hm.nx) * hm.cell;
      pos.set([x, y, hm.h[k], x, y, hm.bottom], e * 6);
      if (e < edge.length - 1) { const a = e * 2; idx.push(a, a + 1, a + 3, a, a + 3, a + 2); }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setIndex(idx);
    const m = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ color: base.clone().multiplyScalar(0.85), flatShading: true, roughness: 0.85, side: THREE.DoubleSide }));
    this.content.add(m);
    return { g, edge };
  }

  // Copies cut columns into the mesh; rows j0..j1 changed. Columns on a
  // wall sit on the tool's edge (hm.sx/sy), so walls follow the real curve.
  refreshStock(j0, j1, opColors) {
    const s = this.stock;
    if (!s || j1 < j0) return;
    const { hm, geo, base } = s;
    const nx = hm.nx, ny = hm.ny, H = hm.h;
    const pos = geo.attributes.position, col = geo.attributes.color, nor = geo.attributes.normal;
    const c = new THREE.Color();
    const a0 = Math.max(0, j0), a1 = Math.min(ny - 1, j1);
    const step = hm.cell * 1.5;
    for (let j = a0; j <= a1; j++) for (let i = 0; i < nx; i++) {
      const k = j * nx + i;
      pos.array[k * 3] = hm.x0 + i * hm.cell + (hm.sx ? hm.sx[k] : 0);
      pos.array[k * 3 + 1] = hm.y0 + j * hm.cell + (hm.sy ? hm.sy[k] : 0);
      pos.array[k * 3 + 2] = H[k];
      const o = hm.op[k];
      // The foot of a wall keeps the stock's color, so the wall is one color
      // from top to bottom instead of bands between the two
      const foot = hm.wx && (hm.wx[k] || hm.wy[k]) && ((i > 0 && H[k - 1] - H[k] > step) || (i < nx - 1 && H[k + 1] - H[k] > step) || (j > 0 && H[k - nx] - H[k] > step) || (j < ny - 1 && H[k + nx] - H[k] > step));
      if (o && !foot) {
        c.copy(base).lerp(opColors[o - 1], 0.28);
        // Deeper cuts a little darker, so floors read
        c.multiplyScalar(0.82 + 0.18 * Math.max(0, Math.min(1, (H[k] - hm.bottom) / Math.max(1, hm.top - hm.bottom))));
      } else c.copy(base);
      col.array[k * 3] = c.r; col.array[k * 3 + 1] = c.g; col.array[k * 3 + 2] = c.b;
    }
    // Normals from the drawn points: across the row x across the column
    const P = pos.array;
    const n0 = Math.max(0, a0 - 1), n1 = Math.min(ny - 1, a1 + 1);
    for (let j = n0; j <= n1; j++) for (let i = 0; i < nx; i++) {
      const k = j * nx + i;
      // On a wall (a neighbour much higher or lower): half up, half the way
      // the wall faces, the same all along it, so a curved wall shades evenly
      if (hm.wx && (hm.wx[k] || hm.wy[k])) {
        const hk = H[k];
        if ((i > 0 && Math.abs(H[k - 1] - hk) > step) || (i < nx - 1 && Math.abs(H[k + 1] - hk) > step)
          || (j > 0 && Math.abs(H[k - nx] - hk) > step) || (j < ny - 1 && Math.abs(H[k + nx] - hk) > step)) {
          nor.array[k * 3] = hm.wx[k] * 0.7071; nor.array[k * 3 + 1] = hm.wy[k] * 0.7071; nor.array[k * 3 + 2] = 0.7071;
          continue;
        }
      }
      const l = (j * nx + Math.max(0, i - 1)) * 3, r = (j * nx + Math.min(nx - 1, i + 1)) * 3;
      const d = (Math.max(0, j - 1) * nx + i) * 3, u = (Math.min(ny - 1, j + 1) * nx + i) * 3;
      const ux = P[r] - P[l], uy = P[r + 1] - P[l + 1], uz = P[r + 2] - P[l + 2];
      const vx = P[u] - P[d], vy = P[u + 1] - P[d + 1], vz = P[u + 2] - P[d + 2];
      let x = uy * vz - uz * vy, y = uz * vx - ux * vz, z = ux * vy - uy * vx;
      const len = Math.hypot(x, y, z) || 1;
      if (z < 0) { x = -x; y = -y; z = -z; }
      nor.array[k * 3] = x / len; nor.array[k * 3 + 1] = y / len; nor.array[k * 3 + 2] = z / len;
    }
    // Ranges add up until the next upload (three clears them after it), so a
    // second refresh before a frame keeps the first one's rows
    pos.addUpdateRange(a0 * nx * 3, (a1 - a0 + 1) * nx * 3);
    col.addUpdateRange(a0 * nx * 3, (a1 - a0 + 1) * nx * 3);
    nor.addUpdateRange(n0 * nx * 3, (n1 - n0 + 1) * nx * 3);
    pos.needsUpdate = true; col.needsUpdate = true; nor.needsUpdate = true;
    const sp = s.sides.g.attributes.position;
    s.sides.edge.forEach((k, e) => { sp.array[e * 6 + 2] = H[k]; });
    sp.needsUpdate = true;
  }

  setTool(tool, maxDepth) {
    for (const c of [...this.tool.children]) { this.tool.remove(c); c.geometry.dispose(); c.material.dispose(); }
    const r = tool.diameter / 2;
    const flute = Math.max(tool.fluteLength || 0, Math.min(40, Math.max(maxDepth + 3, tool.diameter * 2)));
    const metal = new THREE.MeshStandardMaterial({ color: 0xd5dbe1, metalness: 0.85, roughness: 0.3 });
    let tip;
    if (tool.kind === 'vbit' || tool.kind === 'chamfer' || tool.kind === 'drill') {
      const h = r / Math.tan(((tool.kind === 'drill' ? 118 : 60) * Math.PI) / 360);
      tip = new THREE.Mesh(new THREE.ConeGeometry(r, h, 32), metal);
      tip.rotation.x = -Math.PI / 2; tip.position.z = h / 2;
    } else {
      tip = new THREE.Mesh(new THREE.CylinderGeometry(r, r, flute, 32), metal);
      tip.rotation.x = Math.PI / 2; tip.position.z = flute / 2;
    }
    const shank = new THREE.Mesh(new THREE.CylinderGeometry(Math.max(r, 3.175), Math.max(r, 3.175), 22, 32), new THREE.MeshStandardMaterial({ color: 0xaab3bc, metalness: 0.8, roughness: 0.35 }));
    shank.rotation.x = Math.PI / 2; shank.position.z = flute + 11;
    const nut = new THREE.Mesh(new THREE.CylinderGeometry(Math.max(r, 3.175) * 3.2, Math.max(r, 3.175) * 2.6, 18, 40), new THREE.MeshStandardMaterial({ color: 0x3b4655, metalness: 0.6, roughness: 0.4 }));
    nut.rotation.x = Math.PI / 2; nut.position.z = flute + 22 + 9;
    this.tool.add(tip, shank, nut);
  }

  moveTool(x, y, z) { this.tool.position.set(x, y, z); }

  // Feed moves per op color, rapids thin and grey.
  showPaths(ops) {
    if (this.paths) { this.content.remove(this.paths); this.paths.traverse((o) => { o.geometry?.dispose(); o.material?.dispose(); }); }
    this.paths = new THREE.Group();
    for (const op of ops) {
      const t = op.track;
      if (!t) continue;
      const feed = [], rapid = [];
      for (let i = 4; i < t.length; i += 4) {
        (t[i + 3] > 0 ? feed : rapid).push(t[i - 4], t[i - 3], t[i - 2] + 0.02, t[i], t[i + 1], t[i + 2] + 0.02);
      }
      const add = (arr, color, opacity) => {
        if (!arr.length) return;
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.Float32BufferAttribute(arr, 3));
        const l = new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color, transparent: true, opacity }));
        l.renderOrder = 3;
        this.paths.add(l);
      };
      add(feed, OP_COLORS[op.kind] || '#1abc9c', 0.75);
      add(rapid, '#93a2b4', 0.3);
    }
    this.content.add(this.paths);
  }

  dispose() {
    this.alive = false;
    this.resize.disconnect();
    this.clear();
    this.controls.dispose();
    this.renderer.dispose();
  }
}
