<template>
  <nav id="navbar" class="navbar has-shadow is-spaced">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png"
               alt="Bulma: Free, open source, &amp; modern CSS framework based on Flexbox" width="112" height="28">
        </a>

        <a class="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
      <span class="icon" style="color: #333;">
        <svg class="svg-inline--fa fa-github-alt fa-w-15 fa-lg" aria-hidden="true" data-prefix="fab"
             data-icon="github-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"
             data-fa-i2svg=""><path fill="currentColor"
                                    d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path></svg>
        <!-- <i class="fab fa-lg fa-github-alt"></i> -->
      </span>
        </a>

        <a class="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
      <span class="icon" style="color: #55acee;">
        <svg class="svg-inline--fa fa-twitter fa-w-16 fa-lg" aria-hidden="true" data-prefix="fab" data-icon="twitter"
             role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path
          fill="currentColor"
          d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
        <!-- <i class="fab fa-lg fa-twitter"></i> -->
      </span>
        </a>

        <div id="navbarBurger" class="navbar-burger burger" data-target="navMenuDocumentation">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navMenuDocumentation" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item bd-navbar-item-documentation  is-active" href="/documentation">
        <span class="icon has-text-primary">
          <svg class="svg-inline--fa fa-book fa-w-14" aria-hidden="true" data-prefix="fas" data-icon="book" role="img"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor"
                                                                                               d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"></path></svg>
          <!-- <i class="fas fa-book"></i> -->
        </span>
            <span class="is-hidden-touch is-hidden-widescreen">
          Docs
        </span>
            <span class="is-hidden-desktop-only">
          Documentation
        </span>
          </a>


          <a class="navbar-item bd-navbar-item-videos " href="https://bulma.io/videos/">
          <span class="icon has-text-success">
            <svg class="svg-inline--fa fa-play-circle fa-w-16" aria-hidden="true" data-prefix="fas"
                 data-icon="play-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                 data-fa-i2svg=""><path fill="currentColor"
                                        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path></svg>
            <!-- <i class="fas fa-play-circle"></i> -->
          </span>

            <span>Videos</span>
          </a>

          <a class="navbar-item bd-navbar-item-blog " href="https://bulma.io/blog/">
          <span class="icon bd-has-text-rss">
            <svg class="svg-inline--fa fa-rss fa-w-14" aria-hidden="true" data-prefix="fas" data-icon="rss" role="img"
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor"
                                                                                                 d="M128.081 415.959c0 35.369-28.672 64.041-64.041 64.041S0 451.328 0 415.959s28.672-64.041 64.041-64.041 64.04 28.673 64.04 64.041zm175.66 47.25c-8.354-154.6-132.185-278.587-286.95-286.95C7.656 175.765 0 183.105 0 192.253v48.069c0 8.415 6.49 15.472 14.887 16.018 111.832 7.284 201.473 96.702 208.772 208.772.547 8.397 7.604 14.887 16.018 14.887h48.069c9.149.001 16.489-7.655 15.995-16.79zm144.249.288C439.596 229.677 251.465 40.445 16.503 32.01 7.473 31.686 0 38.981 0 48.016v48.068c0 8.625 6.835 15.645 15.453 15.999 191.179 7.839 344.627 161.316 352.465 352.465.353 8.618 7.373 15.453 15.999 15.453h48.068c9.034-.001 16.329-7.474 16.005-16.504z"></path></svg>
            <!-- <i class="fas fa-rss"></i> -->
          </span>

            <span>Blog</span>
          </a>

          <a class="navbar-item bd-navbar-item-expo " href="https://bulma.io/expo/">
          <span class="icon has-text-star">
            <svg class="svg-inline--fa fa-star fa-w-18" aria-hidden="true" data-prefix="fas" data-icon="star" role="img"
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor"
                                                                                                 d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
            <!-- <i class="fas fa-star"></i> -->
          </span>

            <span>Expo</span>
          </a>

          <a class="navbar-item bd-navbar-item-love " href="https://bulma.io/love/">
          <span class="icon has-text-danger">
            <svg class="svg-inline--fa fa-heart fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="heart"
                 role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path
              fill="currentColor"
              d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
            <!-- <i class="fas fa-heart"></i> -->
          </span>

            <span>Love</span>
          </a>

        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "Navbar"
  }
</script>

<style scoped>

</style>
