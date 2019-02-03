<template>
  <div>
    <section id="section1" class="background">
      <navbar/>
      <div class="container">
        <div class="content">
          <h1>تـــاکــــــــ</h1>
          <h2>پروژه دانــش آزاد</h2>
          <p>
            پروژه دانش آزاد تاک با هدف انتقال دانش میان فارسی زبانان شکل گرفته است. این پروژه قصد دارد تا پلی میان
            متخصصان و "دانش جو" های فارسی زبان ایجاد کند تا با استفاده از این بستر مجازی به تبادل تجربه و دانش بپردازند.
          </p>
        </div>
        <div class="image">
          <img src="https://vueschool.s3.amazonaws.com/a742b7be73aca55734372e13785b603b/vuex-for-everyone.png" alt="">
        </div>
      </div>
    </section>
    <section id="section2">
      <div class="container">
        <h2>آخرین وبینار های برگزار شده</h2>
        <div class="columns is-multiline">
          <div class="column is-full-mobile is-half-tablet is-one-third-desktop" v-for="webinar in webinars.all.slice(3)">
            <card
              :title="webinar.title" :provider="webinar.provider"
              :image-path="webinar.image" :href="'webinars/' + webinar.slug">
              {{ webinar.description }}
            </card>
          </div>
        </div>
      </div>
    </section>
    <section id="section3" class="background">
      <div class="container">
        <div class="header-icon">
          <div class="image">
            <img src="/img/icons/icon-plan.svg" alt="">
          </div>
          <div class="title">برنامه زمانی</div>
        </div>
        <div class="columns">
          <div class="column">
            <h3>برنامه زمانی بهمن ماه</h3>
            <p>
              در ماه بهمن دو وبینار در تاریخ های ۲۱ و ۲۹ ام برگزار می شود و همچنین در تاریخ ۱۷ بهمن ماه یک مصاحبه با آقای ناصری داریم.
            </p>
          </div>
          <div class="column">
            <div class="image">
              <img src="/img/calender.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="section4">
      <div class="container">
        <div class="header-icon">
          <div class="image">
            <img src="/img/icons/icon-visualize.svg" alt="">
          </div>
          <div class="title">همکاری با تاک</div>
        </div>
      </div>
    </section>
    <section id="section5" class="background"></section>
  </div>
</template>

<script>

  import Card from "../components/Card";
  import Navbar from "../components/Navbar";
  import {mapState} from 'vuex';

  export default {
    components: {Navbar, Card},
    fetch ({ store, params }) {
      return store.dispatch('webinars/loadWebinars')
    },
    computed: {
      ...mapState(['webinars'])
    },
  }
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    align-items: center;
  }

  .title {
    display: block;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }

  .header-icon {
    top: -11rem;
    width: 100%;
    position: absolute;
    > .image {
      width: 5rem;
      height: 5rem;
      padding: 1rem;
      margin: 0 auto 1rem;
      border-radius: .5rem;
      background-color: white;
      box-shadow: 0 5px 18px 2px rgba(94, 96, 186, 0.2);
    }
    > .title {
      color: #6c718b;
      font-weight: 500;
      font-size: 1.7rem;
      text-align: center;
    }
    > .description {
      color: #6c718b;
      text-align: center;
    }
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
      background-image: url(/img/waves.svg), linear-gradient(326deg, #9864ff 20%, #1a1c82 92%);
    }
  }

  #section2 {
    padding-bottom: 20rem;
    .container {
      flex-direction: column;
    }
    h2 {
      color: #6c718b;
      font-size: 1.7rem;
      font-weight: 500;
      text-align: center;
      margin-bottom: 3rem;
    }
    .card {
      height: 100%;
    }
  }

  #section3 {
    min-height: 38rem;
    position: relative;
    .columns {
      padding: 5rem 0 18rem;
    }
    .column .image {
      width: 30rem;
      border-radius: .5rem;
    }
    &:before {
      background-color: #f6f8fc;
    }
  }
</style>
