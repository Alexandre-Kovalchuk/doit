<script setup>
import UITabs from '@/components/UI/UITabs.vue';
import { tabs } from '@/components/JSFiles/MainPage/TabsData.js';
import { news, updateNewsTitle, changeTitle } from '@/components/JSFiles/News.js';
import { ref, watch, onMounted } from 'vue';
import BaseImage from '@/components/Base/BaseImage.vue';
import { useRoute, useRouter } from 'vue-router';

const routers = useRouter();
const q = ref('');
const namePath = useRoute().path;

console.log(namePath);

let selectedTab = ref('News');
const title = ref('');

const changeTabs = (tabName) => {
  selectedTab.value = tabName;
};

watch(() => {
  q.value = routers.currentRoute.value.query.q;
  selectedTab = ref(q);
  updateNewsTitle(q.value, title);
});
</script>

<template>
  <main class="main">
    <section class="news">
      <div class="container">
        <UITabs :selectedTab="selectedTab" :names="tabs" label="News" @changeTab="changeTabs">
          <div class="news__block" v-if="q !== 'All'">
            <div class="news__row">
              <div class="news__item" v-for="item in news.slice(0, 2)" :key="item.id">
                <div class="news__img">
                  <BaseImage :srcset="item.webp" :src="item.png" />
                </div>

                <div class="news__column">
                  <h2 class="news__column-title">{{ q ? title : 'News' }}</h2>
                  <p class="news__column-text">{{ item.txt }}</p>
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
                    {{ q ? title : 'News' }}
                  </h2>
                  <p class="news__column-text news__column-text_sub">{{ item.txt }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="news__block" v-for="(item, index) in 5" :key="index" v-else>
            <div class="news__row">
              <div class="news__item" v-for="item in news.slice(0, 2)" :key="item.id">
                <div class="news__img">
                  <BaseImage :srcset="item.webp" :src="item.png" />
                </div>

                <div class="news__column">
                  <h2 class="news__column-title">{{ changeTitle(index) }}</h2>
                  <p class="news__column-text">{{ item.txt }}</p>
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
                    {{ changeTitle(index) }}
                  </h2>
                  <p class="news__column-text news__column-text_sub">{{ item.txt }}</p>
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
  }

  &__img {
    width: 208px;
    height: 328px;

    @include media-breakpoint-down(xs) {
      width: 100%;
      min-height: 160px;
      height: auto;
    }

    &_sub {
      width: 288px;
      height: 240px;

      @include media-breakpoint-down(xs) {
        width: 100%;
        min-height: 160px;
        height: auto;
      }
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__column {
    max-width: 392px;
    width: 100%;
    background: #10171f;
    padding: 24px 0 34px 34px;

    @include media-breakpoint-down(lg) {
      max-width: 100%;
      padding: 22px 16px 30px;
    }

    &-title {
      max-width: 280px;
      width: 100%;
      font-weight: 500;
      font-size: 24px;
      line-height: 133%;
      opacity: 0.88;
      margin-bottom: 14px;

      @include media-breakpoint-down(lg) {
        max-width: 100%;
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
    padding: 24px 24px 34px;

    @include media-breakpoint-down(xs) {
      max-width: 100%;
      padding: 22px 16px 30px;
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
    .container {
      padding: 0;
    }
  }

  .container {
    max-width: 1264px;
  }
}
</style>
