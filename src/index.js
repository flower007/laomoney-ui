import LcbButton from './components/button'
import Dialog from './components/dialog'
import Toast from './components/toast'
import Loading from './components/loading'
import Popup from './components/popup'
import PullRefresh from './components/pull-refresh'
import Picker from './components/picker'
import Uploader from './components/uploader'

const version = process.env.VERSION
const components = {
  LcbButton,
  Dialog,
  Toast,
  Loading,
  Popup,
  PullRefresh,
  Picker,
  Uploader
}

const install = function (Vue, opts = {}) {
  if (install.installed) return
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  version,
  install,
  LcbButton,
  Dialog,
  Toast,
  Loading,
  Popup,
  PullRefresh,
  Picker,
  Uploader
}

export default {
  version,
  install
}
