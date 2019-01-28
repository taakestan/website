<template>
  <div class="container">
    <div class="columns is-mobile">
      <div class="column">
        <card
          title="وبینار آشنایی با زبان Go" provider="امیر رضا قادری"
          image-path="/img/async-data-with-nuxtjs.png">
          در این وبینار قصد داریم نگاهی داشته باشیم به زبان برنامه‌نویسی Go. از آنجایی که تعریف و تمجدید از تکنولوژی های
          تازه و هیجان برانگیز کار آسانی است، در این ارائه سعی خواهیم داشت که موضوع را با رویکردی منتقدانه بررسی کنیم تا
          سوای از امکانات جالب و مفید این زبان، با نقاط ضعف و کمبودهای آن نیز آشنا شویم!
        </card>
      </div>
      <div class="column">
        <card
          title="مروری بر CQRS" provider="ناصر صفری نیا"
          image-path="/img/nuxt-fundamentals.png">
          در این وبینار قصد داریم علت نیاز به الگوی CQRS در پروژه های مبتنی بر DDD را بررسی کنیم، خواستگاه CQRS را از
          دیدگاه پدید آورنده ی آن (Grek Young) معرفی کرده و ملزومات استفاده از Event Sourcing به عنوان مکانیزم ذخیره
          سازی را بیان کنیم.
        </card>
      </div>
      <div class="column">
        <card
          title="مقدمه ای بر DevOps" provider="امیر مقیمی"
          image-path="/img/static-site-generation.png">
          در این وبینار قصد داریم به این موضوع کلیدی در تولید نرم افزار بپردازیم که چرا علیرغم تمام تلاشها، وعده ها و
          حتی در مواردی با حضور معماران فراوان معمولا در نهایت به جای یک پارک آبی زیبا، یک باتلاق ترسناک ساخته میشود.
          بحث میکنیم که DevOps چیست و چگونه به ما کمک میکند شرکتی به بزرگی آمازون را با پویایی زیاد اداره کنیم.
        </card>
      </div>
    </div>
  </div>
</template>

<script>
  import Card from "../../components/Card";

  export default {
    name: "index",
    components: {Card},
  }
</script>

<style scoped lang="scss">
  .container {
    margin-top: 1rem;
  }

  .media-content {
    text-align: right;
  }
</style>
