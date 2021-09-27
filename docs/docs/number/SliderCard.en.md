---
group:
  title: Number
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
  title="Slider Card"
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
  title="Thick sliders"
  unit="%"
  value={value}
  handSlidingComplete={setValue}
  disabled
/>
```

### Nordic

```jsx
import { NordicLargeSliderCard } from 'tuya-panel-nordic-kit';

<NordicLargeSliderCard
  title="The wind speed"
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
  bottomPromptTexts={['min', 'max']}
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
  bottomPromptTexts={['min', 'max']}
  renderValue={value => enumValue[value]}
/>
```

## API

<API src="../../../node_modules/tuya-panel-style-slider-card/lib/index.d.ts" exports='["ClassicSliderCard"]'></API>
