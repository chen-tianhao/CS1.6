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
await new Promise((r) => setTimeout(r, 1600));
await page.click('#btn-start');
await new Promise((r) => setTimeout(r, 1200));

await page.evaluate(() => {
  const g = window.game;
  g.paused = true;                    // 停掉 rAF 驱动
  g._log = [];
  g._killLog = { ct: 0, t: 0 };
  const origEnd = g.round.endRound.bind(g.round);
  g.round.endRound = function (w, r) {
    g._log.push(`ROUND ${g.round.roundNum} END ${w} (${r}) score ${g.round.scoreCT}:${g.round.scoreT}`);
    origEnd(w, r);
  };
  const origPlant = g.round.plantBomb.bind(g.round);
  g.round.plantBomb = function (p, s) {
    g._log.push(`PLANT site ${s} by ${p.name} @${Math.round(g.time)}s`);
    origPlant(p, s);
  };
});

const chunks = 12;
for (let i = 0; i < chunks; i++) {
  const info = await page.evaluate(() => {
    const g = window.game;
    for (let k = 0; k < 1800; k++) g.update(1 / 60);   // 30 秒
    return {
      t: Math.round(g.time),
      phase: g.round.phase,
      round: g.round.roundNum,
      score: [g.round.scoreCT, g.round.scoreT],
      bomb: g.round.bomb.state,
      aliveT: g.players.filter((p) => p.team === 'T' && p.alive).length,
      aliveCT: g.players.filter((p) => p.team === 'CT' && p.alive).length,
      kills: g.players.reduce((a, p) => a + p.kills, 0),
      stuck: g.players.filter((p) => p.bot && p.alive && p.pos.length() < 1).length,
      pos: g.players.map((p) => `${p.name[0]}${p.team[0]}:${Math.round(p.pos.x)},${Math.round(p.pos.z)}`).join(' '),
      log: g._log.splice(0),
    };
  });
  console.log(`--- t=${info.t}s phase=${info.phase} round=${info.round} score=${info.score} bomb=${info.bomb} alive ${info.aliveT}v${info.aliveCT} kills=${info.kills}`);
  if (info.log.length) console.log(info.log.join('\n'));
  console.log('   pos:', info.pos);
}
await browser.close();
