import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("LoadPanel", defineAsyncComponent(() => import("/Users/viiv_lgr/Desktop/viivLgr/code/vue_press/vuepress-starter/components/LoadPanel.vue")))
  },
}
