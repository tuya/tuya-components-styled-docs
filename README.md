# Tuya 风格化组件文档

- Demo仓库地址：https://github.com/tuya/tuya-panel-kit/tree/master/example/tuya-components-styled
- Docs仓库地址：https://github.com/tuya-umi-docs-team/tuya-components-styled-docs
- Docs预览地址：https://tuya-umi-docs-team.github.io/tuya-components-styled-docs/docs/getting-started

### 添加一个组件文档

1. 安装对应组件： yarn add tuya-panel-style-button
2. md编写：/docs/docs/basic 目录下新建 Button.md、Button.en.md
3. API自动生成：示例：

```md
## API

<API src="../../../node_modules/tuya-panel-style-button/src/index.tsx" exports='["ClassicButton","NordicButton","AcrylicButton","PaintButton"]'></API>
```

### 规范

1. md文件命名：大驼峰
2. jsdoc注释规范：https://d.umijs.org/zh-CN/guide/advanced#%E7%BB%84%E4%BB%B6-api-%E8%87%AA%E5%8A%A8%E7%94%9F%E6%88%90

#### 前期开发规范

1. 成员都是owner，直接走多分支开发就行
2. 推送master自动触发打包上线

### 后期

1. 基于微前端架构接入 panel-docs.tuyacn.com/tuya-components-styled/*
2. 迁移到TuyaInc，之后开发走PR流程、PR预览
