---
group:
  title: 枚举
title: EnumCard 枚举型卡片
demo: /enum/enum-card
---

<Desc>

`ClassicEnumCard`, `NordicEnumCard`, `AcrylicEnumCard`

</Desc>

## 代码演示

### Studio 风格

```jsx
import { ClassicEnumCard } from 'tuya-panel-classic-kit';

const IMAGE =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==';
const list = [
  {
    label: 'status1',
    icon: TuyaRNSvgs.power,
    key: '0',
    disabled: true,
  },
  {
    label: 'status2',
    icon: TuyaRNSvgs.power,
    key: '1',
  },
  {
    label: 'status3',
    icon: TuyaRNSvgs.power,
    key: '2',
  },
  {
    label: 'status4',
    icon: TuyaRNSvgs.power,
    key: '3',
  },
  {
    label: 'status5',
    icon: TuyaRNSvgs.power,
    key: '4',
  },
  {
    label: 'status6',
    icon: TuyaRNSvgs.power,
    key: '5',
  },
];

const list1 = list.map(item => {
  return {
    ...item,
    isImage: true,
    icon: IMAGE,
  };
});

<ClassicEnumCard
  width={290}
  title="Title"
  data={list}
  // data={[]}
  activeKey={activeKey1}
  onActiveKeyChange={onActiveKeyChange}
/>
<ClassicEnumCard
  padding={[20, 20, 20, 20]}
  style={{ marginTop: 20 }}
  title="Title"
  showTitle={false}
  data={list.slice(0, 4)}
  defaultActiveKey="1"
  showIconBg={false}
  activeIconColor="#ff6700"
  activeTextColor="#ff6700"
/>
<ClassicEnumCard
  pageCount={3}
  style={{ marginTop: 20 }}
  data={list}
  defaultActiveKey="1"
  showIconBg={false}
  activeIconColor="#ff6700"
  activeTextColor="#ff6700"
/>

```

### 北欧风格

```jsx
import { NordicEnumCard } from 'tuya-panel-nordic-kit';

<NordicEnumCard disabled title="Title" data={list} activeKey="0" />
<NordicEnumCard
  disabled
  style={{ marginTop: 20 }}
  title="Title"
  showTitle={false}
  data={list1.slice(0, 4)}
  defaultActiveKey="1"
/>
```

### 亚克力风格

```jsx
<AcrylicEnumCard title="Title" data={list} activeKey="0" />
<AcrylicEnumCard
  style={{ marginTop: 20 }}
  title="Title"
  showTitle={false}
  data={list1.slice(0, 4)}
  defaultActiveKey="1"
/>
```

## API

<API src="../../../node_modules/tuya-panel-style-enum-card/lib/index.d.ts" exports='["ClassicEnumCard"]'></API>
