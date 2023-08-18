
<template>
    <footer>
        <a href="https://github.com" target="_blank">
            <font-awesome-icon class="git-icon"  :icon="['fab', 'github']"/>
        </a>
        <span>Michael A. Robins</span><br>
        <span><a href="mailto:malexrs@outlook.com">malexrs@outlook.com</a></span>
    </footer>
</template>

<script>

</script>

<style scoped>
    footer {
        color: var(--color-fire);
        background-color: var(--bg-color-nav);
        position: fixed;
        display: block;
        bottom: 0;
        width: 100%; 
        text-align: center;

    }
    a {
        color: var(--text-color-nav);
    }
   
    .git-icon {
        height: 2em;
        color: rgb(0, 0, 0);
    }
    

</style>