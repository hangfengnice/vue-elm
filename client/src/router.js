import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
import Login from './views/login.vue'


Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
   {path: '/' , name: "index",component: Index},
   {path: '/login' , name: "login",component: Login},

  ]
})

// 
router.beforeEach((to,from,next)=> {
const isLogin = localStorage.eleLogin ? true : false
if(to.path == '/login'){
  next()
}else{
  isLogin ? next() : next('/login')
}
})

export default router
