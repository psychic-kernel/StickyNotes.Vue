
<!-- FontAwesomeIcon.vue -->

<template>
    <font-awesome-icon :icon="icon" :class="className" />
  </template>
  
  <script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  
  export default {
    components: {
      FontAwesomeIcon,
    },
    props: {
      icon: {
        type: Object,
        required: true,
      },
      className: {
        type: String,
        default: '',
      },
    },
  };
</script>
  