import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/view/Home'
import Shop from '@/view/Shop'

// * Мы говори VUE использовать эту библиотеку
Vue.use(Router)

/**
 * * Массив объектов путей
 * ? Для чего он используется
 */
const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/shop',
    component: Shop,
  },
]

// * Экспортируем класс роутера, в который передаём конфиги
export default new Router({
  routes,
  mode: 'history',
})