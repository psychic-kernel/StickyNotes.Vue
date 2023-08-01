<template>
 <h2>Vue 3</h2>
    <ul>
        <li>
            1. v-if:<br>
            Conditionally render an element based on the truthiness of an expression.
        </li>
        <li>
            2. v-else:<br>
            Define the "else" condition for v-if.
        </li>
        <li>
            3. v-else-if:<br>
            Define an "else if" condition for v-if.
        </li>
        <li>
            4. v-show:<br>
            Conditionally show or hide an element based on the truthiness of an expression (uses CSS display property).
        </li>
        <li>
            5. v-for:<br>
            Loop through an array or object and render elements based on each item's data.
        </li>
        <li>
            6. v-bind (or simply ":"):<br>
            Bind data or expressions to element attributes, props, or component props.
        </li>
        <li>
            7. v-on (or simply "@"):<br>
            Attach event listeners to trigger methods or expressions when events occur.
        </li>
        <li>
            8. v-model:<br>
            reate two-way data binding between a form input element and Vue data.
        </li>
        <li>
            9. v-pre:<br>
            Skip compilation for an element and its children, treating it as plain static content.
        </li>
        <li>
            10. v-cloak:<br>
            Prevent displaying the Vue template while it's compiling (useful when using Vue with a custom build process).
        </li>
        <li>
            11. v-once:<br>
            Render an element or component only once and never update it even if the data changes.
        </li>
        <li>
            12. v-html: <br>
            Render HTML from a data property as innerHTML. Be cautious about using this due to possible XSS vulnerabilities.
        </li>
        <li>
            13. v-text:<br> 
            Update the text content of an element with the result of an expression (similar to interpolation )
        </li>
    </ul>
</template>

<style scoped>
ul {
    background-color: rgb(148, 181, 210);
    list-style-image: url('')
}
ul li:nth-child(even) {
    background-color: rgb(194, 116, 116);
}


</style>