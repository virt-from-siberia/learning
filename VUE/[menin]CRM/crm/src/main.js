import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import dateFilter from "@/filters/date.filter";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min.js";

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.filter("date", dateFilter);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
