<script>
import { useMouse } from '@/composables/mouseTracker.js';

const  {x, y} = useMouse();
export default {
    setup(){
        const {x, y} = useMouse();
        return {x, y};
    }
}

</script>
<template>
    <span>X: {{ x }} Y: {{ y }}</span>
   
</template>
<style scoped>
span {
    color: var(--color-fire);
    
    
}
</style>