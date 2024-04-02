<script setup>
import UITabs from '@/components/UI/UITabs.vue';
import UICard from '@/components/UI/UICard.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';

import { tabs } from '@/components/JSFiles/MainPage/TabsData.js';
import { Pagination } from 'swiper/modules';
import {
  csNews,
  dotaNews,
  fortniteNews,
  lolNews,
  starCraNews,
} from '@/components/JSFiles/MainPage/NewsData.js';
import { ref } from 'vue';

const selectedNewsTab = ref('Dota');

const changeNewsTabs = (tabName) => {
  selectedNewsTab.value = tabName;
};

const swiperOptions = {
  modules: [Pagination],
  pagination: true,
};
</script>

<template>
  <section class="news">
    <div class="news__content">
      <UITabs label="News" :names="tabs" :selectedTab="selectedNewsTab" @changeTab="changeNewsTabs">
        <!-- dota -->
        <swiper
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
          v-if="selectedNewsTab === 'Dota' || selectedNewsTab === 'All'"
        >
          <swiper-slide v-for="dota in dotaNews" :key="dota.id">
            <UICard :card="dota" :addClass="true" />
          </swiper-slide>
        </swiper>

        <!-- fortnite -->
        <swiper
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
          v-if="selectedNewsTab === 'Fortnite' || selectedNewsTab === 'All'"
        >
          <swiper-slide v-for="fortnite in fortniteNews" :key="fortnite.id">
            <UICard :card="fortnite" :addClass="true" />
          </swiper-slide>
        </swiper>

        <!-- lol -->
        <swiper
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
          v-if="selectedNewsTab === 'LOL' || selectedNewsTab === 'All'"
        >
          <swiper-slide v-for="lol in lolNews" :key="lol.id">
            <UICard :card="lol" :addClass="true" />
          </swiper-slide>
        </swiper>

        <!-- cs -->
        <swiper
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
          v-if="selectedNewsTab === 'CS' || selectedNewsTab === 'All'"
        >
          <swiper-slide v-for="cs in csNews" :key="cs.id">
            <UICard :card="cs" :addClass="true" />
          </swiper-slide>
        </swiper>

        <!-- StarCraft -->
        <swiper
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
          v-if="selectedNewsTab === 'StarCraft' || selectedNewsTab === 'All'"
        >
          <swiper-slide v-for="starCraft in starCraNews" :key="starCraft.id">
            <UICard :card="starCraft" :addClass="true" />
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

  .swiper {
    height: 515px;
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
