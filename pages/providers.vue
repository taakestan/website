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
    head() {
      return {
        title: 'ارائه کنندگان',
      }
    },
    mounted() {
      this.$fireStore.collection("providers").add({
        "first_name": "رضا",
        "last_name": "یوسف زاده",
        "biography": "<ul><li class=\"ql-align-right ql-direction-rtl\"><span style=\"background-color: rgba(255, 255, 255, 0);\">فارغ التحصیل مهندسی نرم افزار. دانشگاه تهران</span></li><li class=\"ql-align-right ql-direction-rtl\"><span style=\"background-color: rgba(255, 255, 255, 0);\">مهندس نرم افزار. شرکت Genix Ventures، ملبورن، استرالیا</span></li></ul>",
        "social_pages": {},
        "image": "/media/providers/yousef-zadeh.jpeg"
      }).then(function (docRef) {
        console.log(docRef.id);
        console.log("Document written with ID: ", docRef.id);
      }).catch(function (error) {
        console.error("Error adding document: ", error);
      });
      // this.$fireStore.collection('providers').get().then((querySnapshot) => {
      //   querySnapshot.forEach((doc) => {
      //     console.log(doc.data());
      //   });
      // });
    },
    async asyncData({app}) {
      // const {data} = await app.$axios.$get(`/api/providers`);
      return {providers: []}
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
