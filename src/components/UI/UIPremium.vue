<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import PremiumCard from '@/components/UI/UIPremiumCard.vue';
import { premiun } from '@/components/JSFiles/PremiumData.js';
</script>

<template>
  <div class="premium">
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
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';

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
</style>
