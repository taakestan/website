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
        <card
          :title="webinar.title" :provider="providerName(webinar.provider_id)"
          :image-path="webinar.banner" :href="'/admin/webinars/' + webinar.id">
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
    computed: mapState(['webinars', 'providers']),
    methods: {
      providerName(providerID) {
        const provider = this.providers.all[providerID];
        return provider.first_name + ' ' + provider.last_name;
      }
    }
	}
</script>

<style scoped>

</style>
