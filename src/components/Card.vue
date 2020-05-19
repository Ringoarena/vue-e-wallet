<template>
  <!-- <article @click="setActive" v-bind:style="{backgroundColor: card.activeColor}">
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
  </article> -->
  <article @click="setActive" v-bind:style="{backgroundColor: card.activeColor}">
    <div class="logos">
      <img class="chip" src="../assets/chip-dark.svg" alt />
      <img class="vendor" :src="require(`@/assets/${card.vendor}`)" alt />
    </div>
    <p class="num">{{ccNum}}</p>
    <div class="label-wrapper">
      <p class="label">CARDHOLDER NAME</p>
      <p class="label">VALID THRU</p>
    </div>
    <div class="data-wrapper">
      <p class="data">{{ccName}}</p>
      <p class="data">{{ccExpiry}}</p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    card: Object,
    inStack: Boolean
  },
  data() {
    return {
      stackMode: this.inStack
    }
  },
  computed: {
    ccNum() {
      let temp = '';
      for(let i = 0; i < this.card.number.length; i++) {
        let char = this.card.number.charAt(i);
        if(Number.isInteger(parseInt(char, 10))){
          temp += char;
        }
        if(temp.length == 16){
          break;
        }
      }
      while(temp.length < 16) {
        temp += 'X';
      }
      return temp.replace(/(\w{4})/g, '$1 ').replace(/(^\s+|\s+$)/,'');
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
  },
  methods: {
    setActive() {
      if(this.stackMode) {
        this.$store.commit('setActive', this.card);
        this.stackMode = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
article {
  p, img {
    margin: 0;
    padding: 0;
  }
  display: flex;
  flex-direction: column;
  width: 90vw;
  max-width: 400px;
  height: 56.75vw;
  max-height: 252px;
  border-radius: 10px;
  padding: 4vw;
  box-sizing: border-box;
  font-family: "PT Mono", monospace;
  margin: 0 auto;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.185);

  .logos {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;

    .chip {
      width: 12.1vw;
      max-width: 53.72px;
    }

    .vendor {
      width: 7.5vw;
      max-width: 33.3px;
      align-self: flex-start;
    }
  }

  .num {
    font-size: 7vw;
    margin: 2.8vw 0 8vw 0;
    text-align: center;
  }

  .label-wrapper, .data-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .label {
    font-size: 2.8vw;
    margin-bottom: 1vw;
  }

  .data {
    font-size: 4.3vw;
    font-weight: 595;
  }
}
@media screen and(min-width: 445px){
  article {
    padding: 17.76px;
    .chip {
      width: 53.72px;
    }
    .vendor {
      width: 33.3px
    }
    .num {
      font-size: 31.2px;
      font-weight: lighter;
      margin: 12.43px 0 35.52px 0;
    }
    .label {
      font-size: 12.43px;
      margin-bottom: 4.4px;
    }
    .data {
      font-size: 19.1px;
      font-weight: 595;
    }
  }
}
// article {
//   border-radius: 10px;
//   padding: 1rem;
//   min-width: 37rem;
//   min-height: 22rem;

//   display: grid;
//   grid-template-areas:
//     "chip . . vendor"
//     "num num num num"
//     "name name name expiry";
//   .chip {
//     grid-area: chip;
//     display: flex;
//     img {
//       width: 5rem;
//     }
//   }
//   .vendor {
//     grid-area: vendor;
//     display: flex;
//     justify-content: center;
//     img {
//       width: 3rem;
//       margin-top: 0;
//     }
//   }
//   .num {
//     grid-area: num;
//     p {
//       margin: 1rem 0 3rem 0;
//       font-size: 3rem;
//       word-spacing: 1rem;
//       // letter-spacing: 0.2rem;
//     }
//   }
//   .name-section {
//     grid-area: name;
//     .label {
//       margin: 0;
//     }
//     .name {
//       margin: 0;
//       // margin-right: 5rem;
//       font-size: 2rem;
//       word-spacing: 0.7rem;
//     }
//   }
//   .expiry {
//     grid-area: expiry;
//     text-align: right;
//     .label {
//       margin: 0;
//     }
//     .date {
//       margin: 0;
//       font-size: 2rem;
//     }
//   }
// }
</style>