---
group:
  title: Number
title: ArrowCard
demo: /number/arrow-card
---

<Desc>

`ClassicArrowCard`、 `NordicArrowCard`、`AcrylicArrowCard` is an arrow shaped card.

</Desc>

## Code demo

### Studio

```jsx
import { ClassicArrowCard } from 'tuya-panel-classic-kit';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<ClassicArrowCard icon={TuyaRNSvgs.power} onPress={() => console.log('hhhhhh')} />
<ClassicArrowCard
  icon={TuyaRNSvgs.power}
  subText="switch card"
  style={{ marginTop: 20 }}
  padding={[cx(12), cx(28), cx(12), cx(20)]}
/>
```

### Nordic

```jsx
import { NordicArrowCard } from 'tuya-panel-nordic-kit';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<NordicArrowCard icon={TuyaRNSvgs.power} />;
```

### Acrylic

```jsx
import { AcrylicArrowCard } from 'tuya-panel-acrylic-kit';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<AcrylicArrowCard icon={TuyaRNSvgs.power} />;
```

## API

<API src="../../../node_modules/tuya-panel-style-switch-card/lib/index.d.ts" exports='["ClassicArrowCard"]'></API>
