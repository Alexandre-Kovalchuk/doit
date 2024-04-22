<!--<script setup>-->
<!--import { useRoute } from 'vue-router';-->
<!--import BaseImage from '@/components/Base/BaseImage.vue';-->
<!--import { nameGame, tour, infoTab, players } from '@/components/JSFiles/MainPage/TournamentsData.js';-->
<!--import BaseSvg from '@/components/Base/BaseSvg.vue';-->
<!--import UIBtn from '@/components/UI/UIBtn.vue';-->
<!--import UITabsInfo from '@/components/UI/UITabsInfo.vue';-->
<!--import { ref } from 'vue';-->
<!--import Header from '@/App.vue';-->

<!--const namePath = useRoute().path.slice(12, -2);-->
<!--const idPath = useRoute().path.slice(-1);-->

<!--const title = nameGame[0][namePath].title;-->
<!--const webp = nameGame[0][namePath].webp;-->
<!--const png = nameGame[0][namePath].png;-->

<!--const selectedInfoTab = ref('Info');-->
<!--const selectedFourTab = ref('Quick rules');-->
<!--const selectedSecondTab = ref('Streams');-->
<!--const selectedThirdTab = ref('Prize pool');-->

<!--const isLaptop = ref(window.innerWidth <= 1439);-->
<!--const isMobile = ref(window.innerWidth <= 575);-->

<!--const logo = {-->
<!--  webp: new URL('../assets/img/info-logo.webp', import.meta.url),-->
<!--  png: new URL('../assets/img/info-logo.png', import.meta.url),-->
<!--};-->

<!--const searchId = tour[0][namePath].map((item) => {-->
<!--  return item.id;-->
<!--});-->

<!--const id = searchId.findIndex((item) => item === +idPath);-->

<!--const changeTabs = (tab) => {-->
<!--  selectedInfoTab.value = tab;-->
<!--};-->

<!--window.addEventListener('resize', () => {-->
<!--  isLaptop.value = window.innerWidth <= 1439;-->
<!--  isMobile.value = window.innerWidth <= 575;-->
<!--});-->
<!--</script>-->

<!--<template>-->
<!--  <main class="main">-->
<!--    <section class="tourney-info">-->
<!--      <div class="container">-->
<!--        <div class="tourney-info__content">-->
<!--          <div class="tourney-info__row">-->
<!--            <div class="tourney-info__back">-->
<!--              <router-link :to="{ path: '/tournament', query: { q: namePath } }">-->
<!--                <BaseSvg id="back" />-->

<!--                <p>Back</p>-->
<!--              </router-link>-->
<!--            </div>-->

<!--            <div v-if="!isMobile" class="tourney-info__logo">-->
<!--              <BaseImage :srcset="webp" :src="png" :alt="title" />-->
<!--            </div>-->
<!--          </div>-->

<!--          <div class="tourney-info__column">-->
<!--            <div class="tourney-info__info">-->
<!--              <div class="tourney-info__name">-->
<!--                <div class="tourney-info__name-logo">-->
<!--                  <BaseImage :srcset="logo.webp" :src="logo.png" :alt="title" />-->
<!--                </div>-->

<!--                <div>-->
<!--                  <h1 class="tourney-info__name-title">-->
<!--                    {{ tour[0][namePath][id].title }} ({{ tour[0][namePath][id].platform }}) Open-->
<!--                    Cup-->
<!--                  </h1>-->
<!--                </div>-->
<!--              </div>-->

<!--              <div class="tourney-info__tabs">-->
<!--                <router-link-->
<!--                  :to="{ path: `/tournament/${namePath}/${idPath}`, query: { q: selectedInfoTab } }"-->
<!--                >-->
<!--                  <UITabsInfo-->
<!--                    :names="infoTab[0].firstTab"-->
<!--                    :selected-tab="selectedInfoTab"-->
<!--                    @changeTab="changeTabs"-->
<!--                  >-->
<!--                    &lt;!&ndash; info &ndash;&gt;-->
<!--                    <div class="tourney-info__tabs-info" v-if="selectedInfoTab === 'Info'">-->
<!--                      <div-->
<!--                        class="tourney-info__tabs-item"-->
<!--                        v-for="item in tour[0][namePath][0].labelThird"-->
<!--                      >-->
<!--                        <h3>{{ item.name }}</h3>-->

