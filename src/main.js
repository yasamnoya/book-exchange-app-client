import Vue from 'vue';
import 'bootstrap';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');