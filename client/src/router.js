import Vue from "vue";
import Router from "vue-router";
import Index from "./views/index.vue";
import Login from "./views/login.vue";
import Home from "./views/home.vue";
import Order from "./views/order.vue";
import Me from "./views/me.vue";
import Address from "./views/address.vue";
import City from "./views/city.vue";
import Search from './views/search.vue'

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Index,
      children: [
        {
          path: "",
          redirect: "/home"
        },
        {
          path: "/home",
          name: "home",
          component: Home
        },
        {
          path: "/order",
          name: "order",
          component: Order
        },
        {
          path: "/me",
          name: "me",
          component: Me
        },
        {
          path: "address",
          name: "address",
          component: Address
        },
        {
          path: "city",
          name: "city",
          component: City
        }
      ]
    },
    { path: "/login", name: "login", component: Login },
    { path: "/search", name: "search", component: Search }

  ]
});

//
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.ele_login ? true : false;
  if (to.path == "/login") {
    next();
  } else {
    isLogin ? next() : next("/login");
  }
});

export default router;
