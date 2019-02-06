<template>
  <div>
    <section id="section1" class="background">
      <div class="container">
        <div class="content">
          <h1>وبینار های برگزار شده</h1>
          <p>
            پروژه دانش آزاد تاک با هدف انتقال دانش میان فارسی زبانان شکل گرفته است. این پروژه قصد دارد تا پلی میان
            متخصصان و "دانش جو" های فارسی زبان ایجاد کند تا با استفاده از این بستر مجازی به تبادل تجربه و دانش بپردازند.
          </p>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-full-mobile is-half-tablet is-one-third-desktop" v-for="webinar in webinars.all">
          <card
            :title="webinar.title" :provider="webinar.provider"
            :image-path="webinar.image" :href="'webinars/' + webinar.slug">
            {{ webinar.description }}
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Card from "../../components/Card";
  import {mapState} from 'vuex';

  export default {
    name: "index",
    components: {Card},
    fetch ({ store, params }) {
      return store.dispatch('webinars/loadWebinars')
    },
    computed: {
      ...mapState(['webinars'])
    },
  }
</script>

<style scoped lang="scss">

  .container {
    display: flex;
    align-items: center;
  }

  .column > .card {
    height: 100%;
  }

  #section1 {
    color: #fff;
    padding: 0 2rem 16rem;

    .content {
      width: 50%;
      margin: 10rem 0 4rem;

      > h1 {
        margin: 0;
        color: #fff;
        font-size: 4rem;
        font-weight: 500;
      }
      > h2 {
        color: #ffffff;
        font-weight: 300;
        margin: 0 0 3rem;
        font-size: 2.2rem;
      }

      > p {
        font-weight: 300;
        font-size: 1.3rem;
        color: hsla(0, 0%, 100%, 0.8);
      }

      > div {
        display: flex;
        margin: 0 auto;
        max-width: 44rem;
        padding-top: 2rem;

        > .btn + .btn {
          margin-right: 1rem;
        }
      }

      > span {
        display: inline-block;
        padding: .25rem 1rem;
        background-color: rgba(20, 22, 106, .35);
        border-radius: 3rem;
        margin-left: -1rem;
        font-size: 1rem;
        margin-top: 1rem;
        font-weight: 300;
        color: hsla(0, 0%, 100%, 0.7);

        > b {
          color: white;
          font-weight: 500;
        }
      }
    }

    &:before {
      background-image: url(/img/waves-2.svg), linear-gradient(326deg, #009688 20%, #1a1c82 92%);
    }
  }
</style>
