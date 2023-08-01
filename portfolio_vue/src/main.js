'use strict';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
const pinia = createPinia();
createApp(App)
.use(pinia)
.use(router)
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