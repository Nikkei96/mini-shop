import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/view/Home'
import Page1 from '@/view/Page1'
import Page2 from '@/view/Page2'

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
    path: '/page1',
    component: Page1,
  },
  {
    path: '/page2',
    component: Page2,
  },
]

// * Экспортируем класс роутера, в который передаём конфиги
export default new Router({
  routes,
  mode: 'history',
})