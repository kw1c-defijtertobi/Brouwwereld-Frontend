import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router"
const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue"),
    },
    {    
        path: "/products",
        name: "Products",
        component: () => import("../views/Products.vue"),
    }
]

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})