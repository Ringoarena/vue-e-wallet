<template>
<main>
  <Top :title="'E-WALLET'"/>
  <p>ACTIVE CARD</p>
  <Card :card="activeCard" />
  <CardStack :cards="cards" />
  <button @click="addCard">ADD A NEW CARD</button>
</main>
</template>

<script>
import Top from '@/components/Top.vue'
import Card from '@/components/Card.vue'
import CardStack from '@/components/CardStack.vue'

export default {
  components: {
    Top,
    Card,
    CardStack,
  },
  methods: {
    addCard() {
      this.$router.push({name: 'AddCard'});
    }
  },
  computed: {
        activeCard() {
          return this.$store.getters.getActiveCard;
        },
        cards() {
          return this.$store.getters.getCards;
    }
  }
}
</script>

<style lang="scss" scoped>
// main {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-evenly;
//   height: 90vw;
//   button {
//     padding: 2rem;
//     width: 90%;
//     border: 2px solid black;
//     border-radius: 10px;
//     background-color: white;
//     font-size: 1rem;
//     font-weight: bold;
//     margin-top: 15rem;
//   }
// }
</style>