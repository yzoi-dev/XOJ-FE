import ProblemList from './page/ProblemList.vue'
import Problem from './page/Problem.vue'
import ContestList from './page/ContestList.vue'
import Contest from './page/Contest.vue'
import Login from './page/Login.vue'

export default [
  { path: '/problems/:page', name: 'problemList', component: ProblemList, props: true },
  { path: '/problem/:id', name: 'problem', component: Problem, props: true },
  { path: '/contests/:page', name: 'contestList', component: ContestList, props: true },
  { path: '/contest/:id', name: 'contest', component: Contest, props: true },
  { path: '/login', name: 'login', component: Login, props: true }
]
