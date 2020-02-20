import Vue from 'vue'
import VueRouter from 'vue-router'

// 사용할 컴포넌트 로딩'
import App from './App.vue'
import BarChart from './components/charts/BarChart.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: App
    },
    {
        path: '/chart',
        component: BarChart
    }
]


export default new VueRouter({
  mode: 'history',
  routes
});

