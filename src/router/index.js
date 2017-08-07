import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import SourceSelection from '@/components/SourceSelection'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SourceSelection',
      component: SourceSelection
    },
    {
      path: '/home',
      name: 'Hello',
      component: Hello
    }
  ]
})
