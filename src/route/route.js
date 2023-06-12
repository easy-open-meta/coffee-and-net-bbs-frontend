import {createRouter, createWebHistory} from "vue-router";
import Index from "../views/Index.vue"
import LoginView from "../views/user/LoginView.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Index },
        { path: '/login', component: LoginView }
    ],
})

export default router
