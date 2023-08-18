

<script>
import ToDos from '@/components/ToDos.vue';
import ForcastWidget from '@/components/ForcastWidget.vue';
import CountBtns from '@/components/CountBtns.vue';
import CalcNumbers from '@/components/CalcNumbers.vue';
export default {
    components: { 
        ToDos,
        ForcastWidget,
        CountBtns,
        CalcNumbers,
    },
    
   
}
</script>
<template> 
        <div class="util-bar">
            <forcast-widget/>
            <count-btns/>
            <calc-numbers/> 
            <to-dos/>
        </div>
</template>


<style scoped>
    .util-bar {
        position: relative;
        display: flex;
        justify-content: space-evenly;
        background-color: var(--color-smoke);
        width: 90%;
    }

</style>