import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    teams: [
      "none", "instinct", "mystic", "valor"
    ],
    styles: [
      "square", "rounded", "extra-rounded", "dots", "classy", "classy-rounded"
    ],
    levels: [
      "L", "M", "Q", "H"
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
