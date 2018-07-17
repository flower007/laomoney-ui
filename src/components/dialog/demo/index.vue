<template>
  <demo-section>
    <demo-block>
      <lcb-button @click="onClickAlert">Alert</lcb-button>
      <lcb-button @click="onClickAlert2">无标题 Alert</lcb-button>
    </demo-block>

    <demo-block>
      <lcb-button @click="onClickConfirm">Confirm</lcb-button>
    </demo-block>

  </demo-section>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      username: '',
      password: ''
    }
  },
  methods: {
    onClickAlert () {
      this.$dialog.alert({
        title: '标题',
        message: '内容'
      })
    },
    onClickAlert2 () {
      this.$dialog.alert({
        message: '无标题 Alert'
      })
    },
    onClickConfirm () {
      this.$dialog.confirm({
        title: '标题',
        message: '内容'
      })
    }
  }
}
</script>

<style scoped>

</style>
