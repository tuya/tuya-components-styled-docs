---
group:
  title: Enumerate
title: ButtonCard
demo: /enum/button-card
---

<Desc>

`ClassicButtonCard`, `NordicButtonCard`

</Desc>

## Demo

### Studio

```jsx
import { useState } from 'react';
import { ClassicButtonCard } from 'tuya-panel-classic-kit';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

const list = [
  {
    label: 'Button1',
    key: '0',
    disabled: true,
  },
  {
    label: 'Button2',
    key: '1',
  },
  {
    label: 'Button3',
    key: '2',
  },
  {
    label: 'Button4',
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
        title="Card Title"
        showIconBg={false}
        icon={TuyaRNSvgs.power}
        list={list}
        defaultActiveKeys={['1']}
      />
      <Text style={styles.title}>Controlled multiple selection</Text>
      <ClassicButtonCard
        title="Card Title"
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

### Nordic

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
        title="Card Title"
        showIconBg={false}
        icon={TuyaRNSvgs.power}
        list={list}
      />
      <Text style={styles.title}>Custom button rendering methods</Text>
      <NordicButtonCard
        title="Card Title"
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
