require('dotenv').config();
const hostURL = process.env.hostURL || '';
import modules from './config/modules';
import fire from './config/fire';
import head from './config/head';

export default {
  mode: 'universal',

  meta: {},

  head,

  loading: {color: '#34bfa3'},

  css: [
    {src: '@/assets/scss/app.scss', lang: 'scss'},
  ],

  plugins: [
    '~/plugins/axios',
  ],

  modules,

  fire,

  toast: {
    duration: 2000,
    position: 'bottom-left'
  },

  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: hostURL,
    cacheTime: 1000 * 60 * 15,
    gzip: true,
  },

  build: {
    extend(config, ctx) {
    }
  }
};
