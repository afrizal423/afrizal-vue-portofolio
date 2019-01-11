// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../assets/vendor/bootstrap/css/bootstrap.min.css'
import '../assets/css/freelancer.min.css'
import '../assets/vendor/fontawesome-free/css/all.min.css'
import '../assets/vendor/fontawesome-free/css/all.css'
import '../assets/vendor/magnific-popup/magnific-popup.css'



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
