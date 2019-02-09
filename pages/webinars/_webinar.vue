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
    <div class="container contents">
      <h2>درباره این وبینار :</h2>
      <div class="mt-5" v-html="webinar.content"></div>
      <span>ارئه دهنده : </span><strong v-text="webinar.provider"></strong>
    </div>
    <section id="section3" class="background">
      <div class="container flex-column">
        <div class="header-icon">
          <div class="image">
            <img src="/img/icons/icon-plan.svg" alt="">
          </div>
          <div class="title">دانلود فایل ها</div>
        </div>
        <div class="row">
          <div class="col">
            <div class="btn btn-primary">دانلود فایل ۱</div>
          </div>
          <div class="col">
            <div class="btn btn-primary">دانلود فایل ۱</div>
          </div>
          <div class="col">
            <div class="btn btn-primary">دانلود فایل ۱</div>
          </div>
        </div>
      </div>
    </section>
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

  #section3 {
    &:before {
      background: #f6f8fc;
    }

    .container {
      padding: 7rem 0;
      margin-top: 8rem;
    }
  }

  .header-icon {
    top: -5rem;
  }

  .contents {
    margin-top: -5rem;
    font-size: 1.1rem;
    text-align: justify;
  }
</style>
