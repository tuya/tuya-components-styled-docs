---
title: SliderCard
demo: /number/slider-card
---

<Desc>

`ClassicSliderCard`, `ClassicLargeSliderCard`, `NordicLargeSliderCard`, `AcrylicSliderCard`

</Desc>

## Demo

### Studio

```jsx
import { ClassicSliderCard, ClassicLargeSliderCard } from 'tuya-panel-classic-kit';

<ClassicSliderCard
  style={{ marginTop: 20 }}
  title="滑动card"
  icon={TuyaRNSvgs.power}
  value={value}
  unit="%"
  handValueChange={setValue}
  canTouchTrack
/>
<ClassicLargeSliderCard
  icon={TuyaRNSvgs.power}
  showIconBg
  iconBgColor={{
    deg: 90,
    stops: {
      '0%': 'red',
      '100%': 'yellow',
    },
  }}
  style={{ marginTop: 20 }}
  title="粗的滑动条"
  unit="条"
  value={value}
  handSlidingComplete={setValue}
  disabled
/>
```

### Nordic

```jsx
import { NordicLargeSliderCard } from 'tuya-panel-nordic-kit';

<NordicLargeSliderCard
  title="风速"
  icon={TuyaRNSvgs.power}
  maximumValue={enumValue.length - 1}
  minimumValue={0}
  value={0}
  renderValue={value => enumValue[value]}
/>;
```

### Acrylic

```jsx
import { AcrylicSliderCard } from 'tuya-panel-acrylic-kit';

<AcrylicSliderCard
  iconSize={20}
  title="Function"
  icon={IMAGE}
  bothSideIcons={[
    { icon: IMAGE, isImage: true },
    { icon: IMAGE, isImage: true },
  ]}
  bothSideIconIsImage
  iconIsImage
  value={value1}
  bottomPromptTexts={['Low', 'Max']}
  handValueChange={setValue1}
/>
<AcrylicSliderCard
  style={{ marginTop: 20 }}
  iconSize={20}
  iconIsImage
  title="Function"
  icon={IMAGE}
  bothSideIcons={[{ icon: TuyaRNSvgs.power }, { icon: TuyaRNSvgs.power }]}
  value={value1}
  bottomPromptTexts={['最小', '最大']}
  handSlidingComplete={setValue1}
/>
<AcrylicSliderCard
  style={{ marginTop: 20 }}
  iconSize={20}
  title="Function"
  icon={TuyaRNSvgs.power}
  maximumValue={enumValue.length - 1}
  minimumValue={0}
  value={0}
  bottomPromptTexts={['最小', '最大']}
  renderValue={value => enumValue[value]}
/>
```

## API

<API src="../../../node_modules/tuya-panel-style-slider-card/lib/index.d.ts" exports='["ClassicSliderCard"]'></API>
