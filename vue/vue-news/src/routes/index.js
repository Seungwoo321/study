import Vue from 'vue'
import Router from 'vue-router'
// import CreateListView from '@/views/CreateListView'
import bus from '@/utils/bus'
import store from '@/store'

Vue.use(Router)

function toBeforeEnter (to, from, next) {
    bus.$emit('start:spinner')
    store.dispatch('FETCH_LIST', to.name)
        .then(() => {
            console.log('fetched')
            // bus.$emit('end:spinner')
            next()
        })
        .catch(err => {
            console.log(err)
        })
}

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: 'news'
        },
        {
            path: '/news',
            name: 'news',
            // component: CreateListView('NewsView')
            component: () => import('@/views/NewsView'),
            beforeEnter: toBeforeEnter
        },
        {
            path: '/ask',
            name: 'ask',
            // component: CreateListView('AskView')
            component: () => import('@/views/AskView'),
            beforeEnter: toBeforeEnter
        },
        {
            path: '/jobs',
            name: 'jobs',
            // component: CreateListView('JobsView')
            component: () => import('@/views/JobsView'),
            beforeEnter: toBeforeEnter
        },
        {
            path: '/user/:id',
            name: 'user',
            component: () => import('@/views/UserView.vue')
        },
        {
            path: '/item',
            name: 'item',
            props: route => ({ query: route.query.id }),
            component: () => import('@/views/ItemView')
        }
    ]
})
