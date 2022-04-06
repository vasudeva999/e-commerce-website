import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from './store/store';
import router from './router'

new Vue({
  store: store,
  router: router,
  el: '#app',
  render: h => h(App)
})
