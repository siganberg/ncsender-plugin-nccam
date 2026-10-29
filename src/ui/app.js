// The ncCAM wizard: Model, Stock & Zero, Operations, Preview & Load.
import { Color } from 'three';
import * as N from '../core/index.js';
import { Viewer, OP_COLORS, STOCK_COLORS } from './viewer.js';
import * as store from './store.js';

const STEPS = ['Model', 'Stock & Zero', 'Operations', 'Preview & Load'];
const SIDES = [['top', 'Top'], ['bottom', 'Bottom'], ['front', 'Front'], ['back', 'Back'], ['left', 'Left'], ['right', 'Right']];

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const mm = (v, d = 1) => `${(Math.round(v * 10 ** d) / 10 ** d).toLocaleString()}`;
const clock = (sec) => { const s = Math.max(0, Math.round(sec)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };

const svg = (body, size = 18, extra = '') => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${body}</svg>`;
const ICONS = {
  close: svg('<path d="M6 6l12 12M18 6L6 18"/>'),
  next: svg('<path d="M9 6l6 6-6 6"/>', 16, 'stroke-width="2.4"'),
  part: svg('<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M12 22V12M21 7l-9 5-9-5"/>', 20),
  upload: svg('<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>', 28),
  info: svg('<circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/>'),
  warn: svg('<path d="M12 3l10 18H2z"/><path d="M12 10v4M12 17h.01"/>'),
  check: svg('<path d="M5 12l5 5 9-10"/>', 12, 'stroke-width="3.2"'),
  cross: svg('<path d="M6 6l12 12M18 6L6 18"/>', 12, 'stroke-width="3.2"'),
  play: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4l13 8-13 8z"/></svg>',
  pause: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',
  load: svg('<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>', 16, 'stroke-width="2.4"'),
  face: svg('<path d="M3 9h18M3 15h18"/>'),
  pocket: svg('<rect x="4" y="6" width="16" height="12" rx="2"/>'),
  corners: svg('<path d="M4 10V6a2 2 0 012-2h4M20 14v4a2 2 0 01-2 2h-4"/>'),
  hole: svg('<circle cx="8" cy="12" r="3"/><circle cx="16" cy="12" r="3"/>'),
  drill: svg('<path d="M12 3v14M8 13l4 8 4-8"/>'),
  step: svg('<path d="M3 18h6v-6h6V6h6"/>'),
  cutout: svg('<rect x="3" y="5" width="18" height="14" rx="2" stroke-dasharray="3 2.5"/>'),
};

const SIDE_ICONS = {
  top: '<path d="M12 3l9 5-9 5-9-5z" fill="currentColor" fill-opacity=".35"/><path d="M3 8v8l9 5 9-5V8"/>',
  bottom: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M3 16l9-5 9 5" stroke-dasharray="2 2"/>',
  front: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5V13z" fill="currentColor" fill-opacity=".35"/><path d="M21 8v8l-9 5"/>',
  back: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 3v8" stroke-dasharray="2 2"/>',
  left: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5V13z" fill="currentColor" fill-opacity=".2"/><path d="M21 8v8l-9 5"/>',
  right: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 8v8l9 5"/><path d="M21 8v8l-9 5V13z" fill="currentColor" fill-opacity=".35"/>',
};

export function mountApp(root, host, engine) {
  const api = {
    get: async (p) => { const r = await fetch(host.base + p); if (!r.ok) throw new Error(`${p}: ${r.status}`); return r.json(); },
    post: (p, body) => fetch(host.base + p, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }),
  };

  const S = {
    step: 1, maxStep: 1,
    fileName: '', loading: '', error: '',
    up: 'top', analysis: null, part: null,
    tools: [], numbering: 'slot', safeZ: null, connected: false,
    limits: {}, travel: null,
    job: null, plan: null, planning: false, result: null, simChecks: null,
    toast: '',
  };
  const viewer = new Viewer();
  let planSeq = 0;

  // ---------- startup ----------
  (async () => {
    const [settings, tools, fw, state] = await Promise.all([
      api.get('/api/settings').catch(() => ({})),
      api.get('/api/tools').catch(() => []),
      api.get('/api/firmware').catch(() => null),
      api.get('/api/server-state').catch(() => null),
    ]);
    S.numbering = settings?.tool?.numbering === 'toolId' ? 'toolId' : 'slot';
    const sz = Number(settings?.safeZHeight);
    S.safeZ = Number.isFinite(sz) ? sz : null;
    S.tools = N.normalizeTools(Array.isArray(tools) ? tools : tools?.tools);
    const fs = fw?.settings || {};
    const val = (k) => { const v = parseFloat(fs[k]?.value); return Number.isFinite(v) && v > 0 ? v : null; };
    S.limits = { maxRpm: val('30') || undefined, minRpm: val('31') || undefined, maxFeed: Math.min(val('110') || Infinity, val('111') || Infinity, Infinity) };
    if (!Number.isFinite(S.limits.maxFeed)) delete S.limits.maxFeed;
    S.maxRapid = Math.min(val('110') || 5000, val('111') || 5000);
    if (val('130') && val('131')) S.travel = { x: val('130'), y: val('131'), z: val('132') };
    S.connected = !!state?.machineState?.connected;
    render();
    const last = await store.load('last');
    if (last?.bytes && !S.part && !S.loading) openFile(null, last);
  })();

  // ---------- engine calls ----------
  // last: the saved part to open again ({ name, bytes, upPath, job })
  async function openFile(file, last = null) {
    if (!file && !last) return;
    const name = last ? last.name : file.name;
    S.fileName = name; S.loading = `Reading ${name}…`; S.error = ''; S.plan = null; S.result = null; S.analysis = null; S.part = null;
    S.step = 1; S.maxStep = 1;
    render();
    try {
      const bytes = last ? last.bytes : await file.arrayBuffer();
      S.bytes = bytes.slice(0);
      const info = await engine('load', { bytes }, [bytes]);
      S.sides = info.sides;
      if (last?.upPath?.length) {
        S.job = null;
        for (const up of last.upPath) await orient(up, true);
        S.job = { ...N.defaultJob(S.analysis), ...last.job };
        await replan();
      } else {
        await orient(info.best);
      }
      remember();
    } catch (e) {
      S.error = e.message || String(e);
      S.fileName = '';
    }
    S.loading = '';
    render();
  }

  // How the part was turned: a side, then any clicked faces, replayed on reopen
  async function orient(up, replaying = false) {
    S.loading = 'Turning the part…';
    render();
    const r = await engine(Array.isArray(up) ? 'tilt' : 'orient', Array.isArray(up) ? { normal: up } : { up });
    S.up = Array.isArray(up) ? 'custom' : up;
    S.upPath = Array.isArray(up) ? [...(S.upPath || []), up] : [up];
    if (replaying) { S.part = { positions: r.positions, indices: r.indices }; S.analysis = r.analysis; S.loading = ''; return; }
    S.part = { positions: r.positions, indices: r.indices };
    S.analysis = r.analysis;
    const keep = S.job;
    S.job = N.defaultJob(r.analysis);
    if (keep) Object.assign(S.job, { material: keep.material, finish: keep.finish, zero: keep.zero, tabs: keep.tabs, stock: { ...S.job.stock, fit: keep.stock.fit, margin: keep.stock.margin, extraTop: keep.stock.extraTop } });
    S.loading = '';
    await replan();
  }

  async function replan(paths = false) {
    if (!S.part) return;
    const seq = ++planSeq;
    S.planning = true;
    if (paths) S.result = null;
    render();
    try {
      const r = await engine('plan', {
        tools: S.tools, job: S.job, limits: S.limits, paths,
        gcodeOptions: { name: S.fileName, numbering: S.numbering, safeZHeightMm: S.safeZ },
        timing: { maxRapid: S.maxRapid || 5000 },
      });
      if (seq !== planSeq) return;
      S.plan = r.plan;
      remember();
      if (paths) { S.result = r; S.simChecks = null; }
    } catch (e) {
      if (seq === planSeq) S.error = e.message || String(e);
    }
    if (seq === planSeq) { S.planning = false; render(); }
  }

  // The part and its settings for next time
  let saveTimer = null;
  function remember() {
    if (!S.bytes || !S.job) return;
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => store.save('last', { name: S.fileName, bytes: S.bytes, upPath: S.upPath, job: S.job, savedAt: Date.now() }), 400);
  }

  // ---------- rendering ----------
  function render() {
    if (!root.isConnected) return;
    const scrolled = root.querySelector('[data-keep-scroll]');
    const keepTop = scrolled ? scrolled.scrollTop : 0;
    const step = S.step;
    const lede = [
      'Drop a STEP file. ncCAM finds the pockets, holes and outline for you.',
      'Pick the material. ncCAM sets the speeds, feeds and depth of each pass.',
      'Tools are picked from your Tool Library. Change any of them, or just continue.',
      'Watch the cut play through. When it looks right, load it.',
    ][step - 1];
    const title = [S.part ? 'Your part' : 'Open your part', 'What are you cutting it from?', 'Here’s the plan', S.simChecks && !S.simChecks.ok ? 'Check the warnings' : 'Ready to cut'][step - 1];
    root.innerHTML = `
      <nav class="ncc-rail" aria-label="Steps">
        <div class="ncc-rail-head"><div class="ncc-eyebrow">Plugin</div><div class="ncc-rail-title">ncCAM<span class="ncc-beta">Beta</span></div><div class="ncc-rail-sub">STEP file to G-code</div></div>
        <div class="ncc-steps">${STEPS.map((name, i) => {
          const n = i + 1, cls = n === step ? 'on' : n < S.maxStep || (n < step) ? 'done' : '';
          return `<button class="ncc-step ${cls}" type="button" data-go="${n}" ${n <= S.maxStep ? '' : 'disabled'}><span class="ncc-num">${cls === 'done' ? '✓' : n}</span>${esc(name)}</button>`;
        }).join('')}</div>
        <button class="ncc-close" type="button" data-act="close">${ICONS.close}Close</button>
      </nav>
      <section class="ncc-main">
        <div class="ncc-top">
          <div><h1>${esc(title)}</h1><p class="ncc-lede">${esc(lede)}</p></div>
          <div class="ncc-conn"><span class="ncc-dot ${S.connected ? 'ok' : ''}"></span>${S.connected ? 'Connected' : 'Not connected'}</div>
        </div>
        <div class="ncc-body ${step === 3 ? 'fixed' : ''}">${[stepModel, stepStock, stepOps, stepPreview][step - 1]()}</div>
        <div class="ncc-foot">${footer()}</div>
      </section>
      ${S.toast ? `<div class="ncc-toast" role="status">${esc(S.toast)}</div>` : ''}`;
    const again = root.querySelector('[data-keep-scroll]');
    if (again) again.scrollTop = keepTop;
    const slot = root.querySelector('[data-viewer]');
    if (slot) {
      slot.replaceWith(viewer.el);
      const busy = S.loading || (step === 4 && !S.result) ? `<div class="ncc-busy"><span class="ncc-spin"></span>${esc(S.loading || 'Making toolpaths…')}</div>` : '';
      viewer.el.querySelectorAll('.ncc-busy, .ncc-overlay').forEach((e) => e.remove());
      viewer.el.insertAdjacentHTML('beforeend', (step === 1 ? modelOverlay() : step === 4 ? previewOverlay() : '') + busy);
      viewer.fit();
      if (step === 1) showPartView();
      if (step === 2) showZeroView();
      if (step === 3) showOpsView();
      if (step === 4 && S.result) showPreview();
    }
  }

  function footer() {
    const back = `<button class="ncc-back" type="button" data-go="${S.step - 1}" ${S.step > 1 ? '' : 'disabled'}>Back</button>`;
    if (S.step === 1) return `${back}<button class="ncc-next" type="button" data-go="2" ${S.plan && S.plan.ops.length && !S.loading ? '' : 'disabled'}>Next: Stock ${ICONS.next}</button>`;
    if (S.step === 2) return `${back}<button class="ncc-next" type="button" data-go="3">Next: Operations ${ICONS.next}</button>`;
    if (S.step === 3) {
      const any = S.plan && S.plan.ops.some((o) => o.enabled);
      return `${back}<button class="ncc-next" type="button" data-go="4" ${any && !S.planning ? '' : 'disabled'}>Make toolpaths ${ICONS.next}</button>`;
    }
    const bad = S.simChecks && !S.simChecks.ok;
    return `${back}${bad ? '<span class="ncc-foot-note ncc-bad">Fix the problems above before loading.</span>' : ''}<button class="ncc-next" type="button" data-act="load" ${S.result && S.simChecks && !bad ? '' : 'disabled'}>${ICONS.load}Load into ncSender</button>`;
  }

  // ---------- step 1 ----------
  function stepModel() {
    if (!S.part && !S.loading) {
      return `<div class="ncc-drop" data-drop>
        <div class="ncc-drop-icon">${ICONS.upload}</div>
        <h2>Drop a STEP file here</h2>
        <p>Export your part from Fusion, Onshape, FreeCAD or SolidWorks as <strong>.step</strong> or <strong>.stp</strong>. Millimetres or inches both work.</p>
        <label class="ncc-btn" style="display: inline-flex; align-items: center; gap: 8px">Open STEP file<input type="file" accept=".step,.stp,.STEP,.STP" data-file hidden></label>
        ${S.error ? `<div class="ncc-hint bad" style="max-width: 520px">${ICONS.warn}<span>${esc(S.error)}</span></div>` : ''}
        ${S.tools.length ? '' : `<div class="ncc-hint" style="max-width: 520px">${ICONS.info}<span>Your Tool Library is empty. Add your end mills in Settings → Tool Library so ncCAM can pick them.</span></div>`}
      </div>`;
    }
    const a = S.analysis;
    return `
      <div class="ncc-card ncc-viewcard ncc-grow">
        <div class="ncc-file">
          <div style="display: flex; align-items: center; gap: 12px; min-width: 0">
            <div class="ncc-drop-icon" style="width: 38px; height: 38px; border-radius: 10px">${ICONS.part}</div>
            <div style="min-width: 0"><div class="ncc-file-name">${esc(S.fileName)}</div>
            <div class="ncc-file-sub ncc-mono">${a ? `${mm(a.size[0])} × ${mm(a.size[1])} × ${mm(a.size[2])} mm` : '&nbsp;'}</div></div>
          </div>
          <label class="ncc-btn muted" style="white-space: nowrap">Open another file<input type="file" accept=".step,.stp,.STEP,.STP" data-file hidden></label>
        </div>
        <div data-viewer></div>
      </div>
      <div class="ncc-col ncc-side">
        <div class="ncc-card">
          <div class="ncc-label">Which side faces up?</div>
          <div class="ncc-picks">${SIDES.map(([k, label]) => {
            const ok = !S.sides || S.sides[k].reachable;
            return `<button class="ncc-pick ${S.up === k ? 'sel' : ''}" type="button" data-up="${k}" ${ok ? '' : 'disabled'} ${ok ? '' : `title="With the ${label.toLowerCase()} up, some faces point down and the tool can\u2019t reach them"`}>${svg(SIDE_ICONS[k], 24, 'stroke-width="1.8"')}${label}${ok ? '' : '<small>Can\u2019t reach</small>'}</button>`;
          }).join('')}</div>
          <div class="ncc-row-sub">Or click a flat face on the model to put it on top.</div>
        </div>
        ${foundCard()}
        ${planHints(true)}
      </div>`;
  }

  function foundCard() {
    if (!S.plan) return `<div class="ncc-card"><div class="ncc-label">Found in this part</div><div class="ncc-row-sub">${S.planning ? 'Looking…' : ''}</div></div>`;
    // The same feature more than once is one line: "5 pockets, through"
    const groups = new Map();
    for (const o of S.plan.ops.filter((x) => x.kind !== 'face' && x.kind !== 'corners')) {
      const name = featureName(o);
      const g = groups.get(name) || { o, name, n: 0 };
      g.n += o.count || 1;
      groups.set(name, g);
    }
    const label = (g) => (g.n < 2 ? g.name : g.name.replace(/^(Pocket|Step), /, (_, w) => `${g.n} ${w.toLowerCase()}s, `));
    return `<div class="ncc-card"><div class="ncc-label">Found in this part</div><div class="ncc-found">${[...groups.values()].map((g) =>
      `<div class="ncc-row"><span style="display: flex; align-items: center; gap: 8px"><span class="ncc-swatch" style="background: ${OP_COLORS[g.o.kind]}"></span>${esc(label(g))}</span><span class="ncc-ok">✓</span></div>`).join('') || '<div class="ncc-row-sub">Nothing to cut from this side.</div>'}</div></div>`;
  }

  function featureName(o) {
    const d = o.detail.replace(/ · spiral$/, '');
    if (o.kind === 'cutout') return `Outline, ${mm(o.zTop)} mm cut-out`;
    if (o.kind === 'hole' || o.kind === 'drill') return `${o.centers.length > 1 ? `${o.centers.length} holes` : 'Hole'}, ${d}`;
    if (o.kind === 'step') return `Step, ${d}`;
    return `Pocket, ${d.split(' · ').pop()}`;
  }

  function planHints(modelStep) {
    if (!S.plan) return '';
    const w = S.plan.warnings.filter((x) => !modelStep || x.kind === 'undercut' || x.kind === 'sloped' || x.kind === 'edges');
    if (!w.length && modelStep) return `<div class="ncc-hint">${ICONS.info}<span>Everything can be cut from the top in one setup.</span></div>`;
    return w.map((x) => `<div class="ncc-hint ${x.kind === 'undercut' || x.kind === 'notool' ? 'bad' : ''}">${x.kind === 'undercut' || x.kind === 'notool' ? ICONS.warn : ICONS.info}<span>${esc(x.text)}</span></div>`).join('');
  }

  function modelOverlay() {
    if (!S.plan) return '';
    const kinds = [...new Set(S.plan.ops.filter((o) => o.kind !== 'face' && o.kind !== 'corners').map((o) => o.kind))];
    const label = { pocket: 'Pockets', hole: 'Holes', drill: 'Holes', step: 'Steps', cutout: 'Outline' };
    return `<div class="ncc-overlay tr">${kinds.map((k) => `<span class="ncc-chip"><span class="ncc-swatch" style="background: ${OP_COLORS[k]}"></span>${label[k]}</span>`).join('')}</div>
      <div class="ncc-overlay bl"><span class="ncc-chip">Drag to rotate</span><span class="ncc-chip">Scroll to zoom</span><span class="ncc-chip">Click a face to put it on top</span></div>`;
  }

  let shownPart = null;
  function showPartView() {
    if (!S.part) return;
    shownResult = null; shownZero = null;
    const key = S.part.positions;
    const overlays = (S.plan?.ops || []).filter((o) => o.kind !== 'face' && o.kind !== 'corners').flatMap((o) => {
      if (o.kind === 'cutout') return [{ loops: o.region, z: o.zTop + 0.05, color: OP_COLORS.cutout, dashed: true }];
      if (o.centers && !o.region) return [{ loops: o.centers.map((c) => circle(c)), z: o.zTop + 0.05, color: OP_COLORS[o.kind] }];
      return [{ loops: o.region, z: o.zTop + 0.05, color: OP_COLORS[o.kind] }];
    });
    viewer.keepCamera = shownPart === key;
    viewer.showPart(S.part, overlays);
    shownPart = key;
    viewer.onFrame = null;
    viewer.onPick = async (n) => {
      if (S.loading) return;
      const back = S.up;
      try {
        await orient(n);
        // A face that leaves undercuts goes back to the side it was on
        if (S.analysis.undercut && back !== 'custom' && (!S.sides || S.sides[back]?.reachable)) {
          await orient(back);
          flash('With that face up, some of the part can\u2019t be reached from the top.');
        }
      } catch (e) { S.error = e.message; render(); }
    };
  }

  // ---------- step 2 ----------
  function stepStock() {
    const j = S.job, st = S.plan?.stock || N.stockBox(S.analysis, j);
    const mats = Object.entries(N.MATERIALS).map(([k, m]) => `<button class="ncc-pick ncc-mat ${j.material === k ? 'sel' : ''}" type="button" data-material="${k}"><span class="ncc-mat-swatch" style="background: ${STOCK_COLORS[k]}"></span>${esc(m.name)}<small>${esc(m.note)}</small></button>`).join('');
    const field = (key, label, value) => `<div class="ncc-field"><label for="ncc-${key}">${label}</label><input id="ncc-${key}" class="ncc-input ncc-mono" inputmode="decimal" data-stock="${key}" value="${Math.round(value * 100) / 100}" ${j.stock.fit ? 'disabled' : ''}></div>`;
    // Two even columns: what the stock is on the left, where zero is on the right
    return `
      <div class="ncc-col ncc-half">
        <div class="ncc-card ncc-mat-card"><div class="ncc-label">Material</div><div class="ncc-picks ncc-mats">${mats}</div></div>
        <div class="ncc-card">
          ${toggleRow('fit', 'Size the stock to the part', `Adds ${mm(j.stock.margin)} mm on every side and ${mm(j.stock.extraTop)} mm on top`, j.stock.fit)}
          <div class="ncc-fields">${field('width', 'Width X (mm)', st.width)}${field('depth', 'Depth Y (mm)', st.depth)}${field('thickness', 'Thickness Z (mm)', st.thickness)}</div>
        </div>
        <div class="ncc-card">
          ${toggleRow('tabs', 'Leave tabs to hold the part', j.tabs.enabled ? `${mm(j.tabs.height)} mm tall, so the part stays put until you cut it free` : 'The part comes loose at the end', j.tabs.enabled)}
          ${j.tabs.enabled ? `<div class="ncc-row"><span class="ncc-row-title" style="font-weight: 500">Number of tabs</span><div class="ncc-stepper"><button type="button" data-tabs="-1" aria-label="Fewer tabs" ${j.tabs.count <= 1 ? 'disabled' : ''}>\u2212</button><span class="ncc-mono">${j.tabs.count}</span><button type="button" data-tabs="1" aria-label="More tabs" ${j.tabs.count >= 12 ? 'disabled' : ''}>+</button></div></div>` : ''}
        </div>
      </div>
      <div class="ncc-col ncc-half">
        <div class="ncc-card ncc-zero-card"><div class="ncc-label">Where is zero?</div>${zeroPicker(st)}
          <div style="font-size: 14px">X Y zero: <strong>${esc(zeroName(j.zero.xy))}</strong> of the stock</div>
          <div class="ncc-seg" role="group" aria-label="Z zero">
            <button type="button" class="${j.zero.z === 'top' ? 'sel' : ''}" data-z="top">Z0 on top of stock</button>
            <button type="button" class="${j.zero.z === 'bed' ? 'sel' : ''}" data-z="bed">Z0 on the bed</button>
          </div>
        </div>
      </div>`;
  }

  const toggleRow = (key, title, sub, on) => `<div class="ncc-row"><div class="ncc-row-text"><div class="ncc-row-title">${esc(title)}</div><div class="ncc-row-sub">${esc(sub)}</div></div><button class="ncc-toggle" type="button" role="switch" aria-checked="${on}" aria-label="${esc(title)}" data-toggle="${key}"></button></div>`;

  function zeroName(xy) {
    return { 'back-left': 'back left corner', 'back-center': 'back edge, middle', 'back-right': 'back right corner', 'left-center': 'left edge, middle', center: 'center', 'right-center': 'right edge, middle', 'front-left': 'front left corner', 'front-center': 'front edge, middle', 'front-right': 'front right corner' }[xy];
  }

  // The zero picker is the 3D view (showZeroView); this is its slot
  function zeroPicker(st) {
    return `<div class="ncc-zero"><div data-viewer></div></div>
      <div class="ncc-row-sub ncc-mono" style="text-align: center; margin: 0">${mm(st.width)} \u00d7 ${mm(st.depth)} \u00d7 ${mm(st.thickness)} mm stock \u00b7 tap a point, drag to turn</div>`;
  }

  let shownZero = null;
  function showZeroView() {
    const st = S.plan?.stock || N.stockBox(S.analysis, S.job);
    const points = N.ZERO_POINTS.map((key) => ({ key, ...N.zeroPoint(st, { xy: key, z: 'top' }) }));
    const accent = getComputedStyle(root).getPropertyValue('--color-accent').trim() || '#4c6ef5';
    // Same stock: keep the camera where the operator turned it
    const key = `${S.part?.positions?.length}|${st.width}|${st.depth}|${st.thickness}`;
    viewer.keepCamera = shownZero === key;
    viewer.showZero({ stock: st, part: S.part, points, selected: S.job.zero.xy, zFace: S.job.zero.z, color: STOCK_COLORS[S.job.material], accent });
    shownZero = key;
    shownPart = null; shownResult = null;
    viewer.onPick = null;
    viewer.onMarker = (k) => { if (k !== S.job.zero.xy) { S.job.zero.xy = k; changed(); } };
  }

  // ---------- step 3 ----------
  function stepOps() {
    const p = S.plan;
    if (!p) return `<div class="ncc-busy" style="position: static; flex: 1"><span class="ncc-spin"></span>Planning\u2026</div>`;
    const rows = p.ops.map((o) => {
      const choices = toolChoices(o);
      return `<div class="ncc-op ${o.enabled ? '' : 'off'} ${S.focusOp === o.id ? 'focus' : ''}" data-focus="${o.id}">
        <div class="ncc-op-icon" style="background: color-mix(in srgb, ${OP_COLORS[o.kind]} 16%, transparent); color: ${OP_COLORS[o.kind]}">${ICONS[o.kind] || ICONS.pocket}</div>
        <div class="ncc-op-text"><div class="ncc-op-title">${esc(o.label)}</div><div class="ncc-op-sub ncc-mono">${esc(o.detail)}</div></div>
        <select class="ncc-select" data-tool="${o.id}" aria-label="Tool for ${esc(o.label)}">${choices.map((t) => `<option value="${t.id}" ${t.id === o.tool.id ? 'selected' : ''}>T${N.toolNumber(t, S.numbering)} \u00b7 ${esc(t.name)}</option>`).join('')}</select>
        <button class="ncc-toggle" type="button" role="switch" aria-checked="${o.enabled}" aria-label="${esc(o.label)}" data-op="${o.id}"></button>
      </div>`;
    }).join('');
    const used = N.toolsUsed(p);
    // Speeds of the tool that does most of the cutting
    const count = new Map();
    for (const o of p.ops) if (o.enabled && o.kind !== 'face') count.set(o.tool.id, (count.get(o.tool.id) || 0) + 1);
    const main = [...count].sort((a, b) => b[1] - a[1])[0]?.[0];
    const mainOp = p.ops.find((o) => o.enabled && o.tool.id === main) || p.ops.find((o) => o.enabled);
    const f = mainOp?.feeds;
    const pair = `<div class="ncc-pair">
          <div class="ncc-card"><div class="ncc-label">Finish</div>
            <div class="ncc-seg" role="group" aria-label="Finish">${Object.entries(N.FINISHES).map(([k, v]) => `<button type="button" class="${S.job.finish === k ? 'sel' : ''}" data-finish="${k}">${v.name}</button>`).join('')}</div>
            <div class="ncc-row-sub">${{ fast: 'Bigger steps, no finishing pass.', balanced: 'Leaves 0.2 mm on the walls, then a clean finishing pass.', smooth: 'Lighter steps and a finishing pass, for the best walls.' }[S.job.finish]}</div>
            ${f ? `<div class="ncc-mono ncc-row-sub" style="line-height: 1.6">${esc(mainOp.tool.name)}<br>${esc(N.MATERIALS[S.job.material].name)} \u00b7 ${f.rpm.toLocaleString()} RPM<br>${f.feed.toLocaleString()} mm/min \u00b7 ${mm(f.stepdown, 2)} mm per pass</div>` : ''}
          </div>
          <div class="ncc-card"><div class="ncc-label">Tools for this job</div>
            ${used.map((t) => `<div class="ncc-row"><span style="min-width: 0"><span class="ncc-mono" style="color: var(--color-accent)">T${N.toolNumber(t, S.numbering)}</span> ${esc(t.name)}</span><span class="ncc-slot ${t.toolNumber ? '' : 'hand'}">${t.toolNumber ? `Slot ${t.toolNumber}` : 'By hand'}</span></div>`).join('') || '<div class="ncc-row-sub">No operations switched on.</div>'}
            ${used.some((t) => !t.toolNumber) ? `<div class="ncc-row-sub">By hand: not in the magazine, so you\u2019ll be asked to load it.</div>` : ''}
          </div>
        </div>`;
    // Landscape: list | drawing over Finish + Tools. Portrait: the drawing
    // stays on top and only the list (Finish + Tools at its end) scrolls.
    return `<div class="ncc-plan">
        <div class="ncc-plan-list" data-keep-scroll="ops"><div class="ncc-ops">${rows}</div>${planHints(false)}<div class="ncc-plan-pair-in">${pair}</div></div>
        <div class="ncc-card ncc-viewcard ncc-plan-view"><div data-viewer></div></div>
        <div class="ncc-plan-pair">${pair}</div>
      </div>`;
  }

  // Step 3's view: every operation on the part in its color; the tapped one
  // stands out, the rest fade.
  function showOpsView() {
    const ops = (S.plan?.ops || []).filter((o) => o.enabled && o.kind !== 'face');
    const overlays = ops.map((o) => {
      const dim = S.focusOp && S.focusOp !== o.id;
      const loops = o.region || (o.centers || []).map((c) => circle(c));
      return { loops, z: o.kind === 'cutout' ? o.zTop + 0.05 : Math.max(o.zBottom, 0) + 0.05, color: OP_COLORS[o.kind], dashed: o.kind === 'cutout', opacity: dim ? 0.2 : 1, top: o.zTop };
    });
    viewer.keepCamera = shownPart === S.part?.positions;
    viewer.showPart(S.part, overlays);
    shownPart = S.part?.positions;
    shownResult = null; shownZero = null;
    viewer.onFrame = null; viewer.onMarker = null; viewer.onPick = null;
  }

  function toolChoices(o) {
    const kinds = o.kind === 'drill' ? ['drill'] : o.kind === 'face' ? ['surfacing', 'flat'] : ['flat'];
    const list = S.tools.filter((t) => kinds.includes(t.kind)).sort((a, b) => b.diameter - a.diameter);
    return list.some((t) => t.id === o.tool.id) ? list : [o.tool, ...list];
  }

  // ---------- step 4 ----------
  function stepPreview() {
    const r = S.result;
    const p = r?.plan;
    const used = p ? N.toolsUsed(p) : [];
    const changes = p ? p.ops.filter((o) => o.enabled).reduce((n, o, i, a) => n + (i > 0 && a[i - 1].tool.id !== o.tool.id ? 1 : 0), 0) : 0;
    return `
      <div class="ncc-card ncc-viewcard ncc-grow">
        <div data-viewer></div>
        <div class="ncc-play" data-playbar>${playbar()}</div>
      </div>
      <div class="ncc-col ncc-side">
        <div class="ncc-card ncc-stats">
          <div class="ncc-stat"><b class="ncc-mono">${p ? Math.max(1, Math.round(r.seconds / 60)) : '–'}<span> min</span></b><span>Run time</span></div>
          <div class="ncc-stat"><b class="ncc-mono">${used.length || '–'}</b><span>Tools</span></div>
          <div class="ncc-stat"><b class="ncc-mono">${p ? changes : '–'}</b><span>Tool changes</span></div>
        </div>
        <div class="ncc-card"><div class="ncc-label">Checked</div>${checks()}</div>
        <div class="ncc-card">
          <div class="ncc-mono ncc-row-sub" style="margin: 0">${esc(programName())}${r ? ` · ${(r.gcode.split('\n').length - 1).toLocaleString()} lines` : ''}</div>
          <button class="ncc-btn muted" type="button" data-act="save" ${r ? '' : 'disabled'}>Save to File Manager</button>
        </div>
      </div>`;
  }

  const programName = () => `${(S.fileName || 'part').replace(/\.(step|stp)$/i, '')}.nc`;

  function checks() {
    const c = S.simChecks;
    if (!c) return `<div class="ncc-row-sub">${S.result ? 'Checking…' : 'Waiting for the toolpaths…'}</div>`;
    return c.items.map((i) => `<div class="ncc-check"><span class="ncc-ck ${i.state}">${i.state === 'bad' ? ICONS.cross : i.state === 'info' ? '!' : ICONS.check}</span><span>${esc(i.text)}</span></div>`).join('');
  }

  // ---------- playback ----------
  const PLAY = { ops: [], moves: null, opOf: null, cum: null, total: 0, t: 0, i: 1, playing: false, speed: 20, hm: null, stamps: [], colors: [], cursor: null };

  function playbar() {
    if (!S.result) return '';
    const p = S.result.plan;
    const ops = p.ops.filter((o) => o.enabled && o.track);
    const total = PLAY.total || 1;
    const cur = ops[Math.max(0, PLAY.opIndexAt?.(PLAY.t) ?? 0)];
    return `<button class="ncc-playbtn" type="button" data-act="play" aria-label="${PLAY.playing ? 'Pause' : 'Play'}">${PLAY.playing ? ICONS.pause : ICONS.play}</button>
      <div class="ncc-track">
        <div class="ncc-bar" data-scrub role="slider" aria-label="Position in the program" aria-valuemin="0" aria-valuemax="${Math.round(total)}" aria-valuenow="${Math.round(PLAY.t)}">
          ${ops.map((o) => `<i style="width: ${((o.seconds || 0) / total) * 100}%; background: ${OP_COLORS[o.kind]}"></i>`).join('')}
          <b style="width: ${(PLAY.t / total) * 100}%"></b><em style="left: ${(PLAY.t / total) * 100}%"></em>
        </div>
        <div class="ncc-row" style="font-size: 12px; color: var(--color-text-secondary)"><span>${cur ? `Step ${ops.indexOf(cur) + 1} of ${ops.length} · ${esc(cur.label)} · T${N.toolNumber(cur.tool, S.numbering)}` : ''}</span><span class="ncc-mono">${clock(PLAY.t)} / ${clock(total)}</span></div>
      </div>
      <div class="ncc-seg" style="padding: 3px" role="group" aria-label="Speed">${[[5, 'Slow'], [20, 'Normal'], [100, 'Fast']].map(([v, l]) => `<button type="button" style="padding: 6px 8px" class="${PLAY.speed === v ? 'sel' : ''}" data-speed="${v}">${l}</button>`).join('')}</div>`;
  }

  function previewOverlay() {
    return `<div class="ncc-overlay tr">
      <button class="ncc-chip ${viewer.paths?.visible !== false && S.showPaths ? 'on' : ''}" type="button" data-act="paths">Toolpaths</button>
      <button class="ncc-chip ${S.showPart ? 'on' : ''}" type="button" data-act="ghost">Part</button>
    </div>`;
  }

  let shownResult = null;
  function showPreview() {
    if (shownResult === S.result) { syncOverlays(); return; }
    shownResult = S.result;
    shownPart = null; shownZero = null;
    viewer.onMarker = null; viewer.onPick = null;
    const p = S.result.plan;
    const ops = p.ops.filter((o) => o.enabled && o.track);
    const cell = N.HeightMap.cellFor(p.stock, 520 * 520);
    PLAY.ops = ops;
    PLAY.hm = new N.HeightMap(p.stock, cell);
    PLAY.colors = p.ops.map((o) => new Color(OP_COLORS[o.kind]));
    PLAY.stamps = p.ops.map((o) => N.toolStamp(o.tool, cell));
    // One list of moves with the time each one ends
    let n = 0;
    for (const o of ops) n += o.track.length / 4;
    PLAY.moves = new Float32Array(n * 4); PLAY.opOf = new Uint16Array(n); PLAY.cum = new Float64Array(n);
    let k = 0, t = 0, prev = null;
    const rapid = S.maxRapid || 5000;
    for (const o of ops) {
      const oi = p.ops.indexOf(o);
      for (let i = 0; i < o.track.length; i += 4, k++) {
        PLAY.moves.set(o.track.subarray(i, i + 4), k * 4);
        PLAY.opOf[k] = oi;
        if (prev) {
          const d = Math.hypot(o.track[i] - prev[0], o.track[i + 1] - prev[1], o.track[i + 2] - prev[2]);
          t += (d / (o.track[i + 3] > 0 ? o.track[i + 3] : rapid)) * 60;
        }
        prev = [o.track[i], o.track[i + 1], o.track[i + 2]];
        PLAY.cum[k] = t;
      }
    }
    PLAY.total = t;
    PLAY.opIndexAt = (time) => { const i = Math.min(n - 1, lowerBound(PLAY.cum, time)); return ops.indexOf(p.ops[PLAY.opOf[i]]); };
    PLAY.t = 0; PLAY.i = 1; PLAY.cursor = null; PLAY.toolOp = -1;
    viewer.showStock(PLAY.hm, STOCK_COLORS[p.job.material] || STOCK_COLORS.mdf, S.part);
    viewer.showPaths(ops);
    S.showPaths = S.showPaths ?? false;
    syncOverlays();
    placeTool(0);
    // Speed so the whole job plays in about 40 s at 20x
    PLAY.speed = 20;
    PLAY.rate = Math.max(1, PLAY.total / 40 / 20);
    viewer.onFrame = frame;
    runChecks(p);
    PLAY.playing = true;
    updatePlaybar();
  }

  function syncOverlays() {
    if (viewer.paths) viewer.paths.visible = !!S.showPaths;
    if (viewer.partGhost) viewer.partGhost.visible = !!S.showPart;
  }

  function lowerBound(arr, v) {
    let lo = 0, hi = arr.length;
    while (lo < hi) { const m = (lo + hi) >> 1; if (arr[m] < v) lo = m + 1; else hi = m; }
    return lo;
  }

  const moveAt = (k) => ({ x: PLAY.moves[k * 4], y: PLAY.moves[k * 4 + 1], z: PLAY.moves[k * 4 + 2], r: PLAY.moves[k * 4 + 3] === 0 });

  // Cuts everything up to time t; returns the rows that changed.
  function advance(t) {
    const hm = PLAY.hm, n = PLAY.cum.length;
    let j0 = Infinity, j1 = -1;
    const touch = (a, b, oi) => {
      const rad = (S.result.plan.ops[oi].tool.diameter / 2) / hm.cell + 1;
      const ja = Math.floor((Math.min(a.y, b.y) - hm.y0) / hm.cell - rad), jb = Math.ceil((Math.max(a.y, b.y) - hm.y0) / hm.cell + rad);
      j0 = Math.min(j0, Math.max(0, ja)); j1 = Math.max(j1, Math.min(hm.ny - 1, jb));
    };
    while (PLAY.i < n && PLAY.cum[PLAY.i] <= t) {
      const a = PLAY.cursor || moveAt(PLAY.i - 1), b = moveAt(PLAY.i), oi = PLAY.opOf[PLAY.i];
      if (!b.r || a.z < hm.top) { N.cutMove(hm, PLAY.stamps[oi], a, b, b.r, oi); touch(a, b, oi); }
      PLAY.cursor = null;
      PLAY.i++;
    }
    // Part way along the next move
    if (PLAY.i < n && t > PLAY.cum[PLAY.i - 1]) {
      const a = PLAY.cursor || moveAt(PLAY.i - 1), b = moveAt(PLAY.i), oi = PLAY.opOf[PLAY.i];
      const t0 = PLAY.cum[PLAY.i - 1], f = (t - t0) / (PLAY.cum[PLAY.i] - t0 || 1);
      const start = moveAt(PLAY.i - 1);
      const m = { x: start.x + (b.x - start.x) * f, y: start.y + (b.y - start.y) * f, z: start.z + (b.z - start.z) * f };
      if (!b.r) { N.cutMove(hm, PLAY.stamps[oi], a, m, false, oi); touch(a, m, oi); }
      PLAY.cursor = m;
    }
    return [j0, j1];
  }

  function placeTool(t) {
    const n = PLAY.cum.length;
    if (!n) return;
    const i = Math.min(n - 1, lowerBound(PLAY.cum, t));
    const oi = PLAY.opOf[i];
    if (oi !== PLAY.toolOp) {
      const op = S.result.plan.ops[oi];
      viewer.setTool(op.tool, op.zTop - op.zBottom);
      PLAY.toolOp = oi;
    }
    const p = PLAY.cursor || moveAt(Math.max(0, PLAY.i - 1));
    viewer.moveTool(p.x, p.y, p.z);
  }

  let lastFrame = 0, lastBar = 0;
  function frame(now) {
    const dt = lastFrame ? Math.min(0.1, (now - lastFrame) / 1000) : 0;
    lastFrame = now;
    if (!PLAY.playing || !PLAY.cum) return;
    PLAY.t = Math.min(PLAY.total, PLAY.t + dt * PLAY.speed * PLAY.rate);
    const [j0, j1] = advance(PLAY.t);
    viewer.refreshStock(j0, j1, PLAY.colors);
    placeTool(PLAY.t);
    if (PLAY.t >= PLAY.total) { PLAY.playing = false; updatePlaybar(); }
    else if (now - lastBar > 200) { lastBar = now; updatePlaybar(); }
  }

  function seek(t) {
    t = Math.max(0, Math.min(PLAY.total, t));
    if (t < PLAY.t) {
      PLAY.hm.h.fill(PLAY.hm.top); PLAY.hm.op.fill(0);
      PLAY.i = 1; PLAY.cursor = null;
      advance(t);
      viewer.refreshStock(0, PLAY.hm.ny - 1, PLAY.colors);
    } else {
      const [j0, j1] = advance(t);
      viewer.refreshStock(j0, j1, PLAY.colors);
    }
    PLAY.t = t;
    placeTool(t);
    updatePlaybar();
  }

  function updatePlaybar() {
    const bar = root.querySelector('[data-playbar]');
    if (bar) bar.innerHTML = playbar();
  }

  // The whole program cut once, up front, for the checks.
  function runChecks(p) {
    setTimeout(() => {
      if (S.result?.plan !== p) return;
      const ops = p.ops.map((o) => ({ ...o, moves: o.track ? Array.from({ length: o.track.length / 4 }, (_, i) => ({ x: o.track[i * 4], y: o.track[i * 4 + 1], z: o.track[i * 4 + 2], r: o.track[i * 4 + 3] === 0, f: o.track[i * 4 + 3] })) : null }));
      const { collisions } = N.simulate({ ...p, ops }, N.HeightMap.cellFor(p.stock, 300 * 300));
      const items = [];
      items.push(collisions.length
        ? { state: 'bad', text: `${collisions.length} fast move${collisions.length > 1 ? 's go' : ' goes'} into the material (${[...new Set(collisions.map((c) => p.ops.find((o) => o.id === c.op)?.label))].join(', ')}).` }
        : { state: 'ok', text: 'No fast moves through the material' });
      if (S.travel) {
        const fits = p.stock.width <= S.travel.x && p.stock.depth <= S.travel.y;
        items.push(fits ? { state: 'ok', text: 'The stock fits inside your machine’s travel' } : { state: 'bad', text: `The stock is bigger than your machine’s travel (${mm(S.travel.x)} × ${mm(S.travel.y)} mm).` });
      }
      const used = N.toolsUsed(p);
      items.push(used.every((t) => t.fluteLength)
        ? { state: 'ok', text: 'Every tool is long enough for its depth' }
        : { state: 'info', text: 'Some tools have no cutting length in the Tool Library, so their depth isn’t checked.' });
      const cut = p.ops.find((o) => o.kind === 'cutout' && o.enabled);
      if (cut) items.push({ state: 'ok', text: `The cut-out goes ${mm(p.job.throughDepth)} mm into the spoilboard${p.job.tabs.enabled ? `, with ${p.job.tabs.count} tabs` : ''}` });
      if (p.warnings.some((w) => w.kind === 'undercut')) items.push({ state: 'bad', text: 'Some of the part can’t be reached from the top.' });
      S.simChecks = { ok: !items.some((i) => i.state === 'bad'), items };
      render();
    }, 50);
  }

  // ---------- events ----------
  const go = (n) => {
    if (n < 1 || n > 4 || n > S.maxStep + 1) return;
    if (n === 4 && S.step !== 4) { PLAY.playing = false; S.step = 4; S.maxStep = 4; render(); replan(true); return; }
    S.step = n; S.maxStep = Math.max(S.maxStep, n);
    if (n !== 4) PLAY.playing = false;
    render();
  };

  const changed = () => { S.maxStep = Math.min(S.maxStep, Math.max(S.step, 3)); S.result = null; replan(false); };

  root.addEventListener('click', (e) => {
    const row = e.target.closest('[data-focus]');
    if (row && !e.target.closest('button, select')) { S.focusOp = S.focusOp === row.dataset.focus ? null : row.dataset.focus; render(); return; }
    const t = e.target.closest('button, [data-scrub]');
    if (!t || t.disabled) return;
    const d = t.dataset;
    if (d.go) return go(+d.go);
    if (d.up) return orient(d.up).catch((err) => { S.error = err.message; render(); });
    if (d.material) { S.job.material = d.material; return changed(); }
    if (d.zero) { S.job.zero.xy = d.zero; return changed(); }
    if (d.z) { S.job.zero.z = d.z; return changed(); }
    if (d.finish) { S.job.finish = d.finish; return changed(); }
    if (d.tabs) { S.job.tabs.count = Math.max(1, Math.min(12, S.job.tabs.count + +d.tabs)); return changed(); }
    if (d.toggle === 'fit') {
      const st = S.plan?.stock;
      S.job.stock.fit = !S.job.stock.fit;
      if (!S.job.stock.fit && st) Object.assign(S.job.stock, { width: st.width, depth: st.depth, thickness: st.thickness });
      return changed();
    }
    if (d.toggle === 'tabs') { S.job.tabs.enabled = !S.job.tabs.enabled; return changed(); }
    if (d.op) { S.job.disabled[d.op] = !S.job.disabled[d.op]; return changed(); }
    if (d.speed) { PLAY.speed = +d.speed; if (!PLAY.playing && PLAY.t >= PLAY.total) seek(0); PLAY.playing = true; return updatePlaybar(); }
    if (d.act === 'play') {
      if (PLAY.t >= PLAY.total) seek(0);
      PLAY.playing = !PLAY.playing; lastFrame = 0;
      return updatePlaybar();
    }
    if (d.act === 'paths') { S.showPaths = !S.showPaths; syncOverlays(); t.classList.toggle('on', S.showPaths); return; }
    if (d.act === 'ghost') { S.showPart = !S.showPart; syncOverlays(); t.classList.toggle('on', S.showPart); return; }
    if (d.act === 'close') return close();
    if (d.act === 'load') return loadProgram(t);
    if (d.act === 'save') return saveProgram(t);
  });

  // Scrubbing the bar
  root.addEventListener('pointerdown', (e) => {
    const bar = e.target.closest('[data-scrub]');
    if (!bar || !PLAY.cum) return;
    const was = PLAY.playing;
    PLAY.playing = false;
    const at = (ev) => { const r = bar.getBoundingClientRect(); seek(((ev.clientX - r.left) / r.width) * PLAY.total); };
    at(e);
    const move = (ev) => at(ev);
    const up = () => { window.removeEventListener('pointermove', move); window.removeEventListener('pointerup', up); PLAY.playing = was && PLAY.t < PLAY.total; lastFrame = 0; updatePlaybar(); };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  });

  root.addEventListener('change', (e) => {
    const t = e.target;
    if (t.matches('[data-file]')) return openFile(t.files[0]);
    if (t.dataset.tool) { S.job.toolOverride[t.dataset.tool] = +t.value || t.value; return changed(); }
    if (t.dataset.stock) {
      const v = parseFloat(String(t.value).replace(',', '.'));
      if (Number.isFinite(v) && v > 0) S.job.stock[t.dataset.stock] = v;
      return changed();
    }
  });

  root.addEventListener('dragover', (e) => { const z = e.target.closest('[data-drop]'); if (z) { e.preventDefault(); z.classList.add('over'); } });
  root.addEventListener('dragleave', (e) => { const z = e.target.closest('[data-drop]'); if (z) z.classList.remove('over'); });
  root.addEventListener('drop', (e) => {
    const z = e.target.closest('[data-drop]');
    if (!z) return;
    e.preventDefault();
    openFile(e.dataTransfer.files[0]);
  });

  function flash(text) {
    S.toast = text; render();
    setTimeout(() => { if (S.toast === text) { S.toast = ''; render(); } }, 2600);
  }

  async function loadProgram(btn) {
    btn.disabled = true;
    try {
      const res = await api.post('/api/gcode-files/load-temp', { filename: programName(), content: S.result.gcode });
      if (!res.ok) throw new Error(`ncSender said ${res.status}`);
      close();
    } catch (e) {
      btn.disabled = false;
      flash(`Couldn’t load the program: ${e.message}`);
    }
  }

  async function saveProgram(btn) {
    btn.disabled = true;
    try {
      const path = await freePath(programName());
      const res = await api.post('/api/gcode-files/file/save', { path, content: S.result.gcode });
      if (!res.ok) throw new Error(`save failed (${res.status})`);
      flash(`Saved to File Manager: ${path}`);
    } catch (e) {
      flash(`Couldn’t save: ${e.message}`);
    }
    btn.disabled = false;
  }

  async function freePath(name) {
    const stem = name.replace(/\.nc$/, '');
    for (let n = 1; n < 1000; n++) {
      const path = `ncCAM/${n < 2 ? name : `${stem} (${n}).nc`}`;
      const probe = await fetch(`${host.base}/api/gcode-files/file?path=${encodeURIComponent(path)}`);
      if (probe.status === 404) return path;
      if (!probe.ok) throw new Error(`could not check File Manager (${probe.status})`);
    }
    throw new Error('too many saved copies');
  }

  function close() {
    PLAY.playing = false;
    window.postMessage({ type: 'close-plugin-dialog' }, '*');
  }

  render();
  // For the headless checks in dev/
  window.__nccam = { S, PLAY, viewer };
}

function circle(c, n = 48) {
  return Array.from({ length: n }, (_, i) => [c.x + (c.d / 2) * Math.cos((i / n) * 2 * Math.PI), c.y + (c.d / 2) * Math.sin((i / n) * 2 * Math.PI)]);
}
