<script setup>
import UITabs from '@/components/UI/UITabs.vue';
import { tabsData } from '@/components/Data/TabsData.js';
import { computed, ref } from 'vue';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import UICard from '@/components/UI/UICard.vue';
import { tournamentsData } from '@/components/Data/mainData/tournamentsData.js';
import { useShowAllSlide } from '@/composable/new/useShowAllSlide.js';

const { labelsTabs } = tabsData();
const selectedTabs = ref('Dota');
const showSlide = ref('Dota');
const changeTabs = (name) => {
  selectedTabs.value = name;
  showSlide.value = name;
};

const allTournaments = computed(() => {
  return useShowAllSlide(tournamentsData(), showSlide);
});
</script>

<template>
  <section class="tournaments">
    <div class="tournaments__content">
      <UITabs
        :selected-tab="selectedTabs"
        :names="labelsTabs"
        label="Tournaments"
        @change-tab="changeTabs"
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
          <SwiperSlide v-for="item in allTournaments" :key="item.id">
            <router-link :to="{ path: `/tournament/${selectedTabs}` }">
              <UICard :card="item" />
            </router-link>
          </SwiperSlide>
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
