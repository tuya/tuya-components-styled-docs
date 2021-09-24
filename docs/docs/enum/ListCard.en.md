---
group:
  title: Enumerate
title: ListCard
demo: /enum/list-card
---

<Desc>

`NordicListCard` is List cards.

</Desc>

## Code demo

### Nordic

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
