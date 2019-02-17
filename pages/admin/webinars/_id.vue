<template>
  <div class="container my-3">
    <portlet>
      <template slot="title">
        ایجاد وبینار
      </template>
      <template slot="body">
        <form class="mt-4">
          <h5>اطلاعات وبینار</h5>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label>عنوان وبینار</label>
              <input class="form-control" v-model="webinar.title">
            </div>
            <div class="form-group col-md-4">
              <label>slug</label>
              <input class="form-control" v-model="webinar.slug">
            </div>
            <div class="form-group col-md-4">
              <label>ارائه دهنده</label>
              <select class="form-control" v-model="webinar.provider_id">
                <option selected disabled>انتخاب کنید ...</option>
                <option v-for="(provider, id) in providers.all" :value="id">
                  {{ provider.first_name + ' ' + provider.last_name }}
                </option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label>تاریخ برگزاری وبینار</label>
              <input type="date" class="form-control" v-model="webinar.created_at">
            </div>
            <div class="form-group col-md-4">
              <label>بنر وبینار</label>
              <input class="form-control" v-model="webinar.banner">
            </div>
            <div class="form-group col-md-4">
              <label>تصویر وبینار</label>
              <input class="form-control" v-model="webinar.image">
            </div>
          </div>
          <hr>
          <h5>محتوای وبینار</h5>
          <div class="form-group">
            <label>توضیحات</label>
            <textarea class="form-control" rows="3" v-model="webinar.description"></textarea>
          </div>
          <div class="form-group">
            <label>متن وبینار</label>
            <div class="quill-editor"
                 v-model="webinar.content"
                 v-quill:myQuillEditor="editorOption">
            </div>
          </div>
          <hr>
          <div class="d-flex justify-content-between">
            <h5>لینک های وبینار</h5>
            <div class="btn btn-outline-success" @click="addLink">افزودن لینک</div>
          </div>
          <div class="form-row" v-for="(link, index) in webinar.links">
            <div class="form-group col-md-4">
              <label>عنوان لینک</label>
              <input class="form-control" v-model="link.title">
            </div>
            <div class="form-group col-md-8">
              <label>آدرس لینک</label>
              <div class="d-flex">
                <input class="form-control ml-1" v-model="link.value">
                <div class="btn btn-outline-warning" @click="removeLink(index)">حذف</div>
              </div>
            </div>
          </div>
        </form>
      </template>
      <template slot="footer">
        <button class="btn btn-success" @click="submit" v-if="method === 'create'">ایجاد وبینار</button>
        <button class="btn btn-primary" @click="update" v-else>به‌روز رسانی وبینار</button>
      </template>
    </portlet>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Portlet from "../../../components/admin/Portlet";

  export default {
    name: "show",
    components: {Portlet},
    layout: 'admin',
    computed: mapState(['providers']),
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
      addLink() {
        this.webinar.links.push({
          title: '',
          value: ''
        });
      },
      removeLink(index) {
        this.webinar.links.splice(index, 1);
      },
      update() {
        const data = {id: this.$route.params.id, ...this.webinar};
        this.$store.dispatch("webinars/updateItem", data).then(() => {
          this.$router.push("/admin/webinars");
        });
      },
      submit() {
        this.$store.dispatch("webinars/addItem", this.webinar).then(() => {
          this.$router.push("/admin/webinars");
        });
      }
    },
    asyncData({params, store}) {
      if (params.id !== 'create') {
        return {
          method: 'update',
          webinar: Object.assign({}, store.state.webinars.all[params.id])
        };
      }
      return {
        method: 'create',
        webinar: {
          title: '',
          slug: '',
          provider_id: '',
          created_at: '',
          image: '',
          banner: '',
          description: '',
          content: '',
          links: []
        },
      }
    }
  }
</script>

<style>
  .ql-editor {
    min-height: 300px;
    max-height: 400px;
    overflow: auto;
    font-family: Vazir;
  }

  .ql-picker-label:before {
    padding-right: 1.2rem;
  }

  .form-group > .ql-snow {
    border-color: #ebedf2;
  }

  .ql-toolbar {
    border-radius: .25rem .25rem 0 0;
  }

  .ql-container {
    border-radius: 0 0 .25rem .25rem;
  }
</style>
