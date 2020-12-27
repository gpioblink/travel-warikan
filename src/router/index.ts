import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Start from '../views/Start.vue'
import Login from '../views/Login.vue'
import Select from '../views/Select.vue'
import New from '../views/New.vue'
import Log from '../views/Log.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  },
  {
    path: '/log',
    name: 'Log',
    component: Log
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
