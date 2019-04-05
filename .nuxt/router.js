import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _47fe8cb9 = () => interopDefault(import('../pages/about-taak.vue' /* webpackChunkName: "pages/about-taak" */))
const _2d51b8e0 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _1494c08d = () => interopDefault(import('../pages/contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _6a7d84f0 = () => interopDefault(import('../pages/providers.vue' /* webpackChunkName: "pages/providers" */))
const _49efa1a4 = () => interopDefault(import('../pages/webinars/index.vue' /* webpackChunkName: "pages/webinars/index" */))
const _6392b1e9 = () => interopDefault(import('../pages/admin/admins/index.vue' /* webpackChunkName: "pages/admin/admins/index" */))
const _120d4812 = () => interopDefault(import('../pages/admin/login.vue' /* webpackChunkName: "pages/admin/login" */))
const _ecf78f9a = () => interopDefault(import('../pages/admin/providers/index.vue' /* webpackChunkName: "pages/admin/providers/index" */))
const _06db766e = () => interopDefault(import('../pages/admin/webinars/index.vue' /* webpackChunkName: "pages/admin/webinars/index" */))
const _3677d5f5 = () => interopDefault(import('../pages/admin/admins/create.vue' /* webpackChunkName: "pages/admin/admins/create" */))
const _3d18ab5b = () => interopDefault(import('../pages/admin/providers/_id.vue' /* webpackChunkName: "pages/admin/providers/_id" */))
const _0524d526 = () => interopDefault(import('../pages/admin/webinars/_slug.vue' /* webpackChunkName: "pages/admin/webinars/_slug" */))
const _4d5ce434 = () => interopDefault(import('../pages/webinars/_slug.vue' /* webpackChunkName: "pages/webinars/_slug" */))
const _770e2820 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/about-taak",
      component: _47fe8cb9,
      name: "about-taak"
    }, {
      path: "/admin",
      component: _2d51b8e0,
      name: "admin"
    }, {
      path: "/contact-us",
      component: _1494c08d,
      name: "contact-us"
    }, {
      path: "/providers",
      component: _6a7d84f0,
      name: "providers"
    }, {
      path: "/webinars",
      component: _49efa1a4,
      name: "webinars"
    }, {
      path: "/admin/admins",
      component: _6392b1e9,
      name: "admin-admins"
    }, {
      path: "/admin/login",
      component: _120d4812,
      name: "admin-login"
    }, {
      path: "/admin/providers",
      component: _ecf78f9a,
      name: "admin-providers"
    }, {
      path: "/admin/webinars",
      component: _06db766e,
      name: "admin-webinars"
    }, {
      path: "/admin/admins/create",
      component: _3677d5f5,
      name: "admin-admins-create"
    }, {
      path: "/admin/providers/:id",
      component: _3d18ab5b,
      name: "admin-providers-id"
    }, {
      path: "/admin/webinars/:slug",
      component: _0524d526,
      name: "admin-webinars-slug"
    }, {
      path: "/webinars/:slug",
      component: _4d5ce434,
      name: "webinars-slug"
    }, {
      path: "/",
      component: _770e2820,
      name: "index"
    }],

    fallback: false
  })
}
