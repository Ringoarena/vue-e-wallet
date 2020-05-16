import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idCounter: 4,
    newCard: {},
    exampleCard: {id: 2, number: '1234123412341234', name: 'MASTEN PERSSON', expiry: '1337', vendor: 'vendor-bitcoin.svg'},
    exampleCards: [
      {id: 3, number: '1234123412341234', name: 'JÄRS GÅRDH', expiry: '1337', vendor: 'vendor-bitcoin.svg'},
      {id: 4, number: '1234123412341234', name: 'BUDDY RICHIE', expiry: '1337', vendor: 'vendor-bitcoin.svg'},
    ],
  },
  getters: {
    getNextId: (state) => {
      return state.idCounter;
    },
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
    incrementId: (state) => {
      state.idCounter++;
    },
    addCard: (state, payload) => {
      state.exampleCards.push(payload);
    }
  },
  actions: {
  },
  modules: {
  }
})
