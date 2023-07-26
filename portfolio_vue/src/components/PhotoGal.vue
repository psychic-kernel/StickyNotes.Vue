

<script>   
//import { createClient } from 'pexels';



/** Pexels API */
// /composables
// const client = createClient('qkT13AZis6dFFtI3wyGmoDOoFa475suJt12Q7nhSF0Ynhp7OWqyytdvU');
// const apiUrl = 'https://api.pexels.com/v1/';
// // All requests made with the client will be authenticated

//     fetch(apiUrl)
// .then( async response => {
//     // Check if successful.
//     if(!response.ok){
//         throw new Error('Network response was not ok');
//     }
//     return response.json();
// })
// .then( data => {
//     console.log('Fetched data: ' + data);
// })
// .catch( error => {
//     console.error('fetch error: ' + error);
// });




</script>
<template>
    <div class="gallery-container">
        <img src="https://placehold.co/200x200" alt=""/>
        <img src="https://placehold.co/200x200" alt=""/>
        <img src="https://placehold.co/200x200" alt=""/>
    </div>
    <slot/>

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