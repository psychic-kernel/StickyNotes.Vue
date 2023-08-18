<template>
    <form @submit.prevent="submitForm()" class="contact-form">
        <fieldset>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>
            <br>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
            <br>
            
            <label for="message">Message</label>
            <br>
            <textarea id="message" name="message" required></textarea>
            <br>
            
            <button type="submit">Submit</button>
        </fieldset>
    </form>
</template>
<script>
    

</script>
<style scoped>
form {
    background-color: var(--bg-color-nav);
    position: fixed;
    border-radius: 1em;
    display: flex;
    justify-content: flex-start;
    color: var(--color-fire);
    width: 80%;
    height: 13em;
    float: left;
    box-shadow: 0px 0px 8px;
}
fieldset {
    position: relative;
    margin: auto;
    border-radius: 1em;
    margin-top: 1em;
    width: 92.5%;
    margin: auto;
    border: none;
}
label {
    position: relative;
    float: left;
    left: 5px;
    margin-top: 10px;

    
}
input {
    margin-left: 1em;
    margin-top: 1em;
    position: inherit;
    display: inline-block;
    border: none;
    border-radius: 5px;
    background-color: var(--bg-color-input);
}
input:focus{
    border: none;
}
button {
    position: inherit;
    background-color: transparent;
    color: var(--color-fire);
    border: none;
    box-shadow: 1px 1px 3px;
}
textarea {
    margin: 5px;
    background-color: var(--bg-color-input);
    border: none;
    border-radius: 5px;
    resize: none;
}

</style>
