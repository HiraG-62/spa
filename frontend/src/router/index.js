import { createRouter, createWebHistory } from 'vue-router'
import body from '@/routes/body'

const routes = [
    {
        path: '/signin',
        component: body,
        meta: { requiresAuth: false }
    },
    {
        path: '/signup',
        component: body,
        meta: { requiresAuth: false }
    },
    {
        path: '/',
        component: body,
        meta: { requiresAuth: true }
    }
]

const Router = createRouter({
    history: createWebHistory(),
    routes,
})

Router.addRoute({ path: '/mypage', component: body })
Router.addRoute({ path: '/lab', component: body })
Router.addRoute({ path: '/dm', component: body })
Router.addRoute({ path: '/manage', component: body })

export default Router