<template>
  <div>
    <header class="navbar navbar-dark bg-dark">
      <div class="container">
        <nuxt-link class="navbar-brand mr-0 mr-md-2" to="/admin">
          <h4 class="m-0 p-1 px-2 border rounded">Taak</h4>
        </nuxt-link>
        <div class="navbar-nav-scroll">
          <ul class="navbar-nav bd-navbar-nav flex-row">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/admin/webinars">وبینار ها</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/admin/providers">ارائه دهندگان</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <nuxt/>
  </div>
</template>

<script>
  export default {
    name: "admin"
  }
</script>

<style scoped>
  body {
    background: #f2f3f8;
  }
</style>
