<template>
  <div class="container mt-3">
    <portlet>
      <template slot="title">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            ارائه دهنده
          </div>
          <div class="action">
            <button @click="createItem"
                    class="btn btn-success">
              ذخیره اطلاعات
            </button>
          </div>
        </div>
      </template>
      <template slot="body">
        <h5>اطلاعات اولیه</h5>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label>نام</label>
            <input class="form-control" v-model="admin.name"
                   :class="{'is-invalid': !!errors.all.name}">
            <form-control-feedback :errors="errors.all" field="name"/>
          </div>
          <div class="form-group col-md-4">
            <label>نام خانوادگی</label>
            <input class="form-control" v-model="admin.username"
                   :class="{'is-invalid': !!errors.all.username}">
            <form-control-feedback :errors="errors.all" field="username"/>
          </div>
          <div class="form-group col-md-4">
            <label>نام کاربری</label>
            <input class="form-control" v-model="admin.password"
                   :class="{'is-invalid': !!errors.all.password}">
            <form-control-feedback :errors="errors.all" field="password"/>
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
        admin: {
          name: '',
          username: '',
          password: '',
        }
      }
    },
    computed: mapState(['errors']),
    methods: {
      createItem() {
        this.$store.dispatch("providers/createItem", this.provider);
      },
    },
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