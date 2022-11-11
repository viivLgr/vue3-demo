import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("LoadPanel", defineAsyncComponent(() => import("/Users/viiv_lgr/Desktop/viivLgr/code/vue_press/vuepress-starter/docs/.vuepress/components/LoadPanel.vue"))),
  app.component("demo1", defineAsyncComponent(() => import("/Users/viiv_lgr/Desktop/viivLgr/code/vue_press/vuepress-starter/docs/.vuepress/components/demo1.vue")))
}
