---
group:
  title: 枚举
title: ButtonCard 枚举型卡片
demo: /enum/button-card
---

<Desc>

`ClassicButtonCard`, `NordicButtonCard`

</Desc>

## 代码演示

### Studio 风格

```jsx
import { useState } from 'react';
import { ClassicButtonCard } from 'tuya-panel-classic-kit';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

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

const list1 = list.map(item => ({
  ...item,
  icon: TuyaRNSvgs.power,
}));

function Demo() {
  const [activeKeys, setActiveKeys] = useState(['0', '1']);
  const handActiveKeyChange = (key, nextKeys, data) => {
    setActiveKeys(nextKeys);
  };
  return (
    <View>
      <ClassicButtonCard
        title="工作模式"
        showIconBg={false}
        icon={TuyaRNSvgs.power}
        list={list}
        defaultActiveKeys={['1']}
      />
      <Text style={styles.title}>受控制的多选</Text>
      <ClassicButtonCard
        title="工作模式"
        icon={TuyaRNSvgs.power}
        iconSize={14}
        showIconBg
        iconBgColor={{
          deg: 90,
          stops: {
            '0%': 'red',
            '100%': 'yellow',
          },
        }}
        list={list}
        rowCount={4}
        activeKeys={activeKeys}
        activeKeyChange={handActiveKeyChange}
        type="multi"
      />
    </View>
  );
}
```

### 北欧风格

```jsx
import { NordicButtonCard } from 'tuya-panel-nordic-kit';
import { ClassicIconBackground } from 'tuya-panel-style-icon-background';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

function DemoNordic() {
  const renderButtonItem = data => {
    // console.log(data);
    return (
      <View style={styles.buttonStyle}>
        <ClassicIconBackground showIconBg={false} icon={data.icon} />
        <Text style={{ marginTop: 15 }}>{data.label}</Text>
      </View>
    );
  };
  return (
    <View>
      <NordicButtonCard
        title="工作模式"
        showIconBg={false}
        icon={TuyaRNSvgs.power}
        list={list}
      />
      <Text style={styles.title}>自定义按钮渲染方法</Text>
      <NordicButtonCard
        title="工作模式"
        showIconBg={false}
        icon={TuyaRNSvgs.power}
        list={list1}
        renderButtonItem={renderButtonItem}
        rowCount={4}
        showTitle={false}
        backgroundColor="rgba(255, 255, 255, 0)"
      />
    </View>
  );
}
```

## API

<API src="../../../node_modules/tuya-panel-style-button-card/lib/index.d.ts" exports='["ClassicButtonCard"]'></API>
