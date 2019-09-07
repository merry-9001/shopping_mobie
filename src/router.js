import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index.vue'
import NewList from '@/components/News/NewList.vue'
import Member from '@/views/Member.vue'
import Search from '@/views/Search.vue'
import Shopcar from '@/views/Shopcar.vue'
import NewsInfo from '@/components/News/NewsInfo.vue'
import PhotoList from '@/components/Photo/PhotoList.vue'
import goodsList from '@/components/product/goodsList.vue'
import productInfo from '@/components/product/productInfo.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/index',
            name: 'index',
            component: Index,
            // children: [{
            //     path: 'news',
            //     component: NewList,
            // }]
        },
        {
            path: '/index/news',
            component: NewList,
        },
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/member',
            name: 'member',
            component: Member
        },
        {
            path: '/shopcar',
            name: 'shopcar',
            component: Shopcar
        },
        {
            path: '/search',
            name: 'search',
            component: Search
        },
        {
            path: '/index/newsinfo/:id',
            component: NewsInfo
        },
        {
            path: '/index/photo',
            name: 'photo',
            component: PhotoList
        },
        {
            path: '/home/goodslist',
            name: 'goodlist',
            component: goodsList
        },
        {
            path: '/home/goodsinfo/:id',
            component: productInfo
        }
    ],
    linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})