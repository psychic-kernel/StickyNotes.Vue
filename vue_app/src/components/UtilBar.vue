<script>
import CreateNotes from '@/components/CreateNotes.vue';
import ForcastWidget from '@/components/ForcastWidget.vue';
import CountBtns from '@/components/CountBtns.vue';
import CalcNumbers from '@/components/CalcNumbers.vue';
export default {
    components: { 
        ForcastWidget,
        CountBtns,
        CalcNumbers,
        CreateNotes,
    },
    
   
}
</script>
<template> 
        <div class="util-bar">
            <forcast-widget/>
            <count-btns/>
            <calc-numbers/> 
            <create-notes/>
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