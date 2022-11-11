<template><div><h1 id="seed-组件-中文" tabindex="-1"><a class="header-anchor" href="#seed-组件-中文" aria-hidden="true">#</a> SEED 组件 中文</h1>
<h2 id="page" tabindex="-1"><a class="header-anchor" href="#page" aria-hidden="true">#</a> page</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>这是一个提示</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>这是一个警告</p>
</div>
<div class="custom-container danger"><p class="custom-container-title">危险</p>
<p>这是一个危险警告</p>
</div>
<details class="custom-container details"><summary>点击查看代码</summary>
<p>这是一个 details 标签</p>
</details>
<CodeGroup>
<CodeGroupItem title="FOO">
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">'foo'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="BAR">
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token string">'bar'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<p>一加一等于： {{ 1 + 1 }}</p>
<p><span v-for="i in 3"> span: {{ i }} </span></p>
<p>这是默认主题内置的 <code v-pre>&lt;Badge /&gt;</code> 组件 <Badge text="演示" /></p>
<Content page-key="./page.md" /></div></template>


