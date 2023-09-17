import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/peoples/',
    name: 'Peoples',
    component: () => import('@/views/PeoplesView.vue')
  },
  {
    path: '/peoples/:id',
    name: 'People',
    component: () => import('@/views/PeopleView.vue')
  },
  {
    path: '/favorite/',
    name: 'Favorite',
    component: () => import('@/views/FavoriteView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
