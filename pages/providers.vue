<template>
  <div>
    <section class="section section--dark section--gradient section--gradient-one" id="section1">
      <navbar/>
      <div class="container text-center text-white pt-5">
        <h1 class="display-3 mb-3">ارائه کنندگان</h1>
        <p>شما هم می توانید به افراد ارائه کننده در تاک بپیوندید تنها کافی است با ما تماس بگیرید.</p>
      </div>
    </section>
    <section class="section section--white pt-0 section--pb-lg">
      <div class="container">
        <div class="row">
          <div class="col-md-4" v-for="provider in providers.all">
            <provider :provider="provider"/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import Navbar from "~/components/Navbar";
  import Provider from "~/components/Provider";

  export default {
    name: "providers",
    components: {Provider, Navbar},
    computed: {
      ...mapState(['providers'])
    },
    head () {
      return {
        title: 'ارائه کنندگان | پروژه تاک',
      }
    }
  }
</script>

<style scoped lang="scss">

  #section1 {
    p {
      font-size: 1.2rem;
    }
    &:before {
      background-image: url(/img/backgrounds/waves-1.svg), linear-gradient(326deg, #ffb964 20%, #421a82 92%);
    }
  }
</style>
