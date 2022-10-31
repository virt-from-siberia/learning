<template>
  <div class="car">
    <app-car>
      <h2 slot="tittle">{{ carNmae }} + html</h2>
      <p slot="text">Lorem, ipsum dolor.</p>
    </app-car>
  </div>
</template>

<script>
import Car from "./car.vue";

export default {
  data() {
    return {
      carNmae: "ford"
    };
  },
  components: {
    "app-car": Car
  }
};
</script>

<style lang="">
* {
  padding: 10px;
}
</style>
