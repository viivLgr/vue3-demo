import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/zh/': [
    {
      text: '开发指南',
      children: [
        '/zh/guide/README.md',
        '/zh/guide/getting-started.md',
        '/zh/guide/configuration.md',
      ],
    },
    {
      text: '页面元素',
      children: [
        '/zh/page/Breadcrumb.md',
        '/zh/page/LoadPanel.md',
        '/zh/page/Page.md',
        '/zh/page/Table.md',
      ],
    },
    {
      text: '基础组件',
      children: [
        '/zh/basic/button.md',
        '/zh/basic/icon.md',
        '/zh/basic/color.md',
      ],
    },
    {
      text: 'SDK',
      children: [
        '/zh/basic/button.md',
        '/zh/basic/icon.md',
        '/zh/basic/color.md',
      ],
    },
    {
      text: '业务组件',
      children: [
        '/zh/basic/CodeMirror.md',
        '/zh/basic/icon.md',
        '/zh/basic/color.md',
      ],
    },
    {
      text: 'Form',
      children: [
        '/zh/form/radio.md',
        '/zh/form/checkbox.md',
        '/zh/form/input.md',
        '/zh/form/inputNumber.md',
        '/zh/form/select.md',
      ],
    },
  ],
  '/zh/reference/': [
    {
      text: 'VuePress 参考',
      collapsible: true,
      children: [
        '/zh/reference/cli.md',
        '/zh/reference/config.md',
        '/zh/reference/frontmatter.md',
        '/zh/reference/components.md',
        '/zh/reference/plugin-api.md',
        '/zh/reference/theme-api.md',
        '/zh/reference/client-api.md',
        '/zh/reference/node-api.md',
      ],
    },
    {
      text: '打包工具参考',
      collapsible: true,
      children: [
        '/zh/reference/bundler/vite.md',
        '/zh/reference/bundler/webpack.md',
      ],
    },
    {
      text: '默认主题参考',
      collapsible: true,
      children: [
        '/zh/reference/default-theme/config.md',
        '/zh/reference/default-theme/frontmatter.md',
        '/zh/reference/default-theme/components.md',
        '/zh/reference/default-theme/markdown.md',
        '/zh/reference/default-theme/styles.md',
        '/zh/reference/default-theme/extending.md',
      ],
    },
    {
      text: '官方插件参考',
      collapsible: true,
      children: [
        {
          text: '常用功能',
          children: [
            '/zh/reference/plugin/back-to-top.md',
            '/zh/reference/plugin/container.md',
            '/zh/reference/plugin/external-link-icon.md',
            '/zh/reference/plugin/google-analytics.md',
            '/zh/reference/plugin/medium-zoom.md',
            '/zh/reference/plugin/nprogress.md',
            '/zh/reference/plugin/register-components.md',
          ],
        },
        {
          text: '内容搜索',
          children: [
            '/zh/reference/plugin/docsearch.md',
            '/zh/reference/plugin/search.md',
          ],
        },
        {
          text: 'PWA',
          children: [
            '/zh/reference/plugin/pwa.md',
            '/zh/reference/plugin/pwa-popup.md',
          ],
        },
        {
          text: '语法高亮',
          children: [
            '/zh/reference/plugin/prismjs.md',
            '/zh/reference/plugin/shiki.md',
          ],
        },
        {
          text: '主题开发',
          children: [
            '/zh/reference/plugin/active-header-links.md',
            '/zh/reference/plugin/git.md',
            '/zh/reference/plugin/palette.md',
            '/zh/reference/plugin/theme-data.md',
            '/zh/reference/plugin/toc.md',
          ],
        },
      ],
    },
  ],
}