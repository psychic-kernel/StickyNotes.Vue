

<script>
// import MenuIcon from '@/components/icons/MenuIcon.vue';
import CountBtns from '@/components/CountBtns.vue';
import ToDos from '@/components/ToDos.vue';

export default {
    data(){
        return {
            message: null,
        }
    },
    components: { 
        // MenuIcon,
        CountBtns,
        ToDos, 
    },
    
}
</script>
<template> <!-- Use conditional rendering to open the util-bar -->
    <div>
        <div class="util-bar">
            <!-- <span class="icon-container"> -->
                
                <!-- May need to import the menu-icon into the file that uses it.  -->
                <!-- <menu-icon/> -->
            <!-- </span> -->
            <count-btns class="count-comp"/>
            <to-dos class="preview"
            v-model="message"
            v-model.capitalize="myText">
            <span>Preview: {{ message }}</span>
            </to-dos>
        </div>
    </div>
    <slot/>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alegreya&family=Merriweather+Sans:wght@300&display=swap');
.util-bar {
    position: fixed;
    height: 100%;
    width: 55%;
    background-color: #212D40;
    z-index: 1;
    opacity: 90%;
    display: block;
}
.preview {
    position: relative;
    display: block;
    text-align: center;
    width: 90%;
    top: 13.5em;
    margin: auto;
    border: 1px double red;
    /* font-family: 'Alegreya', serif;
    font-family: 'Merriweather Sans', sans-serif; */
}
.count-comp {
    position: relative;
    display: block;
    top: 7em;
}
.icon-container {
    position: absolute;
    display: block;
    top: 1px;
    width: 100%;
}

</style>