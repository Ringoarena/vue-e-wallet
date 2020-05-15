<template>
  <article>
    <div class="chip">
      <img src="../assets/chip-dark.svg" alt />
    </div>
    <div class="vendor">
      <img src="../assets/vendor-bitcoin.svg" alt />
    </div>
    <div class="num">
      <p>1234 5678 9101 1213</p>
    </div>
    <div class="name-section">
      <p class="label">CARDHOLDER NAME</p>
      <p class="name">MASTEN PERSSON</p>
    </div>
    <div class="expiry">
      <p class="label">VALID THRU</p>
      <p class="date">13/37</p>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
article {
  background: dodgerblue;
  border-radius: 10px;
  padding: 1rem;

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
      letter-spacing: 0.05rem;
    }
  }
  .name-section {
    grid-area: name;
    .label {
      margin: 0;
    }
    .name {
      margin: 0;
      font-size: 2rem;
      word-spacing: 1rem;
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