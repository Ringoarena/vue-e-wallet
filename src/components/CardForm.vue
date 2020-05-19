<template>
  <article>
    <div class="num">
      <p>CARD NUMBER</p>
        <input v-model="card.number" type="number">
    </div>
    <div class="name-section">
      <p>CARDHOLDER NAME</p>
      <input v-model="card.name" type="text">
    </div>
    <div class="expiry">
      <p>VALID THRU</p>
      <input type="number" :value="card.expiry" @input="updateValue">
    </div>
    <div class="ccv">
      <p>CCV</p>
      <input type="text">
    </div>
    <div class="vendor">
      <p>VENDOR</p>
      <VueDropdown :config="config" @setSelectedOption="dropdownHandler($event)" />
    </div>
    <div class="submit">
      <button @click="submit">ADD CARD</button>
    </div>
  </article>
</template>

<script>
import VueDropdown from 'vue-dynamic-dropdown'
// import ValidationProvider from 'vee-validate'

export default {
  components: {
    VueDropdown,
    // ValidationProvider
  },
  data() {
    return {
      config: {
        options: [
          {value: 'Bitcoin'},
          {value: 'Blockchain'},
          {value: 'Evil'},
          {value: 'Ninja'}
        ],
        border: ''
      }
    }
  },
  props: {
    card: Object
  },
  methods: {
    submit() {
      this.$store.commit('incrementId');
      this.$store.commit('addCard', this.card)
      this.$router.push({name: 'Home'});
    },
    dropdownHandler(event) {
      this.card.vendor = 'vendor-' + event.value.toLowerCase() + '.svg';
    },
    updateValue(event) {
      const value = event.target.value;
      if(String(value).length <= 4) {
        this.card.expiry = value;
      }
      this.$forceUpdate();
    }
  }
}
</script>

<style lang="scss" scoped>
article {
  width: 90vw;

  margin-top: 5rem;
  margin-bottom: 5rem;
  display: grid;
  column-gap: 2rem;
  row-gap: 2rem;
  grid-template-areas: 
  "num num"
  "name name"
  "expiry ccv"
  "vendor vendor"
  "submit submit";
  p {
    margin: 0 0 0.3rem 0;
  }
  input {
    padding: 1rem;
    border-radius: 10px;
    border: 2px solid black;
    box-sizing: border-box;
    width: 100%;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
  }
  .num {
    grid-area: num;
  }
  .name-section {
    grid-area: name;
  }
  .expiry {
    grid-area: expiry;
  }
  .ccv {
    grid-area: ccv;
  }
  .vendor {
    grid-area: vendor;
  }
  .submit {
    grid-area: submit;
    button {
      margin: 1rem 0;
      width: 100%;
      border: none;
      border-radius: 10px;
      padding: 1rem;
      background-color: rgb(70, 70, 70);
      color: white;
    }
  }
}
</style>