<template>
  <div class="container text-center pt-5">
    <h1>{{ title }}</h1>
    <hr />
    <app-counter></app-counter>
    <app-actions></app-actions>
    <hr />
    <appSecondCounter></appSecondCounter>
  </div>
</template>

<script>
import Counter from "./Counter";
import Actions from "./Actions";
import SecondCounter from "./second_counter";

export default {
  data() {
    return {
      counter_one: 0
    };
  },
  components: {
    appCounter: Counter,
    appActions: Actions,
    appSecondCounter: SecondCounter
  },
  computed: {
    title() {
      return this.$store.getters.title;
    }
  }
};
</script>
