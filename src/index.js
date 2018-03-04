import vueComponentSyncTree from './vue-component-sync-tree.vue';

const componentSyncTree = {
  install(Vue, options) {
    Vue.component(vueComponentSyncTree.name, vueComponentSyncTree);
  }
};

export default componentSyncTree;
