<!--<script setup>-->
<!--import UIFilter from '@/components/UI/UIFilter.vue';-->
<!--import BaseImage from '@/components/Base/BaseImage.vue';-->
<!--import UITourCard from '@/components/UI/UITourCard.vue';-->
<!--import { tour, nameGame } from '@/components/JSFiles/MainPage/TournamentsData.js';-->
<!--import { ref, computed, watchEffect } from 'vue';-->
<!--import { useRouter } from 'vue-router';-->
<!--import BaseSvg from '@/components/Base/BaseSvg.vue';-->
<!--import { useAllData } from '@/composable/useAllData.js';-->

<!--const routers = useRouter();-->
<!--const q = ref('');-->

<!--const title = ref('');-->
<!--const webp = ref('');-->
<!--const png = ref('');-->

<!--const selectedKey = ref({ mode: '', status: '', region: '', platform: '' });-->
<!--const isOpenFilter = ref(false);-->
<!--const selectedBtn = ref(0);-->
<!--const isMobile = ref(window.innerWidth <= 575);-->
<!--const showAllTournament = computed(() => q.value === 'All');-->

<!--const allTournamentArr = [];-->

<!--watchEffect(() => {-->
<!--  q.value = routers.currentRoute.value.query.q;-->
<!--});-->

<!--const filteredGame = computed(() => {-->
<!--  let filteredData =-->
<!--    q.value === 'All' ? useAllData(tour, allTournamentArr.slice(0, 45)) : tour[0][q.value];-->

<!--  for (const key in selectedKey.value) {-->
<!--    if (selectedKey.value[key]) {-->
<!--      filteredData = filteredData.filter((item) => item[key] === selectedKey.value[key]);-->
<!--    }-->
<!--  }-->
<!--  return filteredData;-->
<!--});-->

<!--const filterTournaments = (key, value) => {-->
<!--  selectedKey.value[key] = value;-->
<!--};-->

<!--const clearFilter = () => {-->
<!--  selectedKey.value = { mode: '', status: '', region: '', platform: '' };-->
<!--  selectedBtn.value = 0;-->
<!--};-->

<!--if (showAllTournament.value) {-->
<!--  title.value = 'All';-->
<!--} else {-->
<!--  title.value = nameGame[0][q.value].title;-->
<!--  webp.value = nameGame[0][q.value].webp;-->
<!--  png.value = nameGame[0][q.value].png;-->
<!--}-->

<!--const toggleFilter = () => {-->
<!--  isOpenFilter.value = !isOpenFilter.value;-->
<!--};-->

<!--window.addEventListener('resize', () => {-->
<!--  isMobile.value = window.innerWidth <= 575;-->
<!--});-->
<!--</script>-->

<!--<template>-->
<!--  <main class="main">-->
<!--    <section class="tourney-game">-->
<!--      <div class="container">-->
<!--        <div class="tourney-game__content">-->
<!--          <div class="tourney-game__row">-->
<!--            <h1 class="tourney-game__title">{{ title }}: Tournaments</h1>-->

<!--            <div class="tourney-game__img">-->
<!--              <BaseImage v-if="showAllTournament" :srcset="webp" :src="png" :alt="title" />-->
<!--            </div>-->
<!--          </div>-->

<!--          <div class="tourney-game__column">-->
<!--            <div class="tourney-game__item">-->
<!--              <div-->
<!--                class="tourney-game__cards"-->
<!--                v-if="!showAllTournament"-->
<!--                v-for="(card, index) in filteredGame"-->
<!--                :key="index"-->
<!--              >-->
<!--                <router-link :to="{ path: `/tournament/${card.name}/${card.id}` }">-->
<!--                  <UITourCard :tour-card="card" />-->
<!--                </router-link>-->
<!--              </div>-->

<!--              <div-->
<!--                class="tourney-game__cards"-->
<!--                v-else-->
<!--                v-for="(card, ind) in filteredGame"-->
<!--                :key="ind"-->
<!--              >-->
<!--                <router-link :to="{ path: `/tournament/${card.name}/${card.id}` }">-->
<!--                  <UITourCard :tour-card="card" />-->
<!--                </router-link>-->
<!--              </div>-->
<!--            </div>-->

