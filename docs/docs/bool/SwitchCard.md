---
title: SwitchCard 布尔开关卡片
demo: /bool/switch-card
---

<Desc>

`ClassicSwitchCard`、 `NordicSwitchCard`、`AcrylicSwitchCard` 为布尔开关卡片。

</Desc>

## 代码演示

### Studio 风格

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

### 北欧风格

```jsx
import { NordicSwitchCard } from 'tuya-panel-nordic-kit';

<NordicSwitchCard />;
```

### 亚克力风格

```jsx
import { AcrylicSwitchCard } from 'tuya-panel-acrylic-kit';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<AcrylicSwitchCard icon={TuyaRNSvgs.power} subText="switch card" />;
```

## API
