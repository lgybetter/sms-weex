import Router from 'vue-router'
import home from '../views/home.vue'
import auth from '../views/auth.vue'

export default new Router({
  routes: [
    { path: '/', name: 'home', component: home },
    { path: '/auth', name: 'auth', component: auth }
  ]
})