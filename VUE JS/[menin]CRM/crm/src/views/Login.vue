<template>
    <form class="card auth-card" @submit.prevent="submitHandler">
        <div class="card-content">
            <span class="card-title">Домашняя бухгалтерия</span>
            <div class="input-field">
                <input id="email" type="text" />
                <label for="email">Email</label>
                <small class="helper-text invalid">Email</small>
            </div>
            <div class="input-field">
                <input id="password" type="password" />
                <label for="password">Пароль</label>
                <small class="helper-text invalid">Password</small>
            </div>
        </div>
        <div class="card-action">
            <div>
                <button
                    class="btn waves-effect waves-light auth-submit"
                    type="submit"
                >
                    Войти
                    <i class="material-icons right">send</i>
                </button>
            </div>

            <p class="center">
                Нет аккаунта?
                <router-link to="/register">Зарегистрироваться</router-link>
            </p>
        </div>
    </form>
</template>

<script>
import { email, reuqired, minLength } from "vuelidate/lib/validators";
export default {
    name: "login",
    data: () => ({
        email: "",
        password: "",
    }),
    validations: {
        email: { email, reuqired },
        password: { reuqired, minLength: minLength(6) },
    },
    methods: {
        submitHandler() {
            if (this.$v.$invalid) {
                this.$v.$touch();
                return;
            }
            this.$router("/push");
        },
    },
};
</script>