<!--            <div :class="['tourney-game__filter', { 'tourney-game__filter_act': isOpenFilter }]">-->
<!--              <div class="tourney-game__filter-row" @click="toggleFilter">-->
<!--                <h2 class="tourney-game__filter-title">Filters</h2>-->

<!--                <div class="tourney-game__filter-arrow" v-if="isMobile">-->
<!--                  <BaseSvg id="arrow-down" />-->
<!--                </div>-->

<!--                <button class="tourney-game__filter-clear" v-if="!isMobile" @click="clearFilter">-->
<!--                  clear-->
<!--                </button>-->
<!--              </div>-->

<!--              <div class="tourney-game__filter-mode">-->
<!--                <UIFilter-->
<!--                  :arr="tour[0].filter.mode"-->
<!--                  label="Game mode"-->
<!--                  @click="filterTournaments('mode', $event)"-->
<!--                />-->
<!--              </div>-->

<!--              <div class="tourney-game__filter-status">-->
<!--                <UIFilter-->
<!--                  :arr="tour[0].filter.status"-->
<!--                  label="Status"-->
<!--                  @click="filterTournaments('status', $event)"-->
<!--                  :selected-btn="selectedBtn"-->
<!--                />-->
<!--              </div>-->

<!--              <div class="tourney-game__filter-platform">-->
<!--                <UIFilter-->
<!--                  :arr="tour[0].filter.platform"-->
<!--                  label="Platform"-->
<!--                  @click="filterTournaments('platform', $event)"-->
<!--                  :selected-btn="selectedBtn"-->
<!--                />-->
<!--              </div>-->

<!--              <div class="tourney-game__filter-region">-->
<!--                <UIFilter-->
<!--                  :arr="tour[0].filter.region"-->
<!--                  label="Server region"-->
<!--                  @click="filterTournaments('region', $event)"-->
<!--                  :selected-btn="selectedBtn"-->
<!--                />-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->
<!--  </main>-->
<!--</template>-->

<!--<style lang="scss">-->
<!--@import '@/assets/style/breakpoints/media-breakpoints';-->

