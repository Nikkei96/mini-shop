import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import vuetify from '@/plugins/vuetify'
import Vuelidate from 'vuelidate'

import firebase from 'firebase/app'
import 'firebase/auth'

Vue.config.productionTip = false

Vue.use(Vuelidate)

let firebaseConfig = {
  apiKey: "AIzaSyCvU5reGcqJuzBrkggKNRQ2RL2i0iWax4A",
  authDomain: "mini-shop-852c4.firebaseapp.com",
  projectId: "mini-shop-852c4",
  storageBucket: "mini-shop-852c4.appspot.com",
  messagingSenderId: "595872618447",
  appId: "1:595872618447:web:89105cafa204b0c78164ba"
}

firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
