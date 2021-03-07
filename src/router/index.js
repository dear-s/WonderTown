import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Nav from '../views/Nav.vue'
import Story1 from '../views/Story1.vue'
import Story2 from '../views/Story2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nav',
    name: 'Nav',
    component: Nav
  },
  {
    path: '/story1',
    name: 'Story1',
    component: Story1
  },
  {
    path: '/story2',
    name: 'Story2',
    component: Story2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = 'Wonder Land'
  next()
})
export default router
