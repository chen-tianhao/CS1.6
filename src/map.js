// ============================================================
//  map.js — de_outpost（dust 风格原创布局）
//  房间/通道矩形 → 栅格化 → 自动生成封闭墙体 → 碰撞体 / 导航格 / 雷达
// ============================================================
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { TILE, GRID, WORLD_HALF } from './config.js';
import { getTextures, makeSkyTexture } from './textures.js';

const WALL_H = 440;
const WALL_T = 24;

export class GameMap {
  // def 来自 src/maps/*.js：纯数据，渲染与碰撞全部由此推导
  constructor(scene, def) {
    if (!def) throw new Error('GameMap: 缺少地图定义，见 src/maps/index.js');
    this.scene = scene;
    this.def = def;
    this.tex = getTextures();
    this.colliders = [];       // {x0,x1,y0,y1,z0,z1}
    this.solids = [];          // 视觉网格
    this.ceilingZones = [];
    this.grid = new Uint8Array(GRID * GRID); // 0 = 实心, 1 = 地面
    this.blocked = new Uint8Array(GRID * GRID); // 1 = 道具占位（不可通行）
    this.spawns = { T: [], CT: [] };
    this.sites = def.sites;
    this.label = def.label || def.id || '';
    this._build();
  }

  // ---------- 坐标换算 ----------
  tileToWorld(cx, cz) {
    return {
      x: -WORLD_HALF + (cx + 0.5) * TILE,
      z: -WORLD_HALF + (cz + 0.5) * TILE,
    };
  }
  worldToTile(x, z) {
    return {
      cx: Math.floor((x + WORLD_HALF) / TILE),
      cz: Math.floor((z + WORLD_HALF) / TILE),
    };
  }
  inBounds(cx, cz) { return cx >= 0 && cz >= 0 && cx < GRID && cz < GRID; }
  isFloorTile(cx, cz) {
    if (!this.inBounds(cx, cz)) return false;
    return this.grid[cz * GRID + cx] === 1;
  }
  isWalkable(cx, cz) {
    if (!this.inBounds(cx, cz)) return false;
    const i = cz * GRID + cx;
    return this.grid[i] === 1 && this.blocked[i] === 0;
  }
  isFloorAt(x, z) {
    const { cx, cz } = this.worldToTile(x, z);
    return this.isFloorTile(cx, cz);
  }
  isWalkableAt(x, z) {
    const { cx, cz } = this.worldToTile(x, z);
    return this.isWalkable(cx, cz);
  }
  floorHeightAt() { return 0; }

  // (x, z) 处玩家脚下可站立的最高平面高度（不考虑 maxY 以上的面）。
  // maxY 由调用方决定含义：
  //   · 站在地面上时传 pos.y + stepHeight —— 于是不高于台阶的沿儿能直接迈上去
  //   · 空中时传 pos.y —— 只有已经低于脚面的面才会接住玩家（不会被"吸"上去）
  // 墙体 / 石墩的顶面是 WALL_H，永远进不来。
  supportHeightAt(x, z, r, maxY) {
    let best = 0;                       // 地图地面恒为 0
    const cols = this.colliders;
    for (let i = 0; i < cols.length; i++) {
      const b = cols[i];
      if (b.y1 > maxY || b.y1 <= best) continue;
      if (x + r <= b.x0 || x - r >= b.x1) continue;
      if (z + r <= b.z0 || z - r >= b.z1) continue;
      best = b.y1;
    }
    return best;
  }

  // ---------- 构建 ----------
  _build() {
    this._rasterize();
    this._buildAtmosphere();
    this._buildFloor();
    this._buildWalls();
    this._buildProps();
    this._markPropTiles();
    this._buildSpawns();
    this._buildCeilings();
    this._buildLabels();
  }

