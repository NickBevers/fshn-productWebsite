import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Pricing from './views/Pricing.vue'
import Confirmation from './views/Confirmation.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about-us',
            name: 'about',
            component: About
        },
        {
            path: '/contact-us',
            name: 'contact',
            component: Contact
        },
        {
            path: '/pricing',
            name: 'pricing',
            component: Pricing
        },
        {
            path: '/confirmation',
            name: 'confirmation',
            component: Confirmation
        }
    ]
})

