<template>
  <div class="container mt-3">
    <div class="d-flex justify-content-between">
      <h3>لیست وبینار ها</h3>
      <nuxt-link
        class="btn btn-success"
        to="/admin/webinars/create">
        ایجاد وبینار
      </nuxt-link>
    </div>
    <div class="row mt-3">
      <div class="col-lg-4 col-md-6 mb-3" v-for="webinar in webinars.all">
        <webinar :webinar="webinar" :href="'/admin/webinars/' + webinar.id"/>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import Webinar from "~/components/Webinar";
  export default {
		name: "index",
    components: {Webinar},
    layout: 'admin',
    computed: mapState(['webinars', 'providers']),
	}
</script>

<style scoped>

</style>
