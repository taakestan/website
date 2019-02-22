<template>
  <div class="container mt-3">
    <portlet>
      <template slot="title">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            {{ method === 'create' ? 'افزودن' : 'ویرایش' }}
            ارائه دهنده
          </div>
          <div class="action">
            <button @click="deleteItem"
                    class="btn btn-outline-danger"
                    v-if="method === 'update'">حذف ارائه دهنده
            </button>
            <button @click="updateItem"
                    class="btn btn-success"
                    v-if="method === 'update'">
              ویرایش اطلاعات
            </button>
            <button @click="createItem"
                    class="btn btn-success" v-else>
              ذخیره اطلاعات
            </button>
          </div>
        </div>
      </template>
      <template slot="body">
        <div class="row">
          <div class="col-lg-9">
            <h5>اطلاعات اولیه</h5>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label>نام</label>
                <input class="form-control" v-model="provider.first_name"
                       :class="{'is-invalid': !!errors.all.first_name}">
                <form-control-feedback :errors="errors.all" field="first_name"/>
              </div>
              <div class="form-group col-md-4">
                <label>نام خانوادگی</label>
                <input class="form-control" v-model="provider.last_name"
                       :class="{'is-invalid': !!errors.all.last_name}">
                <form-control-feedback :errors="errors.all" field="last_name"/>
              </div>
              <div class="form-group col-md-4">
                <label>نام کاربری</label>
                <input class="form-control" v-model="provider.username"
                       :class="{'is-invalid': !!errors.all.username}">
                <form-control-feedback :errors="errors.all" field="username"/>
              </div>
            </div>
            <div class="form-group">
              <label>بیوگرافی</label>
              <input type="hidden" :class="{'is-invalid': !!errors.all.biography}">
              <div class="quill-editor"
                   v-model="provider.biography"
                   v-quill:myQuillEditor="editorOption">
              </div>
              <form-control-feedback :errors="errors.all" field="biography"/>
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
          </div>
          <div class="col-lg-3">
            <div class="profile-image">
              <img class="rounded-circle w-100" :src="provider.image" alt="">
              <div class="form-group mt-3">
                <div class="custom-file">
                  <input class="custom-file-input"
                         @change="processFile($event)" type="file"
                         :class="{'is-invalid': !!errors.all.image}">
                  <label class="custom-file-label">انتخاب کنید</label>
                </div>
                <form-control-feedback :errors="errors.all" field="image"/>
              </div>
            </div>
          </div>
        </div>

      </template>
    </portlet>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import Portlet from "../../../components/admin/Portlet";
  import FormControlFeedback from "../../../components/Form/FormControlFeedback";

  export default {
    name: "create",
    components: {FormControlFeedback, Portlet},
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
    computed: mapState(['errors']),
    methods: {
      processFile() {
        const reader = new FileReader();
        reader.onload = () => {
          this.provider.image = reader.result;
        };
        reader.readAsDataURL(event.target.files[0]);
      },
      deleteItem() {
        if (confirm('آیا مایل به حذف هستید ؟'))
          this.$store.dispatch("providers/deleteItem", this.provider.id)
            .then(() => {this.$router.push("/admin/providers")});
      },
      updateItem() {
        this.$store.dispatch("providers/updateItem", this.provider);
      },
      createItem() {
        this.$store.dispatch("providers/createItem", this.provider);
      },
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
          username: '',
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

<style>
  .custom-file-label::after {
    left: 0;
    width: 100%;
    text-align: center;
    content: "انتخاب فایل";
    border-radius: .25rem 0 0 .25rem;
  }

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