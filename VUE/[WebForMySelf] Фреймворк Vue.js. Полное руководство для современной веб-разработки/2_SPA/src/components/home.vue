<template>
  <div>
    <v-container fluid>
      <v-layout row align-center justify-center>
        <v-flex xs10 sm12>
          <!-- section: .CAROUSEL==========-->
          <v-carousel>
            <v-carousel-item
              v-for="ad in promoAds"
              :key="ad.id"
              :src="ad.imageSrc"
            >
              <div class="carousel_link">
                <v-btn class="error" v-bind:to="'/ad/' + ad.id">
                  {{ ad.title }}
                </v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
          <!-- section_end: .CAROUSEL END==========-->
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <!-- TODO: V-FOR.==========-->
        <v-flex xs12 sm6 md3 v-for="ad of ads" :key="ad.id">
          <!-- section: .CARD==========-->
          <v-card>
            <v-card-media :src="ad.imageSrc" height="200px"> </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ ad.title }}</h3>
                <div>
                  {{ ad.description }}
                </div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat class="" v-bind:to="'ad/' + ad.id">Open</v-btn>
              <v-btn flat class="primary">Buy</v-btn>
            </v-card-actions>
          </v-card>
          <!-- section_end: .CARD END==========-->
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    promoAds() {
      return this.$store.getters.promoAds;
    },
    ads() {
      return this.$store.getters.ads;
    }
  }
};
</script>

<style>
.carousel_link {
  position: absolute;
  bottom: 50px;
  left: 50%;
  background: rgba(0, 0, 0, 0.479);
  transform: translate(-50%, 0);
  padding: 5px 15px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
</style>
