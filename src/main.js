import 'bootstrap';
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import ProblemList from './page/ProblemList.vue'
import Problem from './page/Problem.vue'
import ContestList from './page/ContestList.vue'
import Contest from './page/Contest.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/problems/:page', name: 'problemList', component: ProblemList, props: true },
  { path: '/problem/:id', name: 'problem', component: Problem, props: true },
  { path: '/contests/:page', name: 'contestList', component: ContestList, props: true },
  { path: '/contest/:id', name: 'contest', component: Contest, props: true },
]

const router = new VueRouter({ routes })

const app = new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
