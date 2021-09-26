---
group:
  title: Basic
  order: 2
title: IconBackground
demo: /basic/icon-background
---

## Code demo

### icon and background

```jsx
import { ClassicIconBackground } from 'tuya-panel-style-icon-background';

<View style={{ display: 'flex', flexDirection: 'row' }}>
  <ClassicIconBackground icon={TuyaRNSvgs.power} style={{ marginRight: 20 }} />
  <ClassicIconBackground
    iconBgColor="#ff6700"
    icon={TuyaRNSvgs.power}
    iconBgRadius={5}
  />
</View>;
```

### only icon

```jsx
import { ClassicIconBackground } from 'tuya-panel-style-icon-background';

<ClassicIconBackground
  icon={TuyaRNSvgs.power}
  iconColor="#57BCFB"
  iconBgRadius={5}
  showIconBg={false}
/>;
```

### image

```jsx
import { ClassicIconBackground } from 'tuya-panel-style-icon-background';

<ClassicIconBackground
  image={IMAGE}
  iconBgColor="#fff"
  iconColor="#57BCFB"
  iconBgRadius={5}
  imageRadius={10}
/>;
```

### Background gradient

```jsx
import { ClassicIconBackground } from 'tuya-panel-style-icon-background';

<View style={{ display: 'flex', flexDirection: 'row' }}>
  <ClassicIconBackground
    iconBgColor={{
      deg: 90,
      stops: {
        '0%': 'red',
        '100%': 'yellow',
      },
    }}
    icon={TuyaRNSvgs.power}
    style={{ marginRight: 20 }}
  />
  <ClassicIconBackground
    iconBgColor={{
      stops: [
        {
          offset: '0%',
          stopColor: '#ff6700',
          stopOpacity: '1',
        },
        {
          offset: '100%',
          stopColor: '#22ee2d',
          stopOpacity: '1',
        },
      ],
      rx: '50%',
      ry: '50%',
      fx: '50%',
      fy: '50%',
      cx: '50%',
      cy: '50%',
    }}
    iconSize={40}
    iconBgSize={70}
    icon={TuyaRNSvgs.power}
    style={{ marginRight: 20 }}
  />
</View>;
```

### Background

```jsx
import { Background } from 'tuya-panel-style-icon-background';

<View>
  <Background
    style={{ justifyContent: 'center', alignItems: 'center' }}
    width={100}
    height={100}
    background="#ff6700"
  >
    <Text>hello world</Text>
  </Background>
  <Background
    style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}
    width={100}
    height={100}
    background={IMAGE}
  >
    <Text style={{ color: '#fff' }}>hello world</Text>
  </Background>
  <Background
    style={{ paddingTop: 20, marginTop: 20 }}
    contentStyle={{ paddingLeft: 5 }}
    width={100}
    height={100}
    background={{
      deg: 90,
      stops: {
        '0%': 'red',
        '100%': 'yellow',
      },
    }}
  >
    <Text style={{ color: '#fff' }}>hello world</Text>
  </Background>
  <Background
    style={{
      paddingTop: 20,
      marginTop: 20,
      borderRadius: 20,
      overflow: 'hidden',
    }}
    contentStyle={{ paddingLeft: 5 }}
    width={100}
    height={100}
    background={{
      stops: [
        {
          offset: '0%',
          stopColor: '#ff0',
          stopOpacity: '1',
        },
        {
          offset: '100%',
          stopColor: '#00f',
          stopOpacity: '1',
        },
      ],
      rx: '50%',
      ry: '50%',
      fx: '50%',
      fy: '50%',
      cx: '50%',
      cy: '50%',
    }}
  >
    <Text style={{ color: '#fff' }}>hello world</Text>
  </Background>
</View>;
```

## API

### ClassicIconBackground

<API src="../../../node_modules/tuya-panel-style-icon-background/lib/index.d.ts" exports='["ClassicIconBackground"]'></API>

### Background

<API src="../../../node_modules/tuya-panel-style-icon-background/lib/background.d.ts"></API>
