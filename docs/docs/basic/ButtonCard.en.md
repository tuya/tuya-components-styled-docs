---
group:
  title: Basic

title: ButtonCard
demo: /basic/button-card
---

<Desc>

`ButtonCard` is ButtonCard

</Desc>

## Code demo

```jsx
import * as StyledButtonCard from 'tuya-panel-style-button-card';

const ClassicButtonCard = StyledButtonCard.ClassicButtonCard;
const NordicButtonCard = StyledButtonCard.NordicButtonCard;

const list = [
  {
    label: '按钮1',
    key: '0',
    disabled: true,
  },
  {
    label: '按钮2',
    key: '1',
  },
  {
    label: '按钮3',
    key: '2',
  },
  {
    label: '按钮4',
    key: '3',
  },
];

const list1 = list.map((item, idx) => ({
  ...item,
  label: `custom_${idx}`,
}));

<ClassicButtonCard title="工作模式" showIconBg={false} icon={TuyaRNSvgs.power} list={list} />
<NordicButtonCard title="工作" list={list} />
```

## API

<API src="../../../node_modules/tuya-panel-style-button-card/lib/interface.d.ts" exports='["IButtonCardProps"]'></API>