  _rasterize() {
    for (const a of this.def.areas) {
      const c0 = Math.floor((a.x0 + WORLD_HALF) / TILE);
      const c1 = Math.floor((a.x1 + WORLD_HALF) / TILE);
      const r0 = Math.floor((a.z0 + WORLD_HALF) / TILE);
      const r1 = Math.floor((a.z1 + WORLD_HALF) / TILE);
      for (let r = r0; r < r1; r++) {
        for (let c = c0; c < c1; c++) {
          if (this.inBounds(c, r)) this.grid[r * GRID + c] = 1;
        }
      }
    }
  }

  _buildAtmosphere() {
    const scene = this.scene;
    scene.fog = new THREE.Fog(0xd8c9ab, 1800, 5000);
    scene.background = new THREE.Color(0x9fb6cc);

    // 光强比原实现略低：顶点 AO 只压暗不加亮，整体太亮会让开阔地面过曝
    const hemi = new THREE.HemisphereLight(0xcfe2f2, 0x9c8055, 0.9);
    scene.add(hemi);

    const sun = new THREE.DirectionalLight(0xfff3d6, 1.3);
    sun.position.set(-900, 1500, 700);
    scene.add(sun);

    const fill = new THREE.DirectionalLight(0x8fa8c8, 0.4);
    fill.position.set(1200, 600, -1400);
    scene.add(fill);

    // 天空：直接用 equirect 背景贴图（比球形天穹稳定，不受远裁剪影响）
    const skyTex = makeSkyTexture();
    skyTex.mapping = THREE.EquirectangularReflectionMapping;
    scene.background = skyTex;

    // 远景天际线：环形低模建筑（纯装饰，无碰撞）
    const bmat = new THREE.MeshLambertMaterial({ map: this.tex.concrete });
    const bmat2 = new THREE.MeshLambertMaterial({ map: this.tex.sand });
    for (let i = 0; i < 44; i++) {
      const ang = (i / 44) * Math.PI * 2 + Math.random() * 0.05;
      const r = 3150 + Math.random() * 900;
      const w = 220 + Math.random() * 380;
      const h = 380 + Math.random() * 780;
      const d = 220 + Math.random() * 380;
      const g = this._boxGeo(w, h, d, 220);
      const m = new THREE.Mesh(g, Math.random() < 0.5 ? bmat : bmat2);
      m.position.set(Math.cos(ang) * r, h / 2 - 60, Math.sin(ang) * r);
      m.rotation.y = ang + Math.random() * 0.4;
      scene.add(m);
    }
  }

  // 生成带世界比例 UV 的 BoxGeometry
  _boxGeo(w, h, d, uvScale = 128) {
    const g = new THREE.BoxGeometry(w, h, d);
    const uv = g.attributes.uv;
    const dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
    for (let f = 0; f < 6; f++) {
      const [du, dv] = dims[f];
      for (let i = 0; i < 4; i++) {
        const k = f * 4 + i;
        uv.setXY(k, (uv.getX(k) * du) / uvScale, (uv.getY(k) * dv) / uvScale);
      }
    }
    return g;
  }

  _addSolid(geo, mat, x, y, z, collide = true, rotY = 0) {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    if (rotY) m.rotation.y = rotY;
    this.scene.add(m);
    this.solids.push(m);
    if (collide) {
      this.colliders.push({
        x0: x - geo.parameters.width / 2, x1: x + geo.parameters.width / 2,
        y0: y - geo.parameters.height / 2, y1: y + geo.parameters.height / 2,
        z0: z - geo.parameters.depth / 2, z1: z + geo.parameters.depth / 2,
      });
    }
    return m;
  }

  // ---------- 顶点级环境光遮蔽 ----------
  // GoldSrc 的纵深来自每面独立的 lightmap；这里用栅格近似等价信息：
  // 逐顶点采样周围空间是否被墙体/道具/顶盖占据，把结果写进顶点色。
  // 成本是 O(顶点数)，纯查表，不需要射线。
  _openAt(x, y, z) {
    if (y > WALL_H - 12) return true;   // 高过墙顶，无遮挡
    if (y < 0) return false;            // 地面以下，被地面挡住
    const { cx, cz } = this.worldToTile(x, z);
    if (!this.inBounds(cx, cz)) return false;
    const i = cz * GRID + cx;
    if (this.grid[i] !== 1) return false;              // 实心墙
    if (this.blocked[i] === 1 && y < 140) return false; // 箱体/集装箱
    if (y > WALL_H - 46 && this._hasCeiling(x, z)) return false;
    return true;
  }

