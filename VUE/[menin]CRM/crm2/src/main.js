import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import messgePlugin from "@/utils/message.plugin";
import dateFilter from "@/filters/date.filter";
import currencyFilter from "@/filters/currency.filter";
import Loader from "@/components/app/Loader";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(messgePlugin);
Vue.filter("date", dateFilter);
Vue.filter("currency", currencyFilter);
Vue.component("Loader", Loader);

const firebaseConfig = {
    apiKey: "AIzaSyAhBA12Y4Mf9rvVkxwImznVayUpcqSUnYg",
    authDomain: "vuecrm-1f45f.firebaseapp.com",
    databaseURL: "https://vuecrm-1f45f.firebaseio.com",
    projectId: "vuecrm-1f45f",
    storageBucket: "vuecrm-1f45f.appspot.com",
    messagingSenderId: "6738943353",
    appId: "1:6738943353:web:86ea2841205d5f7f0063a8",
};

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            router,
            store,
            render: (h) => h(App),
        }).$mount("#app");
    }
});