<!--                        <p v-if="item.game">{{ item.game }} ({{ item.platform }})</p>-->

<!--                        <p v-else-if="item.id !== 9">{{ item.txt }}</p>-->

<!--                        <UIBtn v-if="item.id === 9" :label="item.txt" />-->
<!--                      </div>-->
<!--                    </div>-->

<!--                    <div-->
<!--                      class="tourney-info__tabs-players players"-->
<!--                      v-if="selectedInfoTab === 'Players'"-->
<!--                    >-->
<!--                      <div class="players__item" v-for="item in players" :key="item.id">-->
<!--                        <BaseImage :srcset="item.webp" :src="item.png" alt="avatar" />-->

<!--                        <div class="players__row">-->
<!--                          <BaseImage :srcset="item.flagWebp" :src="item.flagPng" alt="flag" />-->
<!--                          <p class="players__name">{{ item.name }}</p>-->
<!--                        </div>-->

<!--                        <p class="players__text">{{ item.team }}</p>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </UITabsInfo>-->
<!--                </router-link>-->
<!--              </div>-->

<!--              <div v-if="!isLaptop" class="tourney-info__tabs tourney-info__tabs_textarea">-->
<!--                <UITabsInfo-->
<!--                  :names="infoTab[0].fourTab"-->
<!--                  :selected-tab="selectedFourTab"-->
<!--                  @changeTab=""-->
<!--                >-->
<!--                  &lt;!&ndash; Quick rules &ndash;&gt;-->
<!--                  <div class="tourney-info__tabs-textarea">-->
<!--                    <textarea placeholder="Discord server:"></textarea>-->
<!--                  </div>-->
<!--                </UITabsInfo>-->
<!--              </div>-->

<!--              <div v-if="!isLaptop" class="tourney-info__tabs tourney-info__tabs_streams">-->
<!--                <UITabsInfo-->
<!--                  :names="infoTab[0].secondTab"-->
<!--                  :selected-tab="selectedSecondTab"-->
<!--                  @changeTab=""-->
<!--                >-->
<!--                  &lt;!&ndash; Quick rules &ndash;&gt;-->
<!--                  <div class="tourney-info__tabs-textarea">-->
<!--                    <textarea></textarea>-->
<!--                  </div>-->
<!--                </UITabsInfo>-->
<!--              </div>-->

<!--              <div v-if="!isLaptop" class="tourney-info__tabs tourney-info__tabs_textarea">-->
<!--                <UITabsInfo-->
<!--                  :names="infoTab[0].thirdTab"-->
<!--                  :selected-tab="selectedThirdTab"-->
<!--                  @changeTab=""-->
<!--                >-->
<!--                  &lt;!&ndash; Quick rules &ndash;&gt;-->
<!--                  <div class="tourney-info__tabs-textarea">-->
<!--                    <textarea></textarea>-->
<!--                  </div>-->
<!--                </UITabsInfo>-->
<!--              </div>-->
<!--            </div>-->

<!--            <div class="tourney-info__requirements">-->
<!--              <h2 class="tourney-info__requirements-title">Requirements</h2>-->

<!--              <hr v-if="!isMobile" class="tourney-info__requirements-line" />-->

<!--              <div class="tourney-info__requirements-column">-->
<!--                <div-->
<!--                  class="tourney-info__requirements-item"-->
<!--                  v-for="item in tour[0].Requirements"-->
<!--                  :key="item.id"-->
<!--                >-->
<!--                  <h3>{{ item.title }}</h3>-->
<!--                  <p>{{ item.txt }}</p>-->
<!--                </div>-->
<!--              </div>-->

<!--              <hr v-if="!isMobile" class="tourney-info__requirements-subline" />-->

<!--              <p class="tourney-info__requirements-text">Sign up closes in 43 minutes</p>-->

<!--              <UIBtn label="Log in / Register" color="blue" />-->

<!--              <hr v-if="!isMobile" class="tourney-info__requirements-subline" />-->

