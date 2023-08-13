

<script>
import ToDos from '@/components/ToDos.vue';
import UtilContainers from '@/components/UtilContainers.vue';
export default {
    components: { 
        ToDos, 
        UtilContainers
    },
    
   
}
</script>
<template> 
    <div>
        <div class="util-bar">
            
            <util-containers class="util-containers-comp"/>
            
        </div>
    </div>
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
@media screen and (max-width: 600px ){
    .util-bar {
        position: fixed;
        height: 100%;
        width: 90%;
        background-color: #212D40;
        z-index: 1;
        opacity: 90%;
        display: block; 
    }
}

</style>