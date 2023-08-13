
<script>
// component imports:
import UtilBar from '@/components/UtilBar.vue';
import FootBar from '@/components/FootBar.vue';
import MousePosition from '@/components/MousePosition.vue';
import NavBar from '@/components/NavBar.vue';


// MenuIcon for UtilBar as a slot component.
import MenuIcon from '@/components/icons/MenuIcon.vue';
let menuDefault = false;
export default {
    name: 'App',
    data() {
        return {
            isActive: menuDefault,
            // isActive: true,
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
        toggleSidebar() {
            this.isActive = !this.isActive;
            console.log(this.isActive);
        
        } 
    },
}
</script>

<template>
    <nav-bar class="nav"/>
    <mouse-position class="comp-mouse-pos"/>
    <menu-icon class="menu-ico"
    @click="toggleSidebar()"/>
    <div v-show="isActive" class="active"
    >
        <util-bar />
    </div>

    <div v-show="!isActive" class="inactive">
        <util-bar />
    </div>
    <foot-bar class="foot"/>
</template>

<style scoped>

.comp-mouse-pos {
    position: fixed;
    top: 0;
    left: 0;

}
.active {
    position: fixed;
    top: 66px;
    left: 0px;
    /* display: block; */
    z-index: 1; 
    animation-name: openUtil;
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    /* transform: rotate(90deg); */
}
.inactive {
    position: fixed;
    top: 25px;
    left: 25px;
    display: none;
    z-index: 1;

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
    top:1.1em;
    height: 3em;
}

.foot {
    position: relative;
    margin-top: 100%; 
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