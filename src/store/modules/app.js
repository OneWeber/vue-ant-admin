const state = {
    drawerVisible: false
}
const mutations = {
    CHANGE_DRAWERVISIBLE: (state, data) => {
        state.drawerVisible = data
    }
}
const actions = {
    changeDrawerVisible({ commit }, data) {
        commit('CHANGE_DRAWERVISIBLE', data)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
