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
      <div class="col-md-4 mb-3" v-for="webinar in webinars.all">
        <card
          :title="webinar.title" :provider="webinar.provider"
          :image-path="webinar.baner" :href="'/admin/webinars/' + webinar.id">
          {{ webinar.description }}
        </card>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
	import Card from "../../../components/Card";
  export default {
		name: "index",
    components: {Card},
    layout: 'admin',
    computed: mapState(['webinars'])
	}
</script>

<style scoped>

</style>
