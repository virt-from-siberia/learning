<template>
  <div>
    <h2>Counter {{ counter }}</h2>
    <h2>Common sum = {{ common + counter }}</h2>
    <hr />
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      console.log(this.$store.state.counter);
      return this.$store.getters.computedCounter;
    },
    common() {
      return this.$store.state.common;
    }
  }
};
</script>

<style scoped></style>
