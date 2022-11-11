---
home: true
title: 首页
heroImage: https://seed.mindflow.com.cn/img/logo.7b4a6e44.png
actions:
  - text: 快速上手
    link: /zh/
    type: primary
features:
  - title: 路由
    details: 登录、注册、邀请、企业、组织架构、企业权限、项目管理、项目角色、项目配置、
  - title: 权限
    details: 企业权限和项目权限、页面权限和操作权限
  - title: 组件化
    details: 通用组件开发与使用、表格组件（跨页）
  - title: 全局事件
    details: 上传、下载、消息、调度
  - title: 私有化
    details: 不同私有化产品的开关与配置
  - title: 国际化
    details: 至少支持两种语言切换
footer: MIT Licensed | Copyright © 2018-present 果然
---

### 像数 1, 2, 3 一样容易

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
# 在你的项目中安装
yarn add -D vuepress@next
# 新建一个 markdown 文件
echo '# Hello VuePress' > README.md
# 开始写作
yarn vuepress dev
# 构建静态文件
yarn vuepress build
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
# 在你的项目中安装
npm install -D vuepress@next
# 新建一个 markdown 文件
echo '# Hello VuePress' > README.md
# 开始写作
npx vuepress dev
# 构建静态文件
npx vuepress build
```

  </CodeGroupItem>
</CodeGroup>