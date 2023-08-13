

<script>   

import EyeballSvg from '@/components/EyeballSvg.vue';


export default {
    components: {
        EyeballSvg
    },
}



</script>
<template>
    <eyeball-svg class="eyeball"/>
    <div class="gallery-container">
        <img src="https://placehold.co/200x200" alt=""/>
        <img src="https://placehold.co/200x200" alt=""/>
        <img src="https://placehold.co/200x200" alt=""/>
    </div>
</template>

<style scoped>
* {
    position: relative;
    width: 100%;

    margin: auto;
    background-color: rgb(195, 126, 126);
}
.gallery-container {
    display: flex;
    justify-content: space-evenly;
    position: relative;
    gap: 15px;
    width: 89.8%;
    height: 100%;
    margin: 0%;
    /* top: 90%; */
    overflow:scroll;
    padding: 25px;
    background-color: black;
}
.eyeball {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 80px 0px 10px;
}
/* div{
    position: relative;
    display: grid;
    grid-template-columns: 185px 185px 185px;
    gap: 100px;
} */
img {
    position: inherit;
    left: 1em;
    padding-top: 15px;
    padding-bottom: 15px;
}
</style>