<template>
  <nav class="navbar">
    <div class="container">
      <nuxt-link to="/" class="navbar-brand" title="تاک">
        <strong class="h1">تـــاکــــــــ‌</strong>
      </nuxt-link>
      <div class="navbar-nav-scroll">
        <ul class="navbar-nav bd-navbar-nav flex-row">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/webinars" title="وبینار های قبلی">وبینار های قبلی</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link " to="/contact" title="تماس با ما">تماس با ما</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link " to="/about" title="درباره پروژه تاک">درباره پروژه تاک</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link " to="/providers" title="ارائه کنندگان">ارائه کنندگان</nuxt-link>
          </li>
        </ul>
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
    z-index: 1;
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
