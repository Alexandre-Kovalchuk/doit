<script setup>
import { ref } from 'vue';
import BaseDropdown from '@/components/Base/BaseDropdown.vue';
import UITabs from '@/components/UI/UITabs.vue';
import BaseSvg from '@/components/Base/BaseSvg.vue';
import UIPagination from '@/components/UI/UIPagination.vue';
import { pagination } from '@/composable/new/usePagination.js';
import { topData } from '@/components/Data/topData/TopData.js';
import { tabsData } from '@/components/Data/TabsData.js';

const isTable = ref(window.innerWidth <= 767);
const isMobile = ref(window.innerWidth <= 576);
const selectedTabs = ref('Top Players');

const { yearsData, totalData, topTabsBody, topTabsHead } = topData();
const { topTabs } = tabsData();
const changeTabs = (tabName) => {
  selectedTabs.value = tabName;
};

const { paginatedData, totalPages, currentPage, setPage } = pagination(10, topTabsBody);

window.addEventListener('resize', () => {
  isTable.value = window.innerWidth <= 767;
  isMobile.value = window.innerWidth <= 576;
});
</script>

<template>
  <main class="main">
    <section class="top">
      <div class="container">
        <div class="top__content">
          <div class="top__head">
            <h1 class="top__title">Top of</h1>
            <BaseDropdown :options="yearsData" label="2019" />
          </div>

          <div class="top__row">
            <div class="top__row-item" v-for="(item, index) in totalData" :key="index">
              <p class="top__row-name">{{ item.name }}</p>
              <p class="top__row-txt">{{ item.txt }}</p>
            </div>
          </div>

          <div class="top__tabs">
            <UITabs
              :selected-tab="selectedTabs"
              :names="isMobile ? topTabs[0].mobile : topTabs[0].desktop"
              @change-tab="changeTabs"
            >
              <div class="top__tabs-head">
                <div class="top__tabs-item">
                  <h3
                    :class="['top__tabs-title', item === 'NAME' ? 'top__tabs-title_name' : '']"
                    v-for="(item, index) in topTabsHead.slice(0, 3)"
                    :key="index"
                  >
                    {{ isMobile && item === 'Country & Nickname' ? 'Player' : item }}
                  </h3>
                </div>

                <div class="top__tabs-item">
                  <h3
                    class="top__tabs-title"
                    v-for="(item, index) in topTabsHead.slice(3, 5)"
                    :key="index"
                  >
                    {{ isTable ? item.slice(7, -1) : item }}
                  </h3>
                </div>
              </div>

              <div class="top__tabs-body">
                <div class="top__tabs-item">
                  <div class="top__tabs-rank">
                    <p class="top__tabs-text" v-for="item in paginatedData" :key="item.id">
                      {{ item.id }}
                    </p>
                  </div>

                  <div class="top__tabs-country">
                    <div class="top__tabs-icon" v-for="item in paginatedData" :key="item.id">
                      <BaseSvg :id="item.country" />
                    </div>
                  </div>

                  <div class="top__tabs-nickname">
                    <p
                      class="top__tabs-text top__tabs-text_nickname"
                      v-for="item in paginatedData"
                      :key="item.id"
                    >
                      {{ item.nickname }}

                      <span class="top__tabs-text_span" v-if="isTable"> {{ item.name }}</span>
                    </p>
                  </div>

                  <div class="top__tabs-name" v-if="!isTable">
                    <p class="top__tabs-text" v-for="item in paginatedData" :key="item.id">
                      {{ item.name }}
                    </p>
                  </div>
                </div>

                <div class="top__tabs-item">
                  <div class="top__tabs-total">
                    <p
                      class="top__tabs-text top__tabs-text_total"
                      v-for="item in paginatedData"
                      :key="item.id"
                    >
                      {{ isMobile ? '$800K' : item.totalYear }}
                    </p>
                  </div>

                  <div class="top__tabs-total top__tabs-total_sub">
                    <p
                      class="top__tabs-text top__tabs-text_total"
                      v-for="item in paginatedData"
                      :key="item.id"
                    >
                      {{ isMobile ? '$1.22k' : item.totalOveral }}
                    </p>
                  </div>
                </div>
              </div>

              <div class="top__tabs-pagination">
                <UIPagination
                  :current-page="currentPage"
                  :set-page="setPage"
                  :total-pages="totalPages"
                />
              </div>
            </UITabs>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';

