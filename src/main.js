import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from './components/layout/Header'
import routes from './routes'
import BootstrapVue from 'bootstrap-vue'
import VueSession from 'vue-session'
import Vuex from 'vuex'

import {store} from './components/store/store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueSession);
Vue.use(Vuex); 

Vue.config.productionTip = false


const router = new VueRouter({
	routes,
	mode: 'history'
});

new Vue({
  render: h => h(Header),
  router: router,
  store: store
}).$mount('#app');
