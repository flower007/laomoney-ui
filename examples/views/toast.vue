<template>
  <div class="container" style="height: 1000px;">
    <h2>Toast组件使用方法</h2>
    <div @click="alert1()">点击我</div>
  </div>
</template>
<script>
export default {
  name: 'toastView',
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
    this.$toast('我是提示文案，建议不超过十五字~')
  },
  methods: {
    alert1 () {
      alert(123)
    }
  },
  destroyed () {
    this.$toast.clear()
  }
}
</script>
