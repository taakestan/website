<template>
	<nuxt-link class="card" tag="div" :to="href">
		<img
			:src="imagePath"
			:srcset="
				`${imagePath}?nf_resize=fit&w=300 450w, ${imagePath}?nf_resize=fit&w=500 800w, ${imagePath} 1200w`
			"
			class="card-img-top"
			:alt="title"
		/>
		<div class="card-body">
			<h4 class="card-title" v-text="title"></h4>
			<h6 class="subtitle is-6" v-text="provider"></h6>
			<p class="card-text">
				<slot></slot>
			</p>
		</div>
	</nuxt-link>
</template>

<script>
export default {
	name: "Card",
	props: {
		title: {
			type: String
		},
		provider: {
			type: String
		},
		imagePath: {
			type: String
		},
		href: {
			type: String,
			required: true
		}
	}
};
</script>

<style lang="scss" scoped>
p {
	color: #766b93;
	font-size: 1rem;
	text-align: justify;
}
.card {
	border: none;
	height: 100%;
	cursor: pointer;
	border-radius: 0.5rem;
	box-shadow: 2px 2px 15px 0 rgba(36, 37, 38, 0.08);
	.title {
		color: #5f5676;
	}
	img {
		border-radius: 0.5rem 0.5rem 0 0;
	}
}
</style>
