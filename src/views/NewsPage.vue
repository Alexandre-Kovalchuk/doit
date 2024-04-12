<script setup>
import UITabs from '@/components/UI/UITabs.vue';
import { tabs } from '@/components/JSFiles/MainPage/TabsData.js';
import { news } from '@/components/JSFiles/News.js';
import { ref } from 'vue';
import BaseImage from '@/components/Base/BaseImage.vue';

const selectedStreamsTab = ref('Dota');

const changeStreamsTabs = (tabName) => {
  selectedStreamsTab.value = tabName;
};
</script>

<template>
  <main class="main">
    <section class="news">
      <div class="container">
        <UITabs
          :selected-tab="selectedStreamsTab"
          :names="tabs"
          label="News"
          @changeTab="changeStreamsTabs"
        >
          <div class="news__row">
            <div class="news__item" v-for="item in news.slice(0, 2)" :key="item.id">
              <BaseImage :srcset="item.webp" :src="item.png" />

              <div class="news__column">
                <h2 class="news__column-title">{{ item.title }}</h2>
                <p class="news__column-text">{{ item.txt }}</p>
              </div>
            </div>
          </div>
        </UITabs>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
.news {
  &__row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 24px;
    margin-top: 34px;
  }
  &__item {
    display: flex;
  }

  &__column {
    max-width: 392px;
    width: 100%;
    background: #10171f;
    padding: 24px 0 34px 34px;

    &-title {
      max-width: 280px;
      width: 100%;
      font-weight: 500;
      font-size: 24px;
      line-height: 133%;
      opacity: 0.88;
      margin-bottom: 14px;
    }

    &-text {
      max-width: 280px;
      width: 100%;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: #67707a;
    }
  }
}
</style>
