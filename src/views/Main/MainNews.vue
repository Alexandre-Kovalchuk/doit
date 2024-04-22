<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { computed, ref, watch, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import UITabs from '@/components/UI/UITabs.vue';
import UICard from '@/components/UI/UICard.vue';

import { newsData } from '@/components/JSFiles/MainPage/NewsData.js';

import { changeTabs } from '@/composable/useChangeTabs.js';
import { nameTabs } from '@/composable/useTabs.js';
import { labelsTabs } from '@/components/JSFiles/MainPage/TabsData.js';
import { dataName } from '@/composable/useDataName.js';
import { useAllData } from '@/composable/useAllData.js';
import { useWatchTabs } from '@/composable/useWatchEffectTabs.js';

const router = useRouter();
const q = ref('');
const allNewsData = [];

const nameNewsTabs = nameTabs('news', labelsTabs);
const selectedNewsTab = ref('newsDota');

const data = dataName(newsData, q);
const allData = useAllData(newsData, allNewsData);

watchEffect(() => {
  useWatchTabs(q, router, selectedNewsTab, 'newsDota');
});
const changeNewsTabs = (tabName) => {
  changeTabs(selectedNewsTab, tabName, router, '/');
};

const showAllSlide = computed(() => q.value === 'newsAll');
</script>

<template>
  <section class="news">
    <div class="news__content">
      <UITabs
        label="News"
        :names="nameNewsTabs"
        :selectedTab="selectedNewsTab"
        @changeTab="changeNewsTabs"
      >
        <swiper
          v-if="!showAllSlide"
          :slides-per-view="'auto'"
          :loop="true"
          :spaceBetween="30"
          :pagination="{ clickable: true }"
          :modules="[Pagination]"
          :breakpoints="{
            320: { spaceBetween: 16 },
            576: { spaceBetween: 20 },
            1024: { spaceBetween: 30 },
          }"
        >
          <swiper-slide v-for="item in data" :key="item.id">
            <router-link :to="{ path: '/tournament', query: { q: selectedNewsTab } }">
              <UICard :card="item" />
            </router-link>
          </swiper-slide>
        </swiper>

        <swiper
          v-else
          :slides-per-view="'auto'"
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
          <swiper-slide v-for="item in allData" :key="item.id">
            <router-link :to="{ path: '/tournament', query: { q: selectedTournamentTab } }">
              <UICard :card="item" />
            </router-link>
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
