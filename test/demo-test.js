import Vue from 'vue'
import laomoney from '../src'
import VueRouter from 'vue-router'
import { renderToString } from '@vue/server-test-utils'

Vue
  .use(laomoney)
  .use(VueRouter)

const empty = {
  template: '<div><slot></slot></div>',
  inheritAttrs: false
}
Vue.component('demo-block', empty)
Vue.component('demo-section', empty)

export default function (Demo) {
  test(`renders demo correctly`, () => {
    expect(renderToString(Demo)).toMatchSnapshot()
  })
}
