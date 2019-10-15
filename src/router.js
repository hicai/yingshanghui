import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
Vue.use(Router)

export default new Router({
   mode: 'history',
  // // base: process.env.BASE_URL,
  // base: '/yiTownWebApp/',//这个配置也很重要，否则会出现页面空白情况
  // linkActiveClass: 'active', //当router-link被激活时，给它一个默认的class
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/search',
      children: [
        {
          path: 'search',
          component: (() => import(/* webpackChunkName: "group-foo" */ './components/contain/search.vue')),     
        },
        {
          path: 'add',
          component: (() => import(/* webpackChunkName: "group-foo" */ './components/contain/add.vue')),     
        },
        {
          path: 'detail',
          component: (() => import('./components/contain/detailData.vue')),     
        }
      ]
    }
  ]
})
