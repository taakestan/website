<template>
  <div dir="rtl">
    <navbar/>
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

  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
  }

  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }

  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }

  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }
</style>
