import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import DevRef from '@/pages/DevRef.vue';
import Gallery from '@/pages/Gallery.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            title: 'Home',
        },
        {
            path: '/about',
            name: 'about',
            component: About,
            title: 'About',
        },
        {
            path: '/cheatsheet',
            name: 'cheatSheet',
            component: DevRef,
            title: 'Cheat Sheet',
        },
        {
            path: '/gallery',
            name: 'gallery',
            component: Gallery,
            title: 'Gallery',
        }
    ]
});
export default router;

