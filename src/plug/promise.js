import Vue from 'vue'
import store from './../store'
export let _el = null

const Derective = Vue.directive('promise', {
  bind: function (el, binding, vnode, oldVnode) {
    _el = el
  },
  inserted: function (el, binding, vnode, oldVnode) {
    const auth = store.getters['auth']
    console.log(auth)
    if (binding.value) {
      el.style = 'display:true'
    } else {
      el.style = 'display:none'
    }
  },
  update: function (el, binding, vnode, oldVnode) {
    if (binding.value) {
      el.style = 'display:true'
    } else {
      el.style = 'display:none'
    }
  }
})

export default Derective
