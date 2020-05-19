<template>
<main>
    <Top :title="'ADD A NEW BANK CARD'" />
    <p>NEW CARD</p>
    <Card :card="card" />
    <CardForm :card="card" />
</main>
</template>

<script>
import Top from '@/components/Top.vue'
import Card from '@/components/Card.vue'
import CardForm from '@/components/CardForm.vue'

export default {
    components: {
        Top,
        Card,
        CardForm
    },
    data() {
        return {
            card: {
                id: this.$store.getters.getNextId,
                number: '',
                name: '',
                expiry: '',
                vendor: 'bitcoin',
                activeColor: this.generateColor()
            }
        }
    },
    methods: {
      generateColor() {
          let random = Math.floor(Math.random() * 6);
          switch(random) {
              case 0: return '#ffcccc';
              case 1: return '#ccffcc';
              case 2: return '#66ccff';
              case 3: return '#ff9999';
              case 4: return '#ffcc99';
              case 5: return '#4d94ff';
          }
          return '#ff9999';
      }
    },
    beforeCreate() {
        this.$store.commit('incrementId');
    }
}
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>