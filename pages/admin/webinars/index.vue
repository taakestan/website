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
      <div class="col-xl-4 col-lg-6 mb-3"
           v-for="webinar in webinars.all" :key="webinar.id">
        <webinar-card :webinar="webinar" :href="'/admin/webinars/' + webinar.id"/>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import WebinarCard from "../../../components/WebinarCard";
  export default {
		name: "index",
    components: {WebinarCard},
    layout: 'admin',
    computed: mapState(['webinars']),
	}
</script>

<style scoped>

</style>
