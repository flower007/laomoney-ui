<template>
  <component
    class="lcb-button"
    :class="styleClasses"
    :is="tag"
    :disabled="disabled"
    @click="onClick">
      <span>
        <slot>{{text}}</slot>
      </span>
  </component>
</template>

<script>
export default {
  name: 'lcbButton',
  props: {
    text: String,
    block: Boolean,
    disabled: Boolean,
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  computed: {
    styleClasses () {
      let styleClasses = ''
      if (this.block) {
        styleClasses = `${styleClasses} lcb-button--block`
      }
      if (this.disabled) {
        styleClasses = `${styleClasses} lcb-button--disabled`
      }
      switch (this.type) {
        case 'primary':
          styleClasses = `${styleClasses} lcb-button--primary`
          break
        case 'danger':
          styleClasses = `${styleClasses} lcb-button--danger`
          break
        default:
          styleClasses = `${styleClasses} lcb-button--default`
      }
      switch (this.size) {
        case 'large':
          styleClasses = `${styleClasses} lcb-button--large`
          break
        case 'small':
          styleClasses = `${styleClasses} lcb-button--small`
          break
        default:
          styleClasses = `${styleClasses} lcb-button--normal`
      }
      return styleClasses
    }
  },
  methods: {
    onClick (event) {
      if (!this.disabled) {
        this.$emit('click', event)
      }
    }
  }
}
</script>
