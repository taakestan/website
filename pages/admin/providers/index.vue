<template>
  <div class="container mt-3">
    <div class="d-flex justify-content-between">
      <h3>لیست وبینار ها</h3>
      <nuxt-link
        class="btn btn-success"
        to="/admin/providers/create">
        اضافه کردن ارائه دهنده
      </nuxt-link>
    </div>
    <div class="row mt-3">
      <nuxt-link
        tag="div"
        class="col-md-4 mb-3"
        :to="'/admin/providers/' + id"
        v-for="(provider, id) in providers.all">
        <provider :provider="provider"/>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
	import Provider from "~/components/Provider";
  export default {
		name: "index",
    components: {Provider},
    layout: 'admin',
    computed: mapState(['providers'])
	}
</script>

<style scoped>

</style>
