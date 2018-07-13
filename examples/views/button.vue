<template>
  <div class="container">
    <h2>Button组件使用方法</h2>
    <lcb-button @click="abc()">确定</lcb-button>
    <lcb-button type="primary">确定</lcb-button>
    <lcb-button type="danger">确定</lcb-button>
    <div style="margin-top: 20px;">
      <lcb-button type="primary" disabled block @click="abc()">禁用状态</lcb-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'buttonView',
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    abc () {
      alert(123)
    }
  },
  destroyed () {
  }
}
</script>