<!--.tourney-game {-->
<!--  margin: 42px 0 80px;-->
<!--  @include media-breakpoint-down(lg) {-->
<!--    padding-left: 114px;-->
<!--  }-->

<!--  @include media-breakpoint-down(md) {-->
<!--    padding-left: 0;-->
<!--  }-->

<!--  @include media-breakpoint-down(md) {-->
<!--    margin: 0 0 80px;-->
<!--  }-->

<!--  &__content {-->
<!--    padding: 0 23px;-->

<!--    @include media-breakpoint-down(lg) {-->
<!--      padding: 0;-->
<!--    }-->
<!--  }-->

<!--  &__row {-->
<!--    display: flex;-->
<!--    justify-content: space-between;-->
<!--    align-items: center;-->
<!--    margin-bottom: 16px;-->

<!--    @include media-breakpoint-down(sm) {-->
<!--      flex-direction: column-reverse;-->
<!--      align-items: flex-start;-->
<!--    }-->
<!--  }-->

<!--  &__title {-->
<!--    font-weight: 700;-->
<!--    font-size: 34px;-->
<!--    line-height: 165%;-->
<!--    text-transform: uppercase;-->

<!--    @include media-breakpoint-down(xs) {-->
<!--      font-size: 28px;-->
<!--      line-height: 100%;-->
<!--    }-->

<!--    @include media-breakpoint-down(xxs) {-->
<!--      font-size: 22px;-->
<!--    }-->
<!--  }-->

<!--  &__img {-->
<!--    width: 250px;-->
<!--    height: 56px;-->

<!--    img {-->
<!--      width: 100%;-->
<!--      height: 100%;-->
<!--    }-->

<!--    @include media-breakpoint-down(sm) {-->
<!--      margin-bottom: 22px;-->
<!--    }-->

<!--    @include media-breakpoint-down(xs) {-->
<!--      width: 186px;-->
<!--      height: 33px;-->
<!--    }-->
<!--  }-->

<!--  &__column {-->
<!--    display: flex;-->
<!--    justify-content: space-between;-->
<!--    width: 100%;-->

<!--    @include media-breakpoint-down(md) {-->
<!--      flex-direction: column-reverse;-->
<!--    }-->
<!--  }-->

<!--  &__item {-->
<!--    width: 100%;-->
<!--  }-->

<!--  &__filter {-->
<!--    border: 2px solid #20252b;-->
<!--    max-width: 281px;-->
<!--    width: 100%;-->
<!--    padding: 21px 30px 20px;-->
<!--    max-height: 791px;-->
<!--    margin-left: 10px;-->
<!--    position: relative;-->
<!--    transition: 0.5s ease;-->

<!--    @include media-breakpoint-down(lg) {-->
<!--      padding: 15px;-->
<!--    }-->

<!--    @include media-breakpoint-down(md) {-->
<!--      margin-bottom: 24px;-->
<!--      margin-left: 0;-->
<!--      max-width: 100%;-->
<!--    }-->

<!--    @include media-breakpoint-down(xs) {-->
<!--      border: none;-->
<!--      padding: 0;-->
<!--      max-height: 50px;-->
<!--      overflow: hidden;-->

<!--      &_act {-->
<!--        max-height: 250px;-->
<!--        overflow: auto;-->
<!--      }-->
<!--    }-->

<!--    &-arrow {-->
<!--      width: 20px;-->
<!--      height: 20px;-->

<!--      svg {-->
<!--        width: 100%;-->
<!--        height: 100%;-->
<!--      }-->
<!--    }-->

<!--    &-row {-->
<!--      display: flex;-->
<!--      justify-content: space-between;-->
<!--      align-items: center;-->
<!--      margin-bottom: 51px;-->
<!--    }-->

<!--    &-title {-->
<!--      font-weight: 500;-->
<!--      font-size: 32px;-->
<!--      line-height: 100%;-->

<!--      @include media-breakpoint-down(sm) {-->
<!--        font-size: 26px;-->
<!--      }-->

<!--      @include media-breakpoint-down(xs) {-->
<!--        font-size: 20px;-->
<!--      }-->
<!--    }-->

<!--    &-clear {-->
<!--      font-weight: 400;-->
<!--      font-size: 16px;-->
<!--      line-height: 150%;-->
<!--      color: #b83333;-->

<!--      @include media-breakpoint-down(xs) {-->
<!--        margin-top: 20px;-->
<!--      }-->
<!--    }-->

<!--    &-mode {-->
<!--      margin-bottom: 24px;-->

<!--      .filter__btns {-->
<!--        display: flex;-->
<!--        justify-content: space-between;-->
<!--        max-width: 219px;-->
<!--        width: 100%;-->
<!--        @include media-breakpoint-down(md) {-->
<!--          display: grid;-->
<!--          grid-template-columns: repeat(3, 1fr);-->
<!--          max-width: 100%;-->
<!--        }-->

<!--        @include media-breakpoint-down(xs) {-->
<!--          display: flex;-->
<!--          flex-direction: column;-->
<!--          justify-content: space-between;-->
<!--          height: 104px;-->
<!--        }-->
<!--      }-->
<!--    }-->

<!--    &-status {-->
<!--      .filter__btns {-->
<!--        display: flex;-->
<!--        justify-content: space-between;-->
<!--        max-width: 201px;-->
<!--        width: 100%;-->

<!--        @include media-breakpoint-down(md) {-->
<!--          display: grid;-->
<!--          grid-template-columns: repeat(3, 1fr);-->
<!--          max-width: 100%;-->
<!--          height: 60px;-->
<!--        }-->

<!--        @include media-breakpoint-down(xs) {-->
<!--          display: flex;-->
<!--          flex-direction: column;-->
<!--          justify-content: space-between;-->
<!--          height: 58px;-->
<!--        }-->
<!--      }-->
<!--    }-->

<!--    &-platform {-->
<!--      margin: 26px 0 24px;-->
<!--      .filter__btns {-->
<!--        display: flex;-->
<!--        flex-direction: column;-->
<!--        justify-content: space-between;-->
<!--        height: 184px;-->

<!--        @include media-breakpoint-down(md) {-->
<!--          display: grid;-->
<!--          grid-template-columns: repeat(3, 1fr);-->
<!--          height: 60px;-->
<!--        }-->

<!--        @include media-breakpoint-down(xs) {-->
<!--          display: flex;-->
<!--          flex-direction: column;-->
<!--          justify-content: space-between;-->
<!--          height: 184px;-->
<!--        }-->
<!--      }-->
<!--    }-->

<!--    &-region {-->
<!--      .filter__btns {-->
<!--        display: flex;-->
<!--        flex-direction: column;-->
<!--        justify-content: space-between;-->
<!--        height: 184px;-->

<!--        @include media-breakpoint-down(md) {-->
<!--          display: grid;-->
<!--          grid-template-columns: repeat(3, 1fr);-->
<!--          height: 60px;-->
<!--        }-->

<!--        @include media-breakpoint-down(xs) {-->
<!--          display: flex;-->
<!--          flex-direction: column;-->
<!--          justify-content: space-between;-->
<!--          height: 184px;-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->

<!--//.tour {-->
<!--//  margin-bottom: 100px;-->
<!--//  @include media-breakpoint-down(lg) {-->
<!--//    padding-left: 114px;-->
<!--//  }-->
<!--//-->
<!--//  @include media-breakpoint-down(md) {-->
<!--//    padding-left: 0;-->
<!--//  }-->
<!--//  &__row {-->
<!--//    display: flex;-->
<!--//    justify-content: space-between;-->
<!--//    align-items: center;-->
<!--//    margin-bottom: 16px;-->
<!--//-->
<!--//    @include media-breakpoint-down(sm) {-->
<!--//      flex-direction: column-reverse;-->
<!--//      align-items: flex-start;-->
<!--//    }-->
<!--//  }-->
<!--//-->
<!--//  &__title {-->
<!--//    font-weight: 700;-->
<!--//    font-size: 34px;-->
<!--//    line-height: 165%;-->
<!--//-->
<!--//    @include media-breakpoint-down(sm) {-->
<!--//      font-size: 28px;-->
<!--//      line-height: 100%;-->
<!--//    }-->
<!--//  }-->
<!--//-->
<!--//  &__img {-->
<!--//    width: 250px;-->
<!--//    height: 56px;-->
<!--//-->
<!--//    img {-->
<!--//      width: 100%;-->
<!--//      height: 100%;-->
<!--//    }-->
<!--//-->
<!--//    @include media-breakpoint-down(sm) {-->
<!--//      margin-bottom: 22px;-->
<!--//-->
<!--//    }-->
<!--//  }-->
<!--//-->
<!--//  &__content {-->
<!--//    display: flex;-->
<!--//    justify-content: space-between;-->
<!--//-->
<!--//    @include media-breakpoint-down(md) {-->
<!--//      flex-direction: column-reverse;-->
<!--//    }-->
<!--//  }-->
<!--//-->
<!--//  &__column {-->
<!--//    max-width: 859px;-->
<!--//    width: 100%;-->
<!--//-->
<!--//    @include media-breakpoint-down(md) {-->
<!--//      max-width: 100%;-->
<!--//    }-->
<!--//  }-->
<!--//-->
<!--//  &__filter {-->
<!--//    border: 2px solid #20252b;-->
<!--//    max-width: 281px;-->
<!--//    width: 100%;-->
<!--//    padding: 24px 30px 20px;-->
<!--//    max-height: 791px;-->
<!--//-->
<!--//    @include media-breakpoint-down(lg) {-->
<!--//      margin-left: 10px;-->
<!--//    }-->
<!--//-->
<!--//    @include media-breakpoint-down(md) {-->
<!--//      max-width: 100%;-->
<!--//      margin: 0 0 40px 0;-->
<!--//      transition: 0.5s ease;-->
<!--//    }-->
<!--//-->
<!--//    @include media-breakpoint-down(sm) {-->
<!--//      max-height: 100px;-->
<!--//      overflow: hidden;-->
<!--//      border: none;-->
<!--//      padding: 24px 0 20px;-->
<!--//    }-->
<!--//-->
<!--//    &_act {-->
<!--//      @include media-breakpoint-down(sm) {-->
<!--//        max-height: 500px;-->
<!--//        overflow: auto;-->
<!--//      }-->
<!--//    }-->
<!--//-->
<!--//    &-arrow {-->
<!--//      display: none;-->
<!--//      width: 20px;-->
<!--//      height: 20px;-->
<!--//-->
<!--//      svg {-->
<!--//        width: 100%;-->
<!--//        height: 100%;-->
<!--//      }-->
<!--//-->
<!--//      @include media-breakpoint-down(sm) {-->
<!--//        display: block;-->
<!--//      }-->
<!--//    }-->
<!--//-->
<!--//    &-row {-->
<!--//      display: flex;-->
<!--//      justify-content: space-between;-->
<!--//      align-items: center;-->
<!--//      margin-bottom: 51px;-->
<!--//    }-->
<!--//-->
<!--//    &-title {-->
<!--//      font-weight: 500;-->
<!--//      font-size: 32px;-->
<!--//      line-height: 100%;-->
<!--//      color: #f5f5f5;-->
<!--//    }-->
<!--//-->
<!--//    &-clear {-->
<!--//      display: block;-->
<!--//      font-weight: 400;-->
<!--//      font-size: 16px;-->
<!--//      line-height: 150%;-->
<!--//      color: #b83333;-->
<!--//-->
<!--//      @include media-breakpoint-down(sm) {-->
<!--//        display: none;-->
<!--//      }-->
<!--//    }-->
<!--//-->
<!--//    &-mode {-->
<!--//      margin-bottom: 24px;-->
<!--//-->
<!--//      .filter__btns {-->
<!--//        display: flex;-->
<!--//        justify-content: space-between;-->
<!--//        align-items: center;-->
<!--//-->
<!--//        @include media-breakpoint-down(md) {-->
<!--//          display: grid;-->
<!--//          grid-template-columns: repeat(3, 1fr);-->
<!--//        }-->
<!--//-->
<!--//        @include media-breakpoint-down(xs) {-->
<!--//          display: flex;-->
<!--//          flex-direction: column;-->
<!--//          justify-content: space-between;-->
<!--//          align-items: flex-start;-->
<!--//          height: 104px;-->
<!--//        }-->
<!--//      }-->
<!--//    }-->
<!--//-->
<!--//    &-status {-->
<!--//      margin-bottom: 24px;-->
<!--//-->
<!--//      .filter__btns {-->
<!--//        display: flex;-->
<!--//        justify-content: space-between;-->
<!--//        align-items: center;-->
<!--//-->
<!--//        @include media-breakpoint-down(md) {-->
<!--//          display: grid;-->
<!--//          grid-template-columns: repeat(3, 1fr);-->
<!--//        }-->
<!--//-->
<!--//        @include media-breakpoint-down(xs) {-->
<!--//          display: flex;-->
<!--//          flex-direction: column;-->
<!--//          justify-content: space-between;-->
<!--//          align-items: flex-start;-->
<!--//          height: 58px;-->
<!--//        }-->
<!--//      }-->
<!--//    }-->
<!--//-->
<!--//    &-platform {-->
<!--//      margin-bottom: 24px;-->
<!--//-->
<!--//      .filter__btns {-->
<!--//        display: flex;-->
<!--//        flex-direction: column;-->
<!--//        justify-content: space-between;-->
<!--//        height: 184px;-->
<!--//-->
<!--//        @include media-breakpoint-down(md) {-->
<!--//          display: grid;-->
<!--//          grid-template-columns: repeat(3, 1fr);-->
<!--//          grid-template-rows: repeat(2, 1fr);-->
<!--//          height: 60px;-->
<!--//        }-->
<!--//-->
<!--//        @include media-breakpoint-down(xs) {-->
<!--//          display: flex;-->
<!--//          flex-direction: column;-->
<!--//          justify-content: space-between;-->
<!--//          align-items: flex-start;-->
<!--//          height: 184px;-->
<!--//        }-->
<!--//      }-->
<!--//    }-->
<!--//-->
<!--//    &-region {-->
<!--//      .filter__btns {-->
<!--//        display: flex;-->
<!--//        flex-direction: column;-->
<!--//        justify-content: space-between;-->
<!--//        height: 184px;-->
<!--//-->
<!--//        @include media-breakpoint-down(md) {-->
<!--//          display: grid;-->
<!--//          grid-template-columns: repeat(3, 1fr);-->
<!--//          grid-template-rows: repeat(2, 1fr);-->
<!--//          height: 60px;-->
<!--//        }-->
<!--//-->
<!--//        @include media-breakpoint-down(xs) {-->
<!--//          display: flex;-->
<!--//          flex-direction: column;-->
<!--//          justify-content: space-between;-->
<!--//          align-items: flex-start;-->
<!--//          height: 184px;-->
<!--//        }-->
<!--//      }-->
<!--//    }-->
<!--//  }-->
<!--//}-->
<!--</style>-->
