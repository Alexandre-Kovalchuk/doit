<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { computed, ref, watch, watchEffect } from 'vue';
import { tournamentsData } from '@/components/Data/MainPage/TournamentsData.js';
import UITabs from '@/components/UI/UITabs.vue';
import UICard from '@/components/UI/UICard.vue';
import { useRouter } from 'vue-router';
import { changeTabs } from '@/composable/useChangeTabs.js';
import { dataName } from '@/composable/useDataName.js';
import { useWatchTabs } from '@/composable/useWatchEffectTabs.js';
import { nameTabs } from '@/composable/useTabs.js';
import { useShowAllSlide } from '@/composable/new/useShowAllSlide.js';
import { tabsData } from '@/components/Data/TabsData.js';
const allTournamentsData = [];
const q = ref('');
const router = useRouter();
const selectedTournamentTab = ref('tournamentsDota');

const { labelsTabs } = tabsData();

const tournamentsTabs = nameTabs('tournaments', labelsTabs);
const changeTournamentTabs = (tabName) => {
  changeTabs(selectedTournamentTab, tabName, router, '/');
};

const dataTournaments = dataName(tournamentsData, q, 'tournamentsDota');
const allDataTournaments = useShowAllSlide(tournamentsData, allTournamentsData);

const showAllSlide = computed(() => q.value === 'tournamentsAll');

watchEffect(() => {
  useWatchTabs(q, router, selectedTournamentTab);
});
</script>

<template>
  <section class="tournaments">
    <div class="tournaments__content">
      <UITabs
        :selected-tab="selectedTournamentTab"
        :names="tournamentsTabs"
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
          <swiper-slide v-for="item in dataTournaments" :key="item.id">
            <router-link :to="{ path: `/tournament/${selectedTournamentTab}` }">
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
          <swiper-slide v-for="item in allDataTournaments" :key="item.id">
            <router-link :to="{ path: `/tournament/${selectedTournamentTab}` }">
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
