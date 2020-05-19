import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idCounter: 4,
    activeCard: {id: 1, number: '1234123412341234', name: 'MASTEN PERSSON', expiry: '1337', vendor: "bitcoin"},
    cards: [
      {id: 2, number: '1234123412341234', name: 'JÄRS GÅRDH', expiry: '1337', vendor: "ninja"},
      {id: 3, number: '1234123412341234', name: 'Gerard Boré', expiry: '1337', vendor: "blockchain"},
      {id: 4, number: '1234123412341234', name: 'LARS PALMAS', expiry: '1337', vendor: "evil"},
    ],
    vendors: {
      bitcoin: {
        backgroundColor: '#ffb444',
        textColor: '#000000',
        logo: 'vendor-bitcoin.svg',
        lightChip: false
      },
      ninja: {
        backgroundColor: '#343434',
        textColor: '#ffffff',
        logo: 'vendor-ninja.svg',
        lightChip: true
      },
      blockchain: {
        backgroundColor: '#7d4fe1',
        textColor: '#ffffff',
        logo: 'vendor-blockchain.svg',
        lightChip: true
      },
      evil: {
        backgroundColor: '#df2e4e',
        textColor: '#ffffff',
        logo: 'vendor-evil.svg',
        lightChip: true
      },
    }
  },
  getters: {
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
      state.cards.filter((card, index, arr) => index >= arr.length-3)
    }
  },
  actions: {
    addCard: (context, payload) => {
      context.commit('incrementId');
      payload.id = context.state.idCounter;
      context.commit('addCard', payload);
    }
  },
  modules: {
  }
})
