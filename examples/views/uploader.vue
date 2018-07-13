<template>
  <uploader :max-size="102400" @oversize="logContent('oversize')" :before-read="beforeRead(1)">
    <div style="margin: 10px; border: 1px solid #eee; padding: 10px;">上传</div>
  </uploader>
</template>

<script>
export default {
  methods: {
    logContent (file) {
      console.log(file)
    },
    beforeRead (index) {
      return file => {
        console.log(index, file)
      }
    }
  }
}
</script>

<style scoped>

</style>
