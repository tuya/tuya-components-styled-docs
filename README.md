# Tuya 风格化组件文档

- Demo 仓库地址：https://github.com/tuya/tuya-panel-kit/tree/master/example/tuya-components-styled
- Docs 仓库地址：https://github.com/tuya-umi-docs-team/tuya-components-styled-docs
- Docs 预览地址：https://tuya-umi-docs-team.github.io/tuya-components-styled-docs/docs/getting-started

### 添加一个组件文档

1. 安装对应组件： yarn add tuya-panel-style-button
2. md 编写：/docs/docs/basic 目录下新建 Button.md、Button.en.md
3. API 自动生成：示例：

```md
## API

<API src="../../../node_modules/tuya-panel-style-button/lib/index.d.ts" exports='["ClassicButton","NordicButton","AcrylicButton","PaintButton"]'></API>
```

### 规范

1. md 文件命名：大驼峰
2. jsdoc 注释规范：

中英文使用`@description.en`和`@description.zh`

```ts
export interface ISwitchCardProps {
  /**
   * @description.en Outermost container style
   * @description.zh 最外层容器样式
   * @default null
   */
  style?: StyleProp<ViewStyle>;
  /**
   * @description.en The background color
   * @description.zh 背景颜色
   * @default #FFF
   */
  backgroundColor?: string;
}
```

#### 前期开发规范

1. 成员都是 owner，直接走多分支开发就行
2. 推送 master 自动触发打包上线

### 后期

1. 基于微前端架构接入 panel-docs.tuyacn.com/tuya-components-styled/\*
2. 迁移到 TuyaInc，之后开发走 PR 流程、PR 预览
