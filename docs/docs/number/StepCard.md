---
title: StepCard 步进器卡片
demo: /number/step-card
---

<Desc>

`ClassicStepCard`、 `NordicStepCard` 为步进器卡片。

</Desc>

## 代码演示

### Studio 风格

```jsx
import { ClassicStepCard } from 'tuya-panel-classic-kit';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<ClassicStepCard onValueChange={value => console.log({ value })} />;
```

### 北欧风格

```jsx
import { NordicStepCard } from 'tuya-panel-nordic-kit';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<NordicStepCard icon={TuyaRNSvgs.power} unit="%" />;
```

## API
