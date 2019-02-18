<template>
  <div class="container mt-3">
    <portlet>
      <template slot="title">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            {{ method === 'create' ? 'افزودن' : 'ویرایش' }}
            ارائه دهنده
          </div>
          <button @click="deleteItem"
                  class="btn btn-outline-danger"
                  v-if="method === 'update'">حذف ارائه دهنده</button>
        </div>
      </template>
      <template slot="body">
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
          <div class="quill-editor"
               v-model="provider.biography"
               v-quill:myQuillEditor="editorOption">
          </div>
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
      </template>
      <template slot="footer">
        <button @click="updateItem"
                class="btn btn-success"
                v-if="method === 'update'">
          ویرایش اطلاعات
        </button>
        <button @click="createItem"
                class="btn btn-success" v-else>
          ذخیره اطلاعات
        </button>
      </template>
    </portlet>
  </div>
</template>

<script>
	import Portlet from "../../../components/admin/Portlet";
  export default {
		name: "create",
    components: {Portlet},
    layout: 'admin',
    data() {
		  return {
        editorOption: {
          modules: {
            toolbar: [
              ['bold'],
              ['blockquote'],
              [{'list': 'ordered'}, {'list': 'bullet'}],
              [{'indent': '-1'}, {'indent': '+1'}],
              [{'direction': 'rtl'}],
              [{'header': [1, 2, 3, 4, 5, 6, false]}],
              [{'align': []}],
              ['link', 'image', 'video'],
            ]
          }
        }
      }
    },
    methods: {
      deleteItem() {
        this.$store.dispatch("providers/deleteItem", this.$route.params.id)
          .then(() => {
            this.$toast.success('ارائه دهنده با موفقیت حذف شد.');
            this.$router.push("/admin/providers");
          });
      },
      updateItem() {
        const data = {id: this.$route.params.id, ...this.provider};
        this.$store.dispatch("providers/updateItem", data)
          .then(() => {
            this.$toast.success('ارائه دهنده با موفقیت آپدیت شد.');
            this.$router.push("/admin/providers");
          });
      },
      createItem() {
        this.$store.dispatch("providers/createItem", this.provider)
          .then(() => {
            this.$router.push("/admin/providers");
          });
      }
    },
    asyncData({params, store}) {
      if (params.id !== 'create') {
        return {
          method: 'update',
          provider: Object.assign({}, store.state.providers.all[params.id])
        };
      }
      return {
        method: 'create',
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
        },
      }
    }
	}
</script>
