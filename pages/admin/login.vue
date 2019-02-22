<template>
  <div id="container"
       class="d-flex flex-column bg-white px-5 py-3 justify-content-between">

    <div id="header"></div>
    <div id="wrapper"
         class="d-flex align-items-center">
      <div class="d-flex justify-content-end w-50">
        <div class="login-form__body w-100">
          <h3 class="text-center mt-3">ورود به بخش مدیرت</h3>

          <form class="login-form__body-form py-5" autocomplete="off" @keydown.enter="submit">
            <div class="form-group">
              <input class="form-control tarhan-input" autofocus
                     placeholder="نام کاربری" v-model="form.username"
                     :class="{'is-invalid': !!errors.all.username}">
              <form-control-feedback :errors="errors.all" field="username"/>
            </div>
            <div class="form-group">
              <input class="form-control tarhan-input"
                     type="password" v-model="form.password" placeholder="رمز عبور"
                     :class="{'is-invalid': !!errors.all.password}">
              <div class="form-control-feedback"></div>
              <form-control-feedback :errors="errors.all" field="password"/>
            </div>
          </form>

          <div class="d-flex align-items-center justify-content-between">
            <a href="#" class="m-link">
              رمز عبور خود را فراموش کرده اید ؟
            </a>
            <div class="btn btn-primary rounded-pill px-3" @click="submit">ورود</div>
          </div>
        </div>
      </div>

      <div class="w-50 login-pic">
        <img src="/img/admin/servers.svg" alt="">
      </div>
    </div>
    <div id="footer" class="d-flex justify-content-between">
      <div class="footer-link">
        <a href="#" class="m-link mr-3">تماس با ما</a>
      </div>

      <div class="footer-info">
        <div class="m-footer__copyright">
          طراحی و ساخت توسط <a href="https://github.com/HamidNE" target="_blank">HamidNE</a> و <a href="https://github.com/hasanteymoori" target="_blank">Hasan Teymoori</a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import FormControlFeedback from "../../components/Form/FormControlFeedback";

  export default {
    name: "login",
    components: {FormControlFeedback},
    layout: 'free',
    data() {
      return {
        form: {
          username: '',
          password: '',
        }
      }
    },
    computed: mapState(['errors']),
    methods: {
      submit() {
        this.$auth.login({data: this.form});
      },
    }
  }
</script>

<style scoped lang="scss">

  #container {
    height: 100vh;
  }

  #wrapper {

    .login-form__body {
      padding: 4rem;
      max-width: 500px;
      border-radius: 0.6rem;
      box-shadow: 0 0 80px 0 rgba(77, 84, 124, 0.09);

      h3 {
        color: #58556d;
      }
    }

    .login-pic {
      margin-right: 5rem;

      img {
        max-width: 500px;
      }
    }
  }

  #footer {
    color: #adabc1;
  }

  .tarhan-input {
    border: none;
    direction: ltr;
    border-radius: 0;
    border-bottom: 1px solid #eeee;
  }


  /* Fixed AutoCompelet Style */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: #666 !important;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-box-shadow: 0 0 0 1000px #FFF inset !important;
  }
</style>