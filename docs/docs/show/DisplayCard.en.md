---
group:
  title: Show
title: DisplayCard
demo: /show/display-card
---

<Desc>

`ClassicDisplayCard`、 `NordicDisplayCard`、`AcrylicDisplayCard` is display cards for block text.
</Desc>

## Code demo

### Studio

```jsx
import { ClassicDisplayCard } from 'tuya-panel-classic-kit';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<ClassicDisplayCard isAlignCenter />
<ClassicDisplayCard backgroundColor="#FFF" icon={TuyaRNSvgs.power} />
```

### Nordic

```jsx
import { NordicDisplayCard } from 'tuya-panel-nordic-kit';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<NordicDisplayCard icon={TuyaRNSvgs.power} value="32.0" />;
```

### Acrylic

```jsx
import { AcrylicDisplayCard } from 'tuya-panel-acrylic-kit';

<AcrylicDisplayCard />;
```

## API

<API src="../../../node_modules/tuya-panel-style-display-card/lib/index.d.ts" exports='["ClassicDisplayCard"]'></API>
