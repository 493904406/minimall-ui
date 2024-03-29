import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// 导入刚才编写的组件
import AppIndex from '@/components/home/AppIndex'
import Login from '@/components/Login'


Vue.use(Router)

export default new Router({
 routes: [
  // 下面都是固定的写法
    {
      path:"/",
      name:"Login",
      component:Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'AppIndex',
      component: AppIndex
    }
  ]
})
