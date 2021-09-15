---
title: ItemCard 展示型卡片
demo: /show/item-card
---

<Desc>

`ClassicItemCard`、 `NordicItemCard`、`AcrylicItemCard` 为展示型卡片。

</Desc>

## 代码演示

### Studio 风格

```jsx
import { ClassicItemCard } from 'tuya-panel-classic-kit';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<ClassicItemCard icon={TuyaRNSvgs.power} />
<ClassicItemCard
  icon={TuyaRNSvgs.power}
  subText="switch card"
  style={{ marginTop: 20 }}
  padding={[cx(12), cx(20), cx(12), cx(20)]}
/>
```

### 北欧风格

```jsx
import { NordicItemCard } from 'tuya-panel-nordic-kit';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<NordicItemCard icon={TuyaRNSvgs.power} />;
```

### 亚克力风格

```jsx
import { AcrylicItemCard } from 'tuya-panel-acrylic-kit';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<AcrylicItemCard icon={TuyaRNSvgs.power} />;
```

## API

<API src="../../../node_modules/tuya-panel-style-switch-card/lib/index.d.ts" exports='["ClassicItemCard"]'></API>
