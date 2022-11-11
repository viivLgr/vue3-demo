export const data = JSON.parse("{\"key\":\"v-90fd219c\",\"path\":\"/zh/page/Page.html\",\"title\":\"Page 页面容器\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[],\"git\":{},\"filePathRelative\":\"zh/page/Page.md\"}")

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
