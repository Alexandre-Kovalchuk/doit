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
      :loop="true"
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
</style>
