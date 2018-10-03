const state = {
  count: 10
}

const getters = {
  getCount (state) {
    return state.count
  }
}

const mutations = {
  DECREMENT_MAIN_COUNTER (state) {
    state.count -= 1
  },
  INCREMENT_MAIN_COUNTER (state) {
    state.count += 1
  }
}

const actions = {
  increment ({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  },
  decrement ({ commit }) {
    commit('DECREMENT_MAIN_COUNTER')
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
