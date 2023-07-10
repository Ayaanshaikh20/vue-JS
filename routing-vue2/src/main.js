import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import UsersList from './components/users/UsersList.vue';
import TeamsList from './components/teams/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue'
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [{path: '/', redirect: '/teams'},
           {name: 'team', path: '/teams',
            component: TeamsList,
            children: [
            {name: 'teamMember', path: ':teamId', component: TeamMembers, props: true}
           ]},
           {path: '/users', component: UsersList},
           {path: '/:notFound(.*)', redirect: '/teams'}],
  linkActiveClass: 'active'
})

Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
