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

// 区域定义（单位：world units，X 向东，Z 向南）
const AREAS = [
  { name: 'T Spawn',      x0: -500, x1: 500,  z0: 1200,  z1: 1900, kind: 'tspawn' },
  { name: 'T Long',       x0: 400,  x1: 1000, z0: 1380,  z1: 1720, kind: 'road' },
  { name: 'Long A',       x0: 900,  x1: 1280, z0: -520,  z1: 1700, kind: 'road' },
  { name: 'A Site',       x0: 900,  x1: 1700, z0: -920,  z1: -380, kind: 'site' },
  { name: 'CT Ramp',      x0: 320,  x1: 1000, z0: -1120, z1: -700, kind: 'road' },
  { name: 'CT Spawn',     x0: -620, x1: 420,  z0: -1520, z1: -880, kind: 'ctspawn' },
  { name: 'CT Mid',       x0: -320, x1: 320,  z0: -1080, z1: -680, kind: 'road' },
  { name: 'Top Mid',      x0: -320, x1: 320,  z0: -700,  z1: -180, kind: 'road' },
  { name: 'Mid',          x0: -160, x1: 160,  z0: -250,  z1: 1350, kind: 'road' },
  { name: 'Lower Tunnel', x0: -980, x1: -120, z0: 700,   z1: 960,  kind: 'tunnel' },
  { name: 'B Tunnel',     x0: -1280,x1: -880, z0: -470,  z1: 1700, kind: 'tunnel' },
  { name: 'B Site',       x0: -1720,x1: -880, z0: -920,  z1: -300, kind: 'site' },
  { name: 'B Doors',      x0: -1480,x1: -380, z0: -1280, z1: -860, kind: 'road' },
  { name: 'T Tunnel',     x0: -980, x1: -420, z0: 1380,  z1: 1720, kind: 'tunnel' },
];

