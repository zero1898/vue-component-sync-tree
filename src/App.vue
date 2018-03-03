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


