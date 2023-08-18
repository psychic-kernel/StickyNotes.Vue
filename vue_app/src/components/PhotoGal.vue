

<script setup>   
import { ref, onMounted } from 'vue';

import jsonData from '../assets/unsplash-gallery.json';

</script>
<template>
    <ul class="gallery-container">
        <li class="gallery-item" v-for="photo in jsonData" :key="photo.id">
            <p class="photo-description">{{ photo.description }}</p>
            <img :src="photo.url" />
            <p style="
            position:relative;
            bottom:6em;left:5px;
            color: var(--color-neon-green);">Photo by</p>
            <span style="
            position:relative;
            bottom: 6.5em;">{{ photo.author }}</span>
            &nbsp;&nbsp;
        </li>
    </ul>
</template>

<style scoped>
.photo-description {
    font-size: 1.2em;
}
img {
    border-radius: 10px;
    width: 500px;
    height: 500px;
    margin-left: 10px;
    margin-top: 1em;
}
.gallery-item {
    margin-top: 2em;
}
p {
    margin-left: 10px;
}
li {
    bottom: 2em;
}
li span {
    position: relative;
    float: left;
    margin-bottom: 3em;
    margin-left: 20px;
    font-family: var(--font-family-2);
    color: var(--color-fire);
    box-shadow: 0px 0px 10px;
    background-color: var(--color-charcoal);
    padding: 5px;
}
.gallery-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    list-style-type: none;
    position: relative;
    width: 100%;
    margin: auto;
    padding: 3px;
    color: white;
    /* top: 90%; */
}
</style>