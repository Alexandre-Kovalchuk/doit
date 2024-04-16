<script setup>
import UIFilter from '@/components/UI/UIFilter.vue';
import BaseImage from '@/components/Base/BaseImage.vue';
import UITourCard from '@/components/UI/UITourCard.vue';
import { tour, nameGame } from '@/components/JSFiles/MainPage/TournamentsData.js';
import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import BaseSvg from '@/components/Base/BaseSvg.vue';

const routers = useRouter();
const q = ref('');
const selectedKey = ref({ mode: '', status: '', region: '', platform: '' });
const isOpenFilter = ref(false);

const selectedBtn = ref('');

watch(() => {
  q.value = routers.currentRoute.value.query.q;
});

const filteredGame = computed(() => {
  let filteredData = tour[0][q.value];

  for (const key in selectedKey.value) {
    if (selectedKey.value[key]) {
      filteredData = filteredData.filter((item) => item[key] === selectedKey.value[key]);
    }
  }
  return filteredData;
});

const filterTournaments = (key, value) => {
  selectedKey.value[key] = value;
  selectedBtn.value = value;
};

const clearFilter = () => {
  selectedKey.value = { mode: '', status: '', region: '', platform: '' };

  selectedBtn.value = '';
};

const title = nameGame[0][q.value].title;
const webp = nameGame[0][q.value].webp;
const png = nameGame[0][q.value].png;

const toggleFilter = () => {
  isOpenFilter.value = !isOpenFilter.value;
};
</script>

<template>
  <main class="main">
    <section class="tour">
      <div class="container">
        <div class="tour__row">
          <h1 class="tour__title">{{ title }}: TOURNAMNETS</h1>

          <div class="tour__img">
            <BaseImage :srcset="webp" :src="png" :alt="title" />
          </div>
        </div>

        <div class="tour__content">
          <div class="tour__column">
            <div class="tour__card" v-for="item in filteredGame" :key="item.id">
              <UITourCard :tour-card="item" />
            </div>
          </div>
          <div :class="['tour__filter', { tour__filter_act: isOpenFilter }]">
            <div class="tour__filter-row" @click="toggleFilter">
              <h2 class="tour__filter-title">Filters</h2>

              <button class="tour__filter-clear" @click="clearFilter">clear</button>

              <div class="tour__filter-arrow">
                <BaseSvg id="arrow-down" />
              </div>
            </div>
            <div class="tour__filter-mode">
              <UIFilter
                :arr="tour[0].filter.mode"
                label="Game mode"
                @click="filterTournaments('mode', $event)"
                :selected-btn="selectedBtn"
              />
            </div>

            <div class="tour__filter-status">
              <UIFilter
                :arr="tour[0].filter.status"
                label="Status"
                @click="filterTournaments('status', $event)"
                :selected-btn="selectedBtn"
              />
            </div>

            <div class="tour__filter-platform">
              <UIFilter
                :arr="tour[0].filter.platform"
                label="Platform"
                @click="filterTournaments('platform', $event)"
                :selected-btn="selectedBtn"
              />
            </div>

            <div class="tour__filter-region">
              <UIFilter
                :arr="tour[0].filter.region"
                label="Server region"
                @click="filterTournaments('region', $event)"
                :selected-btn="selectedBtn"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';

.tour {
  margin-bottom: 100px;
  @include media-breakpoint-down(lg) {
    padding-left: 114px;
  }

  @include media-breakpoint-down(md) {
    padding-left: 0;
  }
  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    @include media-breakpoint-down(sm) {
      flex-direction: column-reverse;
      align-items: flex-start;
    }
  }

  &__title {
    font-weight: 700;
    font-size: 34px;
    line-height: 165%;

    @include media-breakpoint-down(sm) {
      font-size: 28px;
      line-height: 100%;
    }
  }

  &__img {
    width: 250px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
    }

    @include media-breakpoint-down(sm) {
      margin-bottom: 22px;
      width: 186px;
      height: 33px;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;

    @include media-breakpoint-down(md) {
      flex-direction: column-reverse;
    }
  }

  &__column {
    max-width: 859px;
    width: 100%;

    @include media-breakpoint-down(md) {
      max-width: 100%;
    }
  }

  &__filter {
    border: 2px solid #20252b;
    max-width: 281px;
    width: 100%;
    padding: 24px 30px 20px;
    max-height: 791px;

    @include media-breakpoint-down(lg) {
      margin-left: 10px;
    }

    @include media-breakpoint-down(md) {
      max-width: 100%;
      margin: 0 0 40px 0;
      transition: 0.5s ease;
    }

    @include media-breakpoint-down(sm) {
      max-height: 100px;
      overflow: hidden;
      border: none;
      padding: 24px 0 20px;
    }

    &_act {
      @include media-breakpoint-down(sm) {
        max-height: 500px;
        overflow: auto;
      }
    }

    &-arrow {
      display: none;
      width: 20px;
      height: 20px;

      svg {
        width: 100%;
        height: 100%;
      }

      @include media-breakpoint-down(sm) {
        display: block;
      }
    }

    &-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 51px;
    }

    &-title {
      font-weight: 500;
      font-size: 32px;
      line-height: 100%;
      color: #f5f5f5;
    }

    &-clear {
      display: block;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: #b83333;

      @include media-breakpoint-down(sm) {
        display: none;
      }
    }

    &-mode {
      margin-bottom: 24px;

      .filter__btns {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @include media-breakpoint-down(md) {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        @include media-breakpoint-down(xs) {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          height: 104px;
        }
      }
    }

    &-status {
      margin-bottom: 24px;

      .filter__btns {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @include media-breakpoint-down(md) {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        @include media-breakpoint-down(xs) {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          height: 58px;
        }
      }
    }

    &-platform {
      margin-bottom: 24px;

      .filter__btns {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 184px;

        @include media-breakpoint-down(md) {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(2, 1fr);
          height: 60px;
        }

        @include media-breakpoint-down(xs) {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          height: 184px;
        }
      }
    }

    &-region {
      .filter__btns {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 184px;

        @include media-breakpoint-down(md) {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(2, 1fr);
          height: 60px;
        }

        @include media-breakpoint-down(xs) {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          height: 184px;
        }
      }
    }
  }
}
</style>
