<template>
  <div class="container" style="background: #e5e5e5; height: 100vh;">
    <div>
      <loading color="black"/>
      <loading color="white" />
    </div>
    <div>
      <loading type="spinner" color="black" />
      <loading type="spinner" color="white" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'loadingView',
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
  },
  destroyed () {
  }
}
</script>
<style>
  .lcb-loading {
    display: inline-block;
    margin: 5px 0 5px 20px;
  }
  .lcb-loading--white {
    padding: 10px;
    border-radius: 3px;
    background-color: rgba(0, 0, 0, .5);
  }
</style>
