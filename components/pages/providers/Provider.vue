<template>
	<div class="provider-card d-flex flex-column justify-content-center bg-white">
		<!-- <img :src="imagePath" :alt="username" /> -->
		<h3 class="title" v-text="provider.first_name + ' ' + provider.last_name"></h3>
		<div class="text-justify" v-html="provider.biography"></div>
	</div>
</template>
<script>
export default {
	name: "provider",
	props: {
		provider: {
			type: Object,
			required: true
		},
		username: {
			type: String,
			required: true
		}
	},
	computed: {
		imagePath() {
			return `/img/providers/${this.username}.jpg`;
		}
	}
};
</script>
<style scoped lang="scss">
.provider-card {
	margin-top: 11rem;
	position: relative;
	align-items: center;
	border-radius: 0.5rem;
	padding: 5rem 1rem 1rem;
	height: calc(100% - 11rem);
	box-shadow: 2px 2px 15px 0 rgba(36, 37, 38, 0.08);

	> img {
		top: -8rem;
		width: 40%;
		position: absolute;
		border-radius: 50%;
	}
}
</style>
