import fire from "./config/fire";
import head from "./config/head";
import modules from "./config/modules";
import sitemap from "./config/sitemap";
import plugins from "./config/plugins";
import bootstrapVue from "./config/bootstrapVue";

export default {
	mode: "universal",

  head,
  fire,
	plugins,
  modules,
  sitemap,
  bootstrapVue,

	loading: { color: "#34bfa3" },

	css: [{ src: "@/assets/scss/app.scss", lang: "scss" }],

	toast: {
		duration: 2000,
		position: "bottom-left"
	},

	pageTransition: {
		name: "fade",
		mode: "out-in"
	},

	build: {
		extend(config, ctx) {}
	}
};
