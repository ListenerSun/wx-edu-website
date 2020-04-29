import Vue from 'vue'
import Router from 'vue-router'


import teacherCardList from '@/view/discover/teacherCardList'
import indexMain from '@/view/index/indexMain'
import courseInfo from '@/view/course/courseInfo'

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
      path: '/course_info',
      name: 'course_info',
      component: courseInfo
    },
    {
      path: '/main',
      name: 'main',
      component: indexMain
    },

  ]
})
