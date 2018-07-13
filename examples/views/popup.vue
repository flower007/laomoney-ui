<template>
  <div style="padding: 20px;">
    <lcb-button @click="alert1()">弹出Popup</lcb-button>
    <Popup v-model="show" position="bottom">
      <!--<div style="padding: 10px 30px;" @click="alert2()">内容</div>-->
      <picker
        :columns="column1"
        show-toolbar
        title="标题"
        @cancel="onCancel"
        @confirm="onConfirm"
      />
    </Popup>
  </div>
</template>

<script>
export default {
  name: 'popupView',
  data () {
    return {
      show: false,
      column1: [
        {text: '杭州', disabled: true},
        {text: '宁波'},
        {text: '温州'},
        {text: '嘉兴'},
        {text: '湖州'}
      ]
    }
  },
  methods: {
    alert1 () {
      this.show = true
    },
    alert2 () {
      alert(123)
      this.show = false
    },
    onConfirm (value, index) {
      this.show = false
    },
    onCancel () {
      this.show = false
    }
  }
}
</script>
