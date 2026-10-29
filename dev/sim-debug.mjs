import { chromium } from 'playwright-core';
const exe = `${process.env.HOME}/Library/Caches/ms-playwright/chromium-1223/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`;
const b = await chromium.launch({ executablePath: exe, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await b.newPage({ viewport: { width: 1920, height: 1080 } });
page.on('pageerror', (e) => console.log('pageerror', e.message));
await page.goto('http://10.0.2.254:8090/');
await page.waitForTimeout(5000);
await page.evaluate(() => [...document.querySelectorAll('button')].find((e) => e.textContent.trim() === 'Plugins')?.click());
await page.waitForTimeout(800);
await page.evaluate(() => [...document.querySelectorAll('button, div')].reverse().find((e) => e.textContent.trim() === 'ncCAM')?.click());
await page.waitForSelector('[data-file]', { state: 'attached', timeout: 30000 });
await page.setInputFiles('[data-file]', 'tests/fixtures/onshape-plate.step');
await page.waitForFunction(() => document.querySelector('.ncc-found .ncc-row'), null, { timeout: 90000 });
await page.click('.ncc-foot [data-go="2"]'); await page.click('.ncc-foot [data-go="3"]'); await page.waitForTimeout(500);
await page.click('.ncc-foot [data-go="4"]');
await page.waitForFunction(() => document.querySelector('.ncc-check'), null, { timeout: 90000 });
const r = await page.evaluate(() => {
  const { PLAY, viewer } = window.__nccam;
  const hm = PLAY.hm;
  const before = { i: PLAY.i, n: PLAY.cum.length, t: PLAY.t, total: PLAY.total };
  // what the scrub does at the far right
  PLAY.playing = false;
  const bar = document.querySelector('[data-scrub]').getBoundingClientRect();
  return { before, barW: bar.width };
});
console.log(r);
const bar = await page.$('[data-scrub]'); const bb = await bar.boundingBox();
await page.mouse.click(bb.x + bb.width - 1, bb.y + bb.height / 2);
await page.waitForTimeout(1500);
console.log(await page.evaluate(() => {
  const { PLAY, viewer } = window.__nccam;
  const hm = PLAY.hm; let through = 0, cut = 0;
  for (let k = 0; k < hm.h.length; k++) { if (hm.h[k] < hm.bottom - 0.05) through++; if (hm.h[k] < hm.top - 0.01) cut++; }
  const pos = viewer.stock.geo.attributes.position.array; let dthrough = 0;
  for (let k = 2; k < pos.length; k += 3) if (pos[k] < hm.bottom - 0.05) dthrough++;
  return { i: PLAY.i, n: PLAY.cum.length, t: PLAY.t, total: PLAY.total, cells: hm.h.length, through, cut, drawnThrough: dthrough, playing: PLAY.playing };
}));
await page.waitForTimeout(1500); await page.screenshot({ path: 'dist/shots/dbg-end.png' });
await b.close();
