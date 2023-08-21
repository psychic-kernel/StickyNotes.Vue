
<script>
import { ref, onMounted } from 'vue';
// component imports:
import StickyNote from '@/components/StickyNote.vue';
import FootBar from '@/components/FootBar.vue';
import MousePosition from '@/components/MousePosition.vue';
import NavBar from '@/components/NavBar.vue';

export default {
    name: 'App',
    components: {
        FootBar,
        NavBar,
        MousePosition,
        StickyNote,
    },
}
</script>

<template>
    <sticky-note/>
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


    
</style>