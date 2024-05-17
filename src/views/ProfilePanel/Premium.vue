<!--<script setup>-->
<!--import { Pagination } from 'swiper/modules';-->
<!--import { premiun } from '@/components/Data/PremiumData.js';-->
<!--import { Swiper, SwiperSlide } from 'swiper/vue';-->
<!--import 'swiper/css';-->
<!--import 'swiper/css/pagination';-->
<!--import PremiumCard from '@/components/UI/UIPremiumCard.vue';-->
<!--</script>-->

<!--<template>-->
<!--  <div class="panel-premium">-->
<!--    <h1 class="panel-premium__title">Premium</h1>-->
<!--    <div class="panel-premium__slide">-->
<!--      <swiper-->
<!--        :slides-per-view="'auto'"-->
<!--        :loop="true"-->
<!--        :spaceBetween="29"-->
<!--        :pagination="{ clickable: true }"-->
<!--        :modules="[Pagination]"-->
<!--        :breakpoints="{-->
<!--          576: { spaceBetween: 20 },-->
<!--        }"-->
<!--      >-->
<!--        <swiper-slide v-for="(slide, index) in premiun" :key="index">-->
<!--          <PremiumCard :item="slide" />-->
<!--        </swiper-slide>-->
<!--      </swiper>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<style lang="scss">-->
<!--@import '@/assets/style/breakpoints/media-breakpoints';-->
<!--.panel-premium {-->
<!--  margin-bottom: 100px;-->

<!--  &__title {-->
<!--    font-weight: 700;-->
<!--    font-size: 48px;-->
<!--    line-height: 137%;-->
<!--    text-align: center;-->
<!--    margin-bottom: 73px;-->

<!--    @include media-breakpoint-down(md) {-->
<!--      margin-bottom: 60px;-->
<!--    }-->

<!--    @include media-breakpoint-down(sm) {-->
<!--      margin-bottom: 50px;-->
<!--    }-->

<!--    @include media-breakpoint-down(xs) {-->
<!--      margin-bottom: 40px;-->
<!--    }-->
<!--  }-->

<!--  &__slide {-->
<!--    margin-left: 69px;-->

<!--    @include media-breakpoint-down(sm) {-->
<!--      margin-left: 20px;-->
<!--    }-->

<!--    @include media-breakpoint-down(xs) {-->
<!--      margin-left: 10px;-->
<!--    }-->

<!--    @include media-breakpoint-down(xxs) {-->
<!--      margin-left: 0;-->
<!--    }-->
<!--  }-->

<!--  .swiper {-->
<!--    height: 576px;-->

<!--    @include media-breakpoint-down(xs) {-->
<!--      height: 482px;-->
<!--    }-->

<!--    &-slide {-->
<!--      width: 313px !important;-->

<!--      @include media-breakpoint-down(xxs) {-->
<!--        width: 280px !important;-->
<!--      }-->
<!--    }-->

<!--    &-pagination-bullet {-->
<!--      width: 6px;-->
<!--      height: 6px;-->
<!--      background: #20252b;-->

<!--      &-active {-->
<!--        width: 8px;-->
<!--        height: 8px;-->
<!--        background: linear-gradient(180deg, #2788f6 0%, #0960e0 100%);-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->
