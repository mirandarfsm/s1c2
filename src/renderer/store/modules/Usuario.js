const state = {
  usuarios: []
}

const getters = {}

const mutations = {
  ADD_USER (state, payload) {
    state.usuarios.push(payload.usuario)
  },
  DELETE_USER (state, payload) {
    state.usuarios.splice(state.usuarios.indexOf(payload.usuario), 1)
  },
  SET_USERS (state, payload) {
    state.usuarios = payload.usuarios
  }
}

const usuarios = [
  { nome: 'test', idade: 17 },
  { nome: 'test1', idade: 18 }
]

const actions = {
  createUser ({ commit }, usuarios) {
    // do something async
    commit('ADD_USER', { usuarios })
  },
  updateUser ({ commit }, usuarios) {
    commit('DELETE_USER', { usuarios })
    commit('ADD_USER', { usuarios })
  },
  deleteUser ({ commit }, usuarios) {
    commit('DELETE_USER', { usuarios })
  },
  getAllUsers ({ commit }) {
    setTimeout(() => {
      commit('SET_USERS', { usuarios })
    }, 1000)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
