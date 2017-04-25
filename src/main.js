// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import resource from 'vue-resource'
import MuseUI from './muse-ui.config'
import 'muse-ui/dist/theme-light.css'
import Vuex from 'vuex'

Vue.use(Vuex);
Vue.use(MuseUI);
Vue.config.productionTip = false;
Vue.use(resource);


const  vuex_store = new Vuex.Store({
    state:{
        username:"",
        userid:"",
        phone:""
    },
    mutations:{
        showUserName(state){
            alert("main.js"+state.user_name);
        }
    }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:vuex_store,
  template: '<App/>',
  components: { App }
})
