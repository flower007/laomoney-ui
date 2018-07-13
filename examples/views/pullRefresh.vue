<template>
   <pull-refresh v-model="isLoading" @refresh="onRefresh">
      <p style="padding: 10px;">刷新次数: {{ count }}</p>
      <p style="height: 1000px;">123456</p>
   </pull-refresh>
</template>

<script>
export default {
  name: 'pullRefreshView',
  data () {
    return {
      count: 0,
      isLoading: false
    }
  },
  methods: {
    onRefresh () {
      setTimeout(() => {
        // this.$toast('下拉刷新成功')
        console.log('下拉刷新成功')
        this.isLoading = false
        this.count++
      }, 500)
    }
  }
}
</script>
