// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Api from '@/api/api'
// import "iview/dist/styles/iview.css"
import './assets/styles/reset.css'
import './assets/styles/base.css'

import iView from 'iview'

import store from './store'

//axios请求超时处理
axios.defaults.retry = 3;
axios.defaults.retryDelay = 50;
axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
    var config = err.config;
    // If config does not exist or the retry option is not set, reject
    if (!config || !config.retry) return Promise.reject(err);

    // Set the variable for keeping track of the retry count
    config.__retryCount = config.__retryCount || 0;

    // Check if we've maxed out the total number of retries
    if (config.__retryCount >= config.retry) {
        // Reject with the error
        return Promise.reject(err);
    }

    // Increase the retry count
    config.__retryCount += 1;

    // Create new promise to handle exponential backoff
    var backoff = new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, config.retryDelay || 1);
    });

    // Return the promise in which recalls axios to retry the request
    return backoff.then(function() {
        return axios(config);
    });
});

//全局设置请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//全局拦截器 验证token验证是否失效
axios.interceptors.response.use(
    response => {
        if (response.data.code === -1) {
            router.push('/login');
        }
        return response;
    });

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

// router.beforeEach((to, from, next) => {
//         if (to.matched.some(record => record.meta.requiresAuth)) {
//           // this route requires auth, check if logged in
//           // if not, redirect to login page.
//           if (!auth.loggedIn()) {
//             next({
//               path: '/login',
//               query: { redirect: to.fullPath }//把要跳转的地址作为参数传到下一步
//             })
//           } else {
//             next()
//           }
//         } else {
//           next() // 确保一定要调用 next()
//         }
// })


Vue.use(iView)




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