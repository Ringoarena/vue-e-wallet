import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newCard: {},
    cards: [],
  },
  getters: {
    getCards: (state) => {
      return state.cards;
    }
  },
  mutations: {
    addCard: (state, payload) => {
      state.cards.push(payload);
    }
  },
  actions: {
  },
  modules: {
  }
})
