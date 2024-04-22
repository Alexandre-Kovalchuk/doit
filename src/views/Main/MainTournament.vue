<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { computed, ref, watch, watchEffect } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import UITabs from '@/components/UI/UITabs.vue';
import UICard from '@/components/UI/UICard.vue';
import { useWatchTabs } from '@/composable/useWatchEffectTabs.js';
import { changeTabs } from '@/composable/useChangeTabs.js';
import { dataName } from '@/composable/useDataName.js';
import { labelsTabs } from '@/components/JSFiles/MainPage/TabsData.js';
import { nameTabs } from '@/composable/useTabs.js';
import { tournamentsData } from '@/components/JSFiles/MainPage/TournamentsData.js';
import { useAllData } from '@/composable/useAllData.js';
import { updateTabs, data } from '@/composable/useUpdateTabs.js';

const router = useRouter();
const q = ref('');
const allTournamentsData = [];

const nameTournamentsTab = nameTabs('tournaments', labelsTabs);
const selectedTournamentTab = ref('tournamentsDota');

const allData = useAllData(tournamentsData, allTournamentsData);

watchEffect(() => {
  useWatchTabs(q, router, selectedTournamentTab, 'tournamentsDota');
  updateTabs(
    q.value,
    'news',
    tournamentsData,
    selectedTournamentTab,
    'tournamentsDota',
    dataName(tournamentsData, q)
  );
});

const changeTournamentTabs = (tabName) => {
  changeTabs(selectedTournamentTab, tabName, router, '/');
};

const showAllSlide = computed(() => q.value === 'tournamentsAll');
</script>

<template>
  <section class="tournaments">
    <div class="tournaments__content">
      <UITabs
        :selected-tab="selectedTournamentTab"
        :names="nameTournamentsTab"
        label="Tournaments"
        @change-tab="changeTournamentTabs"
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
            <router-link :to="{ path: '/tournament', query: { q: selectedTournamentTab } }">
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
