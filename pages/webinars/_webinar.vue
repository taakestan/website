<template>

</template>

<script>
  import {mapState} from 'vuex';

	export default {
		name: "webinar",
    data() {
		  return {
		    slug: this.$router.history.current.params.webinar
      }
    },
    computed: {
      ...mapState(['webinars']),
		  webinar() {
		    return this.webinars.find(item => item.slug === this.slug);
      }
    },
    head() {
      return {
        title: this.webinar.title
      }
    },
    created() {
		  console.log(this.$router.history.current.params.webinar)
    }
  }
</script>

<style scoped>

</style>
