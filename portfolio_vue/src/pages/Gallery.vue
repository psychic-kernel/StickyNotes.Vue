<script>
import PhotoGal from '@/components/PhotoGal.vue';

export default {
    components: {PhotoGal},
}
</script>
<template>
    <h1>Gallery</h1>
    <PhotoGal class="img-gal"/>
</template>

<style scoped>
h1 {
    display: block;
    position: relative;
    height: 100%;
    margin-bottom: 5%;
    text-align: center;
}
.img-gal {
    top: 1em;
}
</style>