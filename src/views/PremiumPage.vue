<script setup>
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import PremiumCard from '@/views/Premium/UIPremiumCard.vue';
import { premiun } from '@/components/JSFiles/PremiumData.js';
</script>

<template>
  <main class="main">
    <section class="prem-page">
      <div class="container">
        <div class="prem-page__content">
          <h1 class="prem-page__title">Premium</h1>

          <swiper
            :slides-per-view="'auto'"
            :spaceBetween="29"
            :pagination="{ clickable: true }"
            :modules="[Pagination]"
          >
            <swiper-slide v-for="(slide, index) in premiun" :key="index">
              <PremiumCard :item="slide" />
            </swiper-slide>
          </swiper>
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

  .swiper {
    height: 576px;
    @include media-breakpoint-down(xs) {
      height: 482px;
    }
    &-slide {
      width: 371px !important;

      @include media-breakpoint-down(xs) {
        width: 329px !important;
      }

      @include media-breakpoint-down(xxs) {
        width: 280px !important;
      }
    }

    &-pagination-bullet {
      width: 6px;
      height: 6px;
      background: #20252b;

      &-active {
        width: 8px;
        height: 8px;
        background: linear-gradient(180deg, #2788f6 0%, #0960e0 100%);
      }
    }
  }
}
</style>
