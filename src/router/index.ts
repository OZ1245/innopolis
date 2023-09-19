import { createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/peoples/',
    name: 'Peoples',
    component: () => import('@/views/PeopleView.vue')
  },
  {
    path: '/peoples/:id',
    name: 'People',
    component: () => import('@/views/CharacterView.vue')
  },
  {
    path: '/favorite/',
    name: 'Favorite',
    component: () => import('@/views/FavoriteView.vue')
  },
]

const router = createRouter({
  history: process.env.NODE_ENV 
    ? createWebHashHistory(process.env.BASE_URL)
    : createWebHistory(process.env.BASE_URL),
  routes
})

export default router
