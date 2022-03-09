import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router"
const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue"),
    },
    {    
        path: "/over-ons",
        name: "Over ons",
        component: () => import("../views/Overons.vue"),
    },
    {    
        path: "/producten",
        name: "Producten",
        component: () => import("../views/Products.vue"),
    },
    {    
        path: "/nieuws",
        name: "Nieuws",
        component: () => import("../views/Nieuws.vue"),
    },
    {    
        path: "/contact",
        name: "Contact",
        component: () => import("../views/Contact.vue"),
    },
    {    
        path: "/winkelwagen",
        name: "Winkelwagen",
        component: () => import("../views/Winkelwagen.vue"),
    },

]

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})