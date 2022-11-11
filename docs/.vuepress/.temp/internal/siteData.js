export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"icon\",\"type\":\"image/png\",\"sizes\":\"16x16\",\"href\":\"/images/icons/favicon-16x16.png\"}],[\"link\",{\"rel\":\"icon\",\"type\":\"image/png\",\"sizes\":\"32x32\",\"href\":\"/images/icons/favicon-32x32.png\"}],[\"link\",{\"rel\":\"manifest\",\"href\":\"/manifest.webmanifest\"}],[\"meta\",{\"name\":\"application-name\",\"content\":\"VuePress\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-title\",\"content\":\"VuePress\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-status-bar-style\",\"content\":\"black\"}],[\"link\",{\"rel\":\"apple-touch-icon\",\"href\":\"/images/icons/apple-touch-icon.png\"}],[\"link\",{\"rel\":\"mask-icon\",\"href\":\"/images/icons/safari-pinned-tab.svg\",\"color\":\"#3eaf7c\"}],[\"meta\",{\"name\":\"msapplication-TileColor\",\"content\":\"#3eaf7c\"}],[\"meta\",{\"name\":\"theme-color\",\"content\":\"#3eaf7c\"}]],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"SEED 文档\",\"description\":\"SEED 前端开发文档\",\"colorMode\":\"dark\"},\"/en/\":{\"lang\":\"en-US\",\"title\":\"SEED Template Help\",\"description\":\"Vue-powered Static Site Generator\",\"navbar\":[{\"text\":\"Guide\",\"link\":\"/guide/\"},{\"text\":\"Reference\",\"children\":[{\"text\":\"VuePress\",\"children\":[{\"text\":\"CLI\",\"link\":\"/reference/cli.html\"},\"/reference/config.md\",\"/reference/frontmatter.md\",\"/reference/components.md\",\"/reference/plugin-api.md\",\"/reference/theme-api.md\",\"/reference/client-api.md\",\"/reference/node-api.md\"]},{\"text\":\"Bundlers\",\"children\":[\"/reference/bundler/vite.md\",\"/reference/bundler/webpack.md\"]},{\"text\":\"Default Theme\",\"children\":[\"/reference/default-theme/config.md\",\"/reference/default-theme/frontmatter.md\",\"/reference/default-theme/components.md\",\"/reference/default-theme/markdown.md\",\"/reference/default-theme/styles.md\",\"/reference/default-theme/extending.md\"]}]},{\"text\":\"Plugins\",\"children\":[{\"text\":\"Common Features\",\"children\":[\"/reference/plugin/back-to-top.md\",\"/reference/plugin/container.md\",\"/reference/plugin/external-link-icon.md\",\"/reference/plugin/google-analytics.md\",\"/reference/plugin/medium-zoom.md\",\"/reference/plugin/nprogress.md\",\"/reference/plugin/register-components.md\"]},{\"text\":\"Content Search\",\"children\":[\"/reference/plugin/docsearch.md\",\"/reference/plugin/search.md\"]},{\"text\":\"PWA\",\"children\":[\"/reference/plugin/pwa.md\",\"/reference/plugin/pwa-popup.md\"]},{\"text\":\"Syntax Highlighting\",\"children\":[\"/reference/plugin/prismjs.md\",\"/reference/plugin/shiki.md\"]},{\"text\":\"Theme Development\",\"children\":[\"/reference/plugin/active-header-links.md\",\"/reference/plugin/git.md\",\"/reference/plugin/palette.md\",\"/reference/plugin/theme-data.md\",\"/reference/plugin/toc.md\"]}]},{\"text\":\"Learn More\",\"children\":[{\"text\":\"Advanced\",\"children\":[\"/advanced/architecture.md\",\"/advanced/plugin.md\",\"/advanced/theme.md\",{\"text\":\"Cookbook\",\"link\":\"/advanced/cookbook/\"}]},{\"text\":\"Resources\",\"children\":[\"/contributing.md\",{\"text\":\"Awesome VuePress\",\"link\":\"https://github.com/vuepress/awesome-vuepress\"}]}]},{\"text\":\"v2.0.0-beta.53\",\"children\":[{\"text\":\"Changelog\",\"link\":\"https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md\"},{\"text\":\"v1.x\",\"link\":\"https://v1.vuepress.vuejs.org\"},{\"text\":\"v0.x\",\"link\":\"https://v0.vuepress.vuejs.org\"}]}]}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
