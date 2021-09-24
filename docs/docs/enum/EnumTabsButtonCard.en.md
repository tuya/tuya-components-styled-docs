---
group:
  title: Enumerate
title: EnumTabsButtonCard 枚举型选项卡片
demo: /enum/enum-tabs-button-card
---

<Desc>

`ClassicEnumTabsButtonCard`

</Desc>

## Demo

### Studio

```jsx
const data = [
  {
    label: '1',
    key: '1',
    disabled: true,
  },
  {
    label: '2',
    key: 'two',
  },
  {
    label: '3',
    key: '3',
  },
  {
    label: '4',
    key: '5',
  },
  {
    label: '5',
    key: '6',
  },
  {
    label: '6',
    key: '7',
  },
];

export default () => {
  const [activeKey, setActiveKey] = useState('7');
  return (
    <ListView
      style={{ backgroundColor: '#f9f9f9', minHeight: 200 }}
      list={[
        {
          title: 'Classic',
          content: (
            <View>
              <ClassicEnumTabsButtonCard
                activeKey={activeKey}
                data={data}
                title="Classic"
                icon={TuyaRNSvgs.power}
                unit="档"
                onChange={key => setActiveKey(key)}
              />
              <ClassicEnumTabsButtonCard
                style={{ marginTop: 20 }}
                data={data}
                title="Custom theme"
                icon={TuyaRNSvgs.power}
                unit="档"
                valueFontColor="#ff6700"
                grooveBgColor="#000"
                activeTextColor="#fff"
                thumbBgColor="#ff6700"
                onChange={key => setActiveKey(key)}
              />
            </View>
          ),
        },
      ]}
    />
  );
};
```

## API

<API src="../../../node_modules/tuya-panel-style-enum-tabs-button-card/lib/index.d.ts" exports='["ClassicEnumTabsButtonCard"]'></API>
