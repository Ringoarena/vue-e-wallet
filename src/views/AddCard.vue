<template>
<main>
    <Top :title="'ADD A NEW BANK CARD'" />
    <p>NEW CARD</p>
    <Card :card="newCard" />
    <CardForm :card="newCard" />
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
                number: '1234123412341234',
                name: 'JÄRS GÅRDH',
                expiry: '1337'}
        }
    },
    computed: {
        newCard() {
            return this.$store.getters.getNewCard;
        }
    },
    beforeCreate() {
        this.$store.dispatch('createCard');
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