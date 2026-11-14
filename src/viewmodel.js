// ============================================================
//  viewmodel.js — 第一人称武器（独立场景渲染，避免穿墙与比例失真）
//  具体枪型几何见 models.js；这里只负责挂载、姿态与动画。
//
//  注意：模型几何体按 id 缓存在 models.js 里，切换武器时**不能** dispose，
//  否则切回来会拿到已销毁的 buffer。
// ============================================================
import * as THREE from 'three';
import { WEAPONS } from './config.js';
import { buildWeaponModel } from './models.js';

export class ViewModel {
  constructor(game) {
    this.game = game;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(68, 16 / 9, 1, 600);

    // 三点布光：主光偏暖、轮廓光偏冷、地面反弹补一点沙色。
    // 强度不能太高——浅色金属在 1.0 环境光 + 2.2 主光下会直接过曝成白色。
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.78));
    const key = new THREE.DirectionalLight(0xfff2d8, 1.5);
    key.position.set(-0.5, 1.3, 0.9);
    this.scene.add(key);
    const rim = new THREE.DirectionalLight(0x8fb0d8, 0.7);
    rim.position.set(1.4, 0.3, -1);
    this.scene.add(rim);
    const bounce = new THREE.PointLight(0xd8b070, 0.55, 200);
    bounce.position.set(0, -20, 10);
    this.scene.add(bounce);

    this.pose = { x: 4.2, y: -6.8, z: -33, s: 0.72 };
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
      this.weaponGroup = null;
    }
    if (!id || !WEAPONS[id]) return;
    const g = buildWeaponModel(id);
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

    // 挥刀弧线：swingT 从 1 衰减到 0，sin 包络做"抬起—劈下—收回"
    const swingRaw = p.curSlot === 'melee' ? (p.swingT || 0) : 0;
    const sw = swingRaw > 0 ? Math.sin(Math.PI * (1 - swingRaw)) : 0;

    this.root.scale.setScalar(pose.s);
    this.root.position.set(
      pose.x + bobX + this.swayX * 0.06 - sw * 2.6,
      pose.y + bobY - crouchOff - (1 - this.rise) * 11 - this.reloadT * 4.5 + this.swayY * 0.06 + sw * 1.8,
      pose.z + this.kick * 1.5 - sw * 6,
    );
    this.root.rotation.set(
      this.kick * 0.02 + this.reloadT * 0.42 - (1 - this.rise) * 0.8 - sw * 0.62,
      0.16 - this.kick * 0.008 + this.swayX * 0.006 + sw * 0.34,
      this.reloadT * 0.3 + Math.sin(this.bob) * 0.01 + sw * 0.42,
    );
  }
}
