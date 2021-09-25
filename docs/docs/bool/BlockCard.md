---
group:
  title: 布尔
title: BlockCard 块状布尔类型卡片
demo: /bool/block-card
---

<Desc>

`ClassicBlockCard`、`NordicBlockCard`、`AcrylicBlockCard` 为块状布尔类型卡片。

</Desc>

## 代码演示

### Studio 风格

```jsx
import { ClassicBlockCard } from 'tuya-panel-classic-kit';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<ClassicBlockCard icon={TuyaRNSvgs.power} />;
```

### 北欧风格

```jsx
import { NordicBlockCard } from 'tuya-panel-nordic-kit';

<NordicBlockCard />;
```

### 亚克力风格

```jsx
import { AcrylicBlockCard } from 'tuya-panel-acrylic-kit';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<AcrylicBlockCard icon={TuyaRNSvgs.power} />;
```

## API

### ClassicBlockCard && AcrylicBlockCard

<API src="../../../node_modules/tuya-panel-style-block-card/lib/index.d.ts" exports='["ClassicBlockCard"]'></API>

### NordicBlockCard

<API src="../../../node_modules/tuya-panel-style-block-card/lib/index.d.ts" exports='["NordicBlockCard"]'></API>
