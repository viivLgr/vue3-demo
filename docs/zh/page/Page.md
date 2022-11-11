# Page 页面容器

通用页面容器，包含面包屑、页面名称、加载面板、页面尾

业务开发无需关注页面配置等内容，只需专注页面内元素和数据开发

集成加载面板，使用方式查看 

#### 基础用法
```vue
<template>
    <page :loadState="loadState" @load="load">
        xxx
    </page>
</template>
<script>
export default {
  data() {
    return {
        loadState: 0,
    }
  },
  methods: {
    load() {
        this.$api.fetch().then(_=> {

        }).catch(_ => {});
    }
  }
}
</script>
```