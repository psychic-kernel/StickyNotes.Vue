<script setup >
import { useCounterStore } from '@/stores/counter.js';
import MinusIcon from '@/components/icons/MinusIcon.vue';
import PlusIcon from '@/components/icons/PlusIcon.vue';

const counter = useCounterStore();
// counter.$patch({ count: counter.count + 1 });



</script>
<template>
    <div class="count-container">
        <!-- Minus  -->
        <button
            @click="counter.decrement()">
            <minus-icon class="minus"/>
        </button>
        &nbsp;
        <!-- Plus -->
        <button @click="counter.increment()">
            <plus-icon class="plus"/>
        </button>
        <!-- Display -->
        <!-- <div class="count-container">
            Count: {{  counter.count }}
        </div>  -->
        <slot>
            <span>Count: </span>
            {{ counter.count }}
        </slot>
    </div>
</template>

<style scoped>
.count-container {
    position: relative;
    display: block;
    border: 3px solid black;
    width: 5em;
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
    background-color: #212D40;
    
}
button {
    position: relative;
    display: block;
    width: 2em;
    height: 2em;
    margin-left: 5%;
    font-size: 14pt;
    border: 1px solid grey;
    border-radius: 10px;
    background-color: #D66853;
    
}
    
    

</style>