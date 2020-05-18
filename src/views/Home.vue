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
main {
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  >p {
    margin-top: 5rem;
  }
  >article {
    margin-top: 1rem;
  }
  >section {
    margin-top: 4rem;
  }
  button {
    margin-top: auto;
    width: 90vw;
    height: 6rem;
    border: 2px solid black;
    border-radius: 7px;
    background-color: white;
    font-size: 1rem;
    font-weight: bold;
  }
}
</style>