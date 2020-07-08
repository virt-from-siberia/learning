<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="26">
          <v-toolbar dark color="green">
            <v-toolbar-title>Registraion form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid" validation>
              <!-- section: EMAIL==========-->
              <v-text-field
                prepend-icon="person"
                name="email"
                label="Email"
                type="email"
                v-model="email"
                :rules="emailRules"
              ></v-text-field>
              <!-- section_end: EMAIL END==========-->
              <!-- section: PASSWORD==========-->
              <v-text-field
                prepend-icon="lock"
                name="password"
                label="Password"
                id="password"
                type="password"
                v-model="password"
                :counter="6"
                :rules="passwordRules"
              ></v-text-field>
              <!-- section_end: PASSWORD END==========-->
              <!-- section: PASSWORD==========-->
              <v-text-field
                prepend-icon="lock"
                name="confirm-password"
                label="Confirm password"
                id="password"
                type="password"
                v-model="confirmPassword"
                :counter="6"
                :rules="confirmPasswordRules"
              ></v-text-field>
              <!-- section_end: PASSWORD END==========-->
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <!-- section: .BUTTON ==========-->
            <v-btn
              color="green"
              dark
              @click="onSubmit"
              :disabled="!valid || loading"
              :loading="loading"
              >Create account
            </v-btn>
            <!-- section_end: .BUTTON END ==========-->
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      valid: false,
      emailRules: [
        v => !!v || "Введит емаил",
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "Емаил должен быть валидным"
      ],
      passwordRules: [
        v => !!v || "Введит пароль",
        v => (v && v.length >= 6) || "Пароль должен быть боле 6 символов "
      ],
      confirmPasswordRules: [
        v => !!v || "Введит пароль",
        v => v === this.password || "Пароли не совподают"
      ]
    };
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    }
  },
  methods: {
    onSubmit() {
      console.log(this.components);
      // -- TODO: SUBMIT
      console.log(this);
      if (this.valid) {
        const user = {
          email: this.email,
          password: this.email
        };
        this.$store
          .dispatch("registerUsr", user)
          .then(() => {
            this.$router.push("/");
          })
          .catch(() => {});
        console.log(user);
      } else {
        alert("Заполните все поля");
      }
    }
  }
};
</script>
