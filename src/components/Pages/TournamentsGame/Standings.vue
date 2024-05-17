<script setup>
import UIBtn from '@/components/UI/UIBtn.vue';
import { standingsHeaderData, standingsData } from '@/components/Data/standingsData.js';
import BaseImage from '@/components/Base/BaseImage.vue';
import UIPagination from '@/components/UI/UIPagination.vue';
import { pagination } from '@/composable/new/usePagination.js';

const { paginatedData, totalPages, currentPage, setPage } = pagination(7, standingsData);
</script>

<template>
  <div class="standings">
    <div class="standings__group">
      <h2 class="standings__group-title">Group A</h2>
      <div class="standings__group-btns">
        <UIBtn label="Classic" color="blue" />
        <UIBtn label="Cash prize" color="transparent" />
      </div>
    </div>

    <div class="standings__content">
      <div class="standings__header">
        <div class="standings__header-side-a">
          <p
            class="standings__header-text"
            v-for="item in standingsHeaderData[0].sideA"
            :key="item.id"
          >
            {{ item.name }}
          </p>
        </div>
        <div class="standings__header-side-b">
          <p
            class="standings__header-text"
            v-for="item in standingsHeaderData[0].sideB"
            :key="item.id"
          >
            {{ item.name }}
          </p>
        </div>
      </div>

      <div class="standings__table">
        <div class="standings__table-column" v-for="(item, index) in paginatedData" :key="index">
          <div class="standings__table-side-a">
            <p class="standings__table-text">{{ item.id }}</p>

            <BaseImage :srcset="item.flagWebp" :src="item.flagPng" alt="flag" />

            <p class="standings__table-text">{{ item.name }}</p>
          </div>

          <div class="standings__table-side-b">
            <p class="standings__table-text">{{ item.wins }}</p>

            <p class="standings__table-text">{{ item.loses }}</p>

            <p class="standings__table-text">{{ item.draws }}</p>

            <p class="standings__table-text">{{ item.points }}</p>
          </div>
        </div>
      </div>
    </div>
    <UIPagination :current-page="currentPage" :set-page="setPage" :total-pages="totalPages" />
  </div>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';

.standings {
  border: 2px solid #20252b;
  max-width: 812px;
  width: 100%;
  padding-bottom: 20px;

  @include media-breakpoint-down(xs) {
    border: none;
  }

  &__group {
    display: flex;
    align-items: center;
    margin: 19px 0 13px 30px;

    @include media-breakpoint-down(xs) {
      margin: 19px 0 13px;
    }

    &-title {
      font-weight: 700;
      font-size: 20px;
      text-transform: uppercase;
      color: #f5f5f5;
    }

    &-btns {
      border: 1px solid #20252b;
      border-radius: 2px;
      width: 180px;
      height: 30px;
      display: flex;
      margin-left: 56px;

      .v-btn {
        &:first-child {
          width: 78px;
        }
        &:last-child {
          width: 102px;
        }
        &__btn {
          font-weight: 400;
          font-size: 14px;
          line-height: 100%;
        }
      }
    }
  }

  &__content {
    margin-bottom: 30px;
    @include media-breakpoint-down(sm) {
      width: 100%;
      overflow: scroll;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  &__header {
    height: 46px;
    background: #20252b;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;

    @include media-breakpoint-down(sm) {
      min-width: 725px;
    }

    &-side-a {
      display: flex;
      justify-content: space-between;
      max-width: 276px;
      width: 100%;

      @include media-breakpoint-down(xs) {
        max-width: 230px;
      }
    }

    &-text {
      font-weight: 400;
      font-size: 12px;
      line-height: 100%;
      color: #fff;
    }

    &-side-b {
      display: flex;
      justify-content: space-between;
      max-width: 220px;
      width: 100%;
    }
  }

  &__table {
    @include media-breakpoint-down(sm) {
      min-width: 725px;
    }
    &-column {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 38px;
      padding: 0 40px;
      border-bottom: 1px solid #20252b;

      &:last-child {
        border: none;
      }

      @include media-breakpoint-down(xs) {
        border: none;
        //height: 13px;
      }
    }

    &-side-a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 376px;
      width: 100%;

      @include media-breakpoint-down(xs) {
        max-width: 328px;
      }

      p {
        &:nth-child(1) {
          width: 18px;
          text-align: left;
        }
      }

      picture {
        height: 12px;
      }
    }

    &-side-b {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 220px;
      width: 100%;
    }

    &-text {
      font-weight: 400;
      font-size: 14px;
      line-height: 100%;
      text-align: right;
      color: #67707a;
    }
  }
}
</style>
