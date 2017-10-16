import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import adminRouter from './admin'
import publicRouter from './public'
import store from './../store'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Hello,
      beforeEnter: checkAuth,
      meta: {
        permission: 'admin',
        fail: '/error'
      }
    },
    ...adminRouter,
    ...publicRouter
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export function checkAuth (to, from, next) {
  const auth = store.getters['auth']
  // console.log(auth)
  if (auth.isLoggedIn) {
    next()
  } else {
    router.push({name: 'login'})
  }
}

export default router
