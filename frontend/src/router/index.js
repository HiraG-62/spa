import { createRouter, createWebHistory } from 'vue-router'
import index from '@/routes/index'
import body from '@/components/body'
import assignLabs from '@/components/assignlabs.vue'


const routes = [
    {
        path: '/',
        name: 'index',
        component: body,
    },
    {
        path: '/general',
        name: 'general',
        component: assignLabs,
    },
    {
        path: '/calendar',
        name: 'calendar',
        component: body,
    },
    {
        path: '/mypage/:id',
        name: 'mypage',
        component: body,
    },
    {
        path: '/lab/:id',
        name: 'lab',
        component: body,
    },
    {
        path: '/dm/:id',
        name: 'dm',
        component: body,
    },
    {
        path: '/manage/assignlabs',
        name: 'assignlabs',
        component: assignLabs,
    },
    {
        path: '/manage/manageCalendar',
        name: 'manageCalendar',
        component: assignLabs,
    },
]

const Router = createRouter({
    history: createWebHistory(),
    routes,
})

export default Router