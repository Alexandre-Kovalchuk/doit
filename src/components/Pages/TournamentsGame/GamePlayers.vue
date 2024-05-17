<script setup>
import { pagination } from '@/composable/new/usePagination.js';
import BaseImage from '@/components/Base/BaseImage.vue';
import UIPagination from '@/components/UI/UIPagination.vue';
import { playersData } from '@/components/Data/PlayersData.js';

const { players } = playersData();

const { paginatedData, totalPages, currentPage, setPage } = pagination(8, players);
</script>

<template>
  <div class="players">
    <div class="players__item">
      <div class="players__column" v-for="(item, index) in paginatedData" :key="index">
        <BaseImage :srcset="item.webp" :src="item.png" alt="avatar" />

        <div class="players__row">
          <BaseImage :srcset="item.flagWebp" :src="item.flagPng" alt="flag" />

          <p class="players__name">{{ item.name }}</p>
        </div>

        <p class="players__text">{{ item.team }}</p>
      </div>
    </div>

    <UIPagination :current-page="currentPage" :set-page="setPage" :total-pages="totalPages" />
  </div>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';

@import '@/assets/style/breakpoints/media-breakpoints';

.players {
  border: 2px solid #20252b;
  padding: 55px 18px 83px 24px;

  @include media-breakpoint-down(xs) {
    border: none;
    padding: 55px 0 83px;
  }

  &__item {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    margin-bottom: 30px;

    @include media-breakpoint-down(sm) {
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
    }

    @include media-breakpoint-down(xs) {
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
      border: none;
      padding: 30px 0 0;
      width: fit-content;
      margin: 0 auto 30px;
    }
  }

  &__column {
    background: #151a1f;
    border-radius: 2px 2px 0 0;
    max-width: 170px;
    width: 100%;
    min-height: 232px;
    height: 100%;

    img {
      width: 100%;
      max-height: 170px;
      height: 100%;

      @include media-breakpoint-down(md) {
        max-height: 149px;
      }
    }

    @include media-breakpoint-down(md) {
      max-width: 157px;
    }
  }

  &__row {
    display: flex;
    align-items: center;
    margin: 12px 10px 8px;

    @include media-breakpoint-down(sm) {
      flex-direction: column;
      align-items: self-start;
    }

    img {
      display: block;
      width: 16px;
      height: 12px;
    }
  }

  &__name {
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    color: #e6e8eb;
    margin-left: 8px;

    @include media-breakpoint-down(sm) {
      margin: 8px 0 0 0;
    }
  }

  &__text {
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    color: #525c66;
    padding-bottom: 16px;
    margin-left: 10px;
  }
}
</style>
