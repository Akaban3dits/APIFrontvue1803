import { createRouter, createWebHistory } from 'vue-router'

import Menu from '../components/Menu.vue'
import LoginView from '../components/Login.vue'
import DCliente from '../components/D.Cliente.vue'
import Crear from '../components/CCliente/Crear.vue'
import DUsuario from '../components/CUsuario/D.Usuario.vue'
import { createApp } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'Login',
      component: LoginView,

    },
    {
      path: '/Crear',
      name: 'Crear',
      component: Crear
    },
    {
      path: '/Menu',
      name: 'Menu',
      component: Menu,
      children: [


        {
          path: '/DCliente',
          name: 'DCliente',
          component: DCliente
        },
        {
          path: '/DUsuario',
          name: 'DUsuario',
          component: DUsuario
        }


      ]
    }
  ]
})

export default router