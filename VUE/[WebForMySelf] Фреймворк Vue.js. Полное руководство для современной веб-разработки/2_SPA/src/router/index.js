/* eslint-disable */

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Ad from '@/components/Ads/ad'
import AdList from '@/components/Ads/adList'
import NewAdd from '@/components/Ads/newAdd'
import Login from '@/components/Auth/login'
import Registration from '@/components/Auth/registration'
import Orders from '@/components/User/orders'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/ad/:id',
      props: true,
      name: 'ad',
      component: Ad
    },
    {
      path: '/list',
      name: 'adlist',
      component: AdList
    },
    {
      path: '/new',
      name: 'new',
      component: NewAdd
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    }
  ],
  mode: 'history'
})