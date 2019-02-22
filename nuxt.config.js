const pkg = {
  name: 'پروژه دانش آزاد تاک',
  description: ''
};

const hostURL = 'https://api.taak-website.dev';

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
    '~/plugins/axios',
    {src: '~plugins/quill-plugin.js', ssr: false}
  ],

  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/toast',
  ],

  axios: {
    proxy: true
  },

  toast: {
    duration : 2000,
    position: 'bottom-left'
  },

  proxy: {
    '/api/': {
      target: hostURL,
      pathRewrite: {'^/api/': ''},
      secure: false
    },
    '/media/': {
      target: hostURL,
      secure: false
    },
    '/junk/': {
      target: hostURL,
      secure: false
    }
  },

  auth: {
    cookie: {
      options: {
        secure: true
      }
    },
    redirect: {
      login: '/admin/login',
      logout: '/',
      callback: '/login',
      home: '/'
    },
    token: {
      prefix: '_token.'
    },
    strategies: {
      local: {
        endpoints: {
          user: {url: '/api/user', method: 'get', propertyName: 'data'},
          login: {url: '/api/login', method: 'post', propertyName: 'data'},
          logout: {url: '/api/logout', method: 'post'},
        }
      }
    }
  },

  build: {
    extend(config, ctx) {
    }
  }
};
