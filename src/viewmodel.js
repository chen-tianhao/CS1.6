// ============================================================
//  viewmodel.js — 第一人称武器模型（独立场景渲染，避免穿墙与比例失真）
// ============================================================
import * as THREE from 'three';
import { WEAPONS } from './config.js';

const M = {
  metal: new THREE.MeshLambertMaterial({ color: 0x8a8c96 }),
  steel: new THREE.MeshLambertMaterial({ color: 0x6a6c75 }),
  dark: new THREE.MeshLambertMaterial({ color: 0x3d3e44 }),
  black: new THREE.MeshLambertMaterial({ color: 0x24252a }),
  wood: new THREE.MeshLambertMaterial({ color: 0xa06a38 }),
  glove: new THREE.MeshLambertMaterial({ color: 0x38382f }),
  accent: new THREE.MeshLambertMaterial({ color: 0x9a9684 }),
  skin: new THREE.MeshLambertMaterial({ color: 0xc08a5c }),
};

function box(w, h, d, m, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
  mesh.position.set(x, y, z);
  mesh.rotation.set(rx, ry, rz);
  return mesh;
}

function cyl(r, h, m, x, y, z) {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 10), m);
  mesh.position.set(x, y, z);
  mesh.rotation.x = Math.PI / 2;
  return mesh;
}

export class ViewModel {
  constructor(game) {
    this.game = game;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(54, 16 / 9, 1, 600);

    this.scene.add(new THREE.AmbientLight(0xffffff, 1.0));
    const key = new THREE.DirectionalLight(0xfff2d8, 2.2);
    key.position.set(-0.5, 1.3, 0.9);
    this.scene.add(key);
    const rim = new THREE.DirectionalLight(0x8fb0d8, 1.1);
    rim.position.set(1.4, 0.3, -1);
    this.scene.add(rim);
    const bounce = new THREE.PointLight(0xd8b070, 0.9, 200);
    bounce.position.set(0, -20, 10);
    this.scene.add(bounce);

    this.pose = { x: 8.6, y: -8.8, z: -35, s: 0.88 };
    this.root = new THREE.Group();
    this.root.position.set(this.pose.x, this.pose.y, this.pose.z);
    this.root.rotation.y = 0.1;
    this.root.scale.setScalar(this.pose.s);
    this.scene.add(this.root);

    this.weaponGroup = null;
    this.curId = null;
    this.kick = 0;
    this.swayX = 0;
    this.swayY = 0;
    this.bob = 0;
    this.rise = 1;
    this.reloadT = 0;
  }

  resize(aspect) {
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }

