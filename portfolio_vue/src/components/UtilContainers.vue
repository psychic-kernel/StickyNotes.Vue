<template>
    <div class="util-containers"> 

        <div class="weather-container">
            <forcast-widget/>
        </div>

        
        <div class="count-container">

            <font-awesome-icon class="icon-arrow" 
            :icon="icons_1[iconIndex_1]"
            @click="toggleIcon_1()" />

            <count-btns/>
        </div>

        <div class="todos-container">

            <font-awesome-icon class="icon-arrow"  
            :icon="icons_2[iconIndex_2]" 
            @click="toggleIcon_2"/>
            
            <to-dos class="preview"
                v-model="message"
                v-model.capitalize="myText">
                <span>{{ message }}</span>
            </to-dos>
        </div>


            
        
    </div>
</template>


<script>
/**<font-awesome-icon :icon="['fas', 'angle-down']" /> */
/**
 * 
 * 
 */
import ToDos from '@/components/ToDos.vue';
import CountBtns from '@/components/CountBtns.vue';
import forcastWidget from '@/components/ForcastWidget.vue';

export default {
    data(){
        return {
            message: null,
            iconIndex_1: 0,
            iconIndex_2: 0,
            icons_1: ['angle-down', 'angle-up'], 
            icons_2: ['angle-down', 'angle-up'],         
        };
    },
    methods: {
        toggleIcon_1(){
            /**!! */
            this.iconIndex_1 = (this.iconIndex_1 + 1) % this.icons_1.length;

            
        },
        toggleIcon_2(){
            this.iconIndex_2 = (this.iconIndex_2 + 1) % this.icons_2.length;
        }
    },
    components: {
        ToDos,
        CountBtns,
        forcastWidget
    }
}

</script>

<style scoped>
.util-containers {
    height: 90%;
    width: 83%;
    margin: auto;
    border: 3px dotted rgb(168, 149, 39);
    position: inherit;
    display: grid;
    grid-template-columns: auto auto;
    gap: 10px;
    padding: 5px;
    top: 4.5em;
    left: .3em;
}

.count-component {
    position: relative;
    width: 80%;
}
.todos-container {
    background-color: #80c8bd;
    
    font-weight: bold;
    position: inherit;
    display: block;
    color: white;
    height: 50%;
    width: 29em;
    margin: auto;
    top: 19.5em;
}


.util-container:hover {
    cursor:pointer;
}
.icon-arrow {
    position: inherit;
    top: .3em;
    height: 1.5em;
    left: .9em;
}
.icon-arrow:hover{
    background-color: #607395;
}
.icon-arrow:hover {
    font-weight: bold;
    /* color: white; */
    
}
@media screen and (max-width: 600px) {
    .util-container {
        width: 87%;
        margin: auto;
        border: 3px solid gray;
        position: fixed;
        top: 4.5em;
        left: .3em;
    }
}
</style>