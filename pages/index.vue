<template>
  <div>
    <section class="section section--dark section--gradient section--gradient-one" id="section1">
      <navbar/>
      <div class="container">
        <div class="content text-white">
          <h1 class="display-2">تـــاکــــــــ</h1>
          <h2 class="font-weight-light">پروژه دانــش آزاد</h2>
          <p class="mt-4">
            پروژه دانش آزاد تاک با هدف انتقال دانش میان فارسی زبانان شکل گرفته است. این پروژه قصد دارد تا پلی میان
            متخصصان و "دانش جو" های فارسی زبان ایجاد کند تا با استفاده از این بستر مجازی به تبادل تجربه و دانش بپردازند.
          </p>
        </div>
        <div class="image">
          <img src="https://vueschool.s3.amazonaws.com/a742b7be73aca55734372e13785b603b/vuex-for-everyone.png" alt="">
        </div>
      </div>
    </section>
    <section class="section section--white pt-0 section--pb-3x" id="section2">
      <div class="container flex-column">
        <h2 class="mb-4">آخرین وبینار های برگزار شده</h2>
        <div class="row">
          <div class="col-lg-4 col-md-6 my-2" v-for="webinar in webinars">
            <webinar-card :webinar="webinar" :href="'/webinars/' + webinar.slug"/>
          </div>
        </div>
      </div>
    </section>
    <section class="section section--light section-skew section--pt-4x section--pb-3x" id="section3">
      <div class="container">
        <div class="section--header-icon">
          <div class="image">
            <img src="/img/icons/icon-plan.svg" alt="">
          </div>
          <div class="title">برنامه زمانی</div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <h3>برنامه زمانی بهمن ماه</h3>
            <p>
              در ماه بهمن دو وبینار در تاریخ های ۲۱ و ۲۹ ام برگزار می شود و همچنین در تاریخ ۱۷ بهمن ماه یک مصاحبه با
              آقای ناصری داریم:
            </p>
            <ul class="">
              <li>۲۱ بهمن : وبینار آشنایی با Docker</li>
              <li>۲۴ بهمن : وبینار آشنایی با Docker</li>
              <li>۲۱ بهمن : وبینار آشنایی با Docker</li>
              <li>۲۱ بهمن : وبینار آشنایی با Docker</li>
            </ul>
          </div>
          <div class="col-md-6">
            <div class="image" id="plane-calender">
              <img class="img-fluid" src="/img/calender.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section--white section--pt-4x section--pb-4x">
      <div class="container has-text-centered">
        <div class="section--header-icon">
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
    <section class="section section--gradient section--gradient-one section--pb-sm">
      <div class="container text-center justify-content-center pb-5">
        <div class="content text-white">
          <h3 class="mt-2">اطلاع از جدید ترین اطلاعیه ها</h3>
          <form class="form-inline mb-2 mt-3" name="email-marketing" data-netlify="true">
            <div class="form-group mr-1 flex-fill">
              <input type="email" name="email" class="form-control form-control-lg flex-fill" placeholder="آدرس ایمیل">
            </div>
            <button class="btn btn-lg btn-primary">ثبت</button>
          </form>
          <p>جهت اطلاع رسانی از آخرین وبینار ها و مصاحیه ایمیل خود را ثبت کنید</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

  import {mapState} from 'vuex';
  import Navbar from "../components/Navbar";
  import WebinarCard from "../components/WebinarCard";

  export default {
    components: {WebinarCard, Navbar},
    async asyncData({app}) {
      const {data} = await app.$axios.$get('api/webinars');
      return {webinars: data};
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    position: relative;
    align-items: center;
  }

  #section1 {
    h2 {
      font-size: 3rem;
    }

    p {
      font-size: 1.3rem;
      color: #fffc;
    }
  }

  #section2 {
    h2 {
      color: #6c718b;
    }
  }

  #plane-calender {
    width: 400px;
  }

</style>
