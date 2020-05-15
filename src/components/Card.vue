<template>
  <article>
    <div class="chip">
      <img src="../assets/chip-dark.svg" alt />
    </div>
    <div class="vendor">
      <img :src="require(`@/assets/${card.vendor}`)" alt />
    </div>
    <div class="num">
      <p>{{ccNum}}</p>
    </div>
    <div class="name-section">
      <p class="label">CARDHOLDER NAME</p>
      <p class="name">{{ccName}}</p>
    </div>
    <div class="expiry">
      <p class="label">VALID THRU</p>
      <p class="date">{{ccExpiry}}</p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    card: Object
  },
  computed: {
    ccNum() {
      if(!this.card.number){return 'XXXX XXXX XXXX XXXX'}
      return this.card.number.replace(/(\w{4})/g, '$1 ').replace(/(^\s+|\s+$)/,'');
    },
    ccName() {
      if(!this.card.name) {return 'FIRSTNAME LASTNAME'}
      return this.card.name;
    },
    ccExpiry() {
      if(!this.card.expiry){return 'MM/YY'}
      let expiryStr = this.card.expiry;
      let expiryArr = expiryStr.split("");
      expiryArr.splice(2,0,'/');
      expiryStr = expiryArr.toString();
      return expiryStr.replace(/,/g,"");
    }
  }
};
</script>

<style lang="scss" scoped>
article {
  background: dodgerblue;
  border-radius: 10px;
  padding: 1rem;
  min-width: 37rem;
  min-height: 22rem;

  display: grid;
  grid-template-areas:
    "chip . . vendor"
    "num num num num"
    "name name name expiry";
  .chip {
    grid-area: chip;
    display: flex;
    img {
      width: 5rem;
    }
  }
  .vendor {
    grid-area: vendor;
    display: flex;
    justify-content: center;
    img {
      width: 3rem;
      margin-top: 0;
    }
  }
  .num {
    grid-area: num;
    p {
      margin: 1rem 0 3rem 0;
      font-size: 3rem;
      word-spacing: 1rem;
      // letter-spacing: 0.2rem;
    }
  }
  .name-section {
    grid-area: name;
    .label {
      margin: 0;
    }
    .name {
      margin: 0;
      // margin-right: 5rem;
      font-size: 2rem;
      word-spacing: 0.7rem;
    }
  }
  .expiry {
    grid-area: expiry;
    text-align: right;
    .label {
      margin: 0;
    }
    .date {
      margin: 0;
      font-size: 2rem;
    }
  }
}
</style>