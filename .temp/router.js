import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'
import MainTab from '@/components/MainTab'
import Psd from '@/components/Psd'
import newWorkError from '@/components/netWorkError'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'MainTab',
      component: MainTab
    },
    {
      path: '/Psd',
      name: 'Psd',
      component: Psd
    },
    {
      path: '/newWorkError',
      name: 'newWorkError',
      component: newWorkError
    }
  ]
})
