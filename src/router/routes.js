import home from '@/pages/home/home'
import login from '@/pages/home/login/login'
import ForgetPassword from '@/pages/home/forgetpassword/forgetpassword'

import basemanage from '@/pages/systemmanage/base'
import user from '@/pages/systemmanage/user'

export default [{
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/login',
        name: 'login',
        component: login,
        meta: { noauth: true }
    },
    {
        path: '/forgetpassword',
        name: 'forgetpassword',
        component: ForgetPassword,
        meta: { noauth: true }
    },
    {
        path:'/basemanage',
        name:'baseinfo',
        component:basemanage
    } ,
    {
        path:'/user',
        name:'user',
        component:user
    }
]