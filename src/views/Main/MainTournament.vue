<script setup>
import UITabs from '@/components/UI/UITabs.vue';
import UICard from '@/components/UI/UICard.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { tabs } from '@/components/JSFiles/MainPage/TabsData.js';
import { Pagination } from 'swiper/modules';

import { ref } from 'vue';
import {
  csInfo,
  dotaInfo,
  fortniteInfo,
  lolInfo,
  starCraftInfo,
} from '@/components/JSFiles/MainPage/TournamentsData.js';

const selectedTournamentTab = ref('Dota');

const changeTournamentTabs = (tabName) => {
  selectedTournamentTab.value = tabName;
};

const swiperOptions = {
  modules: [Pagination],
  pagination: true,
};
</script>

<template>
  <section class="tournaments">
    <div class="tournaments__content">
      <UITabs
        label="Tournaments"
        :names="tabs"
        :selectedTab="selectedTournamentTab"
        @changeTab="changeTournamentTabs"
      >
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
          v-if="selectedTournamentTab === 'Dota' || selectedTournamentTab === 'All'"
        >
          <swiper-slide v-for="dota in dotaInfo" :key="dota.id">
            <UICard :card="dota" />
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
          v-if="selectedTournamentTab === 'Fortnite' || selectedTournamentTab === 'All'"
        >
          <swiper-slide v-for="fortnite in fortniteInfo" :key="fortnite.id">
            <UICard :card="fortnite" />
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
          v-if="selectedTournamentTab === 'LOL' || selectedTournamentTab === 'All'"
        >
          <swiper-slide v-for="lol in lolInfo" :key="lol.id">
            <UICard :card="lol" />
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
          v-if="selectedTournamentTab === 'CS' || selectedTournamentTab === 'All'"
        >
          <swiper-slide v-for="cs in csInfo" :key="cs.id">
            <UICard :card="cs" />
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
          v-if="selectedTournamentTab === 'StarCraft' || selectedTournamentTab === 'All'"
        >
          <swiper-slide v-for="starCraft in starCraftInfo" :key="starCraft.id">
            <UICard :card="starCraft" />
          </swiper-slide>
        </swiper>
      </UITabs>
    </div>
  </section>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';
.tournaments {
  margin-bottom: 145px;

  @include media-breakpoint-down(lg) {
    padding-left: 114px;
  }

  @include media-breakpoint-down(md) {
    padding-left: 0;
  }

  @include media-breakpoint-down(sm) {
    margin-bottom: 100px;
  }

  .swiper {
    height: 465px;
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
