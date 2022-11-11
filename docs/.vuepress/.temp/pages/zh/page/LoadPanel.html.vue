<template><div><h1 id="loadpanel-加载面板" tabindex="-1"><a class="header-anchor" href="#loadpanel-加载面板" aria-hidden="true">#</a> LoadPanel 加载面板</h1>
<p>区域加载面板，用来加载数据和数据加载失败后的reload</p>
<h4 id="参数-loadingstate" tabindex="-1"><a class="header-anchor" href="#参数-loadingstate" aria-hidden="true">#</a> 参数 loadingState</h4>
<ul>
<li>0: 加载中</li>
<li>1: 加载成功</li>
<li>2: 加载失败</li>
</ul>
<h4 id="事件-load" tabindex="-1"><a class="header-anchor" href="#事件-load" aria-hidden="true">#</a> 事件 load</h4>
<ul>
<li>加载数据， promose</li>
</ul>
<h4 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h4>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>seed-loadPanel</span> <span class="token attr-name">:loadState</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loadState<span class="token punctuation">"</span></span> <span class="token attr-name">@load</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>load<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    xxx
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>seed-loadPanel</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="加载中" tabindex="-1"><a class="header-anchor" href="#加载中" aria-hidden="true">#</a> 加载中</h5>
<seed-load-panel :loadState="0" /><h5 id="加载失败" tabindex="-1"><a class="header-anchor" href="#加载失败" aria-hidden="true">#</a> 加载失败</h5>
<loadPanel :loadState="2"></loadPanel><h5 id="加载成功" tabindex="-1"><a class="header-anchor" href="#加载成功" aria-hidden="true">#</a> 加载成功</h5>
<loadPanel :loadState="1">
加载成功啦～
</loadPanel>
</div></template>


