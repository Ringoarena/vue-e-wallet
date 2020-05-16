<template>
  <section>
      <Card 
        v-for="card in cards"
        :key="card.id"
        :card="card"
        @click="setActive('hej')"
      />
  </section>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  components: {
    Card
  },
  props: {
    cards: Array
  },
  methods: {
    setActive(card) {
      console.log(card);
      // this.$store.commit('setActive', card);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>