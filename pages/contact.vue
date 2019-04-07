<template>
  <div>
    <section id="section1" class="section section--dark section--gradient section--gradient-two">
      <navbar/>
      <div class="container text-center text-white">
        <h1 class="display-3 pt-5">تماس با ما</h1>
        <p>در این صفحه میتوانید اطلاعات ارتباطی تاک را مشاهده کنید</p>
      </div>
    </section>
    <section class="section section--white pt-0 section--pb-lg" id="section2">
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
    </section>
  </div>
</template>

<script>
	import Navbar from "../components/Navbar";
  export default {
		name: "contact-us",
    components: {Navbar},
    head () {
      return {
        title: 'تماس با ما',
      }
    }
  }
</script>

<style lang="scss" scoped>

  #section2 {
    font-size: 1.2rem;
  }
</style>
