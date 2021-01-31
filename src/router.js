import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/view/Home'
import Shop from '@/view/Shop'
import E404 from '@/view/E404'

// * Мы говорим VUE использовать эту библиотеку
Vue.use(Router)

/**
 * * Массив объектов путей
 * ? Для чего он используется
 */
const routes = [
  {
    path: '/',
    component: Home,
    meta: { layout: 'main' },
  },
  {
    path: '/shop',
    component: Shop,
    meta: { layout: 'main' },
  },
  {
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