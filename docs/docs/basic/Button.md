---
group:
  title: 通用
  order: 2
title: Button 按钮
demo: /basic/button
---

<Desc>

`ClassicButton`、`NordicButton`、`NordicButton` 通用型按钮组件

</Desc>

## 代码演示

### Studio 风格

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
    text="开关"
  />
  <Text style={styles.title}>没有图标、没有背景</Text>
  <View style={{ flexDirection: 'row' }}>
    <ClassicButton
      width={90}
      showIcon={false}
      icon={TuyaRNSvgs.power}
      text="开关"
      iconColor="#FFF"
      padding={[5, 0, 0, 5]}
    />
    <ClassicButton
      width={90}
      showIconBg={false}
      icon={TuyaRNSvgs.power}
      text="开关"
      iconColor="#158CFC"
      style={{ marginLeft: 10 }}
    />
  </View>
  <Text style={styles.title}>设置内边距</Text>
  <ClassicButton
    icon={TuyaRNSvgs.power}
    text="开关"
    iconColor="#FFF"
    style={{ marginLeft: 10 }}
    padding={[10, 40, 0, 0]}
  />
</View>;
```

### 北欧风格

```jsx
import { NordicButton } from 'tuya-panel-style-button';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';

<NordicButton icon={TuyaRNSvgs.power} text="开关" iconColor="#FFF" />;
```

### 亚克力风格

```jsx
<AcrylicButton
  icon={TuyaRNSvgs.power}
  text="开关"
  iconColor="#FFF"
  isSupportAcrylic={isShow}
/>
```

## API

<API src="../../../node_modules/tuya-panel-style-button/lib/index.d.ts" exports='["ClassicButton"]'></API>
