import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import adminRouter from './admin'
import publicRouter from './public'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Hello,
      beforeEnter: checkAuth
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
  const auth = router.app.$options.store.state.auth
  console.log(auth)
  if (auth.isLoggedIn) {
    next()
  } else {
    router.push({name: 'login'})
  }
}

export default router