.main {
  @include media-breakpoint-down(xs) {
    padding: 102px 0 0;
  }
}

.top {
  margin-top: 63px;

  .container {
    @include media-breakpoint-down(xs) {
      padding: 0 14px;
    }
  }

  @include media-breakpoint-down(lg) {
    padding-left: 114px;
  }

  @include media-breakpoint-down(md) {
    padding-left: 0;
  }

  @include media-breakpoint-down(xs) {
    margin: 0 0 70px;
  }

  &__content {
    margin: 0 23px;

    @include media-breakpoint-down(lg) {
      margin: 0;
    }
  }

  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto 52px;
    width: 294px;

    @include media-breakpoint-down(xs) {
      width: 193px;
      margin: 0 auto 32px;
    }
  }

  &__title {
    font-weight: 700;
    font-size: 44px;
    line-height: 100%;
    text-align: center;

    @include media-breakpoint-down(xs) {
      font-weight: 700;
      font-size: 28px;
    }
  }

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 22px;
    margin-bottom: 50px;

    @include media-breakpoint-down(lg) {
      flex-direction: column;
      align-items: flex-start;
      margin: 0 0 100px;
    }

    @include media-breakpoint-down(xs) {
      flex-direction: column-reverse;
      justify-content: flex-end;
    }

    &-item {
      display: flex;
      align-items: center;

      @include media-breakpoint-down(lg) {
        width: 100%;
        justify-content: space-between;
        margin-bottom: 20px;
      }
    }

    &-name {
      font-weight: 700;
      font-size: 22px;
      line-height: 100%;
      color: #e6e8eb;

      @include media-breakpoint-down(xs) {
        font-weight: 500;
        font-size: 16px;
      }
    }

    &-txt {
      font-weight: 400;
      font-size: 22px;
      line-height: 100%;
      color: #8995a3;
      margin-left: 16px;
      @include media-breakpoint-down(xs) {
        font-size: 16px;
      }
    }
  }

  &__tabs {
    border: 2px solid #242b33;

    @include media-breakpoint-down(xs) {
      border-top: 2px solid #242b33;
      border-right: none;
      border-left: none;
      border-bottom: none;
    }
  }

  &__tabs-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 68px;
    border-bottom: 2px solid #242b33;
    padding: 10px 36px 0;
    opacity: 0.88;

    @include media-breakpoint-down(md) {
      padding: 10px 20px 0;
    }

    @include media-breakpoint-down(xs) {
      height: 28px;
      border-bottom: none;
      padding: 30px 9px 0;
    }
  }

  &__tabs-item {
    display: flex;
    justify-content: space-between;

    &:first-child {
      h3 {
        &:nth-child(2) {
          width: 302px;
          margin: 0 60px;

          @include media-breakpoint-down(lg) {
            width: 200px;
          }

          @include media-breakpoint-down(md) {
            margin: 0 30px;
          }

          @include media-breakpoint-down(xs) {
            width: fit-content;
            margin: 0 16px;
          }
        }

        &:nth-child(3) {
          @include media-breakpoint-down(xs) {
            width: fit-content;
            margin: 0 16px;
            color: red;
          }
        }
      }
    }

    &:last-child {
      width: 301px;

      @include media-breakpoint-down(md) {
        width: 250px;
      }

      @include media-breakpoint-down(xs) {
        width: 125px;
      }

      h3 {
        &:nth-child(1) {
          @include media-breakpoint-down(xs) {
            width: fit-content;
            padding-left: 20px;
          }
        }
      }
    }
  }

  &__tabs-title {
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    text-transform: uppercase;
    color: #e6e6e6;

    &_name {
      @include media-breakpoint-down(sm) {
        display: none;
      }
    }

    @include media-breakpoint-down(sm) {
      font-weight: 500;
      font-size: 10px;
      color: #e6e8eb;
    }
  }

  &__tabs-body {
    display: flex;
    justify-content: space-between;
    padding: 23px 36px 0;

    @include media-breakpoint-down(md) {
      padding: 23px 20px 0;
    }

    @include media-breakpoint-down(xs) {
      padding: 29px 0;
    }
  }

  &__tabs-icon {
    width: 22px;
    height: 16px;
    margin-bottom: 30px;

    @include media-breakpoint-down(sm) {
      margin-bottom: 37px;
    }

    @include media-breakpoint-down(xs) {
      margin-bottom: 28px;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &__tabs-text {
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: #67707a;
    margin-bottom: 30px;

    &_total {
      text-align: right;

      @include media-breakpoint-down(sm) {
        margin-bottom: 33px !important;
      }
    }

    &_span {
      display: block;
      font-size: 12px;
      color: #67707a;
      margin-top: 3px;
    }

    &_nickname {
      @include media-breakpoint-down(xs) {
        font-size: 12px;
        color: #cccccc;
      }
    }

    @include media-breakpoint-down(sm) {
      margin-bottom: 17px;
    }

    @include media-breakpoint-down(xs) {
      font-size: 12px;
    }
  }

  &__tabs-rank {
    margin: 0 40px 0 18px;
    width: 45px;

    @include media-breakpoint-down(md) {
      margin: 0 39px 0 18px;
    }

    @include media-breakpoint-down(sm) {
      margin: 0 15px 0 0;
    }

    @include media-breakpoint-down(xs) {
      width: 28px;
      margin: 0 0 0 20px;
    }

    p {
      @include media-breakpoint-down(sm) {
        margin-bottom: 37px;
      }

      @include media-breakpoint-down(xs) {
        margin-bottom: 32px;
      }
    }
  }

  &__tabs-nickname {
    width: 328px;
    margin-left: 12px;

    @include media-breakpoint-down(lg) {
      width: 228px;
    }

    @include media-breakpoint-down(md) {
      width: 197px;
    }

    @include media-breakpoint-down(sm) {
      width: 165px;
    }

    @include media-breakpoint-down(xs) {
      width: 144px;
      margin-left: 8px;
    }
  }

  &__tabs-total {
    &:first-child {
      padding-left: 15px;

      @include media-breakpoint-down(xs) {
        padding: 0;
      }
    }
  }

  &__tabs-pagination {
    border-top: 2px solid #242b33;
    padding: 18px 0;
  }

  .dropdown {
    width: 160px;
    height: 44px;
    border: none;
    padding: 0 9px;

    @include media-breakpoint-down(xs) {
      width: 105px;
      height: 28px;
      padding: 0 3px;
    }

    &__current {
      font-weight: 700;
      font-size: 44px;
      line-height: 100%;
      color: #2787f6;
      padding: 0;

      @include media-breakpoint-down(xs) {
        font-size: 28px;
      }
    }
  }

  .tabs {
    &__row {
      margin: 0;
    }

    &__btns {
      max-width: 100%;
      border-bottom: 2px solid #242b33;

      @include media-breakpoint-down(md) {
        margin: 0;
      }
    }

    &__btns-item {
      padding: 0;
      width: 294px;
      height: 61px;
      background: #0f1215;
      font-weight: 700;
      font-size: 22px;
      line-height: 100%;
      color: #f5f5f5;

      &_act {
        background: #d8dfeb;
        color: #0f1215;
      }

      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3) {
        border-right: 2px solid #242b33;
      }

      @include media-breakpoint-down(xs) {
        font-weight: 400;
        font-size: 12px;
        width: 100%;
        height: 37px;
        margin: 0;

        &:first-child {
          border-left: 2px solid #242b33;
        }

        &:last-child {
          border-right: 2px solid #242b33;
        }
      }
    }

    &__content {
      margin: 0;
    }
  }
}
</style>
