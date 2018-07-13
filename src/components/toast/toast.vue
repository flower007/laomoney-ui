<template>
  <transition name="fade">
    <div v-show="value" class="lcb-toast lcb-toast--text">
      <!-- text only -->
      <div v-if="type === 'text'">{{ message }}</div>
      <div v-if="type === 'html'" v-html="message"/>
    </div>
  </transition>
</template>
<script>
import Popup from '../../mixins/popup'
export default {
  name: 'toast',
  mixins: [Popup],
  props: {
    forbidClick: Boolean,
    message: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    lockScroll: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      clickable: false
    }
  },
  mounted () {
    this.toggleClickale()
  },
  watch: {
    value () {
      this.toggleClickale()
    },
    forbidClick () {
      this.toggleClickale()
    }
  },
  methods: {
    toggleClickale () {
      const clickable = this.value && this.forbidClick
      if (this.clickable !== clickable) {
        this.clickable = clickable
        const action = clickable ? 'add' : 'remove'
        document.body.classList[action]('lcb-toast--unclickable')
      }
    }
  }
}
</script>
