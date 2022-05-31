import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import BelajarKadek from './views/BelajarKadek.vue'
import BelajarVklik from './views/BelajarVklik.vue'
import Kalkulator from './views/Kalkulator.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  {
    path: '/about',
    meta: { title: 'About' },
    component: About,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  {
    path: '/belajar',
    meta: { title: 'serius' },
    component: BelajarKadek,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/BelajarKadek.vue')
  },
  {
    path: '/vklik',
    meta: { title: 'belajar' },
    component: BelajarVklik,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/BelajarVklik.vue')
  },
  {
    path: '/kalkulator',
    meta: { title: 'kalkulator' },
    component: Kalkulator,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/Kalkulator.vue')
  },
  { path: '/:path(.*)', component: NotFound },
]
