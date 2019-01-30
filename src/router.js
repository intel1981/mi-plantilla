import Vue from 'vue'
import Router from 'vue-router'
import Inicio from '@/components/Inicio.vue'
import Usuario from '@/components/Usuario.vue'
import Roles from '@/components/Roles.vue'
import Permisos from '@/components/Permisos.vue'
import Empresa from '@/components/Empresa.vue'
import Escuela from '@/components/Escuela.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'inicio',
      component: Inicio
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: Usuario
    },
    {
      path: '/roles',
      name: 'roles',
      component: Roles
    },
    {
      path:'/permisos',
      name: 'permisos',
      component: Permisos
    },
    {
      path:'/empresa',
      name: 'empresa',
      component: Empresa
    },
    {
      path:'/escuela',
      name: 'escuela',
      component: Escuela
    }
  ]
})