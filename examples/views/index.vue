<template>
 <div class="wrapStyle">
   <p><router-link to="/button">Button按钮</router-link></p>
   <p><router-link to="/dialog">Dialog弹出框</router-link></p>
   <p><router-link to="/loading">Loading加载</router-link></p>
   <p><router-link to="/picker">Picker选择器</router-link></p>
   <p><router-link to="/popup">Popup弹出层</router-link></p>
   <p><router-link to="/pullRefresh">PullRefresh下拉刷新</router-link></p>
   <p><router-link to="/toast">Toast轻提示</router-link></p>
   <p><router-link to="/uploader">Uploader图片上传</router-link></p>
 </div>
</template>

<script>
export default {}
</script>

<style scoped>
 .wrapStyle {
   padding: 20px;
 }
  .wrapStyle p { padding: 10px;}
</style>
