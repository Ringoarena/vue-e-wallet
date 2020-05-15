import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idCounter: 4,
    newCard: {},
    exampleCard: {id: 2, number: '1234123412341234', name: 'MASTEN PERSSON', expiry: '1337', vendor: 'n/a'},
    exampleCards: [
      {id: 3, number: '1234123412341234', name: 'JÄRS GÅRDH', expiry: '1337', vendor: 'n/a'},
      {id: 4, number: '1234123412341234', name: 'BUDDY RICHIE', expiry: '1337', vendor: 'n/a'},
    ],
  },
  getters: {
    getNextId: (state) => {
      state.idCounter++;
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
    createCard: (state, payload) => {
      state.newCard = payload;
    },
    addCard: (state, payload) => {
      state.exampleCards.push(payload);
    }
  },
  actions: {
    createCard: (context) => {
      let newCard = {
        id: context.getters.getNextId,
        number: 'XXXXXXXXXXXX', 
        name: 'FIRSTNAME LASTNAME', 
        expiry: 'MMYY',
        vendor: 'n/a'
      };
      context.commit('createCard', newCard);
    }
  },
  modules: {
  }
})
