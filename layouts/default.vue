<template>
  <div>
    <nuxt/>
    <custom-footer/>
  </div>
</template>

<script>
  import CustomFooter from "../components/CustomFooter";

  export default {
    components: {CustomFooter}
  }
</script>

<style lang="scss">
  @import "~/node_modules/vazir-font/dist/font-face.css";
</style>
