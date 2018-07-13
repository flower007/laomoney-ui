<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  @import "../src/styles/index.less";
</style>
<style lang="less" type="text/less" scoped>
  nav {
    padding:10px 40px;
    ul { display: flex; flex-wrap: wrap; }
    li { display: inline-block; }
    li + li { border-left: solid 1px #bbb; padding-left: 10px; margin-left: 10px; }
  }
  .container{ padding: 20px; }
  .v-link-active { color: #bbb; }
</style>
