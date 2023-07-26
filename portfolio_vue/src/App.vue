
<script>
// component imports:
import NavBar from './components/Navbar.vue';
import FootBar from './components/FootBar.vue';
import PhotoGal from './components/PhotoGal.vue';

// asset import:

const altTxt = "An eyeball in .png format";

export default {
    name: 'App',
    components: {
        NavBar,
        FootBar,
        PhotoGal,
    },
    data(){
        return {
            altTxt
        }
    }
};
</script>

<template>
    
    <nav-bar/>
    <photo-gal>
        hello
    </photo-gal> 

    <foot-bar>
    <!-- <slot/> -->
    
    <!-- <slot/> -->
    </foot-bar>
    
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
    color: rgb(142, 159, 110);
}

</style>