import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'
import faq from './views/faq.vue'
import feedback from './views/feedback.vue'
import gallery from './views/gallery.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/faq',
      name: 'faq',
      component: faq
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: feedback
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: gallery
    }
  ]
});