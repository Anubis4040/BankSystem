import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Clientes.vue')
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: () => import(/* webpackChunkName: "about" */ '../views/Clientes.vue'),
    children: [
      {
        path: 'listar',
        component: () => import(/* webpackChunkName: "about" */ '../views/clientes/ListarClientes.vue')
      },
      {
        path: 'registro',
        component: () => import(/* webpackChunkName: "about" */ '../views/clientes/RegistroClientes.vue')
      },
      {
        path: 'detalles/:id',
        name: 'DetallesCliente',
        component: () => import('../views/clientes/DetallesClientes.vue')
      }
    ]
  },
  {
    path: '/bancos',
    name: 'Bancos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Bancos.vue'),
    children: [
      {
        path: 'listar',
        component: () => import(/* webpackChunkName: "about" */ '../views/bancos/ListarBancos.vue')
      },
      {
        path: 'registro',
        component: () => import(/* webpackChunkName: "about" */ '../views/bancos/RegistroBancos.vue')
      },
      {
        path: 'detalles/:id',
        name: 'DetallesBanco',
        component: () => import('../views/bancos/DetallesBancos.vue')
      }
    ]
  },
  {
    path: '/cuentas',
    name: 'cuentas',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cuentas.vue'),
    children: [
      {
        path: 'registro',
        component: () => import(/* webpackChunkName: "about" */ '../views/cuentas/RegistroCuentas.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
