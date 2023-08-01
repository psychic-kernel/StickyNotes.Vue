<template>
   <div>
       <form class="todos-form">
           
            <label for="currentDate">Date</label>
            <!-- <input 
                id="currentDate" 
                type="date" 
                name="currentDate" 
                :value="modelValue" 
                @input="$emit('update:modelValue', $event.target.value)"
            /> -->
            <input 
                id="currentDate" 
                type="date"
                name="currentDate" 
                :value="modelValue" 
                @input="emitValue"
            />
                <br> 
            <legend>Enter Tasks:</legend>
            <!-- <input 
                :value="modelValue" 
                @input="$emit('update:modelValue', $event.target.value)"
            /> -->
            <input 
                type="text" 
                :value="modelValue"
                @input="emitValue" 
            />

            <br>
            <button>&copy;</button><br>
        </form>
        
        <slot/>  
   </div>
    
</template>

<script>
/** Vue tutorial snip  */
// export default {
//     props: ['modelValue'],
//     emits: ['update:modelValue']
// }

/** Minor annoyance - Cursor accidentally clicks passed the first position in the ** input box ? array */
    // Move cursor position to the (0) @input OR @click */
export default {
    props: {
        modelValue: String,
        modelModifiers: {
            default: () => ({})
        }
    },
    emits: ['update:modelValue'],
    methods: { 
        emitValue(e) {
            let value = e.target.value;
            if (this.modelModifiers.capitalize){
                value = value.charAt(0).toUpperCase() + value.slice(1);
            }
            this.$emit('update:modelValue', value)
        }
    }
    
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
    border-radius: 10px;
    border: .1px solid gray;
    background-color:rgb(38, 156, 64);
    position: inherit;
}




</style>