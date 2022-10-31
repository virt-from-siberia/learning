<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="dark ">
      <nuxt-link exact class="acive" to="/">Home</nuxt-link>
      <nuxt-link class="nav-link " to="/about">About</nuxt-link>
      <nuxt-link class="nav-link" to="/users">Users</nuxt-link>

      <nuxt-link class="nav-link" to="/login" v-if="!hasToken">Login</nuxt-link>

      <a class="nav-link" href="#" @click.prevent="logout" v-else>Logout </a>
    </b-navbar>
  </div>
</template>

<script>
export default {
  computed: {
    hasToken() {
      return this.$store.getters.hasToken;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    }
  }
};
</script>
