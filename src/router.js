import {createRouter, createWebHistory} from 'vue-router'
import Index from './components/Index.vue'
import Introduction from './components/Introduction.vue'
import Kepler442B from './components/Kepler442B.vue'
import Trappist1e from './components/Trappist1e.vue'
import TOI700d from './components/TOI700d.vue'
import Conclusion from './components/Conclusion.vue'
const routes = [
{
  path: '/',
  name: 'Index',
  component: Index
},
{
  path: '/introduction',
  name: 'Introduction',
  component: Introduction
},
{
  path: '/kepler-442b',
  name: 'Kepler-442B',
  component: Kepler442B
},
{
  path: '/trappist-1e',
  name: 'Trappist-1e',
  component: Trappist1e
},
{
  path: '/toi-700d',
  name: 'TOI-700D',
  component: TOI700d
},
{
  path: '/conclusion',
  name: 'Conclusion',
  component: Conclusion
}]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
