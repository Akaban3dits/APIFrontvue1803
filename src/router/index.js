import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../components/Dashboard.vue'
import LoginView from '../components/Login.vue'
import Lista from '../components/Lista.vue'
import Crear from '../components/Crear.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: DashboardView
    },
    {
      path: '/Lista',
      name: 'Lista',
      component: Lista
    },
    {path: '/Crear',
    name: 'Crear',
    component: Crear }
    
  ]
})

export default router
