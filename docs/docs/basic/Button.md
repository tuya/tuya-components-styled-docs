---
title: Button 按钮
demo: /basic/button
---

<Desc>

`Button` 是按钮

</Desc>

## 代码演示

```jsx
import * as StyledButton from 'tuya-panel-style-button';

const AcrylicButton = StyledButton.AcrylicButton;
const ClassicButton = StyledButton.ClassicButton;
const NordicButton = StyledButton.NordicButton;
const PaintButton = StyledButton.PaintButton;

const icon =
  'M512 0C794.760533 0 1024 229.239467 1024 512S794.760533 1024 512 1024 0 794.760533 0 512 229.239467 0 512 0z m185.048178 327.0656a26.988089 26.988089 0 0 0-38.183822 38.183822 207.712711 207.712711 0 1 1-293.728712 0 26.988089 26.988089 0 1 0-38.183822-38.183822c-102.172444 102.1952-102.172444 267.901156 0 370.096356 102.1952 102.172444 267.901156 102.172444 370.096356 0 102.172444-102.1952 102.172444-267.901156 0-370.096356zM511.886222 227.555556a27.079111 27.079111 0 0 0-26.919822 24.302933l-0.136533 2.776178v196.152889a27.079111 27.079111 0 0 0 53.998933 2.776177l0.136533-2.776177v-196.152889a27.079111 27.079111 0 0 0-27.079111-27.079111z';

<AcrylicButton isSupportAcrylic={true} icon={icon} />
<ClassicButton icon={icon} text="开关" iconColor="#158CFB" />
<NordicButton icon={icon}>
  <View style={{ width: 25, height: 25, backgroundColor: '#ff0' }} />
</NordicButton>
<PaintButton icon={icon} onLongPress={() => console.log('hh')} />
```
 
## API

继承自 [TouchableOpacityProps](https://reactnative.dev/docs/touchableopacity#props)

<API src="../../../node_modules/tuya-panel-style-button/lib/interface.d.ts" exports='["IButtonProps"]'></API>
