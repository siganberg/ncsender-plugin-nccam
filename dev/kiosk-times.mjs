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
await page.waitForTimeout(2000);
// Frames part way through: TIMES="0.5,0.8,1" (share of the program)
const vp = await page.$eval('.ncc-viewport', (e) => { const r = e.getBoundingClientRect(); return { x: r.x, y: r.y, width: r.width, height: r.height }; });
for (const f of (process.env.TIMES || '0.3,0.6,0.8,0.95,1').split(',')) {
  await page.evaluate((f) => { const { PLAY, seek } = window.__nccam; seek(f * PLAY.total); }, +f);
  await page.waitForTimeout(1200);
  await page.screenshot({ path: `dist/shots/t-${f}.png`, clip: vp });
}
await page.click('[data-act="close"]'); await page.waitForTimeout(500);
console.log('closed:', !(await page.$('.ncc-wrapper')));
await b.close();
