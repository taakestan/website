<template>
  <div class="portlet rounded" :class="className">
    <div class="portlet__head p-3 border-bottom" v-if="!!this.$slots['title'] || !!this.$slots['tools']">
      <div class="portlet__head-caption" v-if="!!this.$slots['title']">
        <div class="portlet__head-title">
          <h4 class="portlet__head-text m-0">
            <slot name="title"></slot>
          </h4>
        </div>
      </div>
      <slot name="tools"></slot>
    </div>
    <div class="portlet__body p-3">
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
