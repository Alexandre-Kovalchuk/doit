<script setup>
import { mainNewsData } from '@/components/Data/mainData/newsData.js';
import UITabs from '@/components/UI/UITabs.vue';
import { ref, computed } from 'vue';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import UICard from '@/components/UI/UICard.vue';
import { useShowAllSlide } from '@/composable/new/useShowAllSlide.js';
import { tabsData } from '@/components/Data/TabsData.js';

const { labelsTabs } = tabsData();
const selectedTabs = ref('Dota');
const showSlide = ref('Dota');
const changeTabsNews = (name) => {
  selectedTabs.value = name;
  showSlide.value = name;
};

const allNews = computed(() => {
  return useShowAllSlide(mainNewsData(), showSlide);
});
</script>

<template>
  <section class="news">
    <div class="news__content">
      <UITabs
        label="News"
        :names="labelsTabs"
        :selectedTab="selectedTabs"
        @changeTab="changeTabsNews"
      >
        <swiper
          slides-per-view="auto"
          :loop="true"
          :spaceBetween="30"
          :pagination="{ clickable: true, dynamicBullets: true }"
          :modules="[Pagination]"
          :breakpoints="{
            320: { spaceBetween: 16 },
            576: { spaceBetween: 20 },
            1024: { spaceBetween: 30 },
          }"
        >
          <swiper-slide v-for="(item, index) in allNews" :key="index">
            <UICard :card="item" :add-class="true" />
          </swiper-slide>
        </swiper>
      </UITabs>
    </div>
  </section>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';

.news {
  margin-bottom: 127px;

  @include media-breakpoint-down(lg) {
    padding-left: 114px;
  }

  @include media-breakpoint-down(md) {
    padding-left: 0;
  }

  .swiper {
    height: 515px;
    overflow: visible;
    @include media-breakpoint-down(xs) {
      height: 430px;
    }
    &-slide {
      width: 370px !important;

      @include media-breakpoint-down(xs) {
        width: 329px !important;
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
