import {createRouter, createWebHistory} from 'vue-router'

import Homepage from "./../components/Homepage.vue"
import products from "./../components/products.vue"
import AboutUs  from "./../components/AboutUs.vue"
import ContactUs from "./../components/ContactUs.vue"
import Cart from "./../components/Cart.vue"
import ServicesOffered  from "./../components/ServicesOffered.vue"

const routes = [
    {
    path:'/' ,
    name: 'Home' ,
    component: Homepage ,
    },
    {
        path:'/products' ,
        name: 'products' ,
        component: products ,
    },
    {
        path:'/AboutUs' ,
        name: 'AboutUs' ,
        component: AboutUs ,
    },
    {
        path:'/ContactUs' ,
        name: 'ContactUs' ,
        component: ContactUs ,
    },{
        path:'/cart' ,
        name: 'cart' ,
        component: cart ,
    },
    {
        path:'/ServicesOffered' ,
        name: 'ServicesOffered' ,
        component: ServicesOffered ,
    },
]
const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router