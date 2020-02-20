import Vue from 'vue'
import router from './router.js'
import store from './store/index.js'
import ChartPlugin from './chart-plugin.js'

Vue.use(ChartPlugin)
/*
## !! 플러그인으로 변경해서 주석처리  
Vue.prototype.myChart = Chart

// 어느 컴포넌트에서든지 접근하는 인스턴스내의 전역 변수 
this.$myChart = 
*/

new Vue({
  router,
  store
}).$mount('#app');
