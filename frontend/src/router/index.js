import { createRouter, createWebHistory } from 'vue-router'
import index from '@/routes/index'
import signin from '@/routes/signin'
import signup from '@/routes/signup'

const routes = [
    {
        path: '/signin',
        component: signin,
        meta: { requiresAuth: false }
    },
    {
        path: '/signup',
        component: signup,
        meta: { requiresAuth: false }
    },
    {
        path: '/',
        component: index,
        meta: { requiresAuth: true }
    }
]

const Router = createRouter({
    history: createWebHistory(),
    routes,
})

Router.addRoute({ path: '/mypage', component: index })
Router.addRoute({ path: '/lab', component: index })
Router.addRoute({ path: '/dm', component: index })
Router.addRoute({ path: '/manage', component: index })

export default Router