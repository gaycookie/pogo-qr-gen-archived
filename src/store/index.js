import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    teams: [ "none", "instinct", "mystic", "valor" ],
    dotStyles: [ "square", "rounded", "extra-rounded", "dots", "classy", "classy-rounded" ],
    frameStyles: [ "simple", "articuno", "moltres", "zapdos" ],
    levels: [ "L", "M", "Q", "H" ]
  },
  getters: {
    hasTeam: (state) => (input) => state.teams.includes(input),
    hasDotStyle: (state) => (input) => state.dotStyles.includes(input),
    hasFrameStyle: (state) => (input) => state.frameStyles.includes(input),
    hasLevel: (state) => (input) => state.levels.includes(input)
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
