import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const counterModule = {
    namespaced: true,
    state() {
        return {
            counter: 0
        }
    },
    mutations: {
        increment(state, payload) {         //state1 will directly contain state method which is builtin from vuex //state1 and payload name is upto me
            state.counter = state.counter + payload
        },
        increase(state, payload) {
            state.counter = state.counter + payload
        }
    },
    actions: {
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
        },
    }
}

const authModule = {
    namespaced: true,
    state: {            //State is basically similar to data which we used in vue
        isAuth: false
      },
    
    mutations: {
        isAuthenticated(state, payload) {
            state.isAuth = payload.isAuth
        }
    },

    actions: {              //actions are allowed to run asynchronusly
        login(context) {
            context.commit('isAuthenticated', {isAuth: true})
        },
        logout(context) {
            context.commit('isAuthenticated', {isAuth: false})
        }
    },

    getters: {
        userAuthenticated(state) {
            return state.isAuth;
        }
    }
}

export default new Vuex.Store({
    modules: {
        countermod: counterModule,
        authmod: authModule
    }
}) 