<template>
   <div>
       <form class="todos-form">
           
            <label for="currentDate">Date</label>
            <input 
                id="currentDate" 
                type="date" 
                name="currentDate" 
                :value="modelValue" 
                @input="$emit('update:modelValue', $event.target.value)"
            />
            <br> 
            <legend>Enter Tasks:</legend>
            <input 
                :value="modelValue" 
                @input="$emit('update:modelValue', $event.target.value)"
            />
            <br>
            <button>&copy;</button><br>
        </form>
        
        <span>
            <slot/>
        </span>
   </div>
    
</template>

<script>
export default {
    props: ['modelValue'],
    emits: ['update:modelValue']
}
</script>



<style scoped>
.todos-form {
    font-size: larger;
    display: flex;
    justify-content: space-evenly;
    background-color: rgb(27, 133, 147);
}
input {
    border: none;
    background-color: rgb(227, 238, 154);
    color: rgb(73, 197, 46);
}
* {
   color: orange; 
}
button {
    animation-name: spin;
    animation-iteration-count: infinite;
    animation-duration: 2s;
    animation-timing-function: linear;
    border-radius: 10px;
    border: .1px solid gray;
    background-color:rgb(38, 156, 64);
    position: inherit;
}
button:hover {
    box-shadow: 3px 3px 16px 2px;
}
@keyframes spin {
    50% {
        transform: rotate(180deg);
    }
    100% {
        transform: rotate(360deg)
    }
}


</style>