<template>
  <nav id="navbar" class="navbar is-spaced">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item">
          <h1>تـــاکــــــــ‌</h1>
        </nuxt-link>
      </div>

      <div id="navMenuDocumentation" class="navbar-menu">
        <div class="navbar-start">
          <nuxt-link class="navbar-item bd-navbar-item-documentation" to="/webinars">
            <span class="is-hidden-touch is-hidden-widescreen">
              وبینار ها
            </span>
            <span class="is-hidden-desktop-only">
              وبینار های قبلی
            </span>
          </nuxt-link>


          <nuxt-link class="navbar-item" active-class="" to="/contact-us">
            <span>تماس با ما</span>
          </nuxt-link>

          <nuxt-link class="navbar-item" to="/about-taak">
            <span>درباره پروژه تاک</span>
          </nuxt-link>

          <nuxt-link class="navbar-item" to="/provider">
            <span>ارائه کنندگان</span>
          </nuxt-link>

        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "Navbar"
  }
</script>

<style scoped lang="scss">
  .navbar {
    background: none;
  }
  .navbar-item, .navbar-link {
    color: #ddd;
  }
  .navbar-brand {
    .navbar-item {
      font-size: 2rem;
    }
  }
  .nuxt-link-exact-active {
    color: #fff;
    font-weight: 700;
  }
</style>
