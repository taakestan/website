<template>
  <div dir="rtl">
    <nuxt />
  </div>
</template>

<script>
  import Navbar from "../components/Navbar";
  export default {
    components: {Navbar}
  }
</script>

<style lang="scss">

  @import "~/node_modules/vazir-font/dist/font-face.css";

  root {
    font-size: 14px;
  }

  html {
    font-family: 'Vazir', 'IRANSans';
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  body, button, input, select, textarea {
    font-family: 'Vazir', 'IRANSans';
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  #container {
    margin-top: 2rem;
  }
</style>
