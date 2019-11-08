<template>
	<div>
		<section class="section section--dark section--gradient section--gradient-one" id="section1">
			<navbar />
			<b-container class="text-white pt-5">
				<b-row>
					<b-col md="6">
						<h1 class="display-3 mb-5">وبینار های برگزار شده</h1>
						<p>
							پروژه دانش آزاد تاک با هدف انتقال دانش میان فارسی زبانان شکل گرفته است. این پروژه قصد دارد تا پلی میان
							متخصصان و "دانش جو" های فارسی زبان ایجاد کند تا با استفاده از این بستر مجازی به تبادل تجربه و دانش بپردازند.
						</p>
					</b-col>
				</b-row>
			</b-container>
		</section>
		<section class="section section--white pt-0 section--pb-lg">
			<b-container>
				<b-row>
					<b-col md="6" lg="4" class="my-2" v-for="(webinar, index) in webinars" :key="index">
						<webinar-card :webinar="webinar" :href="'/webinars/' + webinar.slug" />
					</b-col>
				</b-row>
				<pagination :meta="meta" />
			</b-container>
		</section>
	</div>
</template>

<script>
import _ from "lodash";
import Navbar from "~/components/layouts/Navbar";
import Pagination from "~/components/Pagination";
import WebinarCard from "~/components/WebinarCard";

function getPaginatedItems(items, page = 1, pageSize = 6) {
	const offset = (page - 1) * pageSize;
	const pagedItems = _.drop(items, offset).slice(0, pageSize);
	return {
		data: pagedItems,
		meta: {
			total: items.length,
			per_page: pageSize,
			current_page: page,
			last_page: Math.ceil(items.length / pageSize)
		}
	};
}

export default {
	name: "index",
	watchQuery: ["page"],
	components: { Pagination, WebinarCard, Navbar },
	head() {
		return {
			title: "وبینار ها"
		};
	},
	asyncData({ store, query }) {
		const data = getPaginatedItems(store.state.webinars.all, query.page || 1);
		return {
			meta: data.meta,
			webinars: data.data
		};
	}
};
</script>

<style scoped lang="scss">
#section1 {
	p {
		color: #fffc;
		font-size: 1.3rem;
	}

	&:before {
		background-image: url(~assets/svg/backgrounds/waves-2.svg),
			linear-gradient(326deg, #009688 20%, #1a1c82 92%);
	}
}
</style>