<!--              <div class="tourney-info__requirements-icon">-->
<!--                <div-->
<!--                  class="tourney-info__requirements-svg"-->
<!--                  v-for="svg in tour[0].svg"-->
<!--                  :key="svg.id"-->
<!--                >-->
<!--                  <BaseSvg :id="svg.name" />-->
<!--                </div>-->
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
<!--.main {-->
<!--  @include media-breakpoint-down(sm) {-->
<!--    padding: 73px 0 0;-->
<!--  }-->
<!--}-->
<!--.tourney-info {-->
<!--  margin: 60px 0 30px;-->

<!--  @include media-breakpoint-down(lg) {-->
<!--    padding-left: 114px;-->
<!--  }-->

<!--  @include media-breakpoint-down(md) {-->
<!--    padding-left: 0;-->
<!--  }-->

<!--  @include media-breakpoint-down(xs) {-->
<!--    margin: 0 0 100px;-->
<!--  }-->

<!--  &__content {-->
<!--    margin: 0 23px;-->
<!--    @include media-breakpoint-down(lg) {-->
<!--      margin: 0;-->
<!--    }-->
<!--  }-->

<!--  &__row {-->
<!--    display: flex;-->
<!--    justify-content: space-between;-->
<!--    align-items: center;-->
<!--    margin-bottom: 11px;-->

<!--    @include media-breakpoint-down(lg) {-->
<!--      max-width: 100%;-->
<!--    }-->

<!--    @include media-breakpoint-down(sm) {-->
<!--      margin-bottom: 17px;-->
<!--    }-->
<!--  }-->

<!--  &__back {-->
<!--    a {-->
<!--      display: flex;-->
<!--      justify-content: space-between;-->
<!--      align-items: center;-->
<!--      width: 65px;-->
<!--    }-->
<!--    svg {-->
<!--      display: block;-->
<!--      width: 24px;-->
<!--      height: 24px;-->
<!--    }-->
<!--    p {-->
<!--      font-weight: 400;-->
<!--      font-size: 16px;-->
<!--      line-height: 150%;-->
<!--      color: #9fb1cc;-->
<!--    }-->
<!--  }-->

<!--  &__logo {-->
<!--    width: 253px;-->
<!--    height: 45px;-->

<!--    img {-->
<!--      width: 100%;-->
<!--      height: 100%;-->
<!--      object-fit: cover;-->
<!--    }-->
<!--  }-->

<!--  &__column {-->
<!--    display: flex;-->
<!--    justify-content: space-between;-->
<!--    width: 100%;-->

<!--    @include media-breakpoint-down(lg) {-->
<!--      flex-direction: column;-->
<!--    }-->
<!--  }-->

<!--  &__name {-->
<!--    display: flex;-->
<!--    border: 2px solid #20252b;-->
<!--    padding: 40px 0 49px 43px;-->
<!--    max-width: 812px;-->
<!--    width: 100%;-->
<!--    margin-bottom: 30px;-->

<!--    @include media-breakpoint-down(lg) {-->
<!--      max-width: 100%;-->
<!--    }-->

<!--    @include media-breakpoint-down(sm) {-->
<!--      padding: 20px 20px;-->
<!--    }-->

<!--    @include media-breakpoint-down(xs) {-->
<!--      padding: 0;-->
<!--      border: none;-->
<!--      margin: 0 0 29px 5px;-->
<!--    }-->
<!--  }-->

<!--  &__name-logo {-->
<!--    @include media-breakpoint-down(xs) {-->
<!--      width: 40px;-->
<!--      height: 40px;-->

<!--      img {-->
<!--        width: 100%;-->
<!--        height: 100%;-->
<!--      }-->
<!--    }-->
<!--  }-->

<!--  &__name-title {-->
<!--    font-weight: 500;-->
<!--    font-size: 32px;-->
<!--    line-height: 150%;-->
<!--    margin-left: 15px;-->

<!--    @include media-breakpoint-down(sm) {-->
<!--      font-size: 18px;-->
<!--      line-height: 100%;-->
<!--    }-->
<!--  }-->

<!--  &__tabs {-->
<!--    max-width: 812px;-->
<!--    width: 100%;-->

<!--    @include media-breakpoint-down(lg) {-->
<!--      max-width: 100%;-->
<!--      margin-bottom: 30px;-->
<!--    }-->

<!--    @include media-breakpoint-down(xs) {-->
<!--      margin-left: 3px;-->
<!--    }-->

<!--    &_textarea {-->
<!--      margin-top: 30px;-->
<!--    }-->

<!--    &_streams {-->
<!--      margin-top: 89px;-->
<!--    }-->

<!--    &-info {-->
<!--      border: 2px solid #20252b;-->
<!--      padding: 42px 35px 30px 40px;-->
<!--      display: grid;-->
<!--      grid-template-columns: repeat(3, 1fr);-->
<!--      gap: 29px 15px;-->

<!--      @include media-breakpoint-down(sm) {-->
<!--        padding: 30px 15px;-->
<!--      }-->

<!--      @include media-breakpoint-down(xs) {-->
<!--        grid-template-columns: repeat(1, 1fr);-->
<!--        border: none;-->
<!--        padding: 30px 0;-->
<!--        gap: 24px 0;-->
<!--      }-->
<!--    }-->

<!--    &-item {-->
<!--      h3 {-->
<!--        font-weight: 700;-->
<!--        font-size: 16px;-->
<!--        line-height: 100%;-->
<!--        text-transform: uppercase;-->
<!--        color: #fff;-->
<!--        margin-bottom: 8px;-->

<!--        @include media-breakpoint-down(md) {-->
<!--          font-size: 14px;-->
<!--        }-->
<!--      }-->

<!--      p {-->
<!--        font-weight: 400;-->
<!--        font-size: 16px;-->
<!--        line-height: 150%;-->
<!--        color: #67707a;-->

<!--        @include media-breakpoint-down(md) {-->
<!--          font-size: 14px;-->
<!--        }-->
<!--      }-->

<!--      .v-btn {-->
<!--        width: 121px;-->
<!--        height: 36px;-->

<!--        @include media-breakpoint-down(xs) {-->
<!--          width: 100%;-->
<!--          height: 44px;-->
<!--        }-->

<!--        &__btn {-->
<!--          @include media-breakpoint-down(xs) {-->
<!--            font-size: 12px;-->
<!--          }-->
<!--        }-->
<!--      }-->
<!--    }-->

<!--    //  textarea-->
<!--    &-textarea {-->
<!--      border: 2px solid #20252b;-->
<!--      //max-width: 812px;-->
<!--      //width: 100%;-->
<!--      height: 311px;-->

<!--      textarea {-->
<!--        background: #0f1215;-->
<!--        width: 100%;-->
<!--        height: 100%;-->
<!--        padding: 26px;-->
<!--        resize: none;-->
<!--        aspect-ratio: 1 / 0.635;-->

<!--        &::placeholder {-->
<!--          font-weight: 400;-->
<!--          font-size: 16px;-->
<!--          line-height: 150%;-->
<!--          color: #67707a;-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--  }-->

<!--  &__requirements {-->
<!--    border: 2px solid #20252b;-->
<!--    padding: 28px 30px 0;-->
<!--    max-width: 328px;-->
<!--    width: 100%;-->
<!--    max-height: 616px;-->
<!--    position: relative;-->
<!--    margin-left: 10px;-->

<!--    @include media-breakpoint-down(lg) {-->
<!--      margin-left: 0;-->
<!--      max-width: 100%;-->
<!--    }-->

<!--    @include media-breakpoint-down(sm) {-->
<!--      padding: 30px 15px;-->
<!--    }-->

<!--    @include media-breakpoint-down(xs) {-->
<!--      border: none;-->
<!--      padding: 0;-->
<!--    }-->

<!--    &-title {-->
<!--      font-weight: 500;-->
<!--      font-size: 24px;-->
<!--      line-height: 100%;-->
<!--      margin-bottom: 28px;-->
<!--    }-->

<!--    &-line,-->
<!--    &-subline {-->
<!--      position: absolute;-->
<!--      left: 0;-->
<!--      height: 2px;-->
<!--      background: #20252b;-->
<!--      width: 100%;-->
<!--    }-->

<!--    &-column {-->
<!--      padding: 30px 0;-->
<!--      display: flex;-->
<!--      flex-direction: column;-->
<!--      justify-content: space-between;-->
<!--      max-height: 339px;-->
<!--      height: 100%;-->

<!--      @include media-breakpoint-down(lg) {-->
<!--        flex-direction: row;-->
<!--      }-->

<!--      @include media-breakpoint-down(xs) {-->
<!--        flex-direction: column;-->
<!--        padding: 0;-->
<!--        height: 259px;-->
<!--      }-->
<!--    }-->
<!--    &-item {-->
<!--      h3 {-->
<!--        font-weight: 700;-->
<!--        font-size: 16px;-->
<!--        line-height: 100%;-->
<!--        text-transform: uppercase;-->
<!--        margin-bottom: 12px;-->

<!--        @include media-breakpoint-down(md) {-->
<!--          font-size: 14px;-->
<!--        }-->
<!--      }-->

<!--      p {-->
<!--        font-weight: 400;-->
<!--        font-size: 16px;-->
<!--        line-height: 100%;-->
<!--        color: #67707a;-->

<!--        @include media-breakpoint-down(md) {-->
<!--          font-size: 14px;-->
<!--          line-height: 150%;-->
<!--        }-->
<!--      }-->

<!--      &:last-child {-->
<!--        p {-->
<!--          line-height: 150%;-->
<!--        }-->

<!--        @include media-breakpoint-down(md) {-->
<!--          width: 25%;-->
<!--        }-->

<!--        @include media-breakpoint-down(xs) {-->
<!--          width: 100%;-->
<!--        }-->
<!--      }-->
<!--    }-->

<!--    &-text {-->
<!--      font-weight: 400;-->
<!--      font-size: 16px;-->
<!--      line-height: 150%;-->
<!--      color: #b83333;-->
<!--      margin: 30px 0 16px;-->
<!--    }-->

<!--    .v-btn {-->
<!--      width: 264px;-->
<!--      height: 48px;-->
<!--      margin-bottom: 30px;-->

<!--      @include media-breakpoint-down(xs) {-->
<!--        width: 100%;-->
<!--      }-->
<!--    }-->

<!--    &-icon {-->
<!--      height: 48px;-->
<!--      display: flex;-->
<!--    }-->

<!--    &-svg {-->
<!--      width: 48px;-->
<!--      height: 48px;-->
<!--      padding: 16px 16px;-->

<!--      svg {-->
<!--        width: 100%;-->
<!--        height: 100%;-->
<!--      }-->
<!--    }-->
<!--  }-->

<!--  .players {-->
<!--    border: 2px solid #20252b;-->
<!--    display: grid;-->
<!--    grid-template-columns: repeat(4, 1fr);-->
<!--    gap: 30px;-->
<!--    padding: 55px 18px 83px 24px;-->

<!--    //@include media-breakpoint-down(md) {-->
<!--    //  grid-template-columns: repeat(3, 1fr);-->
<!--    //}-->

<!--    @include media-breakpoint-down(sm) {-->
<!--      grid-template-columns: repeat(3, 1fr);-->
<!--      gap: 15px;-->
<!--    }-->

<!--    @include media-breakpoint-down(xs) {-->
<!--      grid-template-columns: repeat(2, 1fr);-->
<!--      gap: 15px;-->
<!--      border: none;-->
<!--      padding: 30px 0 0;-->
<!--      width: fit-content;-->
<!--      margin: 0 auto;-->
<!--    }-->

<!--    &__item {-->
<!--      background: #151a1f;-->
<!--      border-radius: 2px 2px 0 0;-->
<!--      max-width: 170px;-->
<!--      width: 100%;-->
<!--      max-height: 250px;-->
<!--      height: 100%;-->
<!--      img {-->
<!--        width: 100%;-->
<!--        max-height: 170px;-->
<!--        height: 100%;-->

<!--        @include media-breakpoint-down(md) {-->
<!--          max-height: 149px;-->
<!--        }-->
<!--      }-->

<!--      @include media-breakpoint-down(md) {-->
<!--        max-width: 157px;-->
<!--        //height: 250px;-->
<!--      }-->
<!--    }-->

<!--    &__row {-->
<!--      display: flex;-->
<!--      align-items: center;-->
<!--      margin: 12px 10px 8px;-->

<!--      img {-->
<!--        display: block;-->
<!--        width: 16px;-->
<!--        height: 12px;-->
<!--      }-->
<!--    }-->

<!--    &__name {-->
<!--      font-weight: 500;-->
<!--      font-size: 14px;-->
<!--      line-height: 100%;-->
<!--      color: #e6e8eb;-->
<!--      margin-left: 8px;-->
<!--    }-->

<!--    &__text {-->
<!--      font-weight: 400;-->
<!--      font-size: 12px;-->
<!--      line-height: 100%;-->
<!--      color: #525c66;-->
<!--      padding-bottom: 16px;-->
<!--      margin-left: 10px;-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->
