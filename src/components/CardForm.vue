<template>
  <article>
    <div class="num">
      <p>CARD NUMBER</p>
      <input type="text">
    </div>
    <div class="name-section">
      <p>CARDHOLDER NAME</p>
      <input type="text">
    </div>
    <div class="expiry">
      <p>VALID THRU</p>
      <input type="text">
    </div>
    <div class="ccv">
      <p>CCV</p>
      <input type="text">
    </div>
    <div class="vendor">
      <p>VENDOR</p>
      <input type="text">
    </div>
    <div class="submit">
      <button @click="submit">ADD CARD</button>
    </div>

  </article>
</template>

<script>
export default {
  methods: {
    submit() {
      this.$router.push({name: 'Home'});
    }
  }

}
</script>

<style lang="scss" scoped>
article {
  // border: 1px solid red;
  width: 90%;

  margin-top: 5rem;
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
  .num {
    grid-area: num;
    input {
      
    }
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