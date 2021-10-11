import './app.less';
import { NotFound } from '@tuya/dumi-theme-tuya/exports';

export function patchRoutes({ routes }) {
  routes[2].routes.push({
    path: '*',
    component: NotFound,
  });
}

declare const HEARTBEAT: {
  connect(onBeat: (alive: boolean) => void): void;
  ref: number;
  delta: number;
};
declare const __Device__: { refresh(ref: number): void };

if (typeof window !== 'undefined') {
  HEARTBEAT.delta = 1000;
  // 心跳检测，如果demo断开连接，则自动尝试刷新重连
  HEARTBEAT.connect(alive => {
    if (!alive) {
      console.log('已断开连接，正在重连');
      __Device__.refresh(HEARTBEAT.ref);
    }
  });
}
