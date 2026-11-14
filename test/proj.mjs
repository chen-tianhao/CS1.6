import puppeteer from 'puppeteer-core';
import path from 'node:path';

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--allow-file-access-from-files', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--mute-audio'],
  defaultViewport: { width: 1280, height: 800 },
});
const page = await browser.newPage();
page.on('pageerror', (e) => console.log('PAGEERROR:', e.message));
const fp = path.resolve('index.html').split(path.sep).join('/');
await page.goto('file:///' + fp, { waitUntil: 'load' });
await new Promise((r) => setTimeout(r, 1800));
await page.click('#btn-start');
await new Promise((r) => setTimeout(r, 3500));

const info = await page.evaluate(() => {
  const g = window.game;
  const vm = g.viewModel;
  const ndc = vm.root.position.clone().project(vm.camera);
  return {
    fov: vm.camera.fov,
    aspect: +vm.camera.aspect.toFixed(3),
    camPos: vm.camera.position.toArray(),
    rootPos: vm.root.position.toArray().map((v) => +v.toFixed(2)),
    rootScale: vm.root.scale.x,
    ndc: [+ndc.x.toFixed(3), +ndc.y.toFixed(3)],
    screenPx: [Math.round((ndc.x * 0.5 + 0.5) * 1280), Math.round((-ndc.y * 0.5 + 0.5) * 800)],
    viewport: [window.innerWidth, window.innerHeight],
    dpr: window.devicePixelRatio,
    vmChildren: vm.root.children.length,
  };
});
console.log(JSON.stringify(info, null, 1));
await browser.close();
