import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta.js'

export const navbarZh: NavbarConfig = [
  {
    text: '指南',
    link: '/zh/',
  },
  {
    text: '插件',
    children: [
      {
        text: '常用功能',
        children: [
          '/zh/reference/plugin/back-to-top.md',
        ],
      },
    ],
  },
  {
    text: `v${version}`,
    children: [
      {
        text: '更新日志',
        link: 'https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md',
      },
      {
        text: 'v1.x',
        link: 'https://v1.vuepress.vuejs.org/zh/',
      },
      {
        text: 'v0.x',
        link: 'https://v0.vuepress.vuejs.org/zh/',
      },
    ],
  },
]