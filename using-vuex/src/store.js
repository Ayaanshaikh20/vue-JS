import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {            //State is basically similar to data which we used in vue
        counter: 0,
        isAuth: false
      },
    
    mutations: {
        increment(state, payload) {         //state1 will directly contain state method which is builtin from vuex //state1 and payload name is upto me
            state.counter = state.counter + payload
        },
        increase(state, payload) {
            state.counter = state.counter + payload
        },
        isAuthenticated(state) {
            state.isAuth = true
        }
    },

    actions: {              //actions are allowed to run asynchronusly
        increment(context, payload) {
            setTimeout(function() {
                context.commit('increment', payload)
            },2000)
        },
        increase(context, payload) {
            setTimeout(function() {
                context.commit('increase', payload)
            },2000)
        }
    },

    getters: {
        finalCounter(state) {
            return state.counter * 2
        },
        normalizedCounter(_, getters) {
            const finalCounter1 = getters.finalCounter
            if (finalCounter1 < 0){
                return 0
            }if (finalCounter1 > 100) {
                return 100
            }else{
                return finalCounter1
            }
            
            
        }
    }
}) 