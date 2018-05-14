import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        token: '',
        username:''
    },
    mutations: {
        updateToken(state, token) {
            state.token = token
        },
        updateUserName(state,username){
        	state.username = username
        }
    }
})

export default store