<template>
  <div class="container mt-3">
    <h3>ایجاد وبینار</h3>
    <form class="mt-4">
      <h5>اطلاعات وبینار</h5>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label>عنوان وبینار</label>
          <input class="form-control">
        </div>
        <div class="form-group col-md-6">
          <label>slug</label>
          <input class="form-control">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label>ارائه دهنده</label>
          <select class="form-control">
            <option selected disabled>انتخاب کنید ...</option>
            <option v-for="(provider, id) in providers.all" :value="id">
              {{ provider.first_name + ' ' + provider.last_name }}
            </option>
          </select>
        </div>
        <div class="form-group col-md-6">
          <label>تاریخ وبینار</label>
          <input type="date" class="form-control">
        </div>
      </div>
      <hr>
      <h5>محتوای وبینار</h5>
      <div class="form-group">
        <label>توضیحات</label>
        <textarea class="form-control" rows="3" required></textarea>
      </div>
      <div class="form-group">
        <label>متن وبینار</label>
        <textarea class="form-control" rows="10" required></textarea>
      </div>
      <hr>
      <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
	export default {
		name: "create",
    layout: 'admin',
    computed: mapState(['providers'])
	}
</script>

<style scoped>

</style>
