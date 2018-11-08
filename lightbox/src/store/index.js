import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  state: {
    authorization: ''
  },
  getters: {},
  mutations: {
    authorization(state, { payload }) {
      state.authorization = payload
    }
  },
  actions: {},
  plugins: [],
  strict: process.env.NODE_ENV !== 'production'
})
