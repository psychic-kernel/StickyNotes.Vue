<script setup >
import { useCounterStore } from '@/stores/counter.js';
import MinusIcon from '@/components/icons/MinusIcon.vue';
import PlusIcon from '@/components/icons/PlusIcon.vue';
const counter =  useCounterStore();
// counter.$patch({ count: counter.count + 1 });



</script>
<template>
    <div class="count-container">
        
        <button @click="counter.increment()">
            <font-awesome-icon
            style="color: #23ddd7;"
            :icon="['fas', 'plus']"
             />
        </button>

        <button @click="counter.decrement()">
            <font-awesome-icon
            style="color: #D66853;"
            :icon="['fas', 'minus']"
            />
        </button>
        <span id="countVar">Count: {{ counter.count }} </span>
            
    </div>
</template>

<style scoped>
.count-container {
    position: relative;
    display: block;
    border: 3px solid black;
    width: 16em;
    height: 5em;
}
.plus {
    position: relative;
    display: block;
    right: 3px;
}
.minus {
    position: relative;
    display: block;
    right: 3px;
    bottom: 2px;
    
}
button:hover {
    background-color: #aab9d1;
    
}
button {
    position: relative;
    display: block;
    width: 2em;
    height: 2em;
    background: transparent;
    border: none;
    border-radius: 3px;
    left: 3em;
    
}
.count-container #countVar{
    /* position: fixed;
    display: inline;
    font-size: 3em; */
    color: orange;
}
    

</style>