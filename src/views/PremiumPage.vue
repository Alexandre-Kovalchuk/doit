<script setup>
import UIPremium from '@/components/UI/UIPremium.vue';
</script>

<template>
  <main class="main">
    <section class="prem-page">
      <div class="container">
        <div class="prem-page__content">
          <h1 class="prem-page__title">Premium</h1>

          <UIPremium />
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';
.prem-page {
  margin: 56px 0;

  @include media-breakpoint-down(xs) {
    margin: 93px 0;
  }

  &__content {
    margin: 0 23px;

    @include media-breakpoint-down(l) {
      margin: 0;
    }

    @include media-breakpoint-down(xs) {
      margin-left: 3px;
    }
  }
  &__title {
    font-weight: 700;
    font-size: 48px;
    line-height: 117%;
    color: #fff;
    margin-bottom: 42px;

    @include media-breakpoint-down(xs) {
      display: none;
    }
  }
}
</style>
