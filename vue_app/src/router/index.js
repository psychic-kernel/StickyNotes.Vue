import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import VueDocs from '@/pages/VueDocs.vue';
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
            path: '/vue-docs',
            name: 'VueDocs',
            component: VueDocs,
            title: 'Vue Docs',
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


