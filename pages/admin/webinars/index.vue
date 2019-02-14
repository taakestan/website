<template>
  <div class="container mt-3">
    <div class="d-flex justify-content-between">
      <h3>لیست وبینار ها</h3>
      <div class="btn btn-success">ایجاد وبینار</div>
    </div>
    <div class="row mt-3">
      <div class="col-md-4 mb-3" v-for="(item, id) in items">
        <card
          :title="item.title" :provider="item.provider"
          :image-path="item.baner" :href="'/admin/webinars/' + id">
          {{ item.description }}
        </card>
      </div>
    </div>
  </div>
</template>

<script>
	import Card from "../../../components/Card";
  export default {
		name: "index",
    components: {Card},
    layout: 'admin',
    async asyncData ({ params, app }) {
      let { data } = await app.$axios.get('webinars.json');
      return { items: data }
    }
	}
</script>

<style scoped>

</style>
