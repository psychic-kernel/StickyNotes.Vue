
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
        bindClass() {
            // this.isActive = !this.isActive;
            // console.log(this.isActive);
        
        } 
    },
}
</script>

<template>
    <nav-bar/>
    <mouse-position class="comp-mouse-pos"/>
    <menu-icon
    @click="toggleSidebar()">

    </menu-icon>
    <div 
        v-if="isActive"
    >
        <util-bar :class="{'menu-active': 'isActive'}"/>
    </div>

    <div
        v-if="!isActive">
        <util-bar :class="{'menu-inactive': 'isActive'}"/>
    </div>


    <!-- <span style=" display:inline;color: red;">Is Active: {{ isActive }}</span> -->

    <!-- <div v-show="isActive">
        <menu-icon id="active"
            @click="toggleSidebar()"
            :class="{'menu-active': 'isActive'}"
        />

        <div v-if="isActive" >
            <util-bar/>
        </div>

    </div>
    <div v-if="!isActive">
        <menu-icon id="inactive"
            @click="toggleSidebar()"
            :class="{'menu-inactive': '!isActive'}"/>
    </div> -->


    <!-- <span style="display:inline;color: red;">Is Active: {{ isActive }}</span>

    <menu-icon
        :class="{'sidebar-active': 'isActive'}"
        @click="toggleSidebar()"
    ></menu-icon>
        <div v-if="isActive" >
            <util-bar/>
        </div>  -->
    
    <!-- <div v-if="isActive" >
        <util-bar/>
    </div> -->
    <foot-bar class="foot"/>
</template>

<style scoped>

.comp-mouse-pos {
    position: fixed;
    top: 0;
    left: 0;

}
.menu-active {
    position: fixed;
    top: 25px;
    left: 20px;
    /* display: block;
    z-index: 1; */
    animation-name: openUtil;
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    /* transform: rotate(90deg); */
}
.menu-inactive {
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

/* .comp-menu-icon {
    position: fixed;
    top: 25px;
    left: 25px;
    display: absolute;
    z-index: 1;
} */

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