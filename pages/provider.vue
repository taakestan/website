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
          <div class="col-md-4" v-for="provider in providers">
            <div class="provider-card">
              <img :src="provider.image" alt="">
              <h3 class="title" v-text="provider.name"></h3>
              <p class="text-justify" v-text="provider.description"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import Navbar from "../components/Navbar";

  export default {
    name: "provider",
    components: {Navbar},
    computed: {
      ...mapState(['providers'])
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
  .provider-card {
    padding: 1rem;
    display: flex;
    border-radius: .5rem;
    margin-top: 11rem;
    padding-top: 5rem;
    position: relative;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    box-shadow: 2px 2px 15px 0 rgba(36, 37, 38, 0.08);
    > img {
      top: -8rem;
      width: 40%;
      position: absolute;
      border-radius: 50%;
    }
  }
</style>
