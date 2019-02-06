<template>
  <div>
    <navbar></navbar>
    <nuxt/>
    <custom-footer/>
  </div>
</template>

<script>
  import Navbar from "../components/Navbar";
  import CustomFooter from "../components/CustomFooter";

  export default {
    components: {CustomFooter, Navbar}
  }
</script>


<style lang="scss">

  @import "~/node_modules/vazir-font/dist/font-face.css";

  html {
    font-size: 14px;
    box-sizing: border-box;
    font-family: 'Vazir', 'IRANSans', Tahoma, serif;
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

  .field.is-grouped > .control:not(:last-child) {
    margin-left: 0.75rem;
    margin-right: 0;
  }

  section {
    padding: 0 2rem;

    &:nth-child(2n) {
      padding: 0 2rem 14rem;
    }
  }

  section.background {
    position: relative;

    &:before {
      left: 0;
      top: -17%;
      width: 100%;
      content: "";
      z-index: -1;
      height: 100%;
      position: absolute;
      background: no-repeat 0 50%;
      background-size: cover;
      transform: skewY(-2.5deg);
    }
  }

</style>
