
<script>
// component imports:
import FootBar from '@/components/FootBar.vue';
import MousePosition from '@/components/MousePosition.vue';
import NavBar from '@/components/NavBar.vue';

export default {
    name: 'App',
    components: {
        FootBar,
        NavBar,
        MousePosition,
    },
}
</script>

<template>
    <nav-bar class="nav"/>
    <mouse-position class="comp-mouse-pos"/>
    <foot-bar class="footer"/>
</template>

<style scoped>

.comp-mouse-pos {
    position: fixed;
    top: 0;
    left: 0;

}

li > .link {
    font-size: 24pt;
    margin-top: 1em;
    color: #D66853
}
li > .link:hover {
    text-decoration: none;
}

.menu-ico {
    position: fixed;
    display: block;
    top: 1.3em;
    left: 3px;
}
.menu-ico:hover {
    
}
@keyframes openUtil {
     /* from {
        
    } 
    
    to {
        top: 25px;
        left: 20px;
        display: absolute; 
        transform: rotate(90deg);     
    }  */
    25%{
        right: 1em;
    }
    50% {
        right: 26em;
    }

}
    
</style>