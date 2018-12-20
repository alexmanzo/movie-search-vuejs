import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Results from '@/views/Results.vue'

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
      path: '/results/:query',
      name: 'results',
      component: Results
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: () => import ('@/views/MoviePage.vue')
    },
    {
      path: '/genre/:id-:name',
      name: 'genre',
      component: Results
    },
    {
      path: '/cast/:id-:name',
      name: 'castProfile',
      component: () => import ('@/views/Profile.vue')
    }
    

  ]
})
