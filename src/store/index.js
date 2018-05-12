import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        token: '865D000F6AF9A9C1A6A479EF2B4210E542B48F9BC794C6643BE7795E1DA7437E'
    },
    mutations: {
        updateToken(state, token) {
            state.token = token
        }
    }
})

export default store