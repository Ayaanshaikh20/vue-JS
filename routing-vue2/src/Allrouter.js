import Vue from 'vue'
import VueRouter from 'vue-router'
import UsersList from './components/users/UsersList.vue';
import TeamsList from './components/teams/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue'
import NotFound from './components/nav/NotFound.vue'
import TeamFooter from './components/teams/TeamFooter.vue'
import UsersFooter from './components/users/UsersFooter.vue'


const router = new VueRouter({
    mode: 'history',
    routes: [{path: '/', redirect: '/teams'},
             {name: 'team', path: '/teams',
              components: {default: TeamsList, footer: TeamFooter},
              children: [
              {name: 'teamMember', path: ':teamId', component: TeamMembers, props: true}
             ]},
             {path: '/users', components: {default: UsersList, footer: UsersFooter}},
             {path: '/:notFound(.*)', component: NotFound}],
    linkActiveClass: 'active',
    scrollBehavior(savedPosition) {   //savedPosition is a built-in name it is not defined by me
      if (savedPosition) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 };
      }
    }
  })
  
  router.beforeEach(function(to, from, next) {
    console.log('Global beforeEach')
    console.log(to, from)
    if(to.path == '/Home'){
      console.log('moved to users from home')
      next({path: '/users'})
    }
    console.log('clicked on users')
    next()
  
    
  })
  Vue.use(VueRouter)

  export default router