import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        token: ''
    },
    mutations: {
        updateToken(state, token) {
            state.token = token
        }
    }
})

export default store