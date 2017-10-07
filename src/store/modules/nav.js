export const SHOW_NAV = 'SHOW_NAV'
export const HIDE_NAV = 'HIDE_NAV'
const state = {
  show: true
}
// mutations
const mutations = {
  SHOW_NAV: state => {
    state.show = true
  },
  HIDE_NAV: state => {
    state.show = false
  }
}
// getters
const getters = {
  show: state => state.show
}

// actions
const actions = {
  SHOW_NAV ({commit}) {
    commit('SHOW_NAV')
  },
  HIDE_NAV ({commit}) {
    commit('HIDE_NAV')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
