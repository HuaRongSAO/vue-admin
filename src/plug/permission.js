class Permission {
  constructor (Vue, options) {
    this.Vue = Vue
    this.options = options
    this.isPermission = false
  }
  init (Vue) {
    // 注册v-permission
    // console.log(this.options.router)
    this.directive(Vue)
    this.setRouter()
  }
  directive (Vue) {
    Vue.directive('permission', (el, binding, vnode, oldVnode) => {
      const userPermissions = this.getAuth(vnode)
      const acls = this.getAcl(binding)
      const isPermission = userPermissions.filter(item => acls.includes(item)).length > 0
      if (isPermission) {
        this.isPermission = isPermission
        el.style.display = 'true'
      } else {
        this.isPermission = false
        el.style.display = 'none'
      }
    })
  }
  getAuth (vnode) {
    const permissions = vnode.context.$store.getters['permissions']
    if (!Array.isArray(permissions)) throw new Error('permissions 必须是一个数组：like:["isUser",...]')
    return permissions
  }
  getAcl (binding) {
    const acls = binding.value
    if (!Array.isArray(acls)) throw new Error('v-permissions 必须是一个数组：like:["isUser",...]')
    return acls
  }
  setRouter () {
    const { router } = this.options
    router.beforeEach((to, from, next) => {
      console.log('before')
      // const fail = to.meta.fail || '/'
      if (typeof to.meta.permission === 'undefined') {
        next()
      } else {
        next()
      }
    })
  }

}

export default function install (Vue, options) {
  const permission = new Permission(Vue, options)
  // const { router, store } = options
  permission.init(Vue)
}
