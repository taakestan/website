<template>
  <div>
    <section id="section1" class="background">
      <div class="container">
        <h1>تماس با ما</h1>
      </div>
    </section>
    <div class="container">
      <p>
        برای هر یک از موارد زیر خوشحال خواهیم شد که با ما تماس بگیرید
      </p>
      <ul>
        <li>سوال در مورد وبینار های قبلی</li>
        <li>تمایل برای ارائه یک وبینار</li>
        <li>تمایل به همکاری با تیم اجرایی</li>
      </ul>
      <p>از آنجایی که تاک هنوز در مراحل اولیه حیات خود به سر می برد  از هر گونه کمک اجرایی و فکری دوستان استقبال می کند.</p>
      <p>برای تماس با ما می توانید از ایمیل admin@taakestan.com استفاده کنید</p>
      <p>همچنین می توانید با عضویت در گروه اینترنتی در تبادل نظرات شرکت کنید</p>
      <p> همچنین با مراجع به صفحه ما در فیسبوک می توانید با ما در ارتباط باشید</p>
    </div>
  </div>
</template>

<script>
	export default {
		name: "contact-us"
	}
</script>

<style lang="scss" scoped>
  #section1 {
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
</style>
