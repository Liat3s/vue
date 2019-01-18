import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import orderBook from '@/components/order_book'
import order from '@/view/order_page'
import table from '@/components/table'
import doc from '@/components/documents'

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
            component: orderBook,
            props: {}
        },
        {
            path: '/order',
            name: 'Order Book',
            component: order,
            props: {}
        },
        {
            path: '/table/:id',
            name: 'Table',
            component: table
        },
        {
            path: '/documents',
            name: 'Doc',
            component: doc
        }
    ]
})