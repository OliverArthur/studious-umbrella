import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/result/:query',
    name: 'result',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (result.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "result" */ '../views/Result.vue')
  }
]

export default routes
