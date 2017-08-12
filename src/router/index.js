import Vue from 'vue'
import Router from 'vue-router'
import UserLog from '@/components/Accounts/Login'
import SourceSelection from '@/components/SourceSelection'
import Contents from '@/components/Layouts/Contents'
import Article from '@/components/Articles/Article'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'userLog',
      component: UserLog
    },
    {
      path: '/sourceSelection',
      name: 'SourceSelection',
      component: SourceSelection
    },
    {
      path: '/main',
      name: 'Contents',
      component: Contents
    },
    {
      path: '/home/:id',
      name: 'Article',
      component: Article
    }
  ]
})
