---
group:
  title: Boolean
title: BlockCard
demo: /bool/block-card
---

<Desc>

`ClassicBlockCard`、`NordicBlockCard`、`AcrylicBlockCard` Block Boolean card.

</Desc>

## Code demo

### Studio

```jsx
import { ClassicBlockCard } from 'tuya-panel-classic-kit';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<ClassicBlockCard icon={TuyaRNSvgs.power} />;
```

### Nordic

```jsx
import { NordicBlockCard } from 'tuya-panel-nordic-kit';

<NordicBlockCard />;
```

### Acrylic

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
