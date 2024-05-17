<script setup>
import UITabs from '@/components/UI/UITabs.vue';
import { ref } from 'vue';
import BaseImage from '@/components/Base/BaseImage.vue';
import { tabsData } from '@/components/Data/TabsData.js';
import { newsPageData } from '@/components/Data/newsData/newsPageData.js';

const { labelsTabs } = tabsData();
const { news } = newsPageData();

const selectedTab = ref('Dota');
const title = ref('Dota');
const isMobile = ref(window.innerWidth <= 576);

const changeTabs = (tabName) => {
  selectedTab.value = tabName;
  title.value = tabName;
};

window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth <= 576;
});
</script>

<template>
  <main class="main">
    <section class="news">
      <div class="container">
        <UITabs :selectedTab="selectedTab" :names="labelsTabs" label="News" @changeTab="changeTabs">
          <div class="news__block">
            <div class="news__row">
              <div class="news__item" v-for="(item, index) in news.slice(0, 2)" :key="index">
                <div class="news__img">
                  <BaseImage :srcset="item.webp" :src="item.png" />
                </div>

                <div class="news__column">
                  <h2 class="news__column-title">
                    {{ title === 'All' ? 'Brazil' : title }} {{ item.title }}
                  </h2>
                  <p class="news__column-text">
                    {{ isMobile ? item.text.slice(0, 140) : item.text }}
                  </p>
                </div>
              </div>
            </div>

            <div class="news__sub-row">
              <div
                class="news__item news__item_sub"
                v-for="item in news.slice(2, 6)"
                :key="item.id"
              >
                <div class="news__img news__img_sub">
                  <BaseImage :srcset="item.webp" :src="item.png" />
                </div>

                <div class="news__sub-column">
                  <h2 class="news__column-title news__column-title_sub">
                    {{ title === 'All' ? 'Brazil' : title }} {{ item.title }}
                  </h2>
                  <p class="news__column-text news__column-text_sub">
                    {{ item.text }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </UITabs>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';

.news {
  margin-top: 63px;

  @include media-breakpoint-down(l) {
    padding-left: 114px;
  }

  @include media-breakpoint-down(md) {
    padding-left: 0;
  }
  @include media-breakpoint-down(xs) {
    margin-top: 55px;
  }

  &__row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 24px;
    margin: 34px 0 24px;

    @include media-breakpoint-down(lg) {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
    }

    @include media-breakpoint-down(xs) {
      gap: 16px;
    }
  }

  &__item {
    display: flex;

    @include media-breakpoint-down(xs) {
      flex-direction: column;
    }

    &_sub {
      flex-direction: column;
    }

    &:nth-child(1) {
      @include media-breakpoint-down(xs) {
        img {
          object-position: center -76px;
        }
      }
    }

    &:nth-child(2) {
      @include media-breakpoint-down(xs) {
        img {
          object-position: 50% 76%;
        }
      }
    }
  }

  &__img {
    width: 208px;

    @include media-breakpoint-down(xs) {
      width: 100%;
    }

    &_sub {
      width: 288px;

      @include media-breakpoint-down(xs) {
        width: 100%;
      }
    }

    img {
      width: 100%;
      height: auto;
      object-fit: cover;

      @include media-breakpoint-down(xs) {
        aspect-ratio: 1 / 0.486;
      }
    }
  }

  &__column {
    max-width: 392px;
    width: 100%;
    background: #10171f;
    padding: 26px 0 34px 34px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include media-breakpoint-down(lg) {
      max-width: 100%;
      padding: 22px 16px 30px;
    }

    @include media-breakpoint-down(xs) {
      max-width: 100%;
      padding: 18px 19px 30px;
    }

    &-title {
      max-width: 280px;
      width: 100%;
      font-weight: 500;
      font-size: 24px;
      line-height: 133%;
      opacity: 0.88;

      @include media-breakpoint-down(lg) {
        max-width: 100%;
      }

      @include media-breakpoint-down(sm) {
        font-size: 18px;
        margin-bottom: 14px;
      }

      &_sub {
        font-size: 18px;
        line-height: 150%;
        max-width: 240px;
        width: 100%;
      }
    }

    &-text {
      max-width: 280px;
      width: 100%;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: #67707a;

      @include media-breakpoint-down(lg) {
        max-width: 100%;
      }

      @include media-breakpoint-down(sm) {
        font-size: 14px;
      }

      &_sub {
        max-width: 240px;
        width: 100%;

        @include media-breakpoint-down(lg) {
          max-width: 100%;
        }
      }
    }
  }

  &__sub-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 24px;

    @include media-breakpoint-down(lg) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 24px;

      @include media-breakpoint-down(xs) {
        gap: 16px;
      }
    }
  }

  &__sub-column {
    max-width: 288px;
    width: 100%;
    background: #20252b;
    padding: 26px 24px 34px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include media-breakpoint-down(xs) {
      max-width: 100%;
      padding: 22px 16px 30px;
      height: 198px;
    }
  }

  .tabs {
    &__title {
      font-size: 48px;
      line-height: 117%;
    }
    &__row {
      max-width: 715px;
      width: 100%;
      margin: 0;
    }

    &__content {
      margin-left: 0;
    }

    &__btns {
      @include media-breakpoint-down(xs) {
        margin: 40px 0 0 0;
      }
    }

    &__btns-item {
      padding: 16px;
    }
  }

  .container {
    max-width: 1264px;
  }
}
</style>
