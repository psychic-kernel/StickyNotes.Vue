<template>
   <form class="todos-form">
        <h3>To Do:</h3>
        <label for="currentDate">Date</label>
        <input id="currentDate" type="date" name="currentDate"/>
        <br>
        <textarea id="enterTodos" cols="23" rows="4"></textarea>
        <br>
        <button>Post</button>

    </form> 
</template>

<style>
.todos-form {
    text-align: center;
    background-color: rgb(213, 228, 225);
}

</style>