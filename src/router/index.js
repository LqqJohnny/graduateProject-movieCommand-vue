import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/Hello'
import actor from '@/components/actor'
import discovery from '@/components/discovery'
import movieDetail from '@/components/movieDetail'
import user from '@/components/user'

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
        path: '/user/:id',
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
    }
  ]
})
