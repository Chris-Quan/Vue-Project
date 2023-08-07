import { createRouter, createWebHistory } from 'vue-router'
import addCity from '../views/addCity.vue'

const routes = [
  {
    path: '/',
    name: 'addCity',
    component: addCity
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
