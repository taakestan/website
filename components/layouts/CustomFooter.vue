<template>
	<footer class="p-4">
		<b-container class="container">
			<b-row>
				<b-col>
					<div class="title">ارتباط بیشتر</div>
					<div class="item">
						<nuxt-link :to="{name: 'contact'}">تماس با ما</nuxt-link>
					</div>
					<div class="item">
						<nuxt-link :to="{name: 'about'}">درباره ما</nuxt-link>
					</div>
				</b-col>
				<b-col>
					<div class="title">آشنایی بیشتر</div>
					<div class="item">
						<nuxt-link :to="{name: 'webinars'}">وبینار های برگزار شده</nuxt-link>
					</div>
					<div class="item">
						<nuxt-link :to="{name: 'providers'}">ارائه کنندگان</nuxt-link>
					</div>
				</b-col>
			</b-row>
			<b-row class="mt-5 justify-content-between">
				<div class="description">
					<span class="ml-3" dir="ltr">©TaakProject.ir 2012 - 2019</span>
					<span>کلیه حقوق مربوط به پروژه دانش آزاد تاک می باشد</span>
				</div>
				<div class="socials d-flex">
					<div class="social">
						<a
							class="SocialIcon js-social-media"
							target="_blank"
							title="Follow us on Twitter"
							data-social="Twitter"
						>
							<svg class="SocialIcon-svg" width="100%" height="100%" viewBox="0 0 25 25">
								<path
									class="SocialIcon-path"
									d="M25 4.7c-.9.4-1.9.7-2.9.8 1.1-.6 1.9-1.7 2.3-2.8-1 .6-2.1 1-3.3 1.2-1-1-2.3-1.6-3.7-1.6-2.8 0-5.1 2.3-5.1 5.1 0 .4 0 .8.1 1.2-4.3-.2-8-2.3-10.6-5.4C1.3 4 1 4.9 1 5.8c0 1.8 1 3.4 2.3 4.3-.8 0-1.6-.2-2.3-.6v.1c0 2.4 1.7 4.6 4.1 5-.4.1-.9.2-1.4.2-.3 0-.6 0-1-.1.7 2.1 2.6 3.5 4.8 3.6-1.8 1.4-4.1 2.2-6.4 2.2-.4 0-.8 0-1.2-.1 2.3 1.5 5.1 2.3 7.9 2.3 9.4 0 14.6-7.8 14.6-14.6v-.7c1-.7 1.9-1.6 2.6-2.7"
									fill="#9095b0"
								/>
							</svg>
						</a>
					</div>
					<div class="social">
						<a
							class="SocialIcon js-social-media"
							target="_blank"
							title="Find us on Facebook"
							data-social="Facebook"
						>
							<svg class="SocialIcon-svg" width="100%" height="100%" viewBox="0 0 25 25">
								<path
									class="SocialIcon-path"
									d="M1.4 25C.6 25 0 24.4 0 23.6V1.4C0 .6.6 0 1.4 0h22.2c.8 0 1.4.6 1.4 1.4v22.2c0 .8-.6 1.4-1.4 1.4h-6.4v-9.7h3.3l.5-3.8h-3.7V9.1c0-1.1.3-1.8 1.9-1.8h2V3.9c-.3 0-1.5-.1-2.9-.1-2.9 0-4.9 1.8-4.9 5v2.8h-3.3v3.8h3.3V25h-12z"
									fill="#9095b0"
								/>
							</svg>
						</a>
					</div>
					<div class="social">
						<a
							class="SocialIcon js-social-media"
							target="_blank"
							title="Check our LinkedIn"
							href="https://www.linkedin.com/company/taakporject"
							rel="nofollow"
						>
							<svg class="SocialIcon-svg" width="95%" height="95%" viewBox="0 0 25 25">
								<path
									class="SocialIcon-path"
									d="m18.377 7.475c2.01 0 3.611.506 4.815 1.523 1.205 1.02 1.808 2.576 1.808 4.682v10.659c0 .166-.069.32-.199.453-.132.133-.285.2-.451.2h-4.582c-.169 0-.315-.067-.437-.2-.119-.133-.182-.286-.182-.453v-9.637c0-.806-.145-1.426-.434-1.853-.291-.423-.881-.636-1.768-.636-.563 0-1.03.093-1.41.28-.38.187-.682.436-.897.746-.216.316-.365.693-.451 1.127-.086.436-.129.906-.129 1.407v8.567c0 .166-.063.32-.195.453-.132.133-.281.2-.454.2h-4.453c-.169 0-.318-.067-.451-.2-.136-.133-.199-.286-.199-.453v-15.813c0-.167.063-.32.199-.453.132-.13.281-.2.451-.2h4.328c.348 0 .544.133.586.407.043.27.063.526.063.777.603-.567 1.288-.969 2.052-1.212.768-.244 1.563-.367 2.384-.367m-13.11.4c.169 0 .318.063.451.194.132.126.199.28.199.46v15.813c0 .166-.067.32-.199.453-.132.133-.281.2-.451.2h-4.456c-.166 0-.318-.067-.451-.2-.129-.133-.199-.286-.199-.453v-15.813c0-.167.069-.32.199-.453.132-.13.285-.2.451-.2h4.456m-2.251-7.881c.41 0 .805.084 1.172.247.371.166.695.383.976.653.278.274.493.594.648.967.153.373.229.767.229 1.183 0 .413-.076.803-.229 1.169-.156.367-.371.689-.648.96-.281.27-.605.487-.976.653-.367.167-.762.247-1.172.247-.414 0-.801-.08-1.166-.247-.365-.166-.682-.383-.95-.653-.268-.27-.486-.593-.652-.96-.162-.367-.246-.756-.246-1.169 0-.417.082-.809.246-1.183.166-.373.384-.693.652-.967.268-.27.586-.486.95-.653.365-.164.752-.247 1.166-.247"
									fill="#9095b0"
								/>
							</svg>
						</a>
					</div>
				</div>
			</b-row>
		</b-container>
	</footer>
</template>

<script>
export default {
	name: "CustomFooter"
};
</script>

<style lang="scss" scoped>
.row {
	> .col {
		> .title {
			font-weight: 500;
			font-size: 1.1rem;
			margin-bottom: 1rem;
		}
		> .item {
			color: #6c718b;
			line-height: 2rem;
		}
		+ .col {
			margin-right: 0.5rem;
		}
	}
	> .description {
		color: #a4a7c5;
		a {
			color: #a4a7c5;
			margin-right: 1rem;
			text-decoration: none;
		}
	}
	> .socials {
		> .social {
			width: 2.2rem;
			+ .social {
				margin-right: 2rem;
			}
		}
	}
}
</style>
