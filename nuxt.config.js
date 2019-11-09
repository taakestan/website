import fire from "./config/fire";
import head from "./config/head";
import toast from "./config/toast";
import modules from "./config/modules";
import sitemap from "./config/sitemap";
import plugins from "./config/plugins";
import generate from "./config/generate";
import bootstrapVue from "./config/bootstrapVue";
import pageTransition from "./config/pageTransition";

export default {
	mode: "universal",

  head,
  fire,
  toast,
	plugins,
  modules,
  sitemap,
  generate,
  bootstrapVue,
  pageTransition,

	loading: { color: "#34bfa3" },

	css: [{ src: "@/assets/scss/app.scss", lang: "scss" }],

	build: {
		extend(config, ctx) {}
	}
};
