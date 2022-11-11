export const data = JSON.parse("{\"key\":\"v-328f373d\",\"path\":\"/en/page.html\",\"title\":\"page\",\"lang\":\"en-US\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[],\"git\":{},\"filePathRelative\":\"en/page.md\"}")

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
