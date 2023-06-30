import { defineConfig } from 'dumi';

const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  outputPath: 'docs-dist',
  // hash: true,
  history: {
    type: 'hash',
  },
  favicons: ['https://wukongyang.github.io/fe-funs/logo.svg'],
  metas: [{ name: 'theme-color', content: '#1677ff' }],
  themeConfig: {
    name: 'fe-funs',
    nav: [
      { title: '介绍', link: '/guide' },
      { title: '工具库', link: '/components/get-device' },
    ],
    footer: 'Copyright © 2023 | Powered by wukongyang',
  },
  logo: 'https://wukongyang.github.io/fe-funs/logo.svg',
  base: '/',
  // @ts-ignore
  // test
  exportStatic: false,
  publicPath: isDev ? '/' : 'https://wukongyang.github.io/fe-funs/',
  styles: [
    `.dumi-default-features-item {
      text-align: center;
    }
    body .dumi-default-sidebar>dl>dt {
      font-size: 16px;
    }
    body .dumi-default-sidebar>dl>dd>a {
      color: #717484;
      font-size: 14px;
    }
    `,
  ],
});
