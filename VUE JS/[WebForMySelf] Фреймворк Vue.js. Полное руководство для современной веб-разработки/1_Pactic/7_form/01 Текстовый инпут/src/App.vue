<template>
  <div>
    <h2>Form inputs</h2>
    <input type="text" v-model.lazy="name" />
    <p>{{ name }}</p>

    <hr />

    <textarea v-model="textaria"></textarea>
    <p>{{ textaria }}</p>

    <hr />

    <h2>Form inputs</h2>

    <label for="">
      <input
        type="checkbox"
        value="instagram"
        v-model="social"
        v-on:click="check"
      />Instagram
    </label>

    <label for="">
      <input type="checkbox" value="vk" v-model="social" v-on:click="check" />VK
    </label>

    <label for="">
      <input
        type="checkbox"
        value="facebook"
        v-model="social"
        v-on:click="check"
      />Facebook
    </label>

    <button v-if="checked">send</button>

    <hr />

    <ul>
      <li v-for="(net, key) in social" v-bind:key="key">{{ net }}</li>
    </ul>

    <hr />

    <h2>Selectors</h2>

    <select>
      <option
        value=""
        v-for="(opt, key) in select"
        v-bind:key="key"
        v-bind:selected="opt === 'facebook'"
      >
        {{ opt }}
      </option>
    </select>

    <hr />

    <input type="text" v-model.number="age" />

    <p>{{ age }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      textaria: "asd as a asd",
      social: [],
      checked: false,
      select: ["instagram", "facebook", "vk"],
      defaultSelect: "facebook",
      age: 20
    };
  },
  watch: {
    age(value) {
      console.log(value);
      console.log(typeof value);
    }
  },
  methods: {
    check() {
      this.checked = true;
    }
  }
};
</script>

<style scoped>
p {
  white-space: pre;
}
textarea {
  height: 100px;
  width: 400px;
}
</style>
