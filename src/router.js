import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/view/Home'
import Shop from '@/view/Shop'
import Services from '@/view/Services'
import Orders from '@/view/Orders'
import Balance from '@/view/Balance'
import Login from '@/view/Login'
import Register from '@/view/Register'
import E404 from '@/view/E404'

// * Мы говорим VUE использовать эту библиотеку
Vue.use(Router)

/**
 * * Массив объектов путей
 * ? Для чего он используется
 */
const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    meta: { layout: 'main' },
  },
  {
    name: 'Shop',
    path: '/shop',
    component: Shop,
    meta: { layout: 'main' },
  },
  {
    name: 'Services',
    path: '/services',
    component: Services,
    meta: { layout: 'main' },
  },
  {
    name: 'Orders',
    path: '/orders',
    component: Orders,
    meta: { layout: 'main' },
  },
  {
    name: 'Balance',
    path: '/balance',
    component: Balance,
    meta: { layout: 'main' },
  },
  {
    name: 'Login',
    path: '/login',
    component: Login,
    meta: { layout: 'empty' },
  },
  {
    name: 'Register',
    path: '/register',
    component: Register,
    meta: { layout: 'empty' },
  },
  {
    name: 'E404',
    path: '*',
    component: E404,
    meta: { layout: 'empty' },
  },
]

// * Экспортируем класс роутера, в который передаём конфиги
export default new Router({
  routes,
  mode: 'history',
})