  _hasCeiling(x, z) {
    for (const zn of (this.def.ceilings || [])) {
      if (x >= zn.x0 && x <= zn.x1 && z >= zn.z0 && z <= zn.z1) return true;
    }
    return false;
  }

  _aoFactor(x, y, z, nx, ny, nz) {
    let occ = 0, total = 0;
    const sample = (dx, dy, dz, r, w = 1) => {
      total += w;
      if (!this._openAt(x + dx * r, y + dy * r, z + dz * r)) occ += w / (1 + r / 70);
    };
    const horiz = Math.abs(ny) > 0.7;
    if (horiz) {
      // 顶盖下方的地面：整体压暗，表达"见不到天"
      if (ny > 0 && this._hasCeiling(x, z)) {
        for (let k = 0; k < 3; k++) { occ += 1.15; total += 1; }
      }
      // 环形采样，抓墙体与道具在脚下的落影。
      // 半径取小一点，否则每个格子都会整片变暗，形成规则条纹。
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        const dx = Math.cos(a), dz = Math.sin(a);
        for (let k = 1; k <= 3; k++) sample(dx, 0, dz, k * 34);
      }
    } else {
      // 垂直面：沿切线方向与竖直方向采样，跳过法线方向，
      // 否则墙面会被自己所在的那堵墙整片压暗。
      const len = Math.hypot(nx, nz) || 1;
      const ux = -nz / len, uz = nx / len;
      for (let k = 1; k <= 3; k++) {
        sample(ux, 0, uz, k * 42);
        sample(-ux, 0, -uz, k * 42);
        // 向上是天空光；向下代表被地面挡住的那半环境光，权重加倍
        sample(0, 1, 0, k * 42, 0.8);
        sample(0, -1, 0, k * 42, 2.2);
      }
    }
    const ratio = total > 0 ? occ / total : 0;
    // 地面用较弱的对比，避免砖块之间出现规则条纹；
    // 墙面需要更强的对比才有 GoldSrc 那种自上而下的光照梯度。
    const strength = horiz ? 1.35 : 1.9;
    // 下限保证暗部仍有细节，不压成黑块
    return Math.max(0.34, 1 - ratio * strength);
  }

  _applyAO(geo) {
    const pos = geo.attributes.position;
    const nor = geo.attributes.normal;
    if (!pos || !nor) return geo;
    const n = pos.count;
    const colors = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const a = this._aoFactor(
        pos.getX(i), pos.getY(i), pos.getZ(i),
        nor.getX(i), nor.getY(i), nor.getZ(i),
      );
      colors[i * 3] = a;
      colors[i * 3 + 1] = a;
      colors[i * 3 + 2] = a;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geo;
  }

  _buildFloor() {
    const geos = [];
    for (let r = 0; r < GRID; r++) {
      for (let c = 0; c < GRID; c++) {
        if (this.grid[r * GRID + c] !== 1) continue;
        const { x, z } = this.tileToWorld(c, r);
        const g = new THREE.PlaneGeometry(TILE, TILE, 2, 2);
        g.rotateX(-Math.PI / 2);
        // UV 按世界尺寸铺贴
        const uv = g.attributes.uv;
        for (let i = 0; i < uv.count; i++) {
          uv.setXY(i, (uv.getX(i) * TILE) / 220, (uv.getY(i) * TILE) / 220);
        }
        g.translate(x, 0, z);
        geos.push(g);
      }
    }
    if (!geos.length) return;
    const merged = mergeGeometries(geos, false);
    geos.forEach((g) => g.dispose());
    this._applyAO(merged);
    const mat = new THREE.MeshLambertMaterial({ map: this.tex.floor, vertexColors: true });
    const mesh = new THREE.Mesh(merged, mat);
    mesh.position.y = 0;
    this.scene.add(mesh);
    this.solids.push(mesh);
  }

  _buildWalls() {
    const geos = [];
    const t = WALL_T;
    for (let r = 0; r < GRID; r++) {
      for (let c = 0; c < GRID; c++) {
        if (this.grid[r * GRID + c] !== 1) continue;
        const { x, z } = this.tileToWorld(c, r);
        const half = TILE / 2;
        // 北 / 南 / 西 / 东
        const edges = [
          { dx: 0, dz: -1, nx: 0, nz: -1 },
          { dx: 0, dz: 1, nx: 0, nz: 1 },
          { dx: -1, dz: 0, nx: -1, nz: 0 },
          { dx: 1, dz: 0, nx: 1, nz: 0 },
        ];
        for (const e of edges) {
          if (this.isFloorTile(c + e.dx, r + e.dz)) continue;
          const h = WALL_H;
          let g;
          if (e.nx === 0) {
            g = this._boxGeo(TILE + t, h, t, 128);
            g.translate(x, h / 2, z + e.nz * (half + t / 2 - 2));
          } else {
            g = this._boxGeo(t, h, TILE + t, 128);
            g.translate(x + e.nx * (half + t / 2 - 2), h / 2, z);
          }
          geos.push(g);
        }
      }
    }
    if (!geos.length) return;
    const merged = mergeGeometries(geos, false);
    geos.forEach((g) => g.dispose());
    this._applyAO(merged);
    const mat = new THREE.MeshLambertMaterial({ map: this.tex.sand, vertexColors: true });
    const mesh = new THREE.Mesh(merged, mat);
    this.scene.add(mesh);
    this.solids.push(mesh);

    // 顶点级碰撞体：把整张墙网按格拆成 AABB（用于射线与玩家碰撞）
    // 用合并后的三角形做碰撞代价过高，这里用格网表达：
    for (let r = 0; r < GRID; r++) {
      for (let c = 0; c < GRID; c++) {
        if (this.grid[r * GRID + c] !== 1) continue;
        const { x, z } = this.tileToWorld(c, r);
        const half = TILE / 2;
        const edges = [
          { dx: 0, dz: -1 }, { dx: 0, dz: 1 }, { dx: -1, dz: 0 }, { dx: 1, dz: 0 },
        ];
        for (const e of edges) {
          if (this.isFloorTile(c + e.dx, r + e.dz)) continue;
          if (e.dz !== 0) {
            this.colliders.push({
              x0: x - half, x1: x + half,
              y0: 0, y1: WALL_H,
              z0: z + e.dz * half, z1: z + e.dz * (half + WALL_T),
            });
          } else {
            this.colliders.push({
              x0: x + e.dx * half, x1: x + e.dx * (half + WALL_T),
              y0: 0, y1: WALL_H,
              z0: z - half, z1: z + half,
            });
          }
        }
      }
    }
  }

  _addTileBlocker(cx, cz, mat) {
    const { x, z } = this.tileToWorld(cx, cz);
    this._addSolid(this._boxGeo(TILE - 6, WALL_H, TILE - 6, 140), mat, x, WALL_H / 2, z, true);
    this.blocked[cz * GRID + cx] = 1;
  }

  _prop(cx, cz, kind) {
    const { x, z } = this.tileToWorld(cx, cz);
    this.blocked[cz * GRID + cx] = 1;
    return { x, z };
  }

  _buildProps() {
    const mats = {
      crate: new THREE.MeshLambertMaterial({ map: this.tex.crate }),
      concrete: new THREE.MeshLambertMaterial({ map: this.tex.concrete }),
      metalRed: new THREE.MeshLambertMaterial({ map: this.tex.metalRed }),
      metalBlue: new THREE.MeshLambertMaterial({ map: this.tex.metalBlue }),
      metalGreen: new THREE.MeshLambertMaterial({ map: this.tex.metalGreen }),
    };
    const pick = (name) => mats[name] || mats.concrete;

    for (const p of this.def.props || []) {
      switch (p.t) {
        case 'crate': {
          const size = p.s ?? 100;
          const h = p.h ?? size;
          // 确定性微抖动：同一张地图每次生成的摆放角度一致
          const rot = p.rot ?? (((p.x * 13 + p.z * 7) % 100) / 1000 - 0.05);
          this._addSolid(this._boxGeo(size, h, size, 96), pick('crate'), p.x, h / 2, p.z, true, rot);
          const top = new THREE.Mesh(new THREE.PlaneGeometry(size, size), new THREE.MeshBasicMaterial({
            color: 0x000000, transparent: true, opacity: 0.16, depthWrite: false,
          }));
          top.rotation.x = -Math.PI / 2;
          top.position.set(p.x, h + 0.6, p.z);
          this.scene.add(top);
          break;
        }
        case 'barrel': {
          const r = p.r ?? 30;
          const h = p.h ?? 96;
          const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 12), pick(p.mat || 'metalRed'));
          m.position.set(p.x, h / 2, p.z);
          this.scene.add(m);
          this.solids.push(m);
          this.colliders.push({ x0: p.x - r, x1: p.x + r, y0: 0, y1: h, z0: p.z - r, z1: p.z + r });
          break;
        }
        case 'box': {
          const g = this._boxGeo(p.w, p.h, p.d, p.uv ?? 128);
          this._addSolid(g, pick(p.mat), p.x, p.y ?? p.h / 2, p.z, p.solid !== false, p.rot || 0);
          break;
        }
        case 'blocker':
          this._addTileBlocker(p.cx, p.cz, pick(p.mat));
          break;
        default:
          break;
      }
    }

    // 无碰撞装饰
    for (const d of this.def.decor || []) {
      if (d.kind === 'cylinder') {
        const m = new THREE.Mesh(new THREE.CylinderGeometry(d.r0, d.r1, d.h, 8), pick(d.mat));
        m.position.set(d.x, d.y, d.z);
        this.scene.add(m);
      }
    }
  }

  // 把地面道具占用的格子在导航栅格中标记为不可通行（防止 BOT 撞箱子）
  _markPropTiles() {
    for (const b of this.colliders) {
      if (b.y1 >= WALL_H - 1 || b.y0 > 40) continue;
      const w = b.x1 - b.x0, d = b.z1 - b.z0;
      if (w > 700 || d > 700) continue;
      const c0 = Math.floor((b.x0 + WORLD_HALF) / TILE);
      const c1 = Math.floor((b.x1 + WORLD_HALF) / TILE);
      const r0 = Math.floor((b.z0 + WORLD_HALF) / TILE);
      const r1 = Math.floor((b.z1 + WORLD_HALF) / TILE);
      for (let r = r0; r <= r1; r++) {
        for (let c = c0; c <= c1; c++) {
          if (!this.isFloorTile(c, r)) continue;
          const p = this.tileToWorld(c, r);
          const margin = 26;
          if (p.x > b.x0 - margin && p.x < b.x1 + margin && p.z > b.z0 - margin && p.z < b.z1 + margin) {
            this.blocked[r * GRID + c] = 1;
          }
        }
      }
    }
  }

  _buildSpawns() {
    for (const team of ['T', 'CT']) {
      const cfg = this.def.spawns && this.def.spawns[team];
      if (!cfg) continue;
      const n = cfg.count ?? 5;
      const phase = cfg.phase || 0;
      for (let i = 0; i < n; i++) {
        const ang = (i / n) * Math.PI * 2 + phase;
        this.spawns[team].push({
          x: cfg.x + Math.cos(ang) * (cfg.rx ?? 190),
          z: cfg.z + Math.sin(ang) * (cfg.rz ?? 110),
          yaw: cfg.yaw || 0,
        });
      }
    }
  }

  _buildCeilings() {
    // 隧道顶：压暗一档，配合地面 AO 表达"见不到天"的空间
    const mat = new THREE.MeshLambertMaterial({
      map: this.tex.concrete, side: THREE.DoubleSide, color: 0x6f6c66,
    });
    for (const zn of (this.def.ceilings || [])) {
      const w = zn.x1 - zn.x0, d = zn.z1 - zn.z0;
      const g = this._boxGeo(w, 30, d, 200);
      const m = new THREE.Mesh(g, mat);
      m.position.set((zn.x0 + zn.x1) / 2, WALL_H - 15, (zn.z0 + zn.z1) / 2);
      this.scene.add(m);
      this.ceilingZones.push(zn);
    }
  }

  _buildLabels() {
    const make = (letter, color) => {
      const c = document.createElement('canvas');
      c.width = c.height = 256;
      const x = c.getContext('2d');
      x.fillStyle = 'rgba(0,0,0,0)';
      x.fillRect(0, 0, 256, 256);
      x.font = 'bold 200px Impact, Arial Black, sans-serif';
      x.textAlign = 'center';
      x.textBaseline = 'middle';
      x.fillStyle = color;
      x.globalAlpha = 0.55;
      x.fillText(letter, 128, 138);
      const t = new THREE.CanvasTexture(c);
      t.colorSpace = THREE.SRGBColorSpace;
      return t;
    };
    for (const key of Object.keys(this.sites)) {
      const s = this.sites[key];
      const m = new THREE.Mesh(
        new THREE.PlaneGeometry(420, 420),
        new THREE.MeshBasicMaterial({ map: make(key, '#e8dcc0'), transparent: true, depthWrite: false }),
      );
      m.rotation.x = -Math.PI / 2;
      m.position.set((s.x0 + s.x1) / 2, 0.8, (s.z0 + s.z1) / 2);
      this.scene.add(m);
    }
  }

  siteAt(x, z) {
    for (const key of Object.keys(this.sites)) {
      const s = this.sites[key];
      if (x >= s.x0 && x <= s.x1 && z >= s.z0 && z <= s.z1) return key;
    }
    return null;
  }

  // ---------- 射线 ----------
  // 返回 {dist, nx, ny, nz} 或 null
  raycast(origin, dir, maxDist = 8000) {
    let best = maxDist, hit = null;
    const arr = this.colliders;
    for (let i = 0; i < arr.length; i++) {
      const b = arr[i];
      // slab
      let tmin = 0, tmax = best;
      let nAxis = -1, nSign = 0;
      let ok = true;
      for (let a = 0; a < 3; a++) {
        const o = a === 0 ? origin.x : a === 1 ? origin.y : origin.z;
        const d = a === 0 ? dir.x : a === 1 ? dir.y : dir.z;
        const mn = a === 0 ? b.x0 : a === 1 ? b.y0 : b.z0;
        const mx = a === 0 ? b.x1 : a === 1 ? b.y1 : b.z1;
        if (Math.abs(d) < 1e-8) {
          if (o < mn || o > mx) { ok = false; break; }
        } else {
          let t1 = (mn - o) / d, t2 = (mx - o) / d;
          let sign = -1;
          if (t1 > t2) { const tmp = t1; t1 = t2; t2 = tmp; sign = 1; }
          if (t1 > tmin) { tmin = t1; nAxis = a; nSign = sign; }
          if (t2 < tmax) tmax = t2;
          if (tmin > tmax) { ok = false; break; }
        }
      }
      if (!ok) continue;
      if (tmin > 0 && tmin < best) {
        best = tmin;
        hit = {
          dist: tmin,
          nx: nAxis === 0 ? nSign : 0,
          ny: nAxis === 1 ? nSign : 0,
          nz: nAxis === 2 ? nSign : 0,
        };
      }
    }
    return hit;
  }

  lineOfSight(a, b) {
    const dx = b.x - a.x, dy = b.y - a.y, dz = b.z - a.z;
    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
    if (dist < 1) return true;
    const dir = { x: dx / dist, y: dy / dist, z: dz / dist };
    const hit = this.raycast(a, dir, dist - 4);
    return !hit;
  }

  // ---------- 导航 A* ----------
  neighbors(cx, cz) {
    const out = [];
    const dirs = [
      [1, 0], [-1, 0], [0, 1], [0, -1],
      [1, 1], [1, -1], [-1, 1], [-1, -1],
    ];
    for (const [dx, dz] of dirs) {
      const nx = cx + dx, nz = cz + dz;
      if (!this.isWalkable(nx, nz)) continue;
      if (dx && dz && (!this.isWalkable(cx + dx, cz) || !this.isWalkable(cx, cz + dz))) continue;
      out.push({ cx: nx, cz: nz, cost: dx && dz ? 1.414 : 1 });
    }
    return out;
  }

  findPath(from, to) {
    const a = this.worldToTile(from.x, from.z);
    const b = this.worldToTile(to.x, to.z);
    if (!this.isWalkable(b.cx, b.cz)) {
      // 找最近可走格
      let best = null, bd = Infinity;
      for (let r = -3; r <= 3; r++) {
        for (let c = -3; c <= 3; c++) {
          if (!this.isWalkable(b.cx + c, b.cz + r)) continue;
          const d = c * c + r * r;
          if (d < bd) { bd = d; best = { cx: b.cx + c, cz: b.cz + r }; }
        }
      }
      if (!best) return null;
      b.cx = best.cx; b.cz = best.cz;
    }
    if (!this.isWalkable(a.cx, a.cz)) {
      let best = null, bd = Infinity;
      for (let r = -2; r <= 2; r++) {
        for (let c = -2; c <= 2; c++) {
          if (!this.isWalkable(a.cx + c, a.cz + r)) continue;
          const d = c * c + r * r;
          if (d < bd) { bd = d; best = { cx: a.cx + c, cz: a.cz + r }; }
        }
      }
      if (!best) return null;
      a.cx = best.cx; a.cz = best.cz;
    }

    const startKey = a.cz * GRID + a.cx;
    const goalKey = b.cz * GRID + b.cx;
    if (startKey === goalKey) return [];

    const open = new Map();
    const closed = new Set();
    const gScore = new Map();
    const came = new Map();
    const h = (cx, cz) => Math.hypot(cx - b.cx, cz - b.cz);
    gScore.set(startKey, 0);
    open.set(startKey, { cx: a.cx, cz: a.cz, f: h(a.cx, a.cz) });

    let guard = 0;
    while (open.size && guard++ < 6000) {
      let bestKey = null, bestF = Infinity;
      for (const [k, v] of open) {
        if (v.f < bestF) { bestF = v.f; bestKey = k; }
      }
      if (bestKey === null) break;
      const cur = open.get(bestKey);
      open.delete(bestKey);
      if (bestKey === goalKey) {
        const path = [];
        let k = goalKey;
        while (k !== startKey) {
          const cx = k % GRID, cz = Math.floor(k / GRID);
          const p = this.tileToWorld(cx, cz);
          path.push(p);
          k = came.get(k);
          if (k === undefined) break;
        }
        path.reverse();
        return path;
      }
      closed.add(bestKey);
      for (const nb of this.neighbors(cur.cx, cur.cz)) {
        const nk = nb.cz * GRID + nb.cx;
        if (closed.has(nk)) continue;
        const tentative = (gScore.get(bestKey) ?? 0) + nb.cost;
        if (tentative < (gScore.get(nk) ?? Infinity)) {
          came.set(nk, bestKey);
          gScore.set(nk, tentative);
          open.set(nk, { cx: nb.cx, cz: nb.cz, f: tentative + h(nb.cx, nb.cz) });
        }
      }
    }
    return null;
  }

  // 随机可走点
  randomWalkableNear(x, z, radius = 800) {
    for (let i = 0; i < 30; i++) {
      const ang = Math.random() * Math.PI * 2;
      const r = Math.random() * radius;
      const px = x + Math.cos(ang) * r, pz = z + Math.sin(ang) * r;
      if (this.isWalkableAt(px, pz)) return { x: px, z: pz };
    }
    return { x, z };
  }
}
