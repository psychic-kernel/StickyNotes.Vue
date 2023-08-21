
<script>
import ContactForm from '@/components/ContactForm.vue';
export default {
    components: {
        ContactForm,
    }
}
</script>
<template>
        <h1>About</h1>
        
        <contact-form class="contact-frm"/>
</template>
<style scoped>

.contact-frm {
    top: 15em;
}
h1{
    position: fixed;
    color: var(--color-fire);
    top: 2em;
    left: 50%;
}

</style>