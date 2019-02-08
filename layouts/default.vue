<template>
  <div>
    <navbar />
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

</style>
