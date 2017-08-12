import Vue from 'vue'
import Router from 'vue-router'
import UserLog from '@/components/Accounts/Login'
import Contents from '@/components/Layouts/Contents'
import Articles from '@/components/Articles/Articles'
import Article from '@/components/Articles/Article'
import SourceSelection from '@/components/SourceSelection'


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
      path: '/contents',
      name: 'Contents',
      component: Contents
    },
    {
      path: '/artcles',
      name: 'Articles',
      component: Articles
    },
    {
      path: '/articles/:id',
      name: 'Article',
      component: Article
    },
    {
      path: '/sourceSelection',
      name: 'SourceSelection',
      component: SourceSelection
    }
  ]
})
