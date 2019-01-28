<template>
  <div class="content">
    <h1 v-text="webinar.title"></h1>
    <span>ارئه دهنده : </span><strong v-text="webinar.provider"></strong>
    <div class="image">
      <figure class="image is-3by1">
        <img :src="webinar.image">
      </figure>
    </div>
    <p v-text="webinar.content"></p>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: "webinar",
    data() {
      return {
        slug: this.$router.history.current.params.webinar
      }
    },
    computed: {
      ...mapState(['webinars']),
      webinar() {
        return this.webinars.find(item => item.slug === this.slug);
      }
    },
    head() {
      return {
        title: this.webinar.title
      }
    }
  }
</script>

<style scoped>

</style>
