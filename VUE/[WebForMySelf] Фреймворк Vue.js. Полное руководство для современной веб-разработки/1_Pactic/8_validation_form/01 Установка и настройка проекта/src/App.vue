<template>
  <div class="container">
    <form action="" class="pt-3">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control"
          v-bind:class="{
            'is-invalid': $v.email.$error,
            'is-valid': $v.email.required && $v.email.email
          }"
          id="email"
          v-model="email"
          v-on:blur="$v.email.$touch()"
        />

        <div class="invalid-feedback" v-if="!$v.email.required">
          Email field is requared
        </div>
        <div class="invalid-feedback" v-if="!$v.email.email">
          This field should be an email
        </div>
        <div class="invalid-feedback" v-if="!$v.email.uqniqEmail">
          This Email used
        </div>
        <div class="valid-feedback" v-if="$v.email.required && $v.email.email">
          Looks good!
        </div>
      </div>

      <div class="form-group">
        <label for="password">password</label>
        <input
          type="password"
          class="form-control"
          v-bind:class="{
            'is-invalid': !$v.password.minLength
          }"
          id="password"
          v-model="password"
          v-on:blur="$v.password.$touch()"
        />

        <div class="invalid-feedback" v-if="!$v.password.minLength">
          Min length of password is {{ $v.password.$params.minLength.min }}. Now
          it is {{ password.length }}
        </div>
      </div>

      <div class="form-group">
        <label for="confirm"> Confirm password</label>
        <input
          type="password"
          class="form-control"
          v-bind:class="{
            'is-invalid': $v.confirmPassword.minLength
          }"
          id="confirm"
          v-model="confirmPassword"
          v-on:blur="$v.confirmPassword.$touch()"
        />

        <div class="invalid-feedback" v-if="$v.confirmPassword.sameAs">
          Passwords shild mutch
        </div>
      </div>
    </form>
    <pre></pre>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  validations: {
    email: {
      required: required,
      email: email,
      uqniqEmail: function(newEmail) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const value = newEmail !== "test@mail.ru";
            resolve(true);
          }, 3000);
        });
      }
    },
    password: {
      minLength: minLength(6)
    },
    confirmPassword: {
      sameAs: sameAs("password")
    }
  }
};
</script>
