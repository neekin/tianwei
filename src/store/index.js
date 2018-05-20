import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        token:  window.localStorage.token,
        username:window.localStorage.username
    },
    mutations: {
        updateToken(state, token) {
            state.token = token
            window.localStorage.setItem('token',token)
        },
        updateUserName(state,username){
            state.username = username
            window.localStorage.setItem('username',username)
        }
    }
})

export default store