import puppeteer from 'puppeteer-core';
import path from 'node:path';

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--allow-file-access-from-files', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--mute-audio'],
  defaultViewport: { width: 900, height: 600 },
});
const page = await browser.newPage();
page.on('pageerror', (e) => console.log('PAGEERROR:', e.message, '\n', e.stack));
const fp = path.resolve('index.html').split(path.sep).join('/');
await page.goto('file:///' + fp, { waitUntil: 'load' });
await new Promise((r) => setTimeout(r, 1500));
await page.click('#btn-start');
await new Promise((r) => setTimeout(r, 900));

const out = await page.evaluate(() => {
  const g = window.game;
  g.paused = true;
  const res = {};

  // 1) 玩家阵亡 → 观战
  const p = g.localPlayer;
  p.alive = true; p.health = 5;
  const killer = g.players.find((x) => x.team !== p.team);
  killer.alive = true;
  p.takeDamage(50, killer, 'head', 'ak47');
  res.death = {
    alive: p.alive, spectating: g.spectating ? g.spectating.name : null,
    notice: !document.getElementById('deathnotify').classList.contains('hidden'),
    killfeed: document.getElementById('killfeed').textContent.includes('你'),
  };

  // 2) 半场换边
  g.round.roundNum = 15;
  g.round.scoreCT = 9; g.round.scoreT = 6;
  const before = g.players.map((x) => `${x.name}:${x.team}`);
  g.round.nextRound();
  res.halftime = {
    before,
    after: g.players.map((x) => `${x.name}:${x.team}`),
    score: [g.round.scoreCT, g.round.scoreT],
    phase: g.round.phase,
    round: g.round.roundNum,
    money: g.players.map((x) => x.money),
  };

  // 3) 比赛结束
  g.round.roundNum = 29;
  g.round.scoreCT = 15; g.round.scoreT = 14;
  g.round.endRound('CT', 'elim');
  g.round.time = 0;
  g.round.nextRound();
  res.matchEnd = {
    phase: g.round.phase,
    banner: !document.getElementById('round-banner').classList.contains('hidden'),
    text: document.getElementById('round-result').textContent,
  };

  // 4) 恢复
  g.restartMatch();
  res.restart = { phase: g.round.phase, round: g.round.roundNum, players: g.players.length };
  return res;
});
console.log(JSON.stringify(out, null, 1));
await browser.close();
