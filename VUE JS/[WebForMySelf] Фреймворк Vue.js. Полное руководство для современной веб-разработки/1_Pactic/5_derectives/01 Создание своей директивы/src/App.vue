<template>
  <div>
    <h2 v-colored:background.font="'green'">{{ title }}</h2>
    <h2 v-colored:color.delay.3000="'blue'">{{ title }}</h2>
    <h2 v-bordered="">{{ title }}</h2>
    <h2 v-hovered="">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello I am Vue!"
    };
  },
  directives: {
    bordered: {
      bind(el, bindings, vnode) {
        el.style.border = "1px solid blue";
      }
    }
  },
  components: {}
};
</script>

<style scoped></style>
