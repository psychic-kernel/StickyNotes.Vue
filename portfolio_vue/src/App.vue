
<script>
// component imports:
import NavBar from '@/components/NavBar.vue';
import FootBar from '@/components/FootBar.vue';
import PhotoGal from '@/components/PhotoGal.vue';
import ToDos from '@/components/ToDos.vue';

// asset import:


export default {
    name: 'App',
    components: {
        NavBar,
        FootBar,
        PhotoGal,
        ToDos,
    },
    data(){
        return {
            message: ' '
        }
    }
}
</script>

<template>
    
    <nav-bar />
    <to-dos v-model="message">
        <span>Preview: {{ message }}  </span>   
    </to-dos>
   
    
    <foot-bar/>
    
</template>

<style>
html, body {
    height: 100%;
    margin: 0;
    background-color: rgb(99, 99, 99);
    
}

h1 {
    color: rgb(139, 234, 171);
}
h3 {
    color: rgba(219, 118, 18, 0.725);
}
p {
    font-size: larger;
    margin: -15px;
}
span {
    background-color: rgb(12, 89, 99);
    display: inline-block;
    color: orange;
    padding: 5px;
}
</style>