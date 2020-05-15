<template>
<main>
    <Top :title="'ADD A NEW BANK CARD'" />
    <p>NEW CARD</p>
    <Card />
    <CardForm />
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
}
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>