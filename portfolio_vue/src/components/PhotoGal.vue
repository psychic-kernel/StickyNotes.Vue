

<script>   

import EyeballSvg from './EyeballSvg.vue';


export default {
    components: {EyeballSvg},
}



</script>
<template>

    <div class="gallery-container">
        <img src="https://placehold.co/200x200" alt=""/>
        <img src="https://placehold.co/200x200" alt=""/>
        <img src="https://placehold.co/200x200" alt=""/>
        <div>
            <eyeball-svg/>
        </div>
    </div>
</template>

<style scoped>
* {
    background-color: rgb(195, 126, 126);
}
div {
    position: relative;
    display: grid;
    grid-template-columns: 185px 185px 185px;
    gap: 100px;
}
img {
    position: inherit;
    left: 1em;
    padding-top: 15px;
    padding-bottom: 15px;
}
</style>