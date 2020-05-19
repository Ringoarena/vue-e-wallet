import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idCounter: 5,
    activeCard: {id: 2, number: '1234123412341234', name: 'MASTEN PERSSON', expiry: '1337', vendor: 'vendor-bitcoin.svg', activeColor : '#66ccff'},
    cards: [
      {id: 3, number: '1234123412341234', name: 'JÄRS GÅRDH', expiry: '1337', vendor: 'vendor-bitcoin.svg', activeColor : '#ff9999'},
      {id: 4, number: '1234123412341234', name: 'LARS PALMAS', expiry: '1337', vendor: 'vendor-bitcoin.svg', activeColor : '#ccffcc'},
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
      if(state.activeCard){
        state.cards.push(state.activeCard);
      }
      state.activeCard = payload;
      state.cards = state.cards.filter(card => card != payload);
    }
  },
  actions: {
  },
  modules: {
  }
})
