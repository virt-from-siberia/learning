<template>
  <div>
    <slot name="tittle"></slot>

    <hr />
    <hr />

    <slot name="text"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h2 {
  color: red;
}
div {
  border: 1px solid black;
}
</style>
