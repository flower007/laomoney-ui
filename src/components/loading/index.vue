<template>
  <div :class="wrapStyle" :style="style">
    <span class="lcb-loading__spinner" :class="styleClasses">
      <i v-for="(item, index) in (type === 'spinner' ? 12 : 0)" :key="index" />
      <svg v-if="type === 'circular'" class="lcb-loading__circular" viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20" fill="none"/>
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  name: 'loading',
  props: {
    size: String,
    type: {
      type: String,
      default: 'circular'
    },
    color: {
      type: String,
      default: 'black'
    }
  },
  computed: {
    style () {
      return this.size ? {
        width: this.size,
        height: this.size
      } : {}
    },
    wrapStyle () {
      let wrapStyle = 'lcb-loading'
      switch (this.type) {
        case 'circular':
          wrapStyle = `${wrapStyle} lcb-loading--circular`
          break
        case 'spinner':
          wrapStyle = `${wrapStyle} lcb-loading--spinner`
          break
        default:
          wrapStyle = `${wrapStyle}`
      }
      switch (this.color) {
        case 'black':
          wrapStyle = `${wrapStyle} lcb-loading--black`
          break
        case 'white':
          wrapStyle = `${wrapStyle} lcb-loading--white`
          break
        default:
          wrapStyle = `${wrapStyle}`
      }
      return wrapStyle
    },
    styleClasses () {
      let styleClass = ''
      switch (this.type) {
        case 'circular':
          styleClass = `${styleClass} lcb-loading__spinner--circular`
          break
        case 'spinner':
          styleClass = `${styleClass} lcb-loading__spinner--spinner`
          break
        default:
          styleClass = `${styleClass}`
      }
      return styleClass
    }
  }
}
</script>
