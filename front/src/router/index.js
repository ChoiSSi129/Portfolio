import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MrChoiSSi',
      component: List
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
