import Vue from 'vue'
import App from './App.vue'
import './plugins/iview.js'
import './assets/fonts/iconfont.css';
import './assets/css/reset.css';
import './assets/css/common.css';
import './assets/css/ivu.css';
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
