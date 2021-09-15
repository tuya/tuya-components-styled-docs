---
title: ListCard 列表类卡片
demo: /enum/list-card
---

<Desc>

`NordicListCard` 为列表类卡片。

</Desc>

## 代码演示

### 北欧风格

```jsx
import { NordicListCard } from 'tuya-panel-nordic-kit';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

const [value, setValue] = React.useState('world');

<NordicListCard
  icon={TuyaRNSvgs.power}
  value={value}
  onPress={value => setValue(value)}
  dataSource={[
    { icon: TuyaRNSvgs.power, text: 'Hello World', value: 'world' },
    { icon: TuyaRNSvgs.power, text: 'Hello Tuya', value: 'tuya' },
    { icon: TuyaRNSvgs.power, text: 'Hello China', value: 'china' },
  ]}
/>;
```

## API

<API src="../../../node_modules/tuya-panel-style-list-card/lib/index.d.ts" exports='["NordicListCard"]'></API>
