import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/draggable',
    name: 'Draggable',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Draggable.vue')
  },
  {
    path: '/draggable-swap',
    name: 'DraggableSwap',
    component: () => import('../views/DraggableWithSwapView.vue')
  },
  {
    path: '/draggable-datepicker',
    name: 'DraggableDate',
    component: () => import('../views/DraggableWithDate.vue')
  },
  {
    path: '/sidebar',
    name: 'Sidebar',
    component: () => import('../views/SidebarView.vue')
  },
  {
    path: '/datepicker',
    name: 'Datepicker',
    component: () => import('../views/DatepickerView.vue')
  },

  {
    path: '/dashboard',
    alias: '/second',
    name: 'Dashboard',
    component: () => import('../views/DashboardView.vue'),
    meta: {
      breadcrumb: "Dashboard"
    }
  },
  {
    path: '/dashboard/first',
    // alias: '/second',
    name: 'Dashboard',
    component: () => import('../views/DashboardView.vue'),
    meta: {
      breadcrumb: {
        label: "First",
        parent: "Dashboard"
      }
    }
  },
  {
    path: '/navbar',
    name: 'Navbar',
    component: () => import('../views/NavbarView.vue')
  },
  {
    path: '/breadcrumbs',

    name: 'Breadcrumbs',
    component: () => import('../views/BreadcrumbsView.vue'),
    meta: {
      breadcrumb: 'Home'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
