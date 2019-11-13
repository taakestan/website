<template>
	<b-navbar toggleable="lg" type="dark">
		<b-container>
			<nuxt-link to="/" class="navbar-brand" title="تاک">
				<strong class="h1">تـــاکــــــــ‌</strong>
			</nuxt-link>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav class="mr-auto text-white">
					<b-nav-item>
						<nuxt-link class="nav-link" to="/webinars" title="وبینار های قبلی">وبینار های قبلی</nuxt-link>
					</b-nav-item>
					<b-nav-item>
						<nuxt-link class="nav-link" to="/contact" title="تماس با ما">تماس با ما</nuxt-link>
					</b-nav-item>
					<b-nav-item>
						<nuxt-link class="nav-link" to="/about" title="درباره پروژه تاک">درباره پروژه تاک</nuxt-link>
					</b-nav-item>
					<b-nav-item>
						<nuxt-link class="nav-link" to="/providers" title="ارائه کنندگان">ارائه کنندگان</nuxt-link>
					</b-nav-item>
				</b-navbar-nav>
			</b-collapse>
		</b-container>
	</b-navbar>
</template>

<script>
export default {
	name: "Navbar"
};
</script>

<style scoped lang="scss">
.navbar {
	z-index: 1;
	background: none;
}

.nuxt-link-exact-active {
	color: #fff !important;
	font-weight: 700;
}
</style>
