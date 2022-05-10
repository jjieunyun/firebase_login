import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'StartPage',
    component: function () {
      return import('../components/StartPage.vue')
    }
  },
  {
    path: '/main',
    name: 'MainPage',
    component: function () {
      return import('../components/MainPage.vue')
    }
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: function () {
      return import('../components/LoginPage.vue')
    }
  },
  {
    path: '/register',
    name: 'Main',
    component: function () {
      return import('../components/RegisterPage.vue')
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
