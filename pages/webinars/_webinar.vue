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
            <img class="img-fluid" :src="webinar.image" alt="">
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <h1 v-text="webinar.title"></h1>
      <span>ارئه دهنده : </span><strong v-text="webinar.provider"></strong>
      <div class="image">
        <figure class="image is-3by1">
          <img :src="webinar.baner">
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
        webinar: ''
      }
    },
    fetch ({ store, params }) {
      return store.dispatch('webinars/loadWebinars')
    },
    computed: {
      ...mapState(['webinars']),
    },
    head() {
      return {
        title: this.webinar.title
      }
    },
    created() {
      const slug = this.$router.history.current.params.webinar;
      this.webinar = this.webinars.all.find(item => item.slug === slug);
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
