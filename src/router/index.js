import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import login from '@/pages/login/login'
import ForgetPassword from '@/pages/forgetpassword/forgetpassword'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
    ,
    {
      path: '/forgetpassword',
      name: 'forgetpassword',
      component: ForgetPassword
    }
  ]
})
