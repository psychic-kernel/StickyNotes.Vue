<script>
import PhotoGal from '@/components/PhotoGal.vue';
export default {
    components: {
        PhotoGal
    }
}


</script>
<template>
    <h1>Gallery</h1>
    <photo-gal/>
</template>

<style scoped>
h1 {
    position: fixed;
    top: 2em;
    color: var(--color-fire);
    left: 50%;
}


</style>