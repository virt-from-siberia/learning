import Vue from 'vue'
import Vuex from 'vuex'
import counter from './counterVUEX'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        counter: counter
    },
    state: {
        common: 10,
        title: 'Hello from state'
    },
    getters: {
        title(state) {
            return state.title + '!!!'
        }
    }
});