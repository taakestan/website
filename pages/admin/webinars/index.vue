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
           v-for="webinar in webinars" :key="webinar.id">
        <webinar-card :webinar="webinar" :href="'/admin/webinars/' + webinar.slug"/>
      </div>
    </div>
    <pagination :meta="meta"/>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import WebinarCard from "../../../components/WebinarCard";
  import Pagination from "../../../components/Pagination";

  export default {
    name: "index",
    watchQuery: ['page'],
    components: {Pagination, WebinarCard},
    layout: 'admin',
    async asyncData({app, query}) {
      const queryString = query.page ? `?page=${query.page}` : '';
      const {data, links, meta} = await app.$axios.$get(`/api/webinars${queryString}`);
      return {webinars: data, links: links, meta: meta}
    }
  }
</script>

<style scoped>

</style>
