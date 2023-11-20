import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Dashboard from '../components/Dashboard.vue'
import About from '../components/About.vue'
import Error from '../components/Error.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/:catchAll(.*)',
    component: Error
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
