<!--<script setup>-->
<!--import UITabs from '@/components/UI/UITabs.vue';-->
<!--import BaseImage from '@/components/Base/BaseImage.vue';-->
<!--import { tabs } from '@/components/JSFiles/MainPage/TabsData.js';-->
<!--import { Swiper, SwiperSlide } from 'swiper/vue';-->
<!--import 'swiper/css';-->
<!--import 'swiper/css/pagination';-->
<!--import { Pagination } from 'swiper/modules';-->
<!--import {-->
<!--  streamsImgCs,-->
<!--  streamsImgDota,-->
<!--  streamsImgFortnite,-->
<!--  streamsImgLol,-->
<!--  streamsImgStarCraft,-->
<!--} from '@/components/JSFiles/MainPage/StreamsData.js';-->
<!--import { ref, warn } from 'vue';-->

<!--// const selectedStreamsTab = ref('Dota');-->

<!--const changeStreamsTabs = (tabName) => {-->
<!--  selectedStreamsTab.value = tabName;-->
<!--};-->

<!--const swiperOptions = {-->
<!--  modules: [Pagination],-->
<!--  pagination: true,-->
<!--};-->
<!--</script>-->

<!--<template>-->
<!--  <section class="streams">-->
<!--    <div class="streams__content">-->
<!--      <UITabs-->
<!--        label="Streams"-->
<!--        :names="tabs"-->
<!--        :selectedTab="selectedStreamsTab"-->
<!--        @changeTab="changeStreamsTabs"-->
<!--      >-->
<!--        &lt;!&ndash; dota &ndash;&gt;-->
<!--        <swiper-->
<!--          :slides-per-view="'auto'"-->
<!--          :loop="true"-->
<!--          :spaceBetween="4"-->
<!--          :pagination="{ clickable: true }"-->
<!--          :modules="[Pagination]"-->
<!--          :breakpoints="{-->
<!--            320: { spaceBetween: 4 },-->
<!--            576: { spaceBetween: 4 },-->
<!--            1024: { spaceBetween: 4 },-->
<!--          }"-->
<!--          v-if="selectedStreamsTab === 'Dota' || selectedStreamsTab === 'All'"-->
<!--        >-->
<!--          <swiper-slide v-for="index in 4" :key="index" class="streams__slide">-->
<!--            <div v-for="dota in streamsImgDota" :key="dota.id" class="streams__img">-->
<!--              <BaseImage :srcset="dota.webp" :src="dota.img" :alt="'dota'" />-->
<!--            </div>-->
<!--          </swiper-slide>-->
<!--        </swiper>-->

<!--        &lt;!&ndash; fortnite &ndash;&gt;-->
<!--        <swiper-->
<!--          :slides-per-view="'auto'"-->
<!--          :loop="true"-->
<!--          :spaceBetween="4"-->
<!--          :pagination="{ clickable: true }"-->
<!--          :modules="[Pagination]"-->
<!--          :breakpoints="{-->
<!--            320: { spaceBetween: 4 },-->
<!--            576: { spaceBetween: 4 },-->
<!--            1024: { spaceBetween: 4 },-->
<!--          }"-->
<!--          v-if="selectedStreamsTab === 'Fortnite' || selectedStreamsTab === 'All'"-->
<!--        >-->
<!--          <swiper-slide v-for="index in 4" :key="index" class="streams__slide">-->
<!--            <div v-for="fortnite in streamsImgFortnite" :key="fortnite.id" class="streams__img">-->
<!--              <BaseImage :srcset="fortnite.webp" :src="fortnite.img" :alt="'Fortnite'" />-->
<!--            </div>-->
<!--          </swiper-slide>-->
<!--        </swiper>-->

<!--        &lt;!&ndash; lol &ndash;&gt;-->
<!--        <swiper-->
<!--          :slides-per-view="'auto'"-->
<!--          :loop="true"-->
<!--          :spaceBetween="4"-->
<!--          :pagination="{ clickable: true }"-->
<!--          :modules="[Pagination]"-->
<!--          :breakpoints="{-->
<!--            320: { spaceBetween: 4 },-->
<!--            576: { spaceBetween: 4 },-->
<!--            1024: { spaceBetween: 4 },-->
<!--          }"-->
<!--          v-if="selectedStreamsTab === 'LOL' || selectedStreamsTab === 'All'"-->
<!--        >-->
<!--          <swiper-slide v-for="index in 4" :key="index" class="streams__slide">-->
<!--            <div v-for="lol in streamsImgLol" :key="lol.id" class="streams__img">-->
<!--              <BaseImage :srcset="lol.webp" :src="lol.img" :alt="'LOL'" />-->
<!--            </div>-->
<!--          </swiper-slide>-->
<!--        </swiper>-->

