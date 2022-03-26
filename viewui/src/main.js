import Vue from 'vue'
import App from './App.vue'
import './plugins/iview.js'
import './assets/fonts/iconfont.css';
import './assets/css/reset.css';
import './assets/css/common.css';
import './assets/css/ivu.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
