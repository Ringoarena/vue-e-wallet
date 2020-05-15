<template>
  <section>
      <Card 
        v-for="card in exampleCards"
        :key="card.id"
        :card="card"
      />
  </section>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  components: {
    Card
  },
  computed: {
    exampleCards() {
      return this.$store.getters.getExampleCards;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>