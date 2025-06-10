import { createRouter, createWebHistory } from 'vue-router'
import ToDoPage from '../components/ToDo.vue'
import AboutPage from '../components/About.vue'
import TaskContainer from '../components/TaskContainer.vue'

const routes = [
  {
    path: '/',
    name: 'ToDo',
    component: TaskContainer,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router