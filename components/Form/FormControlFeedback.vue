<template>
  <div class="invalid-feedback form-control-feedback"
       v-text="!!errors[field] ? errors[field][0] : ''"></div>
</template>
<script>
  export default {
    name: 'form-control-feedback',
    props: {
      field: {
        type: String,
        required: true
      },
      errors: {
        required: true
      }
    }
  }
</script>
