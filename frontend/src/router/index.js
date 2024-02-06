import { createRouter, createWebHistory } from 'vue-router'
import index from '@/routes/index'
import signin from '@/routes/signin'
import signup from '@/routes/signup'
import logout from '@/routes/logout'


const routes = [
    {
        path: '/signin',
        component: signin,
    },
    {
        path: '/signup',
        component: signup,
    },
    {
        path: '/logout',
        component: logout
    },
    {
        path: '/',
        name: 'index',
        component: index,
    },
    {
        path: '/mypage/:id',
        name: 'mypage',
        component: index,
    },
    {
        path: '/lab/:id',
        name: 'lab',
        component: index,
    },
    {
        path: '/dm/:id',
        name: 'dm',
        component: index,
    },
    {
        path: '/manage',
        name: 'manage',
        component: index,
    },
]

const Router = createRouter({
    history: createWebHistory(),
    routes,
})

// Router.addRoute({ path: '/mypage/:id', component: index })
// Router.addRoute({ path: '/lab', component: index })
// Router.addRoute({ path: '/dm', component: index })
// Router.addRoute({ path: '/manage', component: index })

export default Router