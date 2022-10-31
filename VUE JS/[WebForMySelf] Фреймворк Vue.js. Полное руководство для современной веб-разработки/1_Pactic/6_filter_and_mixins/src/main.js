import Vue from 'vue'
import App from './App.vue'
import List from './list'

Vue.filter('uppercase', (value) => {
  return value.toUpperCase();
});

Vue.component('app-list', List);

Vue.mixin({
  beforeCreate() {
    console.log('beforeCreate');
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});