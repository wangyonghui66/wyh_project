// import Vue from 'vue';
import Vue from 'vue'
import App from './App.vue';
import store from './store';
import router from './router/';
import './router/routerHooks';
import './utils/filter';
import 'normalize.css/normalize.css';
import './styles/common.scss';
import 'amfe-flexible';
import VueLazyload from 'vue-lazyload'
import { imgConfig } from "@/utils/config";
import { Swipe, SwipeItem, Toast } from 'vant';
import wow from 'wowjs'
import './styles/animate.css'

Vue.config.productionTip = false;

Vue.use(VueLazyload, {
  loading: imgConfig.lazyload
});

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Toast);
Vue.prototype.$wow=wow
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
