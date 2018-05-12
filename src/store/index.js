import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        token: '59458FA613DB69C9A66343D5083FD4F7BEA8A5065E1E3230A1E3DC6B6113B486'
    },
    mutations: {
        updateToken(state, token) {
            state.token = token
        }
    }
})

export default store