import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
import store from './store'
import './assets/reset.css'
import axios from 'axios'

import { Indicator } from 'mint-ui';

Vue.use(MintUI)

axios.interceptors.request.use(config => {
  // 加载动画
  Indicator.open()
  return config
},error => {
  return Promise.reject(error)
})

// 响应拦截
axios.interceptors.response.use(response => {
  // 加载动画
  Indicator.close()
  return response
},error => {
  Indicator.close()
  return Promise.reject(error)
})


Vue.config.productionTip = false

Vue.prototype.$axios = axios 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
