<script>
import { useMouse } from '@/composables/MouseTracker.vue';

const  {x, y} = useMouse();
export default {
    setup(){
        const {x, y} = useMouse();
        return {x, y};
    }
}

</script>
<template>
    <div>X: {{ x }} Y: {{ y }}</div>
   
</template>
<style scoped>
* {
    color: #D66853;
    
}
</style>