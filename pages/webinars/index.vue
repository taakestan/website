<template>
  <div class="container">
    <div class="columns is-mobile">
      <div class="column" v-for="webinar in webinars">
        <card
          :title="webinar.title" :provider="webinar.provider"
          :image-path="webinar.image" :href="webinar.slug">{{ webinar.content }}</card>
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
