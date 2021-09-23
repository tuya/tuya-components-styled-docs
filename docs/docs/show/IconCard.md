---
group:
  title: 显示
title: IconCard 图标文本块状卡片
demo: /show/icon-card
---

<Desc>

`ClassicIconBlockCard`、 `NordicIconBlockCard`、`AcrylicIconBlockCard` 为图标文本块状卡片。

</Desc>

## 代码演示

### Studio 风格

```jsx
import { ClassicIconBlockCard } from 'tuya-panel-classic-kit';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<ClassicIconBlockCard icon={TuyaRNSvgs.power} />;
```

### 北欧风格

```jsx
import { NordicIconBlockCard } from 'tuya-panel-nordic-kit';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<NordicIconBlockCard icon={TuyaRNSvgs.power} />
<NordicIconBlockCard showIcon={false} hasArrow style={{ marginTop: 20 }} />
<NordicIconBlockCard icon={TuyaRNSvgs.power} hasArrow style={{ marginTop: 20 }} />
```

### 亚克力风格

```jsx
import { AcrylicIconBlockCard } from 'tuya-panel-acrylic-kit';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<AcrylicIconBlockCard icon={TuyaRNSvgs.power} />;
```

## API

### ClassicIconBlockCard && AcrylicIconBlockCard

<API src="../../../node_modules/tuya-panel-style-icon-card/lib/index.d.ts" exports='["ClassicIconBlockCard"]'></API>

### NordicIconBlockCard

<API src="../../../node_modules/tuya-panel-style-icon-card/lib/index.d.ts" exports='["NordicIconBlockCard"]'></API>
