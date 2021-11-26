import Vue from 'vue';
import 'bootstrap';
import VueCookie from 'vue-cookie';
import axios from 'axios';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import router from './router';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.VUE_APP_BACKEND_URL;

Vue.config.productionTip = false;
Vue.use(VueCookie);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
