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

</style>