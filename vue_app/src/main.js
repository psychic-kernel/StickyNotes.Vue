'use strict';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import FontAwesomeIcon from '@/FontAwesomeIcon.vue'; // Component File.
import '/fontawesome.js'; // Library setup file. ! '@'
const pinia = createPinia(); 

// Glabal Registry
createApp(App)
.use(pinia)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app');




// const app = createApp(App);
// app.use(pinia);
// app.use(router);
// app.mount('#app');
// createApp({
    // setup(){}
// }).mount(App);

// const app = createApp(()=>{
// });
// app.use(router);
// app.use(createPinia());
// app.mount(App);