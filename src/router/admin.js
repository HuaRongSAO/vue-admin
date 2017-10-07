
import { checkAuth } from './index'
const Dash = r => require.ensure([], () => r(require('@view/admin/Dash')), 'group-admin')

const adminRoute = [{
  path: '/admin',
  name: 'admin',
  component: Dash,
  beforeEnter: checkAuth
}]

export default adminRoute
