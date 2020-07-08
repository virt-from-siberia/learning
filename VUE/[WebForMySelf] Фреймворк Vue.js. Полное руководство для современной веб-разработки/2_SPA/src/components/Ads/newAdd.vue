<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm5 offset-sm3>
        <h1 class="text--secondary mb-3">Create new ad</h1>
        <v-form v-model="valid" ref="form" validation>
          <!-- section: TITLE==========-->
          <v-text-field
            name="title"
            label="Ad title"
            type="text"
            v-model="title"
            required
            :rules="[v => !!v || 'Введите заголовок']"
          ></v-text-field>
          <!-- section_end: EMAIL TITLE==========-->
          <!-- section: DESCRIPTION==========-->
          <v-text-field
            name="description"
            label="Ad description"
            multi-line
            type="text"
            v-model="description"
            :rules="[v => !!v || 'Введите текст']"
            class="mb-3"
          ></v-text-field>
          <!-- section_end: DESCRIPTION END==========-->
        </v-form>
        <!-- section: BUTTON -->
        <v-layout row align-center justify-center class="mb-3">
          <v-flex xs12>
            <v-btn dark class="warning"
              >Upload <v-icon right dark>cloud_upload</v-icon></v-btn
            >
          </v-flex>
        </v-layout>
        <!-- section_end: BUTTON END==========-->
        <!-- section: IMAGE -->
        <v-layout row align-center justify-center>
          <v-flex xs12>
            <img src="" alt="" height="100" />
          </v-flex>
        </v-layout>
        <!-- section_end: IMAGE END==========-->
        <!-- section: SWITCH -->
        <v-layout row align-center justify-center>
          <v-flex xs12>
            <v-switch
              label="Add to promo"
              v-model="promo"
              color="success"
            ></v-switch>
          </v-flex>
        </v-layout>
        <!-- section_end: SWITCH END==========-->
        <!-- section: BUTTON -->
        <v-layout row align-center justify-center>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn class="success" @click="createdAd" :disabled="!valid"
              >Create Ad</v-btn
            >
          </v-flex>
        </v-layout>
        <!-- section_end: BUTTON END==========-->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: "",
      promo: false,
      valid: false
    };
  },
  methods: {
    createdAd() {
      if (this.valid) {
        var ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          imageSrc: "https://i.imgur.com/QHPqqay.jpg"
        };
      }
      this.$store.dispatch("createdAd", ad);
      console.log("AD = " + ad);
    }
  }
};
</script>
