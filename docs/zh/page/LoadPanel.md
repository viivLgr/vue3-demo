# LoadPanel 加载面板

区域加载面板，用来加载数据和数据加载失败后的reload

#### 参数 loadingState

- 0: 加载中
- 1: 加载成功
- 2: 加载失败

#### 事件 load
- 加载数据， promose


#### 基础用法

```vue
<seed-loadPanel :loadState="loadState" @load="load">
    xxx
</seed-loadPanel>
```

##### 加载中

<seed-load-panel :loadState="0" />

##### 加载失败

<loadPanel :loadState="2"></loadPanel>

##### 加载成功

<loadPanel :loadState="1">
加载成功啦～
</loadPanel>


