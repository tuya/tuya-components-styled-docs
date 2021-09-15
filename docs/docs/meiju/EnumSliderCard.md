---
group:
  title: 枚举
title: EnumSliderCard 枚举型滑动条卡片
demo: /enum/enum-slider-card
---

<Desc>

`AcrylicEnumSliderCard`

</Desc>

## 代码演示

### 亚克力风格

```jsx
export default () => {
  const [activeKey1, setActiveKey1] = useState('3');

  return (
    <ListView
      style={{ backgroundColor: '#f9f9f9', minHeight: 200 }}
      list={[
        {
          title: 'Acrylic',
          content: (
            <View>
              <AcrylicEnumSliderCard
                data={data}
                title="AcrylicEnumSliderCard"
                icon={TuyaRNSvgs.power}
                bottomPromptTexts={['Off', 'Max']}
                activeKey={activeKey1}
                handSlidingComplete={(key, index) => setActiveKey1(key)}
              />
              <View style={{ marginTop: 20 }}>
                <Button
                  onPress={() => setActiveKey1('2')}
                  title="click to change key 2"
                />
              </View>
            </View>
          ),
        },
      ]}
    />
  );
};
```

## API

<API src="../../../node_modules/tuya-panel-style-enum-slider-card/lib/index.d.ts" exports='["AcrylicEnumSliderCard"]'></API>
