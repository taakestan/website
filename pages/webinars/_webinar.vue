<template>
  <div>
    <section id="section1" class="background">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h1 class="mb-5" v-text="webinar.title"></h1>
            <p v-text="webinar.description"></p>
          </div>
          <div class="col-md-6">
            <img class="img-fluid" src="https://vueschool.s3.amazonaws.com/1c8a290dd664960b5b53c6cf1bfbc972/nuxt-fundamentals.png" alt="">
          </div>
        </div>
      </div>
    </section>
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
        return this.webinars.all.find(item => item.slug === this.slug);
      }
    },
    head() {
      return {
        title: this.webinar.title
      }
    }
  }
</script>

<style lang="scss" scoped>
  #section1 {
    padding: 0 2rem 10rem;
    .row {
      margin: 10rem 0 4rem;
      h1 {
        font-size: 4rem;
      }
      p {
        color: #fffc;
        font-size: 1.3rem;
      }
    }

    &:before {
      background-image: url(/img/waves-2.svg), linear-gradient(326deg, #007396 20%, #201a82 92%)
    }
  }
</style>
