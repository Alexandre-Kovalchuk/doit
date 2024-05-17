<!--<script setup>-->
<!--import { privacy } from '@/components/Data/privacy.js';-->
<!--</script>-->

<!--<template>-->
<!--  <main class="main">-->
<!--    <section class="privacy">-->
<!--      <div class="container">-->
<!--        <h1 class="privacy__title">Terms of Use</h1>-->

<!--        <h2 class="privacy__sub-title" v-for="title in privacy[0].title">-->
<!--          <span>1.</span> {{ title.title }}-->
<!--        </h2>-->

<!--        <p class="privacy__text" v-for="(txt, index) in privacy[0].text" :key="index">-->
<!--          <span>{{ txt.number }}.</span>{{ txt.txt }}-->
<!--        </p>-->

<!--        <h2 class="privacy__sub-title" v-for="title in privacy[0].title">-->
<!--          <span>2.</span> {{ title.title }}-->
<!--        </h2>-->

<!--        <p class="privacy__text" v-for="(txt, index) in privacy[0].text.slice(0, 1)" :key="index">-->
<!--          <span>{{ txt.length === 1 ? txt.number : '2.1' }}</span>-->
<!--          {{ txt.txt }}-->
<!--        </p>-->
<!--      </div>-->
<!--    </section>-->
<!--  </main>-->
<!--</template>-->

<!--<style lang="scss">-->
<!--@import '@/assets/style/breakpoints/media-breakpoints';-->

<!--.main {-->
<!--  @include media-breakpoint-down(md) {-->
<!--    padding: 113px 0 0;-->
<!--  }-->
<!--}-->
<!--.privacy {-->
<!--  margin: 65px 0 0 0;-->

<!--  @include media-breakpoint-down(l) {-->
<!--    padding-left: 114px;-->
<!--  }-->

<!--  @include media-breakpoint-down(md) {-->
<!--    padding-left: 0;-->
<!--    margin: 0 0 100px 0;-->
<!--  }-->

<!--  .container {-->
<!--    max-width: 1264px;-->
<!--  }-->
<!--  &__title {-->
<!--    font-weight: 700;-->
<!--    font-size: 48px;-->
<!--    line-height: 117%;-->
<!--    color: #fff;-->
<!--    margin-bottom: 30px;-->

<!--    @include media-breakpoint-down(md) {-->
<!--      margin-bottom: 51px;-->
<!--    }-->
<!--  }-->

<!--  &__sub-title {-->
<!--    font-weight: 500;-->
<!--    font-size: 24px;-->
<!--    line-height: 133%;-->
<!--    opacity: 0.88;-->
<!--    margin-bottom: 22px;-->

<!--    @include media-breakpoint-down(md) {-->
<!--      margin-bottom: 32px;-->
<!--    }-->

<!--    span {-->
<!--      margin-right: 30px;-->

<!--      @include media-breakpoint-down(md) {-->
<!--        margin: 0;-->
<!--      }-->
<!--    }-->
<!--  }-->

<!--  &__text {-->
<!--    max-width: 703px;-->
<!--    width: 100%;-->
<!--    font-weight: 400;-->
<!--    font-size: 16px;-->
<!--    line-height: 150%;-->
<!--    color: #67707a;-->
<!--    display: flex;-->
<!--    padding-left: 52px;-->

<!--    @include media-breakpoint-down(xs) {-->
<!--      flex-direction: column;-->
<!--      padding: 0;-->
<!--    }-->

<!--    span {-->
<!--      display: block;-->
<!--      margin-right: 30px;-->
<!--      @include media-breakpoint-down(xs) {-->
<!--        margin: 0 0 10px 0;-->
<!--      }-->
<!--    }-->

<!--    &:nth-child(4) {-->
<!--      margin: 16px 0 30px;-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->
