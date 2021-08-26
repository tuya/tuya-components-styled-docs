---
group:
  title: 通用

title: ButtonCard 按钮卡片
demo: /basic/button-card
---

<Desc>

`ButtonCard` 是按钮卡片

</Desc>

## 代码演示

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
