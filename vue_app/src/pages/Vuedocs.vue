<script>    
import VueDocs from '@/components/VueDocs.vue';


export default {
    data(){
        return {
            title: 'Vue Docs'
        }
    },
    components: { 
        VueDocs
    },
}
</script>

<template>
    <h1>{{title}}</h1>
    <vue-docs/>
</template>
<style scoped>

h1 {
    left: 50%;
    position: fixed;
    top: 2em;
    color: var(--color-fire);
}

</style>
