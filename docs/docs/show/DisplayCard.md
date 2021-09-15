---
title: DisplayCard 文本描述卡片
demo: /show/display-card
---

<Desc>

`ClassicDisplayCard`、 `NordicDisplayCard`、`AcrylicDisplayCard` 为块状文本显示卡片。

</Desc>

## 代码演示

### Studio 风格

```jsx
import { ClassicDisplayCard } from 'tuya-panel-classic-kit';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<ClassicDisplayCard isAlignCenter />
<ClassicDisplayCard backgroundColor="#FFF" icon={TuyaRNSvgs.power} />
```

### 北欧风格

```jsx
import { NordicDisplayCard } from 'tuya-panel-nordic-kit';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<NordicDisplayCard icon={TuyaRNSvgs.power} value="32.0" />;
```

### 亚克力风格

```jsx
import { AcrylicDisplayCard } from 'tuya-panel-acrylic-kit';

<AcrylicDisplayCard />;
```

## API

<API src="../../../node_modules/tuya-panel-style-display-card/lib/index.d.ts" exports='["ClassicDisplayCard"]'></API>
