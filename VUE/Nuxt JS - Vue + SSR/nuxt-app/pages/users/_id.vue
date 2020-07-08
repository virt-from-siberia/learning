<template>
  <section>
    <h1>{{ user.name }}</h1>
    <hr />
    <h3>{{ user.email }}</h3>
    <hr />
    <p>
      <strong>{{ user.phone }}</strong>
    </p>
    <hr />
    <h4>Adress :</h4>
    <p>
      <strong>{{ user.address.street }}</strong>
    </p>
    <p>{{ user.address.suite }}</p>
  </section>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  async asyncData({ $axios, params }) {
    const user = await $axios.$get(
      "https://jsonplaceholder.typicode.com/users/" + params.id
    );
    return { user };
  }
};
</script>
