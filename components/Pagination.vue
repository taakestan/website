<template>
  <div class="shadow-sm rounded bg-white mt-3 d-flex justify-content-center">
    <ul class="pagination px-0 m-0">
      <li>
        <nuxt-link
                class="pager-nav"
                :to="{query: {...$route.query, page: 1}}"
                :class="{disable: meta.current_page === 1}">
          <strong class="fa fa-angle-double-right"></strong>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
                class="pager-nav"
                :class="{disable: meta.current_page === 1}"
                :to="{query: {...$route.query, page: meta.current_page === 1 ? 1 : meta.current_page - 1}}">
          <span class="fa fa-angle-right"></span>
        </nuxt-link>
      </li>
      <li v-for="key in meta.last_page"
          :class="{active: key === meta.current_page}">
        <nuxt-link :to="{query: {...$route.query, page: key}}">
          {{ key.toLocaleString("fa-IR") }}
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
                class="pager-nav"
                :to="{query: {...$route.query, page: meta.current_page === meta.last_page ? meta.last_page : meta.current_page + 1}}"
                :class="{disable: meta.last_page === meta.current_page}">
          <span class="fa fa-angle-left"></span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
                class="pager-nav"
                :to="{query: {...$route.query, page: meta.last_page}}"
                :class="{disable: meta.last_page === meta.current_page}">
          <span class="fa fa-angle-double-left"></span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    props: {
      meta: {
        type: Object,
        required: true
      }
    },
  }
</script>

<style lang="scss" scoped>
  .pagination > li {
    &.active {
      font-weight: bold;
    }

    > a {
      width: 2.5rem;
      height: 2.5rem;
      margin: .5rem;
      cursor: pointer;
      border-radius: 50%;
      text-align: center;
      line-height: 2.7rem;
      display: inline-block;

      &:hover {
        background: #eee;
      }
    }
  }

  .fa {
    font-weight: bold;
  }

  .pager-nav.disable {
    opacity: .5;
    cursor: not-allowed;
    filter: grayscale(.5);
  }
</style>