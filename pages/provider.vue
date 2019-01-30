<template>
  <div class="columns is-multiline">
    <div class="column is-one-third-desktop" v-for="provider in providers">
      <div class="provider-card">
        <img :src="provider.image" alt="">
        <h3 class="title" v-text="provider.name"></h3>
        <p v-text="provider.description">
          I am an experienced Software Engineer, and team builder, passionate about design, development and operations of highly scalable software systems based on microservices in the cloud. Although I'm deeply technical, I'm a lot more passionate about the results of our work and its impact on our customer's lives.
        </p>
        <ul class="socials">
          <li><a href="https://stackoverflow.com/users/3634398/alex-kyriakidis" target="_blank"
                 title="Alex Kyriakidis on Stack Overflow"><i class="fab fa-stack-overflow"></i></a></li>
          <li><a href="https://twitter.com/hootlex" target="_blank" title="Alex Kyriakidis on Twitter"><i
            class="fab fa-twitter"></i></a></li>
          <li><a href="https://github.com/hootlex" target="_blank" title="Alex Kyriakidis on Github"><i
            class="fab fa-github"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: "provider",
    computed: {
      ...mapState(['providers'])
    }
  }
</script>

<style scoped lang="scss">
  .provider-card {
    padding: 1rem;
    display: flex;
    border-radius: .5rem;
    margin-top: 11rem;
    padding-top: 5rem;
    position: relative;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    box-shadow: 2px 2px 15px 0 rgba(36, 37, 38, 0.08);
    > img {
      top: -8rem;
      width: 40%;
      position: absolute;
      border-radius: 50%;
    }
  }
</style>
