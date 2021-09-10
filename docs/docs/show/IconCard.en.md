---
title: IconCard
demo: /show/icon-card
---

<Desc>

`ClassicIconBlockCard`、 `NordicIconBlockCard`、`AcrylicIconBlockCard` is block cards for icon text.

</Desc>

## Code demo

### Studio

```jsx
import { ClassicIconBlockCard } from 'tuya-panel-classic-kit';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<ClassicIconBlockCard icon={TuyaRNSvgs.power} />;
```

### Nordic

```jsx
import { NordicIconBlockCard } from 'tuya-panel-nordic-kit';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<NordicIconBlockCard icon={TuyaRNSvgs.power} />
<NordicIconBlockCard showIcon={false} hasArrow style={{ marginTop: 20 }} />
<NordicIconBlockCard icon={TuyaRNSvgs.power} hasArrow style={{ marginTop: 20 }} />
```

### Acrylic

```jsx
import { AcrylicIconBlockCard } from 'tuya-panel-acrylic-kit';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<AcrylicIconBlockCard icon={TuyaRNSvgs.power} />;
```

## API
