---
title: SwitchCard
demo: /bool/switch-card
---

<Desc>

`ClassicSwitchCard`、 `NordicSwitchCard`、`AcrylicSwitchCard` is boolean switch card.

</Desc>

## Code demo

### Studio

```jsx
import { ClassicSwitchCard } from 'tuya-panel-classic-kit';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<ClassicSwitchCard icon={TuyaRNSvgs.power} />;
<ClassicSwitchCard
  icon={TuyaRNSvgs.power}
  subText="switch card"
  style={{ marginTop: 20 }}
/>;
```

### Nordic

```jsx
import { NordicSwitchCard } from 'tuya-panel-nordic-kit';

<NordicSwitchCard />;
```

### Acrylic

```jsx
import { AcrylicSwitchCard } from 'tuya-panel-acrylic-kit';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<AcrylicSwitchCard icon={TuyaRNSvgs.power} subText="switch card" />;
```

## API

<API src="../../../node_modules/tuya-panel-style-switch-card/lib/index.d.ts" exports='["ClassicSwitchCard"]'></API>
