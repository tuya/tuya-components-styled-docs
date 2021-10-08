import { defineConfig, IConfig } from 'dumi';

const isProd =
  process.env.NODE_ENV === 'production' && process.env.PREVIEW_PR !== 'true';

const repo = 'tuya/tuya-components-styled-docs';

export default defineConfig({
  ssr: isProd ? {} : false,
  exportStatic: isProd ? {} : false,
  title: 'Tuya Design',
  mode: 'site',
  locales: [
    ['zh', '中文'],
    ['en', 'English'],
  ],
  // 网站favicon
  favicon:
    'https://imagesd.tuyaus.com/tyims/rms-static/c118f100-7bd1-11ea-be8a-afe9921c3d8a-1586595140625.ico?tyName=tuya_favicon.ico',
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
  theme: {
    'primary-color': '#ff4800',
  },
  // 网站左上角logo
  logo:
    'https://imagesd.tuyaus.com/tyims/rms-static/c118f100-7bd1-11ea-be8a-afe9921c3d8a-1586595140625.ico?tyName=tuya_favicon.ico',
  themeConfig: {
    // 修复locales和path冲突
    fixLocales: true,
    // demo部署地址
    demoUrl:
      process.env.NODE_ENV === 'development'
        ? 'https://tuya.github.io/tuya-panel-kit/tuya-components-styled'
        : // ? 'https://localhost:8081'
          'https://tuya.github.io/tuya-panel-kit/tuya-components-styled',
    qrcode:
      'tuyaSmart--addVirtualDev?productId=piczpunfin9ucqzv&token=release_common_component',
    typeAssetsUrl: `https://cdn.jsdelivr.net/gh/${repo}@gh-pages/types-assets.json`,
  },
  // 顶部导航
  // markdown中可通过meta中nav设置，这里是扩展的nav
  navs: {
    zh: [
      null,
      {
        title: 'Github',
        path: 'https://github.com/tuya/tuya-panel-kit',
      },
      {
        title: 'Contact Us',
        path: 'https://service.console.tuya.com/8/3/create',
      },
      {
        title: 'More',
        path: 'https://developer.tuya.com/cn/docs/iot/preface?id=K9m1fn6ycetd0',
      },
    ],
    en: [
      null,
      {
        title: 'Github',
        path: 'https://github.com/tuya/tuya-panel-kit',
      },
      {
        title: 'Contact Us',
        path: 'https://service.console.tuya.com/8/3/create',
      },
      {
        title: 'More',
        path: 'https://developer.tuya.com/cn/docs/iot/preface?id=K9m1fn6ycetd0',
      },
    ],
  },
  resolve: {
    passivePreview: true,
  },
  hash: isProd,
  base: isProd ? `/${repo.split('/')[1]}` : '/', // router base
  publicPath: isProd
    ? `//cdn.jsdelivr.net/gh/${repo}@gh-pages/` // cdn地址
    : '/',
  // more config: https://d.umijs.org/config
} as IConfig);
