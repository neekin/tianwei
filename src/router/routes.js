import home from '@/pages/home/home'
import login from '@/pages/home/login/login'
import ForgetPassword from '@/pages/home/forgetpassword/forgetpassword'

import basemanage from '@/pages/systemmanage/manage'
// import user from '@/pages/systemmanage/user'
// import role from '@/pages/systemmanage/role'

import guestdata from '@/pages/bigdata/guestData'
import bcreport from '@/pages/bigdata/busCircleReport'
import rtdevice from '@/pages/bigdata/realTimeDevice'

export default [{
        path: '/',
        redirect: '/guestdata'
            // name: 'home',
            // component: home
    },
    {
        path: '/login',
        name: 'login',
        component: login,
        meta: {
            noauth: true
        }
    },
    {
        path: '/forgetpassword',
        name: 'forgetpassword',
        component: ForgetPassword,
        meta: {
            noauth: true
        }
    },
    {
        path: '/base',
        name: 'basemanage',
        component: basemanage
    },
    {
        path: '/user',
        name: 'user',
        component: basemanage
    },
    {
        path: '/role',
        name: 'role',
        component: basemanage
    },

    {
        path: '/guestdata',
        name: 'guestdata',
        component: guestdata
    },
    {
        path: '/bcreport',
        name: 'bcreport',
        component: bcreport
    },
    {
        path: '/rtdevice',
        name: 'rtdevice',
        component: rtdevice
    }
]