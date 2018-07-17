import Vue from 'vue'
import Dialog from '..'
import DialogVue from '../dialog'
import { mount } from '@vue/test-utils'
import { later, transitionStub } from '../../../../test/utils'

transitionStub()

test('Dialog function call', async () => {
  Dialog.close()
  Dialog.alert('1')

  const callback = jest.fn()
  const dialog = document.querySelector('.lcb-dialog')

  await later()
  expect(dialog.style.display).toEqual('')
  Dialog.close()

  await later()
  expect(dialog.style.display).toEqual('none')
  Dialog.confirm().catch(callback)
  document.querySelector('.lcb-dialog__cancel').click()

  await later()
  expect(callback.mock.calls[0][0]).toEqual('cancel')
  Dialog.confirm().then(callback)
  document.querySelector('.lcb-dialog__confirm').click()

  await later()
  expect(callback.mock.calls[1][0]).toEqual('confirm')
})

test('before close', () => {
  const wrapper = mount(DialogVue, {
    propsData: {
      beforeClose: (action, done) => done(false)
    }
  })

  const cancel = wrapper.find('.lcb-dialog__cancel')

  cancel.trigger('click')
  expect(wrapper.emitted('cancel')).toBeFalsy()

  wrapper.setProps({
    beforeClose: (action, done) => done()
  })
  cancel.trigger('click')
  expect(wrapper.emitted('cancel')).toBeTruthy()
})

test('set default options', () => {
  Dialog.setDefaultOptions({ lockScroll: false })
  expect(Dialog.currentOptions.lockScroll).toBeFalsy()
  Dialog.resetDefaultOptions()
  expect(Dialog.currentOptions.lockScroll).toBeTruthy()
})

test('register component', () => {
  Vue.use(Dialog)
  //  expect(Vue.component(DialogVue.name)).toBeTruthy()
})
