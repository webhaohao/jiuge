import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import home from '@/pages/home'
import version from '@/pages/version'
import resource from '@/pages/resource'
import poetryDetail from '@/components/poetryDetail';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component:index
    },
    {
      path: '/home',
      name: 'home',
      component:home
    },
    {
      path:'/version',
      name:'version',
      component:version
    },
    {
      path:'/resource',
      name:'resource',
      component:resource
    }
  ]
})
