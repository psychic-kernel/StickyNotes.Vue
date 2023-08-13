<template>
        <form class="todos-form">
            <legend style="font-size: 1.5em;">Set Tasks</legend>
            <label for="currentDate">Date</label>
            <br>
            <input
            id="currentDate"
            type="date"
            name="currentDate"
            :value="modelValue"
            @input="emitValue"
            />
            <br>

            <label>Enter Tasks:</label>
            <br>
            <input
            type="text"
            :value="modelValue"
            @input="emitValue"
            />
            <!-- !finished -->
            <!-- button -->
            <button class="btn-icon">
                <font-awesome-icon 
                :icon="['fas', 'right-to-bracket']"
                @click.prevent="postMessage()"/>
            </button>
        </form>
            <!-- postMessage() will store the value into a localStorage container. 
            Retrieve te data from local storage and display it on a new page or secion. Called TaskList.vue -->   
        <slot/>    
</template>
<script>
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
        },
        postMessage(){

        }
    },
    
}
</script>



<style scoped>

.btn-icon {
    position: relative;
    display:inline;
    top: 2em;
    left: 0;
    background: transparent;
    border: none;
    box-shadow: 3px 3px 0 0;
    
    
}
.btn-icon:hover {
    background-color: rgb(100, 86, 86);
}
.todos-form {
    position: relative;
    padding: 2em;
    display: flex;
    flex-direction: column;
    left: 0;
    width: 16em;
}
.todos-form:hover {
    cursor: pointer;
}

#currentDate {
    /* z-index: -1; */
}

input {
    border: none;
    background-color: rgb(246, 232, 193);
    color: rgb(73, 197, 46);
}

* {
   color: #d13434d8; 
}
</style>