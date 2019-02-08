<template>
  <nav class="navbar">
    <div class="container">
      <nuxt-link to="/" class="navbar-brand">
        <h1>تـــاکــــــــ‌</h1>
      </nuxt-link>
      <div class="navbar-nav-scroll">
        <ul class="navbar-nav bd-navbar-nav flex-row">
          <li class="nav-item">
            <nuxt-link class="nav-link " to="/webinars">وبینار های قبلی</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link " to="/contact-us">تماس با ما</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link " to="/about-taak">درباره پروژه تاک</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link " to="/provider">ارائه کنندگان</nuxt-link>
          </li>
        </ul>
      </div>

      <!--<div id="navMenuDocumentation" class="navbar-menu">-->
        <!--<div class="navbar-start">-->
          <!--<nuxt-link class="navbar-item bd-navbar-item-documentation" to="/webinars">-->
            <!--<span class="is-hidden-touch is-hidden-widescreen">-->
              <!--وبینار ها-->
            <!--</span>-->
            <!--<span class="is-hidden-desktop-only">-->
              <!--وبینار های قبلی-->
            <!--</span>-->
          <!--</nuxt-link>-->


          <!--<nuxt-link class="navbar-item" active-class="" to="/contact-us">-->
            <!--<span>تماس با ما</span>-->
          <!--</nuxt-link>-->

          <!--<nuxt-link class="navbar-item" to="/about-taak">-->
            <!--<span>درباره پروژه تاک</span>-->
          <!--</nuxt-link>-->

          <!--<nuxt-link class="navbar-item" to="/provider">-->
            <!--<span>ارائه کنندگان</span>-->
          <!--</nuxt-link>-->

        <!--</div>-->
      <!--</div>-->
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
  .nav-link {
    color: #fffc;
    font-size: 1.1rem;
  }
  .navbar-brand {
    color: #fff;
    font-size: 2rem;
  }
  .nuxt-link-exact-active {
    color: #fff;
    font-weight: 700;
  }
</style>
