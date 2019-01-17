import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import orderBook from '@/components/order_book'
import table from '@/components/table'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/order_book',
            name: 'Order Book',
            component: orderBook
        },
        {
            path: '/table/:id',
            name: 'Table',
            component: table
        }
    ]
})