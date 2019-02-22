<template>
  <div class="container mt-3">
    <div class="d-flex justify-content-between">
      <h3>لیست کاربران</h3>
      <nuxt-link
              class="btn btn-success"
              to="/admin/admins/create">
        اضافه کردن مدیر
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    layout: 'admin',
  }
</script>

<style scoped>

</style>
