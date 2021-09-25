---
group:
  title: Number
title: StepCard
demo: /number/step-card
---

<Desc>

`ClassicStepCard`、 `NordicStepCard` is stepper card.

</Desc>

## Code demo

### Studio

```jsx
import { ClassicStepCard } from 'tuya-panel-classic-kit';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<ClassicStepCard onValueChange={value => console.log({ value })} />;
```

### Nordic

```jsx
import { NordicStepCard } from 'tuya-panel-nordic-kit';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<NordicStepCard icon={TuyaRNSvgs.power} unit="%" />;
```

## API

### ClassicStepCard

<API src="../../../node_modules/tuya-panel-style-step-card/lib/index.d.ts" exports='["ClassicStepCard"]'></API>

### NordicStepCard

<API src="../../../node_modules/tuya-panel-style-step-card/lib/index.d.ts" exports='["NordicStepCard"]'></API>
