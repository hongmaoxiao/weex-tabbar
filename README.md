# EN
### how to run ?
```
cnpm install
./start
```
visit  http://localhost:12580/web


## Fix Weex Vue 2.0 at HTML5 can't display embed
### update points
1. update  ```web/index.html``` set ```body``` height, let ```div``` ```flex:1``` can full screen
1. update ```web/index.html``` set ```body``` ```margin:8px``` to ```0px```
2. add ```tabbar-web.vue```, removed ```type``` , change ```visibility``` to  ```display```

#### Now there are other issues to be resolved
1. When display on HTML5 the top has 1px space
2. There is a blank when the page is switched







# 中文

## 怎么运行?
```
cnpm install
./start
```

访问 http://localhost:12580/web

## 解决了 Weex Vue2.0 在H5 上tabbar embed无法正常显示的问题
### 在原版的基础上有此处修改
1. 修改 ```web/index.html``` 设置了```body``` 的高度 使得```div``` 的 ```flex:1``` 能全屏
1. 修改 ```web/index.html``` 修改了```body``` 默认的 ```margin:8px``` 为 0px
2. 新增了 ```tabbar-web.vue```, 移除 ```type``` 属性, 修改 ```visibility``` 为 ```display``` 属性

#### 目前还存在的一些问题,
1. 在H5上的tabbar 内容会顶部 1px 的空隙 待修复
2. H5 tabbar 切换 使用 ```display``` 替换 ```visibility``` 会导致切换时闪一下, 出现空白