export class GameMap {
  constructor(scene) {
    this.scene = scene;
    this.tex = getTextures();
    this.colliders = [];       // {x0,x1,y0,y1,z0,z1}
    this.solids = [];          // 视觉网格
    this.ceilingZones = [];
    this.grid = new Uint8Array(GRID * GRID); // 0 = 实心, 1 = 地面
    this.blocked = new Uint8Array(GRID * GRID); // 1 = 道具占位（不可通行）
    this.spawns = { T: [], CT: [] };
    this.sites = {
      A: { name: 'A', x0: 950, x1: 1650, z0: -880, z1: -420, label: 'A' },
      B: { name: 'B', x0: -1680, x1: -920, z0: -880, z1: -340, label: 'B' },
    };
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
    for (const a of AREAS) {
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

    const hemi = new THREE.HemisphereLight(0xcfe2f2, 0x9c8055, 1.05);
    scene.add(hemi);

    const sun = new THREE.DirectionalLight(0xfff3d6, 1.55);
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

  _buildFloor() {
    const geos = [];
    for (let r = 0; r < GRID; r++) {
      for (let c = 0; c < GRID; c++) {
        if (this.grid[r * GRID + c] !== 1) continue;
        const { x, z } = this.tileToWorld(c, r);
        const g = new THREE.PlaneGeometry(TILE, TILE);
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
    const mat = new THREE.MeshLambertMaterial({ map: this.tex.floor });
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
    const mat = new THREE.MeshLambertMaterial({ map: this.tex.sand });
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
    const crateMat = new THREE.MeshLambertMaterial({ map: this.tex.crate });
    const concMat = new THREE.MeshLambertMaterial({ map: this.tex.concrete });
    const redMat = new THREE.MeshLambertMaterial({ map: this.tex.metalRed });
    const blueMat = new THREE.MeshLambertMaterial({ map: this.tex.metalBlue });
    const greenMat = new THREE.MeshLambertMaterial({ map: this.tex.metalGreen });

    const addCrate = (x, z, size = 96, h = 96, rot = 0, mat = crateMat) => {
      const g = this._boxGeo(size, h, size, 96);
      this._addSolid(g, mat, x, h / 2, z, true, rot);
      // 顶部暗影
      const top = new THREE.Mesh(new THREE.PlaneGeometry(size, size), new THREE.MeshBasicMaterial({
        color: 0x000000, transparent: true, opacity: 0.16, depthWrite: false,
      }));
      top.rotation.x = -Math.PI / 2;
      top.position.set(x, h + 0.6, z);
      this.scene.add(top);
    };

    const addBarrel = (x, z) => {
      const g = new THREE.CylinderGeometry(30, 30, 96, 12);
      const m = new THREE.Mesh(g, redMat);
      m.position.set(x, 48, z);
      this.scene.add(m);
      this.solids.push(m);
      this.colliders.push({ x0: x - 30, x1: x + 30, y0: 0, y1: 96, z0: z - 30, z1: z + 30 });
    };

    // ---- A 点箱堆 ----
    const aCrates = [
      [1150, -700, 120, 120], [1270, -700, 120, 120], [1150, -580, 100, 100],
      [1450, -820, 110, 110], [1560, -800, 110, 110], [1500, -620, 120, 120],
    ];
    for (const [x, z, s, h] of aCrates) addCrate(x, z, s, h, (Math.random() - 0.5) * 0.1);

    // ---- B 点箱堆 + 集装箱 ----
    addCrate(-1450, -700, 120, 120);
    addCrate(-1330, -700, 120, 120);
    addCrate(-1450, -560, 110, 110);
    addCrate(-1120, -800, 120, 120);
    addCrate(-1000, -640, 110, 110);
    {
      const g = this._boxGeo(340, 250, 120, 128);
      this._addSolid(g, blueMat, -1250, 125, -430, true);
    }
    {
      const g = this._boxGeo(120, 250, 300, 128);
      this._addSolid(g, greenMat, -960, 125, -600, true);
    }

    // ---- T Spawn ----
    addCrate(300, 1500, 110, 110);
    addCrate(300, 1610, 110, 110);
    {
      const g = this._boxGeo(200, 120, 90, 128);
      this._addSolid(g, concMat, -300, 60, 1700, true);
    }
    addBarrel(-420, 1350);
    addBarrel(-380, 1420);

    // ---- Long A 掩体（长通道上的车） ----
    {
      const g1 = this._boxGeo(200, 90, 110, 96);
      this._addSolid(g1, blueMat, 1120, 45, 980, true);
      const g2 = this._boxGeo(130, 70, 108, 96);
      this._addSolid(g2, blueMat, 1120, 125, 980, true);
    }
    addCrate(1010, 460, 100, 100);
    addCrate(1180, -100, 100, 100);

    // ---- Long 大门（双门框） ----
    {
      const g = this._boxGeo(24, WALL_H, 90, 128);
      this._addSolid(g, concMat, 900, WALL_H / 2, 620, true);
      this._addSolid(this._boxGeo(24, WALL_H, 90, 128), concMat, 1280, WALL_H / 2, 620, true);
      this._addSolid(this._boxGeo(400, 60, 30, 128), concMat, 1090, WALL_H - 30, 620, true);
    }

    // ---- Mid 折线（打断 T 出生点到 CT 的直线视野，dust 风格的中路掩体） ----
    this._addTileBlocker(19, 23, concMat);
    this._addTileBlocker(18, 17, concMat);
    this._addTileBlocker(20, 29, concMat);

    // ---- Mid 大门 ----
    {
      this._addSolid(this._boxGeo(30, WALL_H, 100, 128), concMat, -160, WALL_H / 2, 300, true);
      this._addSolid(this._boxGeo(30, WALL_H, 100, 128), concMat, 160, WALL_H / 2, 300, true);
      this._addSolid(this._boxGeo(360, 60, 30, 128), concMat, 0, WALL_H - 30, 300, true);
      addCrate(120, 180, 100, 100);
    }

    // ---- Top mid / CT mid ----
    addCrate(-240, -400, 110, 110);
    addCrate(240, -420, 110, 110);
    addBarrel(180, -820);

    // ---- CT Spawn ----
    {
      const g = this._boxGeo(240, 130, 110, 128);
      this._addSolid(g, concMat, -450, 65, -1000, true);
      this._addSolid(this._boxGeo(180, 90, 100, 128), concMat, 250, 45, -1050, true);
    }
    addBarrel(-560, -1400);
    addCrate(120, -1300, 100, 100);

    // ---- B 通道 ----
    addCrate(-1180, 900, 100, 100);
    addCrate(-1000, 300, 100, 100);
    addBarrel(-1220, 1400);
    addBarrel(-1180, 1450);

    // ---- Lower tunnel ----
    addCrate(-500, 830, 100, 100);

    // ---- CT 上 A 坡道 ----
    addCrate(520, -940, 100, 100);
    addCrate(760, -1050, 110, 110);

    // ---- B 门 ----
    this._addSolid(this._boxGeo(30, WALL_H, 110, 128), concMat, -1150, WALL_H / 2, -1000, true);
    this._addSolid(this._boxGeo(30, WALL_H, 110, 128), concMat, -700, WALL_H / 2, -1000, true);
    addCrate(-1000, -1120, 100, 100);
    addCrate(-620, -1140, 100, 100);

    // 地图中心装饰：水塔
    const towerBase = new THREE.Mesh(new THREE.CylinderGeometry(10, 14, 380, 8), concMat);
    towerBase.position.set(1780, 190, -700);
    this.scene.add(towerBase);
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
    const tBase = { x: 0, z: 1550 };
    const ctBase = { x: -100, z: -1300 };
    for (let i = 0; i < 5; i++) {
      const ang = (i / 5) * Math.PI * 2;
      this.spawns.T.push({
        x: tBase.x + Math.cos(ang) * 190,
        z: tBase.z + Math.sin(ang) * 110,
        yaw: 0, // 面向北（-Z，朝地图内部）
      });
      const ang2 = (i / 5) * Math.PI * 2 + 0.6;
      this.spawns.CT.push({
        x: ctBase.x + Math.cos(ang2) * 200,
        z: ctBase.z + Math.sin(ang2) * 110,
        yaw: Math.PI, // 面向南（+Z，朝地图内部）
      });
    }
  }

  _buildCeilings() {
    const mat = new THREE.MeshLambertMaterial({ map: this.tex.concrete, side: THREE.DoubleSide });
    const zones = [
      { x0: -980, x1: -120, z0: 700, z1: 960 },
      { x0: -1280, x1: -880, z0: 300, z1: 1700 },
      { x0: -980, x1: -420, z0: 1380, z1: 1720 },
    ];
    for (const zn of zones) {
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
    for (const key of ['A', 'B']) {
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
    for (const key of ['A', 'B']) {
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
