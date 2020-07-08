<template>
  <div>
    <h1>Car id {{ id }}</h1>
    <button class="btn btn-small btn-info mb-2" v-on:click="goBackToCars">
      Back
    </button>
    <hr />
    <!-- <router-link
      class="btn btn-default mt-2"
      tag="button"
      v-bind:to="'/car/' + id + '/full'"
      >Full ifo
    </router-link> -->
    <router-link
      class="btn btn-default mt-2"
      tag="button"
      v-bind:to="{
        name: 'carFull',
        params: { id: id },
        query: { name: 'mazda', year: 2000 },
        hash: '#scroll'
      }"
      >Full ifo
    </router-link>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   id: this.$router.currentRoute.params["id"]
      id: this.$route.params["id"]
    };
  },
  watch: {
    $route(toR, fromR) {
      console.log(toR);
      console.log(fromR);
      this.id = toR.params["id"];
    }
  },
  methods: {
    goBackToCars() {
      console.log(this.$router);
      this.$router.push("/cars");
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave");
    if (window.confirm("Are you shure you watn to leave?")) {
      next();
    } else {
      next(false);
    }
  }
};
</script>
