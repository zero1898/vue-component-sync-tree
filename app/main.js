import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import vueComponentSyncTree from '../lib/index.com.js';

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(vueComponentSyncTree);

new Vue({
  el: '#app',
  render: h => h(App)
});
