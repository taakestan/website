<template>
  <div class="container mt-3">
    <portlet>
      <template slot="title">
        ایجاد وبینار
      </template>
      <template slot="body">
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
            <div class="quill-editor"
                 :content="content"
                 v-quill:myQuillEditor="editorOption">
            </div>
          </div>
          <hr>
          <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
      </template>
    </portlet>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Portlet from "../../../components/admin/Portlet";
	export default {
		name: "create",
    components: {Portlet},
    layout: 'admin',
    computed: mapState(['providers']),
    data () {
      return {
        content: '',
        editorOption: {
          // some quill options
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