<!--        &lt;!&ndash; cs &ndash;&gt;-->
<!--        <swiper-->
<!--          :slides-per-view="'auto'"-->
<!--          :loop="true"-->
<!--          :spaceBetween="4"-->
<!--          :pagination="{ clickable: true }"-->
<!--          :modules="[Pagination]"-->
<!--          :breakpoints="{-->
<!--            320: { spaceBetween: 4 },-->
<!--            576: { spaceBetween: 4 },-->
<!--            1024: { spaceBetween: 4 },-->
<!--          }"-->
<!--          v-if="selectedStreamsTab === 'CS' || selectedStreamsTab === 'All'"-->
<!--        >-->
<!--          <swiper-slide v-for="index in 4" :key="index" class="streams__slide">-->
<!--            <div v-for="cs in streamsImgCs" :key="cs.id" class="streams__img">-->
<!--              <BaseImage :srcset="cs.webp" :src="cs.img" :alt="'CS:GO'" />-->
<!--            </div>-->
<!--          </swiper-slide>-->
<!--        </swiper>-->

<!--        &lt;!&ndash; StarCraft &ndash;&gt;-->
<!--        <swiper-->
<!--          :slides-per-view="'auto'"-->
<!--          :loop="true"-->
<!--          :spaceBetween="4"-->
<!--          :pagination="{ clickable: true }"-->
<!--          :modules="[Pagination]"-->
<!--          :breakpoints="{-->
<!--            320: { spaceBetween: 4 },-->
<!--            576: { spaceBetween: 4 },-->
<!--            1024: { spaceBetween: 4 },-->
<!--          }"-->
<!--          v-if="selectedStreamsTab === 'StarCraft' || selectedStreamsTab === 'All'"-->
<!--        >-->
<!--          <swiper-slide v-for="index in 4" :key="index" class="streams__slide">-->
<!--            <div v-for="item in streamsImgStarCraft" :key="item.id" class="streams__img">-->
<!--              <BaseImage :srcset="item.webp" :src="item.img" :alt="'LOL'" />-->
<!--            </div>-->
<!--          </swiper-slide>-->
<!--        </swiper>-->
<!--      </UITabs>-->
<!--    </div>-->
<!--  </section>-->
<!--</template>-->

<!--<style lang="scss">-->
<!--@import '@/assets/style/breakpoints/media-breakpoints';-->
<!--.streams {-->
<!--  margin-bottom: 120px;-->

<!--  @include media-breakpoint-down(lg) {-->
<!--    padding-left: 114px;-->
<!--  }-->

<!--  @include media-breakpoint-down(md) {-->
<!--    padding-left: 0;-->
<!--  }-->

<!--  &__slide {-->
<!--    display: grid;-->
<!--    grid-template-columns: repeat(2, 1fr);-->
<!--    grid-template-rows: repeat(2, 1fr);-->
<!--    gap: 4px;-->
<!--    width: 583px;-->
<!--    height: 476px;-->
<!--    margin-top: 37px;-->

<!--    @include media-breakpoint-down(sm) {-->
<!--      height: 256px;-->
<!--      display: flex;-->
<!--    }-->
<!--  }-->

<!--  &__img {-->
<!--    img {-->
<!--      width: 100%;-->
<!--      height: 100%;-->
<!--    }-->

<!--    &:nth-child(1) {-->
<!--      width: 583px;-->
<!--      height: 320px;-->
<!--      object-fit: cover;-->
<!--      grid-area: 1 / 1 / 2 / 3;-->

<!--      @include media-breakpoint-down(sm) {-->
<!--        width: 329px;-->
<!--        height: 100%;-->
<!--        object-fit: cover;-->
<!--      }-->

<!--      @include media-breakpoint-down(xxs) {-->
<!--        width: 290px;-->
<!--      }-->
<!--    }-->

<!--    &:nth-child(2),-->
<!--    &:nth-child(3) {-->
<!--      width: 289px;-->
<!--      height: 152px;-->
<!--      grid-area: 2 / 1 / 3 / 2;-->

<!--      @include media-breakpoint-down(sm) {-->
<!--        width: 329px;-->
<!--        height: 100%;-->
<!--        object-fit: contain;-->
<!--        display: none;-->
<!--      }-->
<!--    }-->

<!--    &:nth-child(3) {-->
<!--      grid-area: 2 / 2 / 3 / 3;-->
<!--    }-->
<!--  }-->

<!--  .swiper {-->
<!--    height: 580px;-->
<!--    overflow: visible;-->
<!--    @include media-breakpoint-down(sm) {-->
<!--      height: 340px;-->
<!--    }-->
<!--    &-slide {-->
<!--      width: 583px !important;-->
<!--      @include media-breakpoint-down(sm) {-->
<!--        width: 329px !important;-->
<!--        height: 256px;-->
<!--      }-->
<!--      @include media-breakpoint-down(xs) {-->
<!--        //width: 329px !important;-->
<!--      }-->

<!--      @include media-breakpoint-down(xxs) {-->
<!--        width: 270px !important;-->
<!--      }-->
<!--    }-->

<!--    &-pagination-bullet {-->
<!--      width: 13px;-->
<!--      height: 17px;-->
<!--      border-radius: 0;-->
<!--      background: #20272e;-->

<!--      &-active {-->
<!--        background: #4f5f70;-->
<!--      }-->

<!--      @include media-breakpoint-down(sm) {-->
<!--        width: 6px;-->
<!--        height: 8px;-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->
