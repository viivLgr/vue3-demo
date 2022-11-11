export const data = JSON.parse("{\"key\":\"v-56c59782\",\"path\":\"/zh/page.html\",\"title\":\"page 组件\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"sd\",\"slug\":\"sd\",\"link\":\"#sd\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"zh/page.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
