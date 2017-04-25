import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/Hello'
import actor from '@/components/actor'
import discovery from '@/components/discovery'
import movieDetail from '@/components/movieDetail'
import user from '@/components/user'
import search from '@/components/search'
import searchByTag from '@/components/searchByTag'
import onShowMov from '@/components/onShowMov'
import comingMov from '@/components/comingMov'
import login from '@/components/login'
Vue.use(Router)

export default new Router({
    scrollBehavior:function(to,from,savedPosition){
        return savedPosition || {x:0,y:0}
    },
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
        path: '/discovery',
        name: 'discovery',
        component: discovery
    },{
        path: '/user',
        name: 'user',
        component: user
    },{
      path: '/movie/:id',
      name: 'movieDetail',
      component: movieDetail
    },{
      path: '/actor/:id',
      name: 'actor',
      component: actor
    },{
      path: '/search/:id',
      name: 'search',
      component: search
    },{
      path: '/searchByTag/:id',
      name: 'searchByTag',
      component: searchByTag
    },{
        path: '/onShow',
        name: 'onShow',
        component: onShowMov
    },{
      path: '/coming',
      name: 'coming',
      component: comingMov
    },{
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
