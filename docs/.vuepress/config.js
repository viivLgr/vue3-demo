import { defaultTheme, defineUserConfig } from 'vuepress';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'

import {
    head,
    navbarEn,
    navbarZh,
    sidebarEn,
    sidebarZh,
} from './configs/index.js';

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
    base: '/',
    head,
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'SEED 文档',
            description: 'SEED 前端开发文档',
            colorMode: 'dark',

        },
        '/en/': {
            lang: 'en-US',
            title: 'SEED Template Help',
            description: 'Vue-powered Static Site Generator',
            navbar: navbarEn
        },
    },
    theme: defaultTheme({
        logo: 'https://seed.mindflow.com.cn/img/logo.7b4a6e44.png',
        locales: {
            '/': {
                selectLanguageName: '简体中文',
                selectLanguageText: '选择语言',
                colorMode: 'dark',
                navbar: navbarZh,
                sidebar: sidebarZh,
                tip: '提示',
                warning: '注意',
                danger: '警告',
                notFound: [
                    '这里什么都没有',
                    '我们怎么到这来了？',
                    '这是一个 404 页面',
                    '看起来我们进入了错误的链接',
                ],
                backToHome: '返回首页',
                // a11y
                openInNewWindow: '在新窗口打开',
                toggleColorMode: '切换颜色模式',
                toggleSidebar: '切换侧边栏',
            },
            '/en/': {
                selectLanguageName: 'English',
                navbar: navbarEn,
                sidebar: sidebarEn,

            },

        }
    }),
    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, '../../components'),
        }),
    ],
})
