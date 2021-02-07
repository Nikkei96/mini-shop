// Core
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// библиотеки
import Vuelidate from 'vuelidate'
import firebase from 'firebase/app'
import 'firebase/auth'

// плагины
import vuetify from './plugins/vuetify'
import firebasePlugin from './plugins/firebase'

// фильтры
import dateTimeFilter from './filters/dateTimeFilter'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(firebasePlugin)

Vue.filter('dateTimeFilter', dateTimeFilter)

let firebaseConfig = {
  apiKey: "AIzaSyCvU5reGcqJuzBrkggKNRQ2RL2i0iWax4A",
  authDomain: "mini-shop-852c4.firebaseapp.com",
  projectId: "mini-shop-852c4",
  storageBucket: "mini-shop-852c4.appspot.com",
  messagingSenderId: "595872618447",
  appId: "1:595872618447:web:89105cafa204b0c78164ba"
}

firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged(() => {
  new Vue({
    router,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
})

