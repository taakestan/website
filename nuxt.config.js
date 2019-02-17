const pkg = {
  name: 'پروژه دانش آزاد تاک',
  description: ''
};


module.exports = {
  mode: 'universal',

  head: {
    title: pkg.name,
    htmlAttrs: {
      dir: 'rtl',
      lang: 'fa'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  loading: {color: '#34bfa3'},

  css: [
    {src: '@/assets/scss/app.scss', lang: 'scss'},
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    'quill/dist/quill.core.css'
  ],

  plugins: [
    {src: '~plugins/quill-plugin.js', ssr: false}
  ],

  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/toast',
  ],

  axios: {
    baseURL: 'https://taak-website.firebaseio.com/'
  },

  build: {
    extend(config, ctx) {
    }
  }
};
