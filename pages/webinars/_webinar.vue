<template>
  <div>
    <section id="section1" class="section section--dark section--gradient section--gradient-one">
      <navbar/>
      <div class="container text-white pt-5">
        <div class="row">
          <div class="col-md-6">
            <h1 v-text="webinar.title"></h1>
            <div class="provider mb-4 d-inline-block">
              <span>ارئه دهنده : </span><strong v-text="providerName(webinar.provider_id)"></strong>
            </div>
            <p v-text="webinar.description"></p>
          </div>
          <div class="col-md-6">
            <img class="img-fluid" :src="webinar.image" alt="">
          </div>
        </div>
      </div>
    </section>
    <section class="section section--white pt-0 section--pb-3x">
      <div class="container flex-column align-items-baseline">
        <h2>درباره این وبینار :</h2>
        <div class="mt-3 contents text-justify" v-html="webinar.content"></div>
      </div>
    </section>
    <section id="section3" class="section section--light section-skew section--pt-3x section--pb-xx">
      <div class="container flex-column">
        <div class="section--header-icon">
          <div class="image">
            <img src="/img/icons/icon-download.svg" alt="">
          </div>
          <div class="title">دانلود فایل ها</div>
        </div>
        <div class="d-flex justify-content-center">
          <div class="mx-1" v-for="link in webinar.links">
            <a :href="link.value" class="btn btn-primary" v-text="link.title"></a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import Navbar from "../../components/Navbar";

  export default {
    name: "webinar",
    components: {Navbar},
    data() {
      return {
        webinar: ''
      }
    },
    computed: mapState(['webinars', 'providers']),
    methods: {
      providerName(providerID) {
        const provider = this.providers.all[providerID];
        return provider.first_name + ' ' + provider.last_name;
      }
    },
    head() {
      return {
        title: this.webinar.title + ' | پروژه تاک'
      }
    },
    validate ({ params, store }) {
      let indexItem = null;
      for (let index in store.state.webinars.all) {
        if (store.state.webinars.all[index].slug === params.webinar)
          indexItem = index;
      }
      return !!indexItem;
    },
    created() {
      for (let index in this.webinars.all) {
        if (this.webinars.all[index].slug === this.$route.params.webinar)
          this.webinar = this.webinars.all[index];
      }
    }
  }
</script>


<style lang="scss" scoped>
  #section1 {
    h1 {
      font-size: 4rem;
    }
    p {
      color: #fffc;
      font-size: 1.3rem;
    }

    &:before {
      background-image: url(/img/waves-2.svg), linear-gradient(326deg, #007396 20%, #201a82 92%)
    }
  }

  .provider {
    font-size: 1.1rem;
    padding: 0.2rem 1rem;
    border-radius: .5rem;
    background: #00000040;
    span {
      font-weight: 100;
    }
  }

  .container {
    display: flex;
    align-items: center;
    position: relative;
  }

  .contents {
    font-size: 1.2rem;
  }
</style>
