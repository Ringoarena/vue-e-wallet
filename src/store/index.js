import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newCard: {id: 1, number: 'XXXXXXXXXXXX', name: 'FIRSTNAME LASTNAME', expiry: 'MMYY'},
    exampleCard: {id: 2, number: '1234123412341234', name: 'MASTEN PERSSON', expiry: '1337'},
    exampleCards: [
      {id: 3, number: '1234123412341234', name: 'JÄRS GÅRDH', expiry: '1337'},
      {id: 4, number: '1234123412341234', name: 'BUDDY RICHIE', expiry: '1337'},
    ],
  },
  getters: {
    getNewCard: (state) => {
      return state.newCard;
    },
    getExampleCard: (state) => {
      return state.exampleCard;
    },
    getExampleCards: (state) => {
      return state.exampleCards;
    },
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
