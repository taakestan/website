<template>
  <div class="container my-3">
    <portlet>
      <template slot="title">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            {{ method === 'create' ? 'ایجاد' : 'ویرایش' }}
            وبینار
          </div>
          <div class="actions">
            <button @click="deleteItem"
                    class="btn btn-outline-danger"
                    v-if="method === 'update'">حذف وبینار</button>
            <button class="btn btn-success" @click="createItem" v-if="method === 'create'">ایجاد وبینار</button>
            <button class="btn btn-primary" @click="updateItem" v-else>به‌روز رسانی وبینار</button>
          </div>
        </div>
      </template>
      <template slot="body">
        <form class="mt-4">
          <h5>اطلاعات وبینار</h5>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label>عنوان وبینار</label>
              <input class="form-control" v-model="webinar.title"
                     :class="{'is-invalid': !!errors.all.title}">
              <form-control-feedback :errors="errors.all" field="title" />
            </div>
            <div class="form-group col-md-4">
              <label>برچسب</label>
              <input class="form-control" v-model="webinar.label"
                     :class="{'is-invalid': !!errors.all.label}">
              <form-control-feedback :errors="errors.all" field="label" />
            </div>
            <div class="form-group col-md-4">
              <label>ارائه دهنده</label>
              <select class="form-control" v-model="webinar.provider_id"
                      :class="{'is-invalid': !!errors.all.provider_id}">
                <option selected disabled>انتخاب کنید ...</option>
                <option v-for="provider in providers.all" :value="provider.id">
                  {{ provider.first_name + ' ' + provider.last_name }}
                </option>
              </select>
              <form-control-feedback :errors="errors.all" field="provider_id" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label>تاریخ برگزاری وبینار</label>
              <input type="date" class="form-control"
                     v-model="webinar.holding_at"
                     :class="{'is-invalid': !!errors.all.holding_at}">
              <form-control-feedback :errors="errors.all" field="holding_at" />
            </div>
            <div class="form-group col-md-4">
              <label>بنر وبینار</label>
              <div class="custom-file">
                <input type="file"
                       class="custom-file-input"
                       @change="processFile('banner')"
                       :class="{'is-invalid': !!errors.all.banner}">
                <label class="custom-file-label">انتخاب فایل</label>
              </div>
              <form-control-feedback :errors="errors.all" field="banner" />
            </div>
            <div class="form-group col-md-4">
              <label>تصویر وبینار</label>
              <div class="custom-file">
                <input type="file"
                       class="custom-file-input"
                       @change="processFile('image')"
                       :class="{'is-invalid': !!errors.all.image}">
                <label class="custom-file-label">انتخاب فایل</label>
              </div>
              <form-control-feedback :errors="errors.all" field="image" />
            </div>
          </div>
          <hr>
          <h5>محتوای وبینار</h5>
          <div class="form-group">
            <label>توضیحات</label>
            <textarea class="form-control"
                      rows="3" v-model="webinar.description"
                      :class="{'is-invalid': !!errors.all.description}"></textarea>
            <form-control-feedback :errors="errors.all" field="description" />
          </div>
          <div class="form-group">
            <label>متن وبینار</label>
            <div class="quill-editor"
                 v-model="webinar.content"
                 v-quill:myQuillEditor="editorOption">
            </div>
            <form-control-feedback :errors="errors.all" field="content" />
          </div>
          <hr>
          <h5>تصاویر وبینار</h5>
          <div class="row">
            <div class="col-lg-8">
              <span>بنر وبینار</span>
              <img class="img-fluid rounded" :src="webinar.banner" alt="">
            </div>
            <div class="col-lg-4">
              <img class="img-fluid rounded" :src="webinar.image" alt="">
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
    </portlet>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Portlet from "../../../components/admin/Portlet";
  import FormControlFeedback from "../../../components/Form/FormControlFeedback";

  export default {
    name: "show",
    components: {FormControlFeedback, Portlet},
    layout: 'admin',
    computed: mapState(['providers', 'errors']),
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
      processFile(field) {
        const reader = new FileReader();
        reader.onload = () => {
          this.webinar[field] = reader.result;
        };
        reader.readAsDataURL(event.target.files[0]);
      },
      deleteItem() {
        this.$store.dispatch("webinars/deleteItem", this.$route.params.id)
          .then(() => {
            this.$toast.success('وبینار با موفقیت حذف شد.');
            this.$router.push("/admin/webinars");
          });
      },
      updateItem() {
        const data = {id: this.$route.params.id, ...this.webinar};
        this.$store.dispatch("webinars/updateItem", data)
          .then(() => {
            this.$toast.success('وبینار با موفقیت آپدیت شد.');
            this.$router.push("/admin/webinars");
          });
      },
      createItem() {
        this.$store.dispatch("webinars/createItem", this.webinar)
          .then(() => {
            this.$toast.success('وبینار با موفقیت ایجاد شد.');
            this.$router.push("/admin/webinars");
          });
      }
    },
    async asyncData({app, params}) {
      if (params.id !== 'create') {
        const {data} = await app.$axios.$get(`api/webinars/${params.slug}`);
        return {webinar: data, method: 'update'};
      }
      return {
        method: 'create',
        webinar: {
          title: '',
          label: '',
          provider_id: '',
          holding_at: '',
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
