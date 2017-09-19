import 'bootstrap'
import './assets/css/bootstrap.min.css'
import './assets/css/font.css'
import './assets/css/themify-icons.css'
import './assets/css/xoj.css'
import './assets/js/jquery-3.1.1.min.js'
import './assets/js/jquery-ui.min.js'
import './assets/js/xoj.js'

import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'

import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({ routes })

const app = new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
