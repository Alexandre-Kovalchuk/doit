<script setup>
import { namePath, nameGame, gameId } from '@/composable/usePath.js';
import { tournamentsData } from '@/components/Data/MainPage/TournamentsData.js';
import { ref, watchEffect } from 'vue';
import UIBtn from '@/components/UI/UIBtn.vue';

watchEffect(() => {
  namePath();
});

const data = tournamentsData[0]['tournaments' + nameGame][0].labelThird;
</script>

<template>
  <div class="game-info">
    <div class="game-info__item" v-for="(item, index) in data" :key="index">
      <h3 class="game-info__title">{{ item.name }}</h3>

      <p class="game-info__text" v-if="item.game">{{ item.game }} ({{ item.platform }})</p>

      <p class="game-info__text" v-else-if="item.id !== 9">{{ item.txt }}</p>

      <UIBtn v-if="item.id === 9" :label="item.txt" />
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';
.game-info {
  border: 2px solid #20252b;
  padding: 42px 35px 30px 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 29px 15px;

  @include media-breakpoint-down(xs) {
    grid-template-columns: repeat(1, 1fr);
    border: none;
    padding: 30px 0;
    gap: 24px 0;
  }

  &__title {
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 8px;

    @include media-breakpoint-down(md) {
      font-size: 14px;
    }
  }

  &__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #67707a;

    @include media-breakpoint-down(md) {
      font-size: 14px;
    }
  }

  .v-btn {
    width: 121px;
    height: 36px;

    @include media-breakpoint-down(xs) {
      width: 100%;
      height: 44px;
    }

    &__btn {
      @include media-breakpoint-down(xs) {
        font-size: 12px;
      }
    }
  }
}
</style>
