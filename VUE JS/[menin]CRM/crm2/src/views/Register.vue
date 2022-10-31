<template>
    <form class="card auth-card" @submit.prevent="submitHandler">
        <div class="card-content">
            <span class="card-title">Домашняя бухгалтерия</span>
            <!-- //Email -->
            <div class="input-field">
                <input
                    id="email"
                    type="text"
                    v-model.trim="email"
                    :class="{
                        invalid:
                            ($v.email.$dirty && !$v.email.required) ||
                            ($v.email.$dirty && !$v.email.email),
                    }"
                />
                <label for="email">Email</label>
                <small
                    class="helper-text invalid"
                    v-if="$v.email.$dirty && !$v.email.required"
                    >Поле Email не должно быть пустым</small
                >
                <small
                    class="helper-text invalid"
                    v-else-if="$v.email.$dirty && !$v.email.email"
                    >Введите корретный Email</small
                >
            </div>
            <!-- //Password -->
            <div class="input-field">
                <input
                    id="password"
                    type="password"
                    v-model.trim="password"
                    :class="{
                        invalid:
                            ($v.password.$dirty && !$v.password.required) ||
                            ($v.password.$dirty && !$v.password.minLength),
                    }"
                />
                <label for="password">Пароль</label>
                <small
                    class="helper-text invalid"
                    v-if="$v.password.$dirty && !$v.password.required"
                >
                    Введите пароль
                </small>
                <small
                    class="helper-text invalid"
                    v-else-if="$v.password.$dirty && !$v.password.minLength"
                >
                    Пароль должен быть
                    {{ $v.password.$params.minLength.min }} символов. Сейчас он
                    {{ password.length }}
                </small>
            </div>
            <!-- //Name -->
            <div class="input-field">
                <input
                    id="name"
                    type="text"
                    class="validate"
                    v-model.trim="name"
                    :class="{
                        invalid:
                            ($v.name.$dirty && !$v.name.required) ||
                            ($v.name.$dirty && !$v.name.minLength),
                    }"
                />
                <label for="name">Имя</label>
                <small
                    class="helper-text invalid"
                    v-if="$v.name.$dirty && !$v.name.required"
                    >Введите Имя</small
                >
                <small
                    class="helper-text invalid"
                    v-else-if="$v.name.$dirty && !$v.name.minLength"
                    >Имя должно быть не менее
                    {{ $v.name.$params.minLength.min }} сиимволов</small
                >
            </div>
            <p>
                <label>
                    <input type="checkbox" v-model="agree" />
                    <span>С правилами согласен</span>
                </label>
            </p>
        </div>

        <!-- //Send -->
        <div class="card-action">
            <div>
                <button
                    class="btn waves-effect waves-light auth-submit"
                    type="submit"
                >
                    Зарегистрироваться
                    <i class="material-icons right">send</i>
                </button>
            </div>

            <p class="center">
                Уже есть аккаунт?
                <router-link to="/login">Войти</router-link>
            </p>
        </div>
    </form>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";

export default {
    name: "register",
    data: () => ({
        email: "",
        password: "",
        name: "",
        agree: false,
    }),
    validations: {
        email: { email, required },
        password: { required, minLength: minLength(6) },
        name: { required, minLength: minLength(3) },
        agree: { cheched: (v) => v },
    },
    methods: {
        async submitHandler() {
            if (this.$v.$invalid) {
                this.$v.$touch();
                return;
            }
            const formData = {
                email: this.email,
                password: this.password,
                name: this.name,
            };

            try {
                await this.$store.dispatch("register", formData);
                this.$router.push("/");
            } catch (error) {}
        },
    },
};
</script>
