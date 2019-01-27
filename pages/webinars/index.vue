<template>
  <div class="container">
    <div class="columns is-mobile">
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="/img/async-data-with-nuxtjs.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">وبینار آشنایی با زبان Go</p>
                <p class="subtitle is-6">امیر رضا قادری</p>
              </div>
            </div>

            <div class="content">
              در این وبینار قصد داریم نگاهی داشته باشیم به زبان برنامه‌نویسی Go. از آنجایی که تعریف و تمجدید از تکنولوژی های تازه و هیجان برانگیز کار آسانی است، در این ارائه سعی خواهیم داشت که موضوع را با رویکردی منتقدانه بررسی کنیم تا سوای از امکانات جالب و مفید این زبان، با نقاط ضعف و کمبودهای آن نیز آشنا شویم!
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="/img/nuxt-fundamentals.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">مروری بر CQRS</p>
                <p class="subtitle is-6">ناصر صفری نیا</p>
              </div>
            </div>

            <div class="content">
              در این وبینار قصد داریم علت نیاز به الگوی CQRS در پروژه های مبتنی بر DDD را بررسی کنیم، خواستگاه CQRS را از دیدگاه پدید آورنده ی آن (Grek Young) معرفی کرده و ملزومات استفاده از Event Sourcing به عنوان مکانیزم ذخیره سازی را بیان کنیم.
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="/img/static-site-generation.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">مقدمه ای بر DevOps</p>
                <p class="subtitle is-6">امیر مقیمی</p>
              </div>
            </div>

            <div class="content">
              در این وبینار قصد داریم به این موضوع کلیدی در تولید نرم افزار بپردازیم که چرا علیرغم تمام تلاشها، وعده ها و حتی در مواردی با حضور معماران فراوان معمولا در نهایت به جای یک پارک آبی زیبا، یک باتلاق ترسناک ساخته میشود. بحث میکنیم که DevOps چیست و چگونه به ما کمک میکند شرکتی به بزرگی آمازون را با پویایی زیاد اداره کنیم.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "index",
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
