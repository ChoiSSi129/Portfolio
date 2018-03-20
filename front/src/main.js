import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'expose-loader?$!expose-loader?jQuery!jquery';
import {TweenMax, Power2, TimelineLite} from "gsap"
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
