import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { router } from './routes/index.js';
import  { socket } from'./plugins/socketPlugin';
import store from './store';
import Directives from './plugins/directives';
import './assets/_common.scss';


Vue.config.productionTip = false
Vue.use(Directives);

new Vue({
  vuetify,
  router,
  store,
  socket,
  render: h => h(App)
}).$mount('#app')
