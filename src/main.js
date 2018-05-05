// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Api from '@/api/api'
import './assets/styles/reset.css'
import './assets/styles/base.css'
import './assets/styles/font-awesome/css/font-awesome.css'

import store from './store'
//全局设置请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


//判断是否登录

router.beforeEach((to, from, next) => {
    if (to.matched.some(m => m.meta.noauth)) {
        next()
    } else {
        if (store.state.token == '') {
            next('/login');
        } else {
            next();
        }

    }
})


Vue.config.productionTip = false

Vue.prototype.$http = axios
Vue.prototype.$api = Api

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})