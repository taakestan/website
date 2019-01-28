<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="imagePath" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4" v-text="title"></p>
          <p class="subtitle is-6" v-text="provider"></p>
        </div>
      </div>

      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Card",
    props: ['title', 'provider', 'imagePath']
  }
</script>

<style scoped>

</style>
