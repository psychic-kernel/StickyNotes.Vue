
<script>

import AboutIcon from '@/components/icons/AboutIcon.vue';
import ContactForm from '@/components/ContactForm.vue';
export default {
    components: {
        ContactForm,
        AboutIcon
    }
}
</script>
<template>
    <h1><about-icon/></h1>
    <contact-form class="contact-frm"/>
</template>
<style scoped>
h1 {
    display: block;
    position: relative;
    width: 30%;
    /* margin: auto; */
    /* bottom: .8em; */
    
}
.contact-frm {
    position: absolute;
    display: block;
    height: 100%;
    margin: 0px;
    top: 20em;
}

</style>