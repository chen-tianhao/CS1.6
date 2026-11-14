// ============================================================
//  maps/index.js — 地图注册表
//
//  新增地图的步骤：
//    1. 复制 maps/de_outpost.js，改 areas / props / sites / spawns
//    2. 在本文件 import 并加入 MAPS
//    3. 渲染、碰撞、A* 导航、AO 会自动从数据推导，不需要写任何渲染代码
// ============================================================
import de_outpost from './de_outpost.js';

export const MAPS = {
  de_outpost,
};

export const DEFAULT_MAP = 'de_outpost';

export function getMap(id) {
  const def = MAPS[id] || MAPS[DEFAULT_MAP];
  if (!def) throw new Error(`未知地图：${id}`);
  return def;
}
