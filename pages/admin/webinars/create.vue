<template>
  <div class="container mt-3">
    <div class="d-flex justify-content-between">
      <h3>ایجاد وبینار</h3>
      <div class="btn btn-info">ثبت</div>
    </div>
    <form>
      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="inputEmail4">عنوان وبینار</label>
          <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
        </div>
        <div class="form-group col-md-4">
          <label>ارائه دهنده</label>
          <select class="form-control">
            <option selected disabled>انتخاب کنید ...</option>
            <option v-for="(provider, id) in providers.all" :value="id">
              {{ provider.first_name + ' ' + provider.last_name }}
            </option>
          </select>
        </div>
        <div class="form-group col-md-4">
          <label>تاریخ وبینار</label>
          <input type="date" class="form-control">
        </div>
      </div>
      <div class="form-group">
        <label for="inputAddress">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
      </div>
      <div class="form-group">
        <label for="inputAddress2">Address 2</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputCity">City</label>
          <input type="text" class="form-control" id="inputCity">
        </div>
        <div class="form-group col-md-4">
          <label for="inputState">State</label>
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <label for="inputZip">Zip</label>
          <input type="text" class="form-control" id="inputZip">
        </div>
      </div>
      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck">
          <label class="form-check-label" for="gridCheck">
            Check me out
          </label>
        </div>
      </div>
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
