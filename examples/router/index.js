import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const Index = resolve => {
  require.ensure([], () => {
    resolve(require('../views/index'))
  }, 'index')
}
const Toast = resolve => {
  require.ensure([], () => {
    resolve(require('../views/toast.vue'))
  }, 'toast')
}
const Loading = resolve => {
  require.ensure([], () => {
    resolve(require('../views/loading.vue'))
  }, 'loading')
}
const LcbButton = resolve => {
  require.ensure([], () => {
    resolve(require('../views/button.vue'))
  }, 'LcbButton')
}

const Dialog = resolve => {
  require.ensure([], () => {
    resolve(require('../views/dialog.vue'))
  }, 'Dialog')
}

const Popup = resolve => {
  require.ensure([], () => {
    resolve(require('../views/popup.vue'))
  }, 'Popup')
}

const LcbPullRefresh = resolve => {
  require.ensure([], () => {
    resolve(require('../views/pullRefresh.vue'))
  }, 'LcbPullRefresh')
}

const LcbPicker = resolve => {
  require.ensure([], () => {
    resolve(require('../views/picker.vue'))
  }, 'LcbPicker')
}
const Uploader = resolve => {
  require.ensure([], () => {
    resolve(require('../views/uploader.vue'))
  }, 'Uploader')
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/toast',
      name: 'Toast',
      component: Toast
    },
    {
      path: '/loading',
      name: 'Loading',
      component: Loading
    },
    {
      path: '/button',
      name: 'Button',
      component: LcbButton
    },
    {
      path: '/dialog',
      name: 'Dialog',
      component: Dialog
    },
    {
      path: '/popup',
      name: 'Popup',
      component: Popup
    },
    {
      path: '/pullRefresh',
      name: 'LcbPullRefresh',
      component: LcbPullRefresh
    },
    {
      path: '/picker',
      name: 'LcbPicker',
      component: LcbPicker
    },
    {
      path: '/uploader',
      name: 'Uploader',
      component: Uploader
    }
  ]
})
