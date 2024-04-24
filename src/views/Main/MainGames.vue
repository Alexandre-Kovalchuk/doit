<script setup>
import BaseImage from '@/components/Base/BaseImage.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { games } from '@/components/Data/MainPage/GamesData.js';
</script>

<template>
  <section class="games">
    <div class="container">
      <h2 class="games__title">Games</h2>

      <div class="games__content">
        <swiper
          :slides-per-view="'auto'"
          :loop="true"
          :spaceBetween="4"
          :pagination="{
            clickable: true,
          }"
          :modules="[Pagination]"
        >
          <swiper-slide v-for="(item, index) in games" :key="index">
            <BaseImage :srcset="item.webp" :src="item.img" :alt="item.txt" />
            <p class="games__text">{{ item.txt }}</p>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';

.games {
  margin-bottom: 271px;

  @include media-breakpoint-down(lg) {
    padding-left: 114px;
  }

  @include media-breakpoint-down(md) {
    padding-left: 0;
  }

  @include media-breakpoint-down(xs) {
    margin-bottom: 0;
  }

  &__title {
    font-weight: 700;
    font-size: 44px;
    line-height: 100%;
    color: #f5f5f5;
    margin-bottom: 44px;
    margin-left: 23px;
  }

  &__content {
    margin-left: 23px;

    @include media-breakpoint-down(md) {
      margin-left: 0;
    }
  }

  &__text {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 700;
    font-size: 30px;
    line-height: 100%;
    color: #f5f5f5;
    @include media-breakpoint-down(xs) {
      font-size: 22px;
    }
  }

  .swiper {
    height: 547px;
    overflow: visible;

    &-wrapper {
      @include media-breakpoint-down(xs) {
        //flex-direction: column;
        margin: 0 23px 0 0;
      }
    }
    &-slide {
      width: 387px !important;
      height: 500px;
      position: relative;

      @include media-breakpoint-down(xs) {
        max-width: 527px !important;
        width: 100% !important;
        //height: 204px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    &-pagination-bullet {
      width: 13px;
      height: 17px;
      border-radius: 0;
      background: #20272e;

      &-active {
        background: #4f5f70;
      }
      @include media-breakpoint-down(sm) {
        width: 6px;
        height: 8px;
      }
    }
  }
}
</style>
