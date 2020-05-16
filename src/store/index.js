import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idCounter: 4,
    activeCard: {id: 2, number: '1234123412341234', name: 'MASTEN PERSSON', expiry: '1337', vendor: 'vendor-bitcoin.svg'},
    cards: [
      {id: 3, number: '1234123412341234', name: 'JÄRS GÅRDH', expiry: '1337', vendor: 'vendor-bitcoin.svg'},
      {id: 4, number: '1234123412341234', name: 'BUDDY RICHIE', expiry: '1337', vendor: 'vendor-bitcoin.svg'},
    ],
  },
  getters: {
    getNextId: (state) => {
      return state.idCounter;
    },
    getActiveCard: (state) => {
      return state.activeCard;
    },
    getCards: (state) => {
      return state.cards;
    },
  },
  mutations: {
    incrementId: (state) => {
      state.idCounter++;
    },
    addCard: (state, payload) => {
      state.cards.push(payload);
    },
    setActive: (state, payload) => {
      state.cards.push(state.activeCard);
      state.activeCard = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
