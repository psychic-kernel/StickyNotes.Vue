<script>
import { RouterLink, RouterView } from 'vue-router'

//component imports:

</script>

<template class="nav-containe">
    <router-view></router-view>
    <ul class="navbar">
        <li><router-link class="link" to="/">Home</router-link></li> 
        <li><router-link class="link" to="/about">About</router-link></li>
        <li><router-link class="link" to="/gallery">Gallery</router-link></li>
        <li><router-link class="link" to="/dev-ref">Cheat Sheet</router-link></li>
    </ul>
    
    <!-- <slot/> -->
      
</template>

<style >
/* Need to style the navbar at the top */
.nav-container {
    position: fixed;
    display: block;
    width: 100%;
    padding: 5px;
    background-color: rgb(43, 103, 103);


}

.navbar {
    position:relative;
    height: 50px;
    display: flex;
    /* justify-content: space-evenly;  */
    list-style-type: none;
    background-color: #364156;
    float: left;
    /* bottom: 42em; */
    /* z-index: 1; */
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