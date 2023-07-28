<script>
import { RouterLink, RouterView } from 'vue-router'

// components
import ToDos from './ToDos.vue';

export default {
    components: {
        ToDos
    },
    data(){
        return {
            message: 'Type away.'
        }
    }
}
</script>

<template>
    <router-view></router-view>
    <ul class="navbar">
        <li><router-link to="/">Home</router-link></li> 
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/gallery">Gallery</router-link></li>
        <li><router-link to="/dev-ref">Developer References</router-link></li>
        <li>
            <to-dos v-model="message"/>
        </li>
    </ul>
    <span>{{ message }}</span>      
</template>

<style scoped>

* {
    list-style-type: none;
    background-color: blanchedalmond;
}
.navbar {
   display: flex;
   justify-content: space-between; 
}

</style>