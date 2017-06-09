import Vue from 'vue';
import App from './App';
import Router from './router';
import Store from './store';
import VueTap from '../common/plugins/vue-tap';

require('../common/assets/css/iconfont.css');
require('../common/assets/css/icommon.css');

Vue.use(VueTap);

new Vue({
  el: '#app',
  router: Router,
  store: Store,
  render: h => h(App)
});

