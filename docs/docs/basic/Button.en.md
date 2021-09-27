---
group:
  title: Basic
  order: 2
title: Button
demo: /basic/button
---

<Desc>

`ClassicButton`、`NordicButton`、`NordicButton` General purpose button assembly

</Desc>

## Demo

### Studio

```jsx
import { ClassicButton } from 'tuya-panel-style-button';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<View
  style={{
    display: 'flex',
  }}
>
  <ClassicButton
    onLongPress={() => console.log('long press')}
    icon={TuyaRNSvgs.power}
    text="switch"
  />
  <Text style={styles.title}>No icon, no background</Text>
  <View style={{ flexDirection: 'row' }}>
    <ClassicButton
      width={90}
      showIcon={false}
      icon={TuyaRNSvgs.power}
      text="switch"
      iconColor="#FFF"
      padding={[5, 0, 0, 5]}
    />
    <ClassicButton
      width={90}
      showIconBg={false}
      icon={TuyaRNSvgs.power}
      text="switch"
      iconColor="#158CFC"
      style={{ marginLeft: 10 }}
    />
  </View>
  <Text style={styles.title}>Set padding</Text>
  <ClassicButton
    icon={TuyaRNSvgs.power}
    text="switch"
    iconColor="#FFF"
    style={{ marginLeft: 10 }}
    padding={[10, 40, 0, 0]}
  />
</View>;
```

### Nordic

```jsx
import { NordicButton } from 'tuya-panel-style-button';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<NordicButton icon={TuyaRNSvgs.power} text="switch" iconColor="#FFF" />;
```

### Acrylic

```jsx
<AcrylicButton icon={TuyaRNSvgs.power} text="switch" iconColor="#FFF" />
```

## API

<API src="../../../node_modules/tuya-panel-style-button/lib/index.d.ts" exports='["ClassicButton"]'></API>
