import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import UsersList from './components/users/UsersList.vue';
import TeamsList from './components/teams/TeamsList.vue';
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [{path: '/teams', component: UsersList},
           {path: '/users', component: TeamsList}]
})

Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
