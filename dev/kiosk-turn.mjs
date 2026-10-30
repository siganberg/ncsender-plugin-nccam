// Where is zero: taps the X, then the Z arrow, and shoots the part mid-turn
// and after. node dev/kiosk-turn.mjs [host] [fixture]
import { chromium } from 'playwright-core';
const exe = `${process.env.HOME}/Library/Caches/ms-playwright/chromium-1223/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`;
const host = process.argv[2] || '10.0.2.254';
const fixture = process.argv[3] || 'onshape-plate.step';
const b = await chromium.launch({ executablePath: exe, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await b.newPage({ viewport: { width: +(process.env.W || 1920), height: +(process.env.H || 1080) } });
page.on('pageerror', (e) => console.log('pageerror', e.message));
await page.goto(`http://${host}:8090/`);
await page.waitForTimeout(5000);
if (!(await page.$('.ncc-wrapper'))) {
  await page.evaluate(() => [...document.querySelectorAll('button')].find((e) => e.textContent.trim() === 'Plugins')?.click());
  await page.waitForTimeout(800);
  await page.evaluate(() => [...document.querySelectorAll('button, [role="menuitem"], li, a, div')].reverse().find((e) => e.textContent.trim() === 'ncCAM')?.click());
}
await page.waitForSelector('[data-file]', { state: 'attached', timeout: 30000 });
await page.setInputFiles('[data-file]', `tests/fixtures/${fixture}`);
await page.waitForFunction(() => document.querySelector('.ncc-found .ncc-row'), null, { timeout: 90000 });
await page.click('.ncc-foot [data-go="2"]'); await page.waitForTimeout(1500);
const vp = await page.$eval('.ncc-zero', (e) => { const r = e.getBoundingClientRect(); return { x: r.x, y: r.y, width: r.width, height: r.height }; });
const first = () => page.evaluate(() => Array.from(window.__nccam.S.part.positions.slice(0, 3)).map((v) => +v.toFixed(2)).join(','));
console.log('before', await first(), 'up', await page.evaluate(() => window.__nccam.S.up));
await page.screenshot({ path: 'dist/shots/turn-0.png', clip: vp });
for (const axis of ['x', 'z']) {
  const at = await page.evaluate((axis) => {
    const v = window.__nccam.viewer, m = v.markers.find((o) => o.userData.axis === axis);
    const p = m.getWorldPosition(m.position.clone()).project(v.camera), r = v.renderer.domElement.getBoundingClientRect();
    return { x: r.left + ((p.x + 1) / 2) * r.width, y: r.top + ((1 - p.y) / 2) * r.height };
  }, axis);
  await page.mouse.click(at.x, at.y);
  await page.waitForTimeout(330);
  await page.screenshot({ path: `dist/shots/turn-${axis}-mid.png`, clip: vp });
  await page.waitForTimeout(2500);
  await page.screenshot({ path: `dist/shots/turn-${axis}.png`, clip: vp });
  console.log(axis, 'after', await first(), 'up', await page.evaluate(() => window.__nccam.S.up), 'path', JSON.stringify(await page.evaluate(() => window.__nccam.S.upPath)));
}
await page.click('[data-act="close"]').catch(() => {});
await b.close();
