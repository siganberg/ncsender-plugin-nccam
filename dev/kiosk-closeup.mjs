// Opens ncCAM in the kiosk's web UI (headless, on the Mac) and walks to the
// preview. Never presses Load. node dev/kiosk-run.mjs [host] [fixture]
import { chromium } from 'playwright-core';
const exe = `${process.env.HOME}/Library/Caches/ms-playwright/chromium-1223/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`;
const host = process.argv[2] || '10.0.2.254';
const fixture = process.argv[3] || 'bracket.step';
const b = await chromium.launch({ executablePath: exe, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await b.newPage({ viewport: { width: +(process.env.W || 1080), height: +(process.env.H || 1920) } });
page.on('pageerror', (e) => console.log('pageerror', e.message));
page.on('console', (m) => { if (m.type() === 'error') console.log('console', m.text().slice(0, 200)); });
await page.goto(`http://${host}:8090/`);
await page.waitForTimeout(5000);
if (!(await page.$('.ncc-wrapper'))) {
  await page.evaluate(() => [...document.querySelectorAll('button')].find((e) => e.textContent.trim() === 'Plugins')?.click());
  await page.waitForTimeout(800);
  const opened = await page.evaluate(() => {
    const el = [...document.querySelectorAll('button, [role="menuitem"], li, a, div')].reverse().find((e) => e.textContent.trim() === 'ncCAM');
    if (el) { el.click(); return 'direct'; }
    return null;
  });
  console.log('open:', opened);
  if (!opened) {
    const labels = await page.$$eval('button', (bs) => bs.map((x) => (x.getAttribute('aria-label') || x.title || x.textContent || '').trim()).filter(Boolean));
    console.log('buttons:', labels.join(' | ').slice(0, 1500));
    await b.close(); process.exit(0);
  }
}
await page.waitForSelector('[data-file]', { state: 'attached', timeout: 30000 });
await page.screenshot({ path: 'dist/shots/k-1.png' });
await page.setInputFiles('[data-file]', `tests/fixtures/${fixture}`);
await page.waitForFunction(() => document.querySelector('.ncc-found .ncc-row'), null, { timeout: 90000 });
await page.waitForTimeout(800);
await page.screenshot({ path: 'dist/shots/k-2.png' });
if (process.env.UP) { await page.click(`.ncc-pick[data-up="${process.env.UP}"]`); await page.waitForTimeout(4000); }
await page.click('.ncc-foot [data-go="2"]'); await page.waitForTimeout(600);
await page.screenshot({ path: 'dist/shots/k-3.png' });
await page.click('.ncc-foot [data-go="3"]'); await page.waitForTimeout(900);
await page.screenshot({ path: 'dist/shots/k-4.png' });
await page.click('.ncc-foot [data-go="4"]');
await page.waitForFunction(() => document.querySelector('.ncc-check'), null, { timeout: 90000 });
await page.waitForTimeout(8000);
await page.screenshot({ path: 'dist/shots/k-5.png' });
console.log('checks', await page.$$eval('.ncc-check', (els) => els.map((e) => e.textContent)));
// Jump to the end of the program and look at the finished part
const bar = await page.$('[data-scrub]');
const bb = await bar.boundingBox();
await page.mouse.click(bb.x + bb.width - 1, bb.y + bb.height / 2);
await page.waitForTimeout(3000);
await page.screenshot({ path: 'dist/shots/k-6.png' });
// Close-ups of the finished cut: VIEWS="name:x:y:dist[:wire],..." in mm from the stock's front-left corner
const views = (process.env.VIEWS || 'c-1:12:12:45,c-2:16:16:14:wire,c-3:10:10:8').split(',').map((v) => v.split(':'));
for (const [name, x, y, d, wire] of views) {
  await page.evaluate(([x, y, d, wire]) => {
    const v = window.__nccam.viewer, hm = window.__nccam.PLAY.hm;
    v.content.traverse((o) => { if (o.isMesh && o.geometry === v.stock.geo && o.material.vertexColors) o.material.wireframe = !!wire; });
    v.keepCamera = true;
    const tx = hm.x0 + x, ty = hm.y0 + y;
    v.controls.target.set(tx, ty, hm.top - 2);
    v.camera.position.set(tx + d * 0.5, ty - d * 0.7, hm.top + d * 0.6);
    v.controls.update();
  }, [+x, +y, +d, wire]);
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `dist/shots/${name}.png`, clip: await page.$eval('.ncc-viewport', (e) => { const r = e.getBoundingClientRect(); return { x: r.x, y: r.y, width: r.width, height: r.height }; }) });
}
await page.click('[data-act="close"]'); await page.waitForTimeout(500);
console.log('closed:', !(await page.$('.ncc-wrapper')));
await b.close();
