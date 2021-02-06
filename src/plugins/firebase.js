import firebase from 'firebase/app'

export default {
  install(Vue) {
    Vue.prototype.$firebase = firebase
  }
}