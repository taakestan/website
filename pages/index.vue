<template>
  <div>
    <section id="section1" class="background">
      <div class="container">
        <div class="content">
          <h1>تاک</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius esse facilis inventore, ipsam, magni
            mollitia natus officiis perspiciatis quidem tempora, ullam vel. A consectetur dignissimos doloribus eligendi
            minima, non provident!</p>
          <div>
            <a class="btn btn--md btn--purple"
               href="">درخواست نسخه دمو</a>
            <div class="btn btn--md btn--secondary">شروع استفاده</div>
          </div>
          <span>جهت بهره مندی از <b>7 روز مهلت تست</b> بر روی گزینه در خواست نسخه دمو کلیک کنید.</span>
        </div>

      </div>
    </section>
  </div>
</template>

<script>

  import Card from "../components/Card";

  export default {
    components: {Card},
  }
</script>

<style lang="scss" scoped>
  .container {
    margin: 0 auto;
    min-height: calc(100vh - 6rem);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    display: block;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }

  section {
    padding: 0 2rem;

    &:nth-child(2n) {
      padding: 0 2rem 14rem;
    }
  }

  section.background {
    position: relative;

    &:before {
      left: 0;
      top: -17%;
      width: 100%;
      content: "";
      z-index: -1;
      height: 100%;
      position: absolute;
      background: no-repeat 0 50%;
      background-size: cover;
      transform: skewY(-2.5deg);
    }
  }

  #section1 {
    color: #fff;
    padding: 0 2rem 16rem;
    .content {
      width: 50%;
      margin: 10rem 0 4rem;
      > h1 {
        font-size: 3rem;
        font-weight: 500;
      }
      > p {
        font-weight: 300;
        font-size: 1.3rem;
        color: hsla(0, 0%, 100%, 0.8);
      }
      > div {
        display: flex;
        margin: 0 auto;
        max-width: 44rem;
        padding-top: 2rem;
        > .btn + .btn {
          margin-right: 1rem;
        }
      }
      > span {
        display: inline-block;
        padding: .25rem 1rem;
        background-color: rgba(20, 22, 106, .35);
        border-radius: 3rem;
        margin-left: -1rem;
        font-size: 1rem;
        margin-top: 1rem;
        font-weight: 300;
        color: hsla(0, 0%, 100%, 0.7);
        > b {
          color: white;
          font-weight: 500;
        }
      }
    }
    &:before {
      background-image: url(/img/waves.svg), linear-gradient(326deg, #9864ff 20%, #1a1c82 92%);
    }
  }
</style>
