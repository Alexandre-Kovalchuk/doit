<script setup>
import UITabs from '@/components/UI/UITabs.vue';
import BaseImage from '@/components/Base/BaseImage.vue';
import { labelsTabs } from '@/components/Data/MainPage/TabsData.js';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { srtreamsData } from '@/components/Data/MainPage/StreamsData.js';
import { computed, ref, warn } from 'vue';
import { nameTabs } from '@/composable/useTabs.js';
import { dataName } from '@/composable/useDataName.js';
import { useAllData } from '@/composable/useAllData.js';

const allStreamData = [];
const nameStreamTabs = nameTabs('streams', labelsTabs);
const selectedStreamsTab = ref('streamsDota');

const data = dataName(srtreamsData, selectedStreamsTab);
const allData = useAllData(srtreamsData, allStreamData);
const changeStreamsTabs = (tabName) => {
  selectedStreamsTab.value = tabName;
};

const showAllSlide = computed(() => selectedStreamsTab.value === 'streamsAll');
</script>

<template>
  <section class="streams">
    <div class="streams__content">
      <UITabs
        label="Streams"
        :names="nameStreamTabs"
        :selectedTab="selectedStreamsTab"
        @changeTab="changeStreamsTabs"
      >
        <swiper
          v-if="!showAllSlide"
          :slides-per-view="'auto'"
          :loop="true"
          :spaceBetween="4"
          :pagination="{ clickable: true }"
          :modules="[Pagination]"
          :breakpoints="{
            320: { spaceBetween: 4 },
            576: { spaceBetween: 4 },
            1024: { spaceBetween: 4 },
          }"
        >
          <swiper-slide v-for="index in 4" :key="index" class="streams__slide">
            <div v-for="item in data" :key="item.id" class="streams__img">
              <BaseImage :srcset="item.webp" :src="item.img" alt="img" />
            </div>
          </swiper-slide>
        </swiper>

        <swiper
          v-else
          :slides-per-view="'auto'"
          :loop="true"
          :spaceBetween="4"
          :pagination="{ clickable: true, dynamicBullets: true }"
          :modules="[Pagination]"
          :breakpoints="{
            320: { spaceBetween: 4 },
            576: { spaceBetween: 4 },
            1024: { spaceBetween: 4 },
          }"
        >
          <swiper-slide
            class="streams__slide streams__slide_all"
            v-for="(item, index) in allData"
            :key="index"
          >
            <div class="streams__img streams__img_all">
              <BaseImage :srcset="item.webp" :src="item.img" alt="img" />
            </div>
          </swiper-slide>
        </swiper>
      </UITabs>
    </div>
  </section>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';
.streams {
  margin-bottom: 120px;

  @include media-breakpoint-down(lg) {
    padding-left: 114px;
  }

  @include media-breakpoint-down(md) {
    padding-left: 0;
  }

  &__slide {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 4px;
    width: 583px;
    height: 476px;
    margin-top: 37px;

    @include media-breakpoint-down(sm) {
      height: 256px;
      display: flex;
    }

    &_all {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(1, 1fr);
    }
  }

  &__img {
    img {
      width: 100%;
      height: 100%;
    }

    &:nth-child(1) {
      width: 583px;
      height: 320px;
      object-fit: cover;
      grid-area: 1 / 1 / 2 / 3;

      @include media-breakpoint-down(sm) {
        width: 329px;
        height: 100%;
        object-fit: cover;
      }

      @include media-breakpoint-down(xxs) {
        width: 290px;
      }
    }

    &:nth-child(2),
    &:nth-child(3) {
      width: 289px;
      height: 152px;
      grid-area: 2 / 1 / 3 / 2;

      @include media-breakpoint-down(sm) {
        width: 329px;
        height: 100%;
        object-fit: contain;
        display: none;
      }
    }

    &:nth-child(3) {
      grid-area: 2 / 2 / 3 / 3;
    }

    &_all {
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3) {
        width: auto;
        height: auto;

        @include media-breakpoint-down(sm) {
          width: 329px;
          height: 100%;
          object-fit: cover;
        }

        @include media-breakpoint-down(xxs) {
          width: 290px;
        }
      }
    }
  }

  .swiper {
    height: 580px;
    overflow: visible;
    @include media-breakpoint-down(sm) {
      height: 340px;
    }
    &-slide {
      width: 583px !important;
      @include media-breakpoint-down(sm) {
        width: 329px !important;
        height: 256px;
      }
      @include media-breakpoint-down(xs) {
        //width: 329px !important;
      }

      @include media-breakpoint-down(xxs) {
        width: 270px !important;
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
