# vue-component-sync-tree

> 基于 vue 和 element-ui 的同步树组件

[DEMO](https://zero1898.github.io/vue-component-sync-tree/index.html)

### HOW TO USE

```javascript
npm install vueComponentSyncTree -S

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import vueComponentSyncTree from 'vue-component-sync-tree';

Vue.use(ElementUI);
Vue.use(vueComponentSyncTree);
```

### Attributes

| 参数 | 说明                                                                                        | 类型  |
| :--- | :------------------------------------------------------------------------------------------ | :---- |
| data | 源列表数据,格式为[{"id":1,"title":"parent","pid":"0"},{"id":10,"title":"child","pid":"1"},] | Array |

### Props

| 参数  | 说明                      | 类型  |
| :---- | :------------------------ | :---- |
| value | 目的列表数据，格式同 data | Array |
