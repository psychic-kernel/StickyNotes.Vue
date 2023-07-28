<template>
    <div>
      <img :src="svgFile" alt="SVG Image" />
    </div>
  </template>
  
  <script>
  // Import the SVG file using the require statement
  import svgFile from '@/assets/eyeball.svg';
  
  export default {
    data() {
      return {
        svgFile
      };
    },
  };
  </script>
