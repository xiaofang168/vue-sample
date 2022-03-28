import Vue from 'vue'
import App from './App.vue'
import './plugins/iview.js'
import './assets/fonts/iconfont.css';
import './assets/css/reset.css';
import './assets/css/common.css';
import './assets/css/ivu.css';
import router from './router'
import store from './store'

import AutoTable from './components/AutoTable.vue';
import AutoButton from './components/AutoButton.vue';
import AutoTableButtons from './components/AutoTableButtons.vue';

// 注册组件
Vue.component('AutoTable', AutoTable);
Vue.component('AutoButton', AutoButton);
Vue.component('AutoTableButtons', AutoTableButtons);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
