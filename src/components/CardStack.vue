<template>
  <section>
      <Card 
        v-for="card in cards"
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
    cards() {
      return this.$store.getters.getCards;
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>