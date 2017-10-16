// 更新auth
export const UPDATE_AUTH = ({ commit }, auth) => commit('UPDATE_AUTH', auth)

export const CLEAR_ALL_DATA = ({ commit }) => {
  commit('CLEAR_ALL_DATA')
}

export const CLEAR_PERMISSIONS = ({commit}) => {
  commit('CLEAR_PERMISSIONS')
}
