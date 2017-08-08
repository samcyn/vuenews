import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import SourceSelection from '@/components/SourceSelection'
import Home from '@/components/Home'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/sourceSelection',
      name: 'SourceSelection',
      component: SourceSelection
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
