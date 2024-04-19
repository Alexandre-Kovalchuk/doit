<script setup>
import UITabs from '@/components/UI/UITabs.vue';
import UICard from '@/components/UI/UICard.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { tabs } from '@/components/JSFiles/MainPage/TabsData.js';
import { Pagination } from 'swiper/modules';
import { tour } from '@/components/JSFiles/MainPage/TournamentsData.js';
import { computed, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const q = ref('');
const selectedTournamentTab = ref('Dota');

const changeTournamentTabs = (tabName) => {
  selectedTournamentTab.value = tabName;
  router.push({ path: '/', query: { q: tabName } });
};

watchEffect(() => {
  q.value = router.currentRoute.value.query.q || 'Dota';
  selectedTournamentTab.value = q.value;
});

const data = computed(() => {
  return tour[0][q.value] || [];
});

const showAllSlide = computed(() => q.value === 'All');
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

        <div v-else v-for="(allSlideData, allSlideKey) in tour[0]" :key="allSlideKey">
          <swiper
            v-if="Array.isArray(allSlideData) && allSlideData.length > 5"
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
            <swiper-slide v-for="(item, index) in allSlideData" :key="index">
              <router-link :to="{ path: '/tournament', query: { q: selectedTournamentTab } }">
                <UICard :card="item" />
              </router-link>
            </swiper-slide>
          </swiper>
        </div>
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
