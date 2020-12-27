import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Start from '../views/Start.vue'
import Login from '../views/Login.vue'
import Select from '../views/Select.vue'
import New from '../views/New.vue'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Main',
    component: Main 
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/start',
    name: 'Start',
    component: Start
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/select',
    name: 'Select',
    component: Select
  },
  {
    path: '/new',
    name: 'New',
    component: New 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
