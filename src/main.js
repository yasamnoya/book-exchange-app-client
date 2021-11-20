import Vue from 'vue';
import 'bootstrap';
import VueCookie from 'vue-cookie';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueCookie);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
