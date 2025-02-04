import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  title: 'YarnLab',
  description: 'YarnLab Documentation',

  vite: {
    server: {
      proxy: {
        '/bilibili': {
          target: 'https://api.bilibili.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/bilibili/, ''),
        }
      }
    }
  },

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: '毛线实验室',
      description: '毛线实验室文档',
      themeConfig: {
        nav: [
          { text: '钩针教程', link: '/crochet/' },
          { text: '颜色对照表', link: '/colors' },
          { text: '支持作者', link: '/support' },

          // {
          //   text: 'Dropdown Menu',
          //   items: [
          //     { text: 'Item A', link: '/item-1' },
          //     { text: 'Item B', link: '/item-2' },
          //     { text: 'Item C', link: '/item-3' },

          //   ],
          // },

          // ...
        ],

        sidebar: [
          {
            text: '钩针教程',
            items: [
              { text: '钩针常用术语一览表', link: '/crochet/terms' },
              { text: '钩针文字图解 常用符号一览表', link: '/crochet/symbols' },
              { text: '钩针符号一览表（基础版）', link: '/crochet/basic' },
              { text: '钩针符号一览表（进阶版）', link: '/crochet/advanced' },
              { text: '视频教程', link: '/crochet/videos' },
            ],
          },
        ],
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'YarnLab',
      description: 'YarnLab Documentation',
      themeConfig: {
        nav: [
          { text: 'Crochet Tutorial', link: '/en/crochet/' },
        ],
        sidebar: [
          {
            text: 'Crochet Tutorial',
            items: [
              { text: 'Common Crochet Terms', link: '/en/crochet/terms' },
              { text: 'Common Symbols in Crochet Charts', link: '/en/crochet/symbols' },
              { text: 'Basic Crochet Symbols', link: '/en/crochet/basic' },
              { text: 'Advanced Crochet Symbols', link: '/en/crochet/advanced' },
            ],
          },
        ],
      }
    }
  }
});
