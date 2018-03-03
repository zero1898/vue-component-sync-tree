<template>
  <div id="app">
    <h1 style="title">VUE-COMPONENT-SYNC-TREE</h1>
    <vueComponentSyncTree :data="originData" v-model="finalData"></vueComponentSyncTree>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      originData: [{"id":"301","seq":"A","title":"\u6587\u5316\u521b\u65b0","title_en":"Cultural Innovation","pid":"0","description":null,"is_delete":"0","created_time":"0","modified_time":"0"},{"id":"302","seq":"B","title":"\u751f\u6d3b\u667a\u6167","title_en":"Living Wisdom","pid":"0","description":null,"is_delete":"0","created_time":"0","modified_time":"0"},{"id":"303","seq":"C","title":"\u4ea7\u4e1a\u88c5\u5907","title_en":"Industrial Equipment","pid":"0","description":null,"is_delete":"0","created_time":"0","modified_time":"0"},{"id":"304","seq":"D","title":"\u524d\u6cbf\u79d1\u6280","title_en":"Frontier Technology","pid":"0","description":null,"is_delete":"0","created_time":"0","modified_time":"1509692081"},{"id":"311","seq":"","title":"\u5ba4\u5185\u5bb6\u5177","title_en":"Home Furniture","pid":"301","description":null,"is_delete":"0","created_time":"0","modified_time":"0"},{"id":"312","seq":"","title":"\u706f\u9970\u7167\u660e","title_en":"Lighting Facility","pid":"301","description":null,"is_delete":"0","created_time":"0","modified_time":"0"},{"id":"313","seq":"","title":"\u9910\u996e\u5668\u76bf","title_en":"Tableware","pid":"301","description":null,"is_delete":"0","created_time":"0","modified_time":"0"},{"id":"315","seq":"","title":"\u6587\u6559\u7528\u54c1","title_en":"Stationery","pid":"301","description":null,"is_delete":"0","created_time":"0","modified_time":"0"},{"id":"316","seq":"","title":"\u5668\u7269\u5305\u88c5","title_en":"Packaging","pid":"301","description":null,"is_delete":"0","created_time":"0","modified_time":"0"},{"id":"317","seq":"","title":"\u65f6\u5c1a\u7a7f\u6234","title_en":"Fashion","pid":"301","description":null,"is_delete":"0","created_time":"0","modified_time":"0"},{"id":"318","seq":"","title":"\u793e\u4f1a\u521b\u65b0","title_en":"Social Innovation","pid":"301","description":null,"is_delete":"0","created_time":"0","modified_time":"0"},{"id":"319","seq":"","title":"\u5176\u4ed6","title_en":"Others","pid":"301","description":null,"is_delete":"0","created_time":"0","modified_time":"0"},{"id":"320","seq":"","title":"\u5bb6\u7528\u7535\u5668","title_en":"Household Appliance","pid":"302","description":null,"is_delete":"0","created_time":"0","modified_time":"0"},{"id":"321","seq":"","title":"\u53a8\u623f\u536b\u6d74","title_en":"Kitchen & Bathroom","pid":"302","description":null,"is_delete":"0","created_time":"0","modified_time":"0"},{"id":"322","seq":"","title":"\u7535\u5b50\u6570\u7801","title_en":"Digital Device","pid":"302","description":null,"is_delete":"0","created_time":"0","modified_time":"0"},{"id":"323","seq":"","title":"\u8001\u5e74\u7528\u54c1","title_en":"Elder","pid":"302","description":null,"is_delete":"0","created_time":"0","modified_time":"0"},{"id":"324","seq":"","title":"\u6bcd\u5a74\u7528\u54c1","title_en":"Mother & Baby","pid":"302","description":null,"is_delete":"0","created_time":"0","modified_time":"0"},{"id":"325","seq":"","title":"\u8fd0\u52a8\u4f11\u95f2","title_en":"Sport & Leisure","pid":"302","description":null,"is_delete":"0","created_time":"0","modified_time":"0"},{"id":"326","seq":"","title":"\u9632\u707e\u9632\u62a4","title_en":"Disaster Prevention","pid":"302","description":null,"is_delete":"0","created_time":"0","modified_time":"0"},{"id":"327","seq":"","title":"\u667a\u6167\u57ce\u5e02","title_en":"Smart City","pid":"302","description":null,"is_delete":"0","created_time":"0","modified_time":"0"},{"id":"328","seq":"","title":"\u5176\u4ed6","title_en":"Others","pid":"302","description":null,"is_delete":"0","created_time":"0","modified_time":"0"},{"id":"329","seq":"","title":"\u4ea4\u901a\u8fd0\u8f93","title_en":"Transportation","pid":"303","description":null,"is_delete":"0","created_time":"0","modified_time":"0"},{"id":"330","seq":"","title":"\u533b\u7597\u4fdd\u5065","title_en":"Health Care","pid":"303","description":null,"is_delete":"0","created_time":"0","modified_time":"0"},{"id":"331","seq":"","title":"\u529e\u516c\u8bbe\u5907","title_en":"Office","pid":"303","description":null,"is_delete":"0","created_time":"0","modified_time":"0"},{"id":"332","seq":"","title":"\u673a\u68b0\u5de5\u5177","title_en":"Tool","pid":"303","description":null,"is_delete":"0","created_time":"0","modified_time":"0"},{"id":"333","seq":"","title":"\u5efa\u7b51\u88c5\u5907","title_en":"Construction","pid":"303","description":null,"is_delete":"0","created_time":"0","modified_time":"0"},{"id":"334","seq":"","title":"\u519c\u6797\u88c5\u5907","title_en":"Agriculture & Forestry","pid":"303","description":null,"is_delete":"0","created_time":"0","modified_time":"0"},{"id":"335","seq":"","title":"\u751f\u4ea7\u88c5\u5907","title_en":"Manufacture","pid":"303","description":null,"is_delete":"0","created_time":"0","modified_time":"0"},{"id":"336","seq":"","title":"\u519b\u7528\u88c5\u5907","title_en":"Military","pid":"303","description":null,"is_delete":"0","created_time":"0","modified_time":"0"},{"id":"337","seq":"","title":"\u5176\u4ed6","title_en":"Others","pid":"303","description":null,"is_delete":"0","created_time":"0","modified_time":"0"},{"id":"338","seq":"","title":"\u65b0\u80fd\u6e90","title_en":"Cultural Innovation","pid":"304","description":null,"is_delete":"0","created_time":"0","modified_time":"1509692065"},{"id":"340","seq":"","title":"\u7269\u8054\u7f51","title_en":"Cultural Innovation","pid":"304","description":null,"is_delete":"0","created_time":"0","modified_time":"1509692068"},{"id":"3314","seq":"","title":"\u6587\u5316\u521b\u65b0","title_en":"Souvenirs","pid":"301","description":null,"is_delete":"0","created_time":"0","modified_time":"0"}],
      originData: [
        {"id": '100', "title": '杭州', "pid": '0'},
        {"id": '101', "title": '西湖', "pid": '100'},
        {"id": '102', "title": '余杭', "pid": '100'},
        {"id": '103', "title": '拱墅', "pid": '100'},
        {"id": '104', "title": '滨江', "pid": '100'},
        {"id": '105', "title": '修改下唄', "pid": '100'},
        {"id": '200', "title": '浙江', "pid": '0'},
        {"id": '201', "title": '温州', "pid": '200'},
        {"id": '202', "title": '皮革厂', "pid": '200'},
        {"id": '203', "title": '倒', "pid": '200'},
        {"id": '204', "title": '闭', "pid": '200'},
        {"id": '205', "title": '了', "pid": '200'}
       ],
      finalData: [{"id": '102', "title": '余杭', "pid": '100'}]
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .title {
    margin: 30px 0;
    text-align: center;
  }
}
</style>


