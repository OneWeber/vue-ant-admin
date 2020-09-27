import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from './premission'
Vue.config.productionTip = false
Vue.use(Antd);
import store from './store'
Vue.prototype.$store = store
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
