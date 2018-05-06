import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        token: '7905DC350E9AE720854C9483532AB8E744D18371CBCD61DA7570285784BFCA81'
    },
    mutations: {
        updateToken(state, token) {
            state.token = token
        }
    }
})

export default store