import Vue from 'vue';
import App from './App';
import Router from './router';
import Http from './http';
import VueTap from '../common/plugins/vue-tap';
import UISCROLL from '../common/plugins/ui-scroll';
import Store from './store';

Vue.use(VueTap);
Vue.use(UISCROLL);

new Vue({
  el: '#app',
  router: Router,
  store: Store,
  components: {App}
});
