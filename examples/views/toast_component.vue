<template>
  <div>
    <Toast/>
    <p>{{message}}</p>
  </div>
</template>
<script>
import Toast from '../../src/components/toast'
export default {
  name: 'toastView',
  data () {
    return {
      message: '123456'
    }
  },
  components: {
    Toast
  }
}
</script>
