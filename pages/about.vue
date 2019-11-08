<template>
  <div>
    <section class="section section--dark section--gradient section--gradient-two" id="section1">
      <navbar/>
      <div class="container text-white pt-5">
        <h1 class="display-3 mb-5">درباره تاک</h1>
        <p>
          پروژه دانش آزاد تاک با هدف انتقال دانش میان فارسی زبانان شکل گرفته است. این پروژه قصد دارد تا پلی میان متخصصان و
          "دانش جو" های فارسی زبان ایجاد کند تا با استفاده از این بستر مجازی به تبادل تجربه و دانش بپردازند.
        </p>
        <p>
          اهداف تاک محدود به حوزه خاصی از دانش و تجربه نیست و در بلند مدت می تواند شاخه های متعددی را در بر بگیرد. این
          پروژه در مراحل اولیه شکل گیری به سر می برد. به همین خاطر در این مرحله تنها به موضوعات نرم افزاری پرداخته می شود.
          تنها مانعی که بر سر گسترش تاک به دیگر شاخه های تخصص وجود دارد کمبود همراهان کافی است.
        </p>
      </div>
    </section>
    <section class="section section--white pt-0 section--pb-3x">
      <div class="container">
        <div class="content">
          <h2>نحوه برگزاری جلسات</h2>
          <p>در حال حاضر جلسات تاک تحت وب برگزار می شوند و شرکت کنندگان می توانند تنها با داشتن اینترنت در جلسات شرکت کنند.
            این جلسات با استفاده از سرویس Webex برگزار می شوند. این سرویس امکان حضور همزمان 25 نفر را در هر جلسه فراهم می کند.
            در هر یک از جلسات امکان تبادل نظر و ارتباط دو سویه وجود دارد. شرکت در همه جلسات به صورت رایگان است.</p>
          <p>همچنین در انتهای هر جلسه صدا و تصویر جلسه ضبط شده و برای استفاده عموم در این سایت قرار داده می شود.</p>
        </div>
      </div>
    </section>
    <section class="section section--light section-skew section--pt-3x section--pb-3x" id="section3">
      <div class="container position-relative">
        <div class="section--header-icon">
          <div class="image">
            <img src="~/assets/svg/icons/icon-faq.svg" alt="">
          </div>
          <div class="title">نحوه شرکت در وبینار ها</div>
        </div>
        <h2>نحوه اطلاع رسانی و شرکت کنندگان</h2>
        <p>با توجه به محدودیت ها کنونی اطلاع رسانی در مورد جلسات به صورت زیر انجام می شود:</p>
        <ul>
          <li>وب سایت تاک</li>
          <li>گروه اینترنتی software-taak@googlegroups.com</li>
          <li>گروه های ایمیلی</li>
        </ul>
        <p>در صورتی که تمایل به در یافت اطلاعات مربوط به وبینارها دارید می توانید دز گروه اینترنتی و یا سایت پروژه آخرین
          اخبار را دریافت کنید. همچنین ممنون خواهیم شد اگر اطلاعات وبینار ها را برای دوستانی که فکر می کنید برایشان مفید است
          بفرستید.</p>
        <p>برای هر وبینار یک فرم ثبت نام تهیه می شود که دوستانی که مایل به شرکت در آن هستند ثبت نام کنند و دعوت نامه شرکت در
          وبینار برایشان فرستاده خواهد شد.</p>
        <p>در صورتی که تمایل به همکاری با این پروژه را دارید، به صفحه همکاری با ما مراجعه کنید.</p>
      </div>
    </section>
  </div>
</template>

<script>
  import Navbar from "../components/layouts/Navbar";
  export default {
    name: "about-taak",
    scrollToTop: true,
    components: {Navbar},
    head () {
      return {
        title: 'درباره ما',
      }
    }
  }
</script>

<style lang="scss" scoped>
  #section1 {
    p {
      font-weight: 200;
      font-size: 1.3rem;
    }
  }

  p {
    font-size: 1.2rem;
  }
</style>
