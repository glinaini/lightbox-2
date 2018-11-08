import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Index.vue'
import Lightbox from './views/lightbox/index.vue'
import lightboxCube from './views/lightbox-cube/index.vue'
const About = () => import('./views/about/Index.vue')
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
    {
      path: '/lightbox',
      name: 'lightbox',
      component: Lightbox
    },
    {
      path: '/lightbox-cube',
      name: 'lightbox-cube',
      component: lightboxCube
    }
  ]
})
