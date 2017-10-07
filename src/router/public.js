const Login = r => require.ensure([], () => r(require('@view/public/Login/Login.vue')), 'group-admin')

const publicRoute = [{
  path: '/login',
  name: 'login',
  components: {
    default: '',
    noWindow: Login
  }
}]

export default publicRoute
