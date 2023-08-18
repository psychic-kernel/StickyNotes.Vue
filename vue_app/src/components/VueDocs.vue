<template>
    <ul>
        <li>
            <h4>v-if</h4>
            <p>Conditionally render an element based on the truthiness of an expression.</p>
        </li>
        <li>
            <h4>v-else</h4>
            <p>Define the "else" condition for v-if.</p>
        </li>
        <li>
            <h4>v-else-if</h4>
            <p>Define an "else if" condition for v-if.</p>
        </li>
        <li>
            <h4>v-show</h4>
            <p>Conditionally show or hide an element based on the truthiness of an expression (uses CSS display property).</p>
        </li>
        <li>
            <h4>v-for</h4>
            <p>Loop through an array or object and render elements based on each item's data.</p>
        </li>
        <li>
            <h4>v-bind (or simply ":")</h4>
            <p>Bind data or expressions to element attributes, props, or component props.</p>
        </li>
        <li>
            <h4>v-on (or simply "@")</h4>
            <p>Attach event listeners to trigger methods or expressions when events occur.</p>
        </li>
        <li>
            <h4>v-model</h4>
            <p>Create two-way data binding between a form input element and Vue data.</p>
        </li>
        <li>
            <h4>v-pre</h4>
            <p>Skip compilation for an element and its children, treating it as plain static content.</p>
        </li>
        <li>
            <h4>v-cloak</h4>
            <p>Prevent displaying the Vue template while it's compiling (useful when using Vue with a custom build process).</p>
        </li>
        <li>
            <h4>v-once</h4>
            <p>Render an element or component only once and never update it even if the data changes.</p>
        </li>
        <li>
            <h4>v-html </h4>
            <p>Render HTML from a data property as innerHTML. Be cautious about using this due to possible XSS vulnerabilities.</p>
        </li>
        <li>
            <h4>v-text</h4>
            <p>Update the text content of an element with the result of an expression (similar to interpolation )</p>
        </li>
    </ul>
</template>

<style scoped>
* {
    color: var(--color-ghost);
}
h4 {
    color: var(--color-neon-green);
    margin-right: 1em;
}
ul li {
    position: relative;
    top: 3em;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
}
li p {
    position: absolute;
    left: 30%;
}

</style>