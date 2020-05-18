<template>
  <section>
      <Card 
        v-for="card in cards"
        :key="card.id"
        :card="card"
        :inStack="true"
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
}
</script>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 50px;
}

</style>