  setWeapon(id) {
    if (id === this.curId) return;
    this.curId = id;
    if (this.weaponGroup) {
      this.root.remove(this.weaponGroup);
      this.weaponGroup.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
      this.weaponGroup = null;
    }
    const def = WEAPONS[id];
    const g = new THREE.Group();
    if (def) {
      if (def.cls === 'rifle' || def.cls === 'smg') {
        const furniture = def.id === 'ak47' ? M.wood : M.black;
        g.add(box(3.2, 4, 22, M.steel, 0, 0, -4));             // 机匣
        g.add(box(2.6, 3.2, 9.5, furniture, 0, -0.7, 8, 0.05)); // 枪托
        g.add(box(1.7, 1.7, 15, M.dark, 0, 1.0, -19));         // 枪管
        g.add(box(2.6, 3.1, 10, furniture, 0, -0.5, -13));     // 护木
        g.add(box(2.2, 2.4, 6, M.black, 0, 1.5, -6));          // 上机匣盖
        g.add(box(2.4, 8.2, 5, M.dark, 0, -5.2, -6, 0.22));    // 弹匣
        g.add(box(2.8, 8, 5, M.dark, 0, -4.6, 3.2, -0.3));     // 握把
        g.add(box(1.1, 1.3, 2, M.accent, 0, 2.7, -2));         // 照门
        g.add(box(1.1, 2.0, 2.2, M.accent, 0, 2.8, -20));      // 准星
        g.add(box(1.6, 1.6, 4, M.accent, 0, 1.1, -9));         // 导气管
        // 右手 + 前臂
        g.add(box(4.2, 5.6, 5.6, M.glove, 0.8, -4.8, 2.8, -0.15));
        g.add(box(3.6, 3.8, 10, M.skin, 3.2, -6.6, 7.6, 0.15, -0.25));
        // 左手（护木下）
        g.add(box(4.4, 4.8, 6.2, M.skin, -0.6, -2.8, -13, 0.1));
      } else if (def.cls === 'pistol') {
        g.add(box(2.6, 3.0, 11.5, M.steel, 0, -0.8, -3));      // 套筒座
        g.add(box(3.0, 3.0, 12.6, M.metal, 0, 1.0, -3.2));     // 套筒
        g.add(box(1.8, 1.8, 2.4, M.black, 0, 1.0, -10));       // 枪口
        g.add(box(2.9, 7.4, 4.6, M.dark, 0, -4.4, 1.4, -0.2)); // 握把
        g.add(box(2.4, 0.9, 3.4, M.black, 0, -2.4, -2.4));     // 扳机护圈
        g.add(box(1.0, 1.0, 1.4, M.black, 0, 2.4, 2.2));       // 击锤
        g.add(box(0.9, 1.1, 1.6, M.accent, 0, 2.6, -8.4));     // 准星
        // 右手 + 前臂
        g.add(box(4.4, 6.0, 5.8, M.glove, 0.5, -4.8, 1.4, -0.2));
        g.add(box(3.4, 3.6, 10, M.skin, 2.8, -6.8, 6.4, 0.15, -0.3));
        // 左手辅助
        g.add(box(3.6, 4.2, 4.6, M.skin, -1.7, -2.6, -4));
      } else if (def.cls === 'sniper') {
        g.add(box(3.2, 3.8, 30, M.steel, 0, 0, -8));
        g.add(box(1.7, 1.7, 26, M.black, 0, 0.9, -32));
        g.add(box(3.6, 4.4, 14, M.black, 0, -1.4, 6, 0.04));   // 枪托
        g.add(box(2.6, 7, 5, M.black, 0, -4.6, 2.4, -0.28));   // 握把
        g.add(cyl(2.7, 15, M.black, 0, 4.4, -10));             // 镜筒
        g.add(cyl(3.2, 2.4, M.dark, 0, 4.4, -18));             // 前镜
        g.add(cyl(3.2, 2.4, M.dark, 0, 4.4, -2));              // 后镜
        g.add(box(2.2, 2.6, 4.4, M.accent, 0, 2.4, -5));       // 镜桥
        g.add(box(2.2, 2.6, 4.4, M.accent, 0, 2.4, -15));
        g.add(box(1.4, 4.6, 1.4, M.black, 0, -3.4, -14));      // 两脚架收拢
        g.add(box(4.2, 5.8, 5.8, M.glove, 0.8, -4.9, 2.6, -0.2));
        g.add(box(3.6, 4.0, 10, M.skin, 3.2, -6.8, 7.4, 0.15, -0.25));
        g.add(box(4.2, 4.8, 6, M.skin, -0.6, -2.6, -16, 0.1));
      } else {
        // 匕首
        g.add(box(1.2, 2.6, 18, M.metal, 0, 0, -9));            // 刀身
        g.add(box(1.6, 1.2, 10, M.metal, 0, 1.2, -7));          // 刀背
        g.add(box(3.2, 1.4, 2.6, M.dark, 0, -0.6, 1.2));        // 护手
        g.add(box(2.6, 2.8, 7.4, M.black, 0, -0.8, 5.4));       // 刀柄
        g.add(box(4.6, 5.6, 5.6, M.glove, 0.4, -3.2, 5.2, 0.1, 0.15));
        g.add(box(3.6, 3.8, 10, M.skin, 2.4, -5.2, 9.4, 0.1, -0.3));
      }
    }
    this.weaponGroup = g;
    this.root.add(g);
  }

  update(dt, p) {
    if (!p) return;
    this.setWeapon(p.curSlot === 'melee' ? 'knife' : p.curSlot === 'grenade' ? null : (p.weapon ? p.weapon.id : null));
    this.root.visible = p.alive && p.zoom === 0 && p.curSlot !== 'grenade' && !!this.weaponGroup;
    if (!this.root.visible) return;

    const speed = Math.hypot(p.vel.x, p.vel.z);
    const moving = p.onGround && speed > 40;
    this.bob += dt * (moving ? speed * 0.055 : 1.4);
    const bobX = moving ? Math.sin(this.bob) * Math.min(1.8, speed * 0.007) : Math.sin(this.bob * 0.6) * 0.22;
    const bobY = moving ? Math.abs(Math.cos(this.bob)) * Math.min(1.4, speed * 0.0055) : Math.sin(this.bob * 0.45) * 0.2;

    this.kick += (Math.min(7, Math.abs(p.punchPitch) * 1.1) - this.kick) * Math.min(1, dt * 16);
    const reloading = p.reloadEnd > 0;
    this.reloadT += ((reloading ? 1 : 0) - this.reloadT) * Math.min(1, dt * 8);
    this.rise += ((p.deployTime > 0 ? 0 : 1) - this.rise) * Math.min(1, dt * 9);

    const targetSwayX = -(p.lastMouseDX || 0) * 0.55;
    const targetSwayY = (p.lastMouseDY || 0) * 0.35;
    this.swayX += (targetSwayX - this.swayX) * Math.min(1, dt * 9);
    this.swayY += (targetSwayY - this.swayY) * Math.min(1, dt * 9);
    p.lastMouseDX = 0;
    p.lastMouseDY = 0;

    const pose = (this.game && this.game.vmPose) || this.pose;
    const crouchOff = p.duckAmount * 2.2;
    this.root.scale.setScalar(pose.s);
    this.root.position.set(
      pose.x + bobX + this.swayX * 0.06,
      pose.y + bobY - crouchOff - (1 - this.rise) * 11 - this.reloadT * 4.5 + this.swayY * 0.06,
      pose.z + this.kick * 1.5,
    );
    this.root.rotation.set(
      this.kick * 0.02 + this.reloadT * 0.42 - (1 - this.rise) * 0.8,
      0.1 - this.kick * 0.008 + this.swayX * 0.006,
      this.reloadT * 0.3 + Math.sin(this.bob) * 0.01,
    );
  }
}
