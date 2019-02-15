<template>
  <div class="portlet" :class="className">
    <div class="portlet__head" v-if="!!this.$slots['title'] || !!this.$slots['tools']">
      <div class="portlet__head-caption" v-if="!!this.$slots['title']">
        <div class="portlet__head-title">
          <h3 class="portlet__head-text">
            <slot name="title"></slot>
          </h3>
        </div>
      </div>
      <slot name="tools"></slot>
    </div>
    <div class="portlet__body">
      <slot name="body"></slot>
    </div>
    <div class="portlet__foot" v-if="!!this.$slots['footer']">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Portlet",
    props: {
      'className' : {
        type: String
      }
    }
  }
</script>

<style scoped lang="scss">
  .portlet {
    background: #fff;
    box-shadow: 0 1px 15px 1px rgba(69,65,78,0.08);
  }
</style>
