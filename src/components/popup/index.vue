<template>
  <transition :name="currentTransition">
    <div v-if="shouldRender" v-show="value" :class="styleClasses">
      <slot />
    </div>
  </transition>
</template>

<script>
import Popup from '../../mixins/popup'
export default {
  name: 'popup',
  mixins: [Popup],
  props: {
    transition: String,
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: ''
    }
  },
  computed: {
    currentTransition () {
      return this.transition || (this.position === '' ? 'fade' : `popup-slide-${this.position}`)
    },
    styleClasses () {
      let styleClasses = 'lcb-popup'
      switch (this.position) {
        case 'top':
          styleClasses = `${styleClasses} lcb-popup--top`
          break
        case 'bottom':
          styleClasses = `${styleClasses} lcb-popup--bottom`
          break
        case 'right':
          styleClasses = `${styleClasses} lcb-popup--right`
          break
        case 'left':
          styleClasses = `${styleClasses} lcb-popup--left`
          break
        default:
          styleClasses = `${styleClasses}`
      }
      return styleClasses
    }
  }
}
</script>
