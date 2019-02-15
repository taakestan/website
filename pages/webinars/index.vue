<template>
  <div>
    <section class="section section--dark section--gradient section--gradient-one" id="section1">
      <navbar/>
      <div class="container text-white pt-5">
        <div class="row">
          <div class="col-md-6">
            <h1 class="display-3 mb-5">وبینار های برگزار شده</h1>
            <p>
              پروژه دانش آزاد تاک با هدف انتقال دانش میان فارسی زبانان شکل گرفته است. این پروژه قصد دارد تا پلی میان
              متخصصان و "دانش جو" های فارسی زبان ایجاد کند تا با استفاده از این بستر مجازی به تبادل تجربه و دانش بپردازند.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section section--white pt-0 section--pb-lg">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4" v-for="webinar in webinars.all">
            <card
              :title="webinar.title" :provider="webinar.provider_id"
              :image-path="webinar.banner" :href="'/webinars/' + webinar.slug">
              {{ webinar.description }}
            </card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import Card from "~/components/Card";
  import Navbar from "~/components/Navbar";

  export default {
    name: "index",
    components: {Navbar, Card},
    computed: mapState(['webinars']),
    head () {
      return {
        title: 'وبینار ها | پروژه تاک',
      }
    }
  }
</script>

<style scoped lang="scss">

  #section1 {
    p {
      color: #fffc;
      font-size: 1.3rem;
    }

    &:before {
      background-image: url(/img/backgrounds/waves-2.svg), linear-gradient(326deg, #009688 20%, #1a1c82 92%);
    }
  }
</style>
