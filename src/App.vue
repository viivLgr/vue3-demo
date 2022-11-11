<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t, messages } = useI18n()
const languages = [
  { name: 'en', value: 'en' },
  { name: '中文', value: 'zh-cn' },
]
const currentLang = ref('en')
const currentPage1 = ref(5)
const small = ref(true)
const background = ref(true)
const disabled = ref(false)

const handleSetLanguage = (lang: string) => {
  locale.value = lang
  console.log('切换 i18n', lang)
  console.log('切换 locale', locale)
}
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>

<template>
  <el-config-provider :locale="messages[locale]">
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      <el-radio-group v-model="currentLang" size="large" @change="handleSetLanguage">
        <el-radio-button v-for="lang in languages" :label="lang.value">{{lang.name}}</el-radio-button>
      </el-radio-group>
      <div>{{$t('login.title')}}</div>
      <el-pagination
        v-model:currentPage="currentPage1"
        :page-size="100"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="total, prev, pager, next"
        :total="1000"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
      
    </div>
  </header>
  <RouterView />
  
  <br />
</el-config-provider>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
