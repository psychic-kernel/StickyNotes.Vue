
<script>
// component imports:
import UtilBar from '@/components/UtilBar.vue';
import FootBar from '@/components/FootBar.vue';
import MousePosition from '@/components/MousePosition.vue';
import NavBar from '@/components/NavBar.vue';



// MenuIcon for UtilBar as a slot component.
import MenuIcon from '@/components/icons/MenuIcon.vue';
const isActive = null;
export default {
    name: 'App',
    data(){
        return {
            isActive: true // display: block
        }
    },
    components: {
        FootBar,
        NavBar,
        UtilBar,
        MousePosition,
        MenuIcon,

    },
    methods: {
        showSidebar() {
            
            
        }
    }
}
</script>

<template>
    <div class="nav-container">
        <nav-bar/>
    </div>
    
    <mouse-position/>
        <util-bar>
            <menu-icon class="menu-comp-icon"
            @click="showSidebar()"
            v-if="isActive">
            </menu-icon>

            <span v-else> Side Bar: {{ isActive }}</span>
        </util-bar>
    
    
    <foot-bar class="foot"/>
</template>

<style scoped>

li > .link {
    font-size: 24pt;
    margin-top: 1em;
    color: #D66853
}
li > .link:hover {
    text-decoration: none;
}

.menu-comp-icon {
    position: relative;
    display: absolute;
    z-index: 1;
}

.foot {
    position: relative;
    display: block;
    margin-top: 100%; 
}
    
</style>