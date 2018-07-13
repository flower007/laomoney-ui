<template>
  <div>
    <picker
      :columns="column1"
      show-toolbar
      title="标题"
      @cancel="onCancel"
      @confirm="onConfirm"
      />
    <div style="margin-top: 30px;">
      <picker :columns="column2" @change="onChange2" loading/>
    </div>
  </div>
</template>

<script>
const citys = {
  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  '福建': ['福州', '厦门', '莆田', '三明', '泉州']
}
export default {
  data () {
    return {
      column1: [
        {text: '杭州', disabled: true},
        {text: '宁波'},
        {text: '温州'},
        {text: '嘉兴'},
        {text: '湖州'}
      ],
      column2: [
        {
          values: Object.keys(citys),
          className: 'columnClass1'
        },
        {
          values: citys['浙江'],
          className: 'columnClass2',
          defaultIndex: 2
        }
      ]
    }
  },
  methods: {
    onChange1 (picker, value, index) {
      this.$toast(`当前值：${value.text}, 当前索引：${index}`)
    },
    onChange2 (picker, values) {
      picker.setColumnValues(1, citys[values[0]])
    },
    onConfirm (value, index) {
      this.$toast(`当前值：${value.text}, 当前索引：${index}`)
    },
    onCancel () {
      this.$toast('取消')
    }
  }
}
</script>
