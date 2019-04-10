require('dotenv').config();
const hostURL = process.env.hostURL || '';

module.exports = {
  mode: 'universal',

  meta: {},

  head: {
    titleTemplate: '%s | پروژه دانش آزاد تاک',
    htmlAttrs: {
      dir: 'rtl',
      lang: 'fa'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'پروژه دانش آزاد تاک با هدف انتقال دانش میان فارسی زبانان شکل گرفته است. این پروژه قصد دارد تا پلی میان متخصصان و "دانش جو" های فارسی زبان ایجاد کند تا با استفاده از این بستر مجازی به تبادل تجربه و دانش بپردازند.'},
      {name: 'referrer', content: 'unsafe-url'},
      {property: 'og:site_name', content: 'Taak Porject'},

      // Opengraph
      {hid: 'og:type', property: 'og:type', content: 'website'},
      {hid: 'og:title', property: 'og:title', content: 'Taak Porject'},
      {hid: 'og:image', property: 'og:image', content: '/img/taak.jpg'},
      {hid: 'og:image:type', property: 'og:image:type', content: 'image/jpg'},
      {hid: 'og:image:height', property: 'og:image:height', content: '640'},
      {hid: 'og:image:width', property: 'og:image:width', content: '640'},

      // Twitter
      {hid: 'twitter:card', name: 'twitter:card', content: 'summary'},
      {hid: 'twitter:site', name: 'twitter:site', content: '@taakproject'},
      {hid: 'twitter:creator', name: 'twitter:creator', content: '@taakproject'},
      {hid: 'twitter:image:src', name: 'twitter:image:src', content: '/img/taak.jpg'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css'}
    ]
  },

  loading: {color: '#34bfa3'},

  css: [
    {src: '@/assets/scss/app.scss', lang: 'scss'},
  ],

  plugins: [
    '~/plugins/axios',
  ],

  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    '@nuxtjs/dotenv',
    '@nuxtjs/sitemap'
  ],

  toast: {
    duration: 2000,
    position: 'bottom-left'
  },

  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: hostURL,
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    exclude: [
      '/admin',
      '/admin/**',
    ],
  },

  build: {
    extend(config, ctx) {
    }
  }
};
