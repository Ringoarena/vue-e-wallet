<template>
<main>
  <Top :title="'E-WALLET'"/>
  <p>ACTIVE CARD</p>
  <Card />
  <CardStack />
  <AddCardLink />
</main>
</template>

<script>
import Top from '@/components/Top.vue'
import Card from '@/components/Card.vue'
import CardStack from '@/components/CardStack.vue'
import AddCardLink from '@/components/AddCardLink.vue'

export default {
  components: {
    Top,
    Card,
    CardStack,
    AddCardLink
  }

}
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  >* {
    margin: 2rem;
  }
}
</style>