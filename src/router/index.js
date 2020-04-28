import Vue from 'vue'
import Router from 'vue-router'


import teacherCardList from '@/view/discover/teacherCardList'
import indexMain from '@/view/index/indexMain'

const routerPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/discover',
      name: 'discover',
      component: teacherCardList
    },
    {
      path: '/main',
      name: 'main',
      component: indexMain
    },

  ]
})
