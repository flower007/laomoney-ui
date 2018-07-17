<template>
  <demo-section>
    <demo-block :title="buttonType">
      <lcb-button type="default">默认按钮</lcb-button>
      <lcb-button type="primary">主要按钮</lcb-button>
      <lcb-button type="danger">危险按钮</lcb-button>
    </demo-block>
    <demo-block :title="buttonSize">
      <lcb-button size="large">大号按钮</lcb-button>
      <lcb-button size="normal">普通按钮</lcb-button>
      <lcb-button size="small">小型按钮</lcb-button>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data () {
    return {
      buttonType: '按钮类型',
      buttonSize: '按钮尺寸'
    }
  }
}
</script>

<style scoped>

</style>
