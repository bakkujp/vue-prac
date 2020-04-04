import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Employee',
      default: true,
      component: () => import('@/components/Employee')
    },
    {
      path: '/view/:id',
      name: 'EmployeeView',
      component: () => import('@/components/EmployeeView')
    }
  ]
})
