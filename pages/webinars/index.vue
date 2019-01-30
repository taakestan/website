<template>
  <div class="container">
    <div class="columns is-multiline">
      <div class="column is-full-mobile is-half-tablet is-one-third-desktop" v-for="webinar in webinars">
        <card
          :title="webinar.title" :provider="webinar.provider"
          :image-path="webinar.image" :href="'webinars/' + webinar.slug">
            {{ webinar.description }}
        </card>
      </div>
    </div>
  </div>
</template>

<script>
  import Card from "../../components/Card";
  import {mapState} from 'vuex';

  export default {
    name: "index",
    components: {Card},
    computed: {
      ...mapState(['webinars'])
    }
  }
</script>

<style scoped lang="scss">
  .container {
    margin-top: 1rem;
  }

  .column > .card {
    height: 100%;
  }
</style>
