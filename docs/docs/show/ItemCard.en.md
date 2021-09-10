---
title: ItemCard
demo: /show/item-card
---

<Desc>

`ClassicItemCard`、 `NordicItemCard`、`AcrylicItemCard` is display card.

</Desc>

## Code demo

### Studio

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

### Nordic

```jsx
import { NordicItemCard } from 'tuya-panel-nordic-kit';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<NordicItemCard icon={TuyaRNSvgs.power} />;
```

### Acrylic

```jsx
import { AcrylicItemCard } from 'tuya-panel-acrylic-kit';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<AcrylicItemCard icon={TuyaRNSvgs.power} />;
```

## API
