/* eslint-disable */

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'


// FIXME:
// NOTE:
// HACK:
// BUG:
//TODO:

Vue.use(Vuetify)




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>',
  created() {
    var firebaseConfig = {
      apiKey: "AIzaSyChIUzYEKiKjleZfDyavRQgw5EU4we1y10",
      authDomain: "itc-ads-eed27.firebaseapp.com",
      databaseURL: "https://itc-ads-eed27.firebaseio.com",
      projectId: "itc-ads-eed27",
      storageBucket: "itc-ads-eed27.appspot.com",
      messagingSenderId: "399051056916",
      appId: "1:399051056916:web:ff930011d58c25a092c401",
      measurementId: "G-RDYLSKS40R"
    }
    fb.initializeApp(firebaseConfig);
    fb.analytics();
  },
});