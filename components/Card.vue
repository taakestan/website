<template>
  <nuxt-link class="card" tag="div" :to="href">
    <div class="card-image">
      <img :src="imagePath" alt="Placeholder image">
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4" v-text="title"></p>
          <p class="subtitle is-6" v-text="provider"></p>
        </div>
      </div>

      <p class="content">
        <slot></slot>
      </p>
    </div>
  </nuxt-link>
</template>

<script>
  export default {
    name: "Card",
    props: ['title', 'provider', 'imagePath', 'href']
  }
</script>


<style lang="scss" scoped>
  p {
    color: #766b93;
    font-size: .9rem;
    text-align: justify;
  }
  .card {
    cursor: pointer;
    border-radius: .5rem;
    box-shadow: 2px 2px 15px 0 rgba(36,37,38,.08);
    .title {
      color: #5f5676;
    }
    img {
      border-radius: .5rem .5rem 0 0;
    }
  }
</style>
