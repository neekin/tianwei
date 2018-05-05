// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Api  from '@/api/api'
import './assets/styles/reset.css'
import './assets/styles/base.css'
import './assets/styles/font-awesome/css/font-awesome.css'

Vue.config.productionTip = false

Vue.prototype.$http = axios
Vue.prototype.$api = Api

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
