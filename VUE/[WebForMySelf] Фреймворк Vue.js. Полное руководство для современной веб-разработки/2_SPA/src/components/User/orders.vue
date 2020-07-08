<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm-3>
        <h1 class="text--secondary mb-3">Orders</h1>
        <v-list two-line subheader>
          <!-- section: .ORDER.==========-->
          <v-list-tile avatar v-for="order in orders" :key="order.id">
            <v-list-tile-action>
              <v-checkbox
                :input-value="order.done"
                @change="markDone(order)"
                color="success"
              ></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ order.name }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ order.phone }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-title-action>
              <v-btn class="primary" :to="'/ad/' + order.adId"> Open</v-btn>
            </v-list-title-action>
          </v-list-tile>
          <!-- section_end: .ORDER END==========-->
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        {
          id: "asd",
          name: "Aleksey",
          phone: "8914-145-1855",
          adId: "1",
          done: false
        }
      ]
    };
  },
  methods: {
    markDone(order) {
      order.done = !order.done;
      console.log(order.done);
    }
  }
};
</script>
