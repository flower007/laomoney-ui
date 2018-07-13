<template>
  <transition name="lcb-dialog-bounce">
    <div v-show="value" class="lcb-dialog" :class="[className]">
      <div v-if="title" v-text="title" :class="['lcb-dialog__header',{'lcb-dialog__header--isolated': !message && !$slots.default }]"/>
      <div class="lcb-dialog__content" v-if="message || $slots.default">
        <slot>
          <div v-if="message" v-html="message" :class="['lcb-dialog__message',{'lcb-dialog__message--has-title':title}]"/>
        </slot>
      </div>
      <div class="hairline--top" :class="['lcb-dialog__footer',{ 'lcb-dialog__footer--buttons': showCancelButton && showConfirmButton }]">
        <lcb-button
          v-show="showCancelButton"
          size="large"
          class="lcb-dialog__cancel"
          @click="handleAction('cancel')">
          {{ cancelButtonText || '取消' }}
         </lcb-button>
        <lcb-button
          v-show="showConfirmButton"
          size="large"
          :class="['lcb-dialog__confirm', { 'hairline--left': showCancelButton && showConfirmButton }]"
          @click="handleAction('confirm')">
          {{ confirmButtonText || '确认'}}
        </lcb-button>
      </div>
    </div>
  </transition>
</template>

<script>
import LcbButton from '../button'
import Popup from '../../mixins/popup'
export default {
  name: 'lcbDialog',
  components: {
    LcbButton
  },
  mixins: [Popup],
  props: {
    title: String,
    message: String,
    callback: Function,
    className: [String, Object, Array],
    beforeClose: Function,
    confirmButtonText: String,
    cancelButtonText: String,
    showCancelButton: Boolean,
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleAction (action) {
      if (this.beforeClose) {
        this.beforeClose(action, state => {
          if (state !== false) {
            this.onClose(action)
          }
        })
      } else {
        this.onClose(action)
      }
    },
    onClose (action) {
      this.$emit('input', false)
      this.$emit(action)
      this.callback && this.callback(action)
    }
  }
}
</script>

<style scoped>

</style>
