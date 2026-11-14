import puppeteer from 'puppeteer-core';
import path from 'node:path';

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--allow-file-access-from-files', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--mute-audio'],
  defaultViewport: { width: 1280, height: 800 },
});
const page = await browser.newPage();
page.on('pageerror', (e) => console.log('PAGEERROR:', e.message, '\nSTACK:', e.stack));
page.on('console', (m) => { if (m.type() === 'error') console.log('CONSOLE:', m.text()); });
const fp = path.resolve('index.html').split(path.sep).join('/');
await page.goto('file:///' + fp, { waitUntil: 'load' });
await new Promise((r) => setTimeout(r, 2000));
await page.click('#btn-start');
await new Promise((r) => setTimeout(r, 2500));
const st = await page.evaluate(() => ({ started: window.game.started, paused: window.game.paused, phase: window.game.round.phase }));
console.log('STATE', JSON.stringify(st));
await browser.close();
