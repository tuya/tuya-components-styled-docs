---
group:
  title: Show
title: DepictCard
demo: /show/depict-card
---

<Desc>

`ClassicDepictCard`、 `NordicDepictCard`、`AcrylicDepictCard`、`AcrylicDepictIconCard` is display cards for block text.

</Desc>

## Code demo

### Studio

```jsx
import { ClassicDepictCard } from 'tuya-panel-classic-kit';

<ClassicDepictCard backgroundColor="#fff" />;
```

### Nordic

```jsx
import { NordicDepictCard } from 'tuya-panel-nordic-kit';

<NordicDepictCard />;
```

### Acrylic

```jsx
import { AcrylicDepictCard, AcrylicDepictIconCard } from 'tuya-panel-acrylic-kit';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<AcrylicDepictCard style={{ marginBottom: 20 }} />
<AcrylicDepictIconCard icon={TuyaRNSvgs.power} />
```

## API

<API src="../../../node_modules/tuya-panel-style-depict-card/lib/index.d.ts" exports='["ClassicDepictCard"]'></API>
