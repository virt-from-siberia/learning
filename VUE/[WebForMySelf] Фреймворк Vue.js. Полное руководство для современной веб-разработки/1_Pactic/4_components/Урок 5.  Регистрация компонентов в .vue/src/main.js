import Vue from 'vue';
import App from './App.vue';

//Шина событий
export const eventEmitter = new Vue();

new Vue({
  el: '#app',
  render(h) {
    return h(App);
  }
});