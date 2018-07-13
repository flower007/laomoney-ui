<template>
  <div class="container" style="height: 1000px;">
    <h2>Dialog组件使用方法</h2>
    <div @click="alert1()">alert1</div>
    <div @click="alert2()">alert2</div>
  </div>
</template>
<script>
export default {
  name: 'dialogView',
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    alert1 () {
      this.$dialog.alert({
        title: '提示1',
        message: '弹窗内容1',
        closeOnClickOverlay: true
      }).then(() => {
      }).catch(() => {
      })
    },
    alert2 () {
      this.$dialog.alert({
        title: '提示2',
        message: '弹窗内容2',
        showCancelButton: true
      }).then(() => {
        alert('你点击了确认2')
      }).catch(() => {
      })
    }
  },
  destroyed () {
  }
}
</script>
