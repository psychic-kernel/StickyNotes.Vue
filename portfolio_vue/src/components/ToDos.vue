<template>
   <form class="todos-form">
        <h3>To Do:</h3>
        <label for="currentDate">Date</label>
        <input id="currentDate" type="date" name="currentDate" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"/>
        <br>
        <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"/>
        <br>
        <button>Post</button>

    </form>
</template>

<script>
export default {
    props: ['modelValue'],
    emits: ['update:modelValue']
}
</script>



<style scoped>
.todos-form {
    text-align: center;
    background-color: rgb(213, 228, 225);
}
textarea {
    border: none;
    background-color: black;
    color: rgb(73, 197, 46);
}

</style>