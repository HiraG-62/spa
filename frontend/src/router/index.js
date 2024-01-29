import { createRouter, createWebHistory } from 'vue-router'
import index from '@/routes/index'

const routes = [
    {
        path: '/',
        component: index
    },
    {
        path: '/mypage',
        component: index
    },
    {
        path: '/lab',
        component: index
    },
    {
        path: '/dm',
        component: index
    },
]

const Router = createRouter({
        history: createWebHistory(),
        routes,
    })

export default Router