---
group:
  title: 显示
title: DepictCard 块状文本显示卡片
demo: /show/depict-card
---

<Desc>

`ClassicDepictCard`、 `NordicDepictCard`、`AcrylicDepictCard`、`AcrylicDepictIconCard` 为块状文本显示卡片。

</Desc>

## 代码演示

### Studio 风格

```jsx
import { ClassicDepictCard } from 'tuya-panel-classic-kit';

<ClassicDepictCard backgroundColor="#fff" />;
```

### 北欧风格

```jsx
import { NordicDepictCard } from 'tuya-panel-nordic-kit';

<NordicDepictCard />;
```

### 亚克力风格

```jsx
import { AcrylicDepictCard, AcrylicDepictIconCard } from 'tuya-panel-acrylic-kit';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<AcrylicDepictCard style={{ marginBottom: 20 }} />
<AcrylicDepictIconCard icon={TuyaRNSvgs.power} />
```

## API
