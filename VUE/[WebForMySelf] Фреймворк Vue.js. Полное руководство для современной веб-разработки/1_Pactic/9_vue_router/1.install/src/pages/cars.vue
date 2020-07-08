<template>
  <div>
    <h1>cars page</h1>
    <ul>
      <router-link
        tag="li"
        v-for="car in 5"
        v-bind:to="'/car/' + car"
        v-bind:key="car"
      >
        <a> Car {{ car }}</a>
      </router-link>
    </ul>
    <hr />
  </div>
</template>

<script>
export default {};
</script>
