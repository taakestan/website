<template>
  <div class="provider-card bg-white">
    <img :src="provider.image" alt="">
    <h3 class="title" v-text="provider.first_name + ' ' + provider.last_name"></h3>
    <div class="text-justify" v-html="provider.biography"></div>
  </div>
</template>
<script>
  export default {
    name: 'provider',
    props: {
      provider: {
        required: true
      }
    }
  }
</script>
<style scoped lang="scss">

  .provider-card {
    display: flex;
    border-radius: .5rem;
    margin-top: 11rem;
    position: relative;
    align-items: center;
    flex-direction: column;
    padding: 5rem 1rem 1rem;
    justify-content: center;
    height: calc(100% - 11rem);
    box-shadow: 2px 2px 15px 0 rgba(36, 37, 38, 0.08);

    > img {
      top: -8rem;
      width: 40%;
      position: absolute;
      border-radius: 50%;
    }
  }
</style>
