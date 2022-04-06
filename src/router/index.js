import VueRouter from 'vue-router';
import Vue from 'vue'
import Login from '../components/login.vue';
import Dashboard from '../components/dashboard'
import SignIn from '../components/sign-in'
import Home from '../components/home'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/sign-in',
        component: SignIn
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router