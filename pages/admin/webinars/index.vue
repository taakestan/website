<template>
  <div class="container mt-3">
    <div class="row">
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
