import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/count',
      name: 'count',
      component: require('@/components/Count').default
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: require('@/components/Usuario').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
