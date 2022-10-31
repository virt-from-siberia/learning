<template>
  <div class="container pt-2">
    <div class="form-group">
      <label for="name">Car name</label>
      <input
        type="text"
        id="name"
        class="form-control"
        v-model.trim="carName"
      />
    </div>

    <div class="form-group">
      <label for="year">Car year</label>
      <input
        type="text"
        id="year"
        class="form-control"
        v-model.number="carYear"
      />
    </div>

    <div class="btn btn-success" v-on:click="creareCar">Create Car</div>
    <button class="btn btn-primary" v-on:click="loadCars">Load cars</button>

    <hr />

    <ul class="list-group">
      <li class="list-group-item" v-for="car of cars" v-bind:key="car.id">
        <strong>I {{ car.name }}</strong> - {{ car.year }} ID-CAR:
        {{ car.id }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carName: "",
      carYear: 2018,
      cars: [],
      resource: null,
      url: "http://localhost:3000/cars"
    };
  },
  methods: {
    creareCar() {
      const car = {
        name: this.carName,
        year: this.carYear
      };

      console.log("Car created");
      this.$http
        .post(this.url, car)
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then(newCar => {
          console.log(newCar);
        });
    },
    loadCars() {
      this.$http
        .get(this.url)
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then(response => {
          console.log(response);
          this.cars = response;
        });
    }
  },
  created() {
    this.resource = this.$resource(this.url);
  }
};
</script>
