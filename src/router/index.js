import { createRouter, createWebHistory } from 'vue-router'
import Menu from '../components/Componentes/Menu.vue'
import LoginView from '../components/Componentes/Login.vue'
import DCliente from '../components/CCliente/D.Cliente.vue'
import CCrear from '../components/CCliente/CCrear.vue'
import DUsuario from '../components/CUsuario/D.Usuario.vue'
import UCrear from '../components/CUsuario/UCrear.vue'
import EUsuario from '../components/CUsuario/EUsuario.vue'
import ECliente from '../components/CCliente/ECliente.vue'
import DRol from '../components/CRol/D.Rol.vue'
import RCrear from '../components/CRol/RCrear.vue'
import ERol from '../components/CRol/ERol.vue'
import DPuesto from '../components/CPuesto/D.Puesto.vue'
import PCrear from '../components/CPuesto/PCrear.vue'
import EPuesto from '../components/CPuesto/EPuesto.vue'
import DDepa from '../components/CDepartamento/D.Depa.vue'
import DCrear from '../components/CDepartamento/DCrear.vue'
import EDepa from '../components/CDepartamento/EDepa.vue'
import DFac from '../components/CFactura/D.Fact.vue'
import FCrear from '../components/CFactura/FCrear.vue'
import EFac from '../components/CFactura/EFac.vue'
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
      path: '/CCrear',
      name: 'CCrear',
      component: CCrear
    },
    {
      path: '/DCrear',
      name: 'DCrear',
      component: DCrear
    },
    {
      path: '/UCrear',
      name: 'UCrear',
      component: UCrear
    },
    {
      path: '/FCrear',
      name: 'FCrear',
      component: FCrear
    },
    {
      path: '/PCrear',
      name: 'PCrear',
      component: PCrear
    },
    {
      path: '/RCrear',
      name: 'RCrear',
      component: RCrear
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
        },
        {
          path: '/DRol',
          name: 'DRol',
          component: DRol
        },
        {
          path: '/DPuesto',
          name: 'DPuesto',
          component: DPuesto
        },
        {
          path: '/DDepa',
          name: 'DDepa',
          component: DDepa
        },
        {
          path: '/DFac',
          name: 'DFac',
          component: DFac
        }


      ]
    },
    {
      path: '/ECliente/:pkCliente',
      name: 'ECliente',
      component: ECliente
    },
    {
      path: '/EUsuario/:pkUsuario',
      name: 'EUsuario',
      component: EUsuario
    },
    {
      path: '/ERol/:pkRol',
      name: 'ERol',
      component: ERol
    },
    {
      path: '/EPuesto/:pkPuesto',
      name: 'EPuesto',
      component: EPuesto

    },
    {
      path: '/EDepa/:pkDepartamento',
      name: 'EDepa',
      component: EDepa

    },
    {
      path: '/EFac/:pkFactora',
      name: 'EFac',
      component: EFac

    }
  ]
})

export default router