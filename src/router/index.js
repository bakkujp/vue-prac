import Vue from 'vue'
import Router from 'vue-router'
import Employee from '@/components/Employee'
import EmployeeView from '@/components/EmployeeView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Employee',
      default: true,
      component: Employee
    },
    {
      path: '/view/:id',
      name: 'EmployeeView',
      component: EmployeeView
    }
  ]
})
