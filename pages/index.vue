<template>
  <div>
    <section id="section1" class="background">
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
        <div class="row">
          <div class="col-md-4" v-for="webinar in webinars.all.slice(3)">
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
        <div class="row">
          <div class="col-md-6">
            <h3>برنامه زمانی بهمن ماه</h3>
            <p>
              در ماه بهمن دو وبینار در تاریخ های ۲۱ و ۲۹ ام برگزار می شود و همچنین در تاریخ ۱۷ بهمن ماه یک مصاحبه با آقای ناصری داریم:
            </p>
            <ul class="">
              <li>۲۱ بهمن : وبینار آشنایی با Docker</li>
              <li>۲۴ بهمن : وبینار آشنایی با Docker</li>
              <li>۲۱ بهمن : وبینار آشنایی با Docker</li>
              <li>۲۱ بهمن : وبینار آشنایی با Docker</li>
            </ul>
          </div>
          <div class="col-md-6">
            <div class="image">
              <img class="img-fluid" src="/img/calender.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="section4">
      <div class="container has-text-centered">
        <div class="header-icon">
          <div class="image">
            <img src="/img/icons/icon-visualize.svg" alt="">
          </div>
          <div class="title">همکاری با تاک</div>
          <p>برای همکاری با می توانید از طریق راه ارتباطی زیر با ما در تماس باشید.</p>
          <div class="columns">
          </div>
        </div>
      </div>
    </section>
    <section id="section5" class="background">
      <div class="container">
        <div class="content text-white">
          <h3>
            اطلاع از جدید ترین اطلاعیه ها
          </h3>
          <div class="form-inline mb-3 mt-3">
            <div class="form-group mr-sm-3 flex-fill">
              <input type="email" class="form-control form-control-lg flex-fill" placeholder="آدرس ایمیل">
            </div>
            <button type="submit" class="btn btn-lg btn-primary">ثبت</button>
          </div>
          <p>جهت اطلاع رسانی از آخرین وبینار ها و مصاحیه ایمیل خود را ثبت کنید</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

  import Card from "../components/Card";
  import {mapState} from 'vuex';

  export default {
    components: {Card},
    fetch ({ store, params }) {
      return store.dispatch('webinars/loadWebinars')
    },
    computed: {
      ...mapState(['webinars'])
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    align-items: center;
    position: relative;
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
    position: relative;
    padding-bottom: 15rem;
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

  #section4 {
    padding: 0 0 10rem;
    h2 {
      margin-bottom: 3rem;
      text-align: center;
    }
    .plans {
      display: flex;
      > .plan {
        flex: 1;
        opacity: .5;
        position: relative;
        overflow: hidden;
        text-align: center;
        transform: scale(.8);
        border-radius: .5rem;
        box-shadow: 0 5px 18px 2px rgba(94, 96, 186, 0.2);
        &:nth-child(1) {
          margin-left: -2rem;
        }
        &:nth-child(2) {
          opacity: 1;
          z-index: 1;
          color: white;
          margin: 0 -1.5rem;
          transform: scale(1);
          background-color: #6e70a0;
        }
        &:nth-child(3) {
          margin-right: -2rem;
        }
        > .price {
          padding: 1rem 0;
          font-size: 2rem;
        }
        > span {
          top: 50%;
          right: -30%;
          width: 150%;
          color: white;
          display: block;
          font-size: 2rem;
          position: absolute;
          transform: rotate(-45deg);
          background-color: hsla(238, 21%, 87%, 1);
        }
        > h3 {
          margin: 1rem;
          background-color: white;
          border-radius: 4px;
          color: #6e70a0;
          padding: 1rem 0;
          font-weight: 500;
          font-size: 1.5rem;
        }
        > h4 {
          font-weight: 500;
          font-size: 1.2rem;
          margin: 2rem 0 1rem;
        }
      }
      .items {
        .item {
          padding: .5rem 0;
          font-weight: 300;
          &:nth-child(2n + 1) {
            background: rgba(255, 255, 255, 0.2);
          }
        }
      }
    }
  }

  #section5 {
    .button {
      background: #231e6d;
    }
    .container {
      text-align: center;
      justify-content: center;
      height: 100%;
      min-height: 20rem;
      align-items: baseline;
      padding-top: 4rem;
      justify-content: center;
    }
    &:before {
      background-image: url(/img/index/waves.svg), linear-gradient(36deg, #9864ff 20%, #1e1f65 92%);
    }
  }

</style>
