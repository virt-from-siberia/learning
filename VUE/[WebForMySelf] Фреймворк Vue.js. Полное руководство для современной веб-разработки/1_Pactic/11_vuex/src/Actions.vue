<template>
  <div>
    <button class="btn btn-success" @click="updateCounter(1)">Add</button>
    <button class="btn btn-danger" @click="updateCounter(-1)">Subtract</button>
  </div>
</template>

<script>
export default {
  methods: {
    updateCounter(val) {
      // if (
      //   this.$store.state.counter == 0 &&
      //   this.$store.state.counter + val < 0
      // ) {
      //   this.$store.state.counter = 0;
      // } else {
      //   this.$store.state.counter += val;
      // }
      // this.$store.commit("changeCounter", val);
      this.$store.dispatch("asyncChangeCounter", {
        counterValue: val,
        timeOutDelay: 1000
      });
    }
  }
};
</script>

<style scoped></style>
