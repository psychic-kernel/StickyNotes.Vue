
<script>
// component imports:
import NavBar from '@/components/NavBar.vue';
import FootBar from '@/components/FootBar.vue';
import PhotoGal from '@/components/PhotoGal.vue';

// asset import:


export default {
    name: 'App',
    components: {
        NavBar,
        FootBar,
        PhotoGal,
    },
};
</script>

<template>
    
    <nav-bar />

    <foot-bar/>
    
</template>

<style>
html, body {
    height: 100%;
    margin: 0;
    
}
.container {
    min-height: 100%;
    display: flex;
    flex-direction: column;
}
h1 {
    color: rgb(139, 234, 171);
}

</style>