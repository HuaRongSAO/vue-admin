import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './view/App'
import router from './router'
import store from './store'
Vue.use(ElementUI)

Vue.config.productionTip = false
sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  created: function () {
    window.Vue = this
  },
  template: '<App/>',
  components: { App }
})

