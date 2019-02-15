<template>
  <div class="container mt-3">
    <h3>اضافه کردن ارائه دهنده</h3>
    <form class="mt-5 mb-3" @submit.prevent="submit">
      <h5>اطلاعات اولیه</h5>
      <div class="form-row">
        <div class="form-group col-md-4">
          <label>نام</label>
          <input class="form-control" v-model="provider.first_name" required>
        </div>
        <div class="form-group col-md-4">
          <label>نام خانوادگی</label>
          <input class="form-control" v-model="provider.last_name" required>
        </div>
        <div class="form-group col-md-4">
          <label>slug</label>
          <input class="form-control" v-model="provider.slug" required>
        </div>
      </div>
      <div class="form-group">
        <label>آدرس تصویر</label>
        <input class="form-control" v-model="provider.image" required>
      </div>
      <div class="form-group">
        <label>بیوگرافی</label>
        <textarea class="form-control" v-model="provider.biography" rows="5" required></textarea>
      </div>
      <hr>
      <h5>اطلاعات شبکه های اجتماعی</h5>
      <div class="form-row">
        <div class="form-group col-md-4">
          <label>Facebook</label>
          <input class="form-control" v-model="provider.profiles.facebook">
        </div>
        <div class="form-group col-md-4">
          <label>Github</label>
          <input class="form-control" v-model="provider.profiles.github">
        </div>
        <div class="form-group col-md-4">
          <label>Linkedin</label>
          <input class="form-control" v-model="provider.profiles.linkedin">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-4">
          <label>Telegram</label>
          <input class="form-control" v-model="provider.profiles.telegram">
        </div>
        <div class="form-group col-md-4">
          <label>Twitter</label>
          <input class="form-control" v-model="provider.profiles.twitter">
        </div>
        <div class="form-group col-md-4">
          <label>StackOverflow</label>
          <input class="form-control" v-model="provider.profiles.stackOverflow">
        </div>
      </div>
      <hr>
      <button class="btn btn-success">ذخیره اطلاعات</button>
    </form>
  </div>
</template>

<script>
	export default {
		name: "create",
    layout: 'admin',
    data() {
		  return {
		    provider: {
		      first_name: '',
          last_name: '',
          slug: '',
          biography: '',
          image: '',
          profiles: {
            github: '',
            twitter: '',
            facebook: '',
            linkedin: '',
            telegram: '',
            stackOverflow: '',
          }
        }
      }
    },
    methods: {
		  submit() {
        this.$axios.post('providers.json', this.provider)
          .then(response => {
            this.$route.push('/admin/providers');
          })
      }
    }
	}
</script>

<style scoped>

</style>
