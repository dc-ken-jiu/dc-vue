// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import $ from 'jquery';
import Axios from 'axios';
import vuexStore from './store';
import { Message } from 'element-ui';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.prototype.$http = Axios;
Vue.prototype.$message = Message;
window.$ = window.jquery = $;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: vuexStore,
  components: { App },
  template: '<App/>'
});
