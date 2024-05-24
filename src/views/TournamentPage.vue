<script setup>
import BaseSvg from '@/components/Base/BaseSvg.vue';
import { useGameNameAndId } from '@/composable/usePath.js';
import {
  filterData,
  nameGameData,
  tournamentsData,
} from '@/components/Data/mainData/tournamentsData.js';
import BaseImage from '@/components/Base/BaseImage.vue';
import UITourCard from '@/components/UI/UITourCard.vue';
import { computed, ref } from 'vue';
import { useShowAllSlide } from '@/composable/useShowAllSlide.js';
import UIFilter from '@/components/UI/UIFilter.vue';
import { useToggle } from '@/composable/useToggle.js';

const { nameGame } = useGameNameAndId();

const isMobile = ref(window.innerWidth <= 575);
const isOpenFilter = ref(false);

const allTournaments = computed(() => {
  return useShowAllSlide(tournamentsData(), nameGame);
});

const selectedFilters = ref({
  mode: '',
  status: '',
  region: '',
  platform: '',
});

const filterTournamentsByKeys = (data, filters) => {
  return data.filter((item) => {
    for (const key in filters) {
      if (filters[key] && item[key] !== filters[key]) {
        return false;
      }
    }
    return true;
  });
};

const filteredGame = computed(() => {
  const data = nameGame === 'All' ? allTournaments.value : tournamentsData()[nameGame];
  return filterTournamentsByKeys(data, selectedFilters.value);
});

const updateFilter = (key, value) => {
  selectedFilters.value[key] = value;
};

const toggleFilter = () => {
  useToggle(isOpenFilter);
};

window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth <= 575;
});
</script>

<template>
  <main class="main">
    <section class="tourney-game">
      <div class="container">
        <div class="tourney-game__content">
          <div class="tourney-game__row">
            <h1 class="tourney-game__title">{{ nameGame }}: Tournaments</h1>

            <div class="tourney-game__img" v-if="nameGame !== 'All'">
              <BaseImage
                v-for="(item, index) in nameGameData()[nameGame]"
                :key="index"
                :srcset="item.webp"
                :src="item.png"
                :alt="item.title"
              />
            </div>
          </div>

          <div class="tourney-game__column">
            <div class="tourney-game__item">
              <div class="tourney-game__cards" v-for="(card, index) in filteredGame" :key="index">
                <router-link :to="{ path: `/tournament/${card.name}/${card.id}` }">
                  <UITourCard :tour-card="card" />
                </router-link>
              </div>
            </div>

            <div :class="['tourney-game__filter', { 'tourney-game__filter_act': isOpenFilter }]">
              <div class="tourney-game__filter-row" @click="toggleFilter">
                <h2 class="tourney-game__filter-title">Filters</h2>

                <div class="tourney-game__filter-arrow" v-if="isMobile">
                  <BaseSvg id="arrow-down" />
                </div>

                <button class="tourney-game__filter-clear">clear</button>
              </div>

              <div
                :class="[`tourney-game__filter-${group[0].class}`]"
                v-for="(group, index) in filterData()"
                :key="index"
              >
                <UIFilter
                  :arr="group"
                  :label="group[0].title"
                  @click="updateFilter(group[0].class, $event)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';

.tourney-game {
  margin: 42px 0 80px;
  @include media-breakpoint-down(lg) {
    padding-left: 114px;
  }

  @include media-breakpoint-down(md) {
    padding-left: 0;
  }

  @include media-breakpoint-down(md) {
    margin: 0 0 80px;
  }

  &__content {
    padding: 0 23px;

    @include media-breakpoint-down(lg) {
      padding: 0;
    }
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
    text-transform: uppercase;

    @include media-breakpoint-down(xs) {
      font-size: 28px;
      line-height: 100%;
    }

    @include media-breakpoint-down(xxs) {
      font-size: 22px;
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
    }

    @include media-breakpoint-down(xs) {
      width: 186px;
      height: 33px;
    }
  }

  &__column {
    display: flex;
    justify-content: space-between;
    width: 100%;

    @include media-breakpoint-down(md) {
      flex-direction: column-reverse;
    }
  }

  &__item {
    width: 100%;
  }

  &__filter {
    border: 2px solid #20252b;
    max-width: 281px;
    width: 100%;
    padding: 21px 30px 20px;
    max-height: 791px;
    margin-left: 10px;
    position: relative;
    transition: 0.5s ease;

    @include media-breakpoint-down(lg) {
      padding: 15px;
    }

    @include media-breakpoint-down(md) {
      margin-bottom: 24px;
      margin-left: 0;
      max-width: 100%;
    }

    @include media-breakpoint-down(xs) {
      border: none;
      padding: 0;
      max-height: 40px;
      overflow: hidden;
      margin-bottom: 51px;

      &_act {
        max-height: 250px;
        overflow: auto;
      }
    }

    &-arrow {
      width: 20px;
      height: 20px;

      svg {
        display: block;
        width: 100%;
        height: 100%;
        fill: #f5f5f5;
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

      @include media-breakpoint-down(sm) {
        font-size: 26px;
      }

      @include media-breakpoint-down(xs) {
        font-size: 20px;
      }
    }

    &-clear {
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: #b83333;

      @include media-breakpoint-down(xs) {
        margin-top: 20px;
        position: absolute;
        top: 15px;
        z-index: 30;
      }
    }

    &-subtitle {
      font-weight: 500;
      font-size: 24px;
      line-height: 133%;
      margin-bottom: 12px;

      @include media-breakpoint-down(xs) {
        font-size: 22px;
        line-height: 145%;
      }
    }

    &-mode {
      margin-bottom: 24px;

      .filter__btns {
        display: flex;
        justify-content: space-between;
        max-width: 219px;
        width: 100%;
        @include media-breakpoint-down(md) {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          max-width: 100%;
        }

        @include media-breakpoint-down(xs) {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 104px;
        }
      }
    }

    &-status {
      .filter__btns {
        display: flex;
        justify-content: space-between;
        max-width: 201px;
        width: 100%;

        @include media-breakpoint-down(md) {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          max-width: 100%;
          height: 60px;
        }

        @include media-breakpoint-down(xs) {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 58px;
        }
      }
    }

    &-platform {
      margin: 26px 0 24px;
      .filter__btns {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 184px;

        @include media-breakpoint-down(md) {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          height: 60px;
        }

        @include media-breakpoint-down(xs) {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
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
          height: 60px;
        }

        @include media-breakpoint-down(xs) {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 184px;
        }
      }
    }

    &-btn {
      color: #67707a;
      min-width: 54px;
      height: 24px;
      display: flex;
      align-items: center;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      text-transform: uppercase;

      span {
        border: 1px solid #67707a;
        width: 16px;
        height: 16px;
        position: relative;
        margin-right: 8px;
      }

      &_act {
        color: #0a68f5;
        span {
          border: 1px solid #0a68f5;
          &:after {
            content: '';
            width: 8px;
            height: 8px;
            background: #0a68f5;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }

      @include media-breakpoint-down(sm) {
        font-size: 14px;
        line-height: 171%;
      }
    }
  }
}
</style>
