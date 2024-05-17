<!--<script setup>-->
<!--import BaseSvg from '@/components/Base/BaseSvg.vue';-->
<!--import BaseImage from '@/components/Base/BaseImage.vue';-->

<!--const logo = {-->
<!--  webp: new URL('../assets/img/info-logo.webp', import.meta.url),-->
<!--  png: new URL('../assets/img/info-logo.png', import.meta.url),-->
<!--};-->
<!--import { useGameNameAndId } from '@/composable/new/usePath.js';-->
<!--import { nameGameData, tournamentsData } from '@/components/Data/tournamentsData.js';-->
<!--import { tabsData } from '@/components/Data/TabsData.js';-->
<!--import UITabs from '@/components/UI/UITabs.vue';-->
<!--import GameInfo from '@/components/Pages/TournamentsGame/GameInfo.vue';-->
<!--import { ref } from 'vue';-->
<!--import GameBracket from '@/components/Pages/TournamentsGame/GameBracket.vue';-->
<!--import GamePlayers from '@/components/Pages/TournamentsGame/GamePlayers.vue';-->
<!--import Standings from '@/components/Pages/TournamentsGame/Standings.vue';-->
<!--import StreamsInfo from '@/components/Pages/TournamentsGame/StreamsInfo.vue';-->
<!--import Lobby from '@/components/Pages/TournamentsGame/Lobby.vue';-->
<!--import UIBtn from '@/components/UI/UIBtn.vue';-->
<!--import { requirementsData } from '@/components/Data/RequirementsData.js';-->

<!--const selectedTabs = ref('Info');-->
<!--const selectedTabQuick = ref('Quick rules');-->
<!--const selectedTabStreams = ref('Streams');-->
<!--const selectedTabPrize = ref('Prize pool');-->
<!--const isLaptop = ref(window.innerWidth <= 1439);-->
<!--const isMobile = ref(window.innerWidth <= 575);-->
<!--const { infoTabs, poolTabs, quickTabs, streamsTabs } = tabsData();-->
<!--const { nameGame, gameId } = useGameNameAndId();-->
<!--const { requirements, svg } = requirementsData();-->
<!--const changeTabs = (tab) => {-->
<!--  selectedTabs.value = tab;-->
<!--};-->

<!--window.addEventListener('resize', () => {-->
<!--  isLaptop.value = window.innerWidth <= 1439;-->
<!--  isMobile.value = window.innerWidth <= 575;-->
<!--});-->
<!--</script>-->

<!--<template>-->
<!--  <main class="main">-->
<!--    <section class="tourney-info info">-->
<!--      <div class="container">-->
<!--        <div class="info__content">-->
<!--          <div class="info__row">-->
<!--            <div class="info__row-back">-->
<!--              <router-link :to="{ path: `/tournament/${nameGame}` }">-->
<!--                <BaseSvg id="back" />-->

<!--                <p class="info__row-text">Back</p>-->
<!--              </router-link>-->
<!--            </div>-->

<!--            <div class="info__row-logo">-->
<!--              <BaseImage-->
<!--                v-for="(item, index) in nameGameData()[nameGame]"-->
<!--                :key="index"-->
<!--                :srcset="item.webp"-->
<!--                :src="item.png"-->
<!--                :alt="item.title"-->
<!--              />-->
<!--            </div>-->
<!--          </div>-->

<!--          <div class="info__column">-->
<!--            <div class="info__block">-->
<!--              <div class="info__item">-->
<!--                <div class="info__name">-->
<!--                  <div class="info__name-logo">-->
<!--                    <BaseImage :srcset="logo.webp" :src="logo.png" alt="logo" />-->
<!--                  </div>-->

<!--                  <div class="info__name-subject">-->
<!--                    <h1 class="info__name-title">-->
<!--                      {{ nameGame }} ({{ tournamentsData()[nameGame][gameId].platform }}) Open Cup-->
<!--                    </h1>-->

<!--                    <p class="info__name-text">52 players signed up</p>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->

<!--              <div class="info__tabs">-->
<!--                <UITabs-->
<!--                  :selected-tab="selectedTabs"-->
<!--                  :names="infoTabs"-->
<!--                  label=""-->
<!--                  @change-tab="changeTabs"-->
<!--                >-->
<!--                  <GameInfo v-if="selectedTabs === 'Info'" />-->
<!--                  <GameBracket v-if="selectedTabs === 'Bracket'" />-->
<!--                  <GamePlayers v-if="selectedTabs === 'Players'" />-->
<!--                  <Standings v-if="selectedTabs === 'Standings'" />-->
<!--                  <Lobby v-if="selectedTabs === 'Lobby'" />-->
<!--                </UITabs>-->
<!--              </div>-->

<!--              &lt;!&ndash; Quick Rules &ndash;&gt;-->
<!--              <div class="info__tabs info__tabs_quick" v-if="!isLaptop">-->
<!--                <router-link-->
<!--                  :to="{ path: `/tournament/${nameGame}/${gameId}`, query: { q: selectedTabs } }"-->
<!--                >-->
<!--                  <UITabs-->
<!--                    :selected-tab="selectedTabQuick"-->
<!--                    :names="quickTabs"-->
<!--                    label=""-->
<!--                    @change-tab="changeTabs"-->
<!--                  >-->
<!--                    <StreamsInfo label="Discord server:" />-->
<!--                  </UITabs>-->
<!--                </router-link>-->
<!--              </div>-->

<!--              &lt;!&ndash; Streams and Add stream &ndash;&gt;-->
<!--              <div class="info__tabs info__tabs-streams" v-if="!isLaptop">-->
<!--                <router-link-->
<!--                  :to="{ path: `/tournament/${nameGame}/${gameId}`, query: { q: selectedTabs } }"-->
<!--                >-->
<!--                  <UITabs-->
<!--                    :selected-tab="selectedTabStreams"-->
<!--                    :names="streamsTabs"-->
<!--                    label=""-->
<!--                    @change-tab="changeTabs"-->
<!--                  >-->
<!--                    <StreamsInfo label="Discord server:" />-->
<!--                  </UITabs>-->
<!--                </router-link>-->
<!--              </div>-->

<!--              &lt;!&ndash; Prize pool &ndash;&gt;-->
<!--              <div class="info__tabs info__tabs-prize" v-if="!isLaptop">-->
<!--                <router-link-->
<!--                  :to="{ path: `/tournament/${nameGame}/${gameId}`, query: { q: selectedTabs } }"-->
<!--                >-->
<!--                  <UITabs-->
<!--                    :selected-tab="selectedTabPrize"-->
<!--                    :names="poolTabs"-->
<!--                    label=""-->
<!--                    @change-tab="changeTabs"-->
<!--                  >-->
<!--                    <StreamsInfo label="Discord server:" />-->
<!--                  </UITabs>-->
<!--                </router-link>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="info__requirements">-->
<!--              <h2 class="info__requirements-title">Requirements</h2>-->

<!--              <hr v-if="!isMobile" class="info__requirements-line" />-->

<!--              <div class="info__requirements-column">-->
<!--                <div class="info__requirements-item" v-for="item in requirements" :key="item.id">-->
<!--                  <h3>{{ item.title }}</h3>-->
<!--                  <p>{{ item.txt }}</p>-->
<!--                </div>-->
<!--              </div>-->

<!--              <hr v-if="!isMobile" class="info__requirements-subline" />-->

<!--              <p class="info__requirements-text">Sign up closes in 43 minutes</p>-->

<!--              <UIBtn label="Log in / Register" color="blue" />-->

<!--              <hr v-if="!isMobile" class="info__requirements-subline" />-->

<!--              <div class="info__requirements-icon">-->
<!--                <div class="info__requirements-svg" v-for="svg in svg" :key="svg.id">-->
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
<!--    margin: 0 0 100px;-->
<!--  }-->

<!--  @include media-breakpoint-down(xs) {-->
<!--    margin: 0 0 100px;-->
<!--  }-->

<!--  .info {-->
<!--    &__content {-->
<!--      margin: 0 23px;-->

<!--      @include media-breakpoint-down(lg) {-->
<!--        margin: 0;-->
<!--      }-->
<!--    }-->

<!--    &__row {-->
<!--      display: flex;-->
<!--      justify-content: space-between;-->
<!--      align-items: center;-->
<!--      margin-bottom: 11px;-->

<!--      @include media-breakpoint-down(lg) {-->
<!--        max-width: 100%;-->
<!--      }-->

<!--      @include media-breakpoint-down(sm) {-->
<!--        margin-bottom: 17px;-->
<!--      }-->

<!--      &-back {-->
<!--        a {-->
<!--          display: flex;-->
<!--          justify-content: space-between;-->
<!--          align-items: center;-->
<!--          width: 65px;-->
<!--        }-->

<!--        svg {-->
<!--          display: block;-->
<!--          width: 24px;-->
<!--          height: 24px;-->
<!--        }-->

<!--        p {-->
<!--          font-weight: 400;-->
<!--          font-size: 16px;-->
<!--          line-height: 150%;-->
<!--          color: #9fb1cc;-->
<!--        }-->
<!--      }-->

<!--      &-logo {-->
<!--        width: 253px;-->
<!--        height: 45px;-->

<!--        img {-->
<!--          width: 100%;-->
<!--          height: 100%;-->
<!--          object-fit: cover;-->
<!--        }-->
<!--      }-->
<!--    }-->

<!--    &__name {-->
<!--      display: flex;-->
<!--      border: 2px solid #20252b;-->
<!--      padding: 40px 0 38px 43px;-->
<!--      max-width: 812px;-->
<!--      width: 100%;-->
<!--      margin-bottom: 35px;-->

<!--      @include media-breakpoint-down(lg) {-->
<!--        max-width: 100%;-->
<!--      }-->

<!--      @include media-breakpoint-down(sm) {-->
<!--        padding: 20px 20px;-->
<!--      }-->

<!--      @include media-breakpoint-down(xs) {-->
<!--        padding: 0;-->
<!--        border: none;-->
<!--        margin: 0 0 29px 5px;-->
<!--      }-->

<!--      &-logo {-->
<!--        @include media-breakpoint-down(xs) {-->
<!--          width: 40px;-->
<!--          height: 40px;-->

<!--          img {-->
<!--            width: 100%;-->
<!--            height: 100%;-->
<!--          }-->
<!--        }-->
<!--      }-->

<!--      &-subject {-->
<!--        margin-left: 15px;-->
<!--      }-->

<!--      &-title {-->
<!--        font-weight: 500;-->
<!--        font-size: 32px;-->
<!--        line-height: 150%;-->

<!--        @include media-breakpoint-down(sm) {-->
<!--          font-size: 18px;-->
<!--          line-height: 100%;-->
<!--        }-->
<!--      }-->

<!--      &-text {-->
<!--        font-weight: 400;-->
<!--        font-size: 16px;-->
<!--        line-height: 150%;-->
<!--        color: #67707a;-->
<!--      }-->
<!--    }-->

<!--    &__tabs {-->
<!--      &_quick {-->
<!--        margin: 30px 0 93px;-->
<!--      }-->

<!--      .container {-->
<!--        padding: 0;-->
<!--      }-->

<!--      max-width: 812px;-->
<!--      width: 100%;-->

<!--      @include media-breakpoint-down(lg) {-->
<!--        max-width: 100%;-->
<!--        margin-bottom: 30px;-->
<!--      }-->

<!--      @include media-breakpoint-down(xs) {-->
<!--        margin-left: 3px;-->
<!--      }-->
<!--      .tabs__row,-->
<!--      .tabs__content {-->
<!--        margin: 0;-->
<!--      }-->

<!--      .tabs__btns {-->
<!--        max-width: 812px;-->
<!--      }-->

<!--      .tabs__btns-item {-->
<!--        font-weight: 400;-->
<!--        font-size: 16px;-->
<!--        color: #67707a;-->
<!--        padding: 11px 40px 9px;-->
<!--        border-top: 2px solid transparent;-->
<!--        position: relative;-->
<!--        background: transparent;-->

<!--        @include media-breakpoint-down(md) {-->
<!--          font-size: 12px;-->
<!--          line-height: 100%;-->
<!--        }-->

<!--        @include media-breakpoint-down(xs) {-->
<!--          padding: 15px 18px;-->
<!--          background: #1a222d;-->
<!--          color: #f5f5f5;-->
<!--          margin-right: 4px;-->
<!--        }-->

<!--        &_act {-->
<!--          font-weight: 500;-->
<!--          color: #f5f5f5;-->
<!--          background: #0f1215;-->
<!--          border-top: 2px solid #20252b;-->
<!--          border-left: 2px solid #20252b;-->
<!--          border-right: 2px solid #20252b;-->
<!--          padding: 11px 40px 11px;-->

<!--          &:after {-->
<!--            content: '';-->
<!--            position: absolute;-->
<!--            width: 100%;-->
<!--            height: 4px;-->
<!--            background-color: #0f1215;-->
<!--            bottom: -3px;-->
<!--            left: 0;-->
<!--          }-->

<!--          @include media-breakpoint-down(sm) {-->
<!--            padding: 15px 18px;-->
<!--            border: none;-->
<!--            background: linear-gradient(180deg, #2788f6 0%, #0960e0 100%);-->
<!--          }-->
<!--        }-->
<!--      }-->

<!--      &_textarea {-->
<!--        margin-top: 30px;-->
<!--      }-->

<!--      &_streams {-->
<!--        margin-top: 89px;-->
<!--      }-->

<!--      &-info {-->
<!--        border: 2px solid #20252b;-->
<!--        padding: 42px 35px 30px 40px;-->
<!--        display: grid;-->
<!--        grid-template-columns: repeat(3, 1fr);-->
<!--        gap: 29px 15px;-->

<!--        @include media-breakpoint-down(sm) {-->
<!--          padding: 30px 15px;-->
<!--        }-->

<!--        @include media-breakpoint-down(xs) {-->
<!--          grid-template-columns: repeat(1, 1fr);-->
<!--          border: none;-->
<!--          padding: 30px 0;-->
<!--          gap: 24px 0;-->
<!--        }-->
<!--      }-->

<!--      &-item {-->
<!--        h3 {-->
<!--          font-weight: 700;-->
<!--          font-size: 16px;-->
<!--          line-height: 100%;-->
<!--          text-transform: uppercase;-->
<!--          color: #fff;-->
<!--          margin-bottom: 8px;-->

<!--          @include media-breakpoint-down(md) {-->
<!--            font-size: 14px;-->
<!--          }-->
<!--        }-->

<!--        p {-->
<!--          font-weight: 400;-->
<!--          font-size: 16px;-->
<!--          line-height: 150%;-->
<!--          color: #67707a;-->

<!--          @include media-breakpoint-down(md) {-->
<!--            font-size: 14px;-->
<!--          }-->
<!--        }-->

<!--        .v-btn {-->
<!--          width: 121px;-->
<!--          height: 36px;-->

<!--          @include media-breakpoint-down(xs) {-->
<!--            width: 100%;-->
<!--            height: 44px;-->
<!--          }-->

<!--          &__btn {-->
<!--            @include media-breakpoint-down(xs) {-->
<!--              font-size: 12px;-->
<!--            }-->
<!--          }-->
<!--        }-->
<!--      }-->

<!--      //  textarea-->
<!--      &-textarea {-->
<!--        border: 2px solid #20252b;-->
<!--        //max-width: 812px;-->
<!--        //width: 100%;-->
<!--        height: 311px;-->

<!--        textarea {-->
<!--          background: #0f1215;-->
<!--          width: 100%;-->
<!--          height: 100%;-->
<!--          padding: 26px;-->
<!--          resize: none;-->
<!--          aspect-ratio: 1 / 0.635;-->

<!--          &::placeholder {-->
<!--            font-weight: 400;-->
<!--            font-size: 16px;-->
<!--            line-height: 150%;-->
<!--            color: #67707a;-->
<!--          }-->
<!--        }-->
<!--      }-->
<!--    }-->

<!--    &__tabs-streams {-->
<!--      margin-bottom: 33px;-->

<!--      .tabs__btns {-->
<!--        max-width: 200px;-->
<!--      }-->
<!--    }-->

<!--    &__column {-->
<!--      display: flex;-->
<!--      justify-content: space-between;-->
<!--      width: 100%;-->

<!--      @include media-breakpoint-down(lg) {-->
<!--        flex-direction: column;-->
<!--      }-->
<!--    }-->

<!--    &__block {-->
<!--      width: 100%;-->
<!--    }-->

<!--    &__requirements {-->
<!--      border: 2px solid #20252b;-->
<!--      padding: 28px 30px 0;-->
<!--      max-width: 328px;-->
<!--      width: 100%;-->
<!--      max-height: 616px;-->
<!--      position: relative;-->
<!--      margin-left: 10px;-->

<!--      @include media-breakpoint-down(lg) {-->
<!--        margin-left: 0;-->
<!--        max-width: 100%;-->
<!--      }-->

<!--      @include media-breakpoint-down(sm) {-->
<!--        padding: 30px 15px;-->
<!--      }-->

<!--      @include media-breakpoint-down(xs) {-->
<!--        border: none;-->
<!--        padding: 0;-->
<!--      }-->

<!--      &-title {-->
<!--        font-weight: 500;-->
<!--        font-size: 24px;-->
<!--        line-height: 100%;-->
<!--        margin-bottom: 28px;-->
<!--      }-->

<!--      &-line,-->
<!--      &-subline {-->
<!--        position: absolute;-->
<!--        left: 0;-->
<!--        height: 2px;-->
<!--        background: #20252b;-->
<!--        width: 100%;-->
<!--      }-->

<!--      &-column {-->
<!--        padding: 30px 0;-->
<!--        display: flex;-->
<!--        flex-direction: column;-->
<!--        justify-content: space-between;-->
<!--        max-height: 339px;-->
<!--        height: 100%;-->

<!--        @include media-breakpoint-down(lg) {-->
<!--          flex-direction: row;-->
<!--        }-->

<!--        @include media-breakpoint-down(xs) {-->
<!--          flex-direction: column;-->
<!--          padding: 0;-->
<!--          height: 259px;-->
<!--        }-->
<!--      }-->
<!--      &-item {-->
<!--        h3 {-->
<!--          font-weight: 700;-->
<!--          font-size: 16px;-->
<!--          line-height: 100%;-->
<!--          text-transform: uppercase;-->
<!--          margin-bottom: 12px;-->

<!--          @include media-breakpoint-down(md) {-->
<!--            font-size: 14px;-->
<!--          }-->
<!--        }-->

<!--        p {-->
<!--          font-weight: 400;-->
<!--          font-size: 16px;-->
<!--          line-height: 100%;-->
<!--          color: #67707a;-->

<!--          @include media-breakpoint-down(md) {-->
<!--            font-size: 14px;-->
<!--            line-height: 150%;-->
<!--          }-->
<!--        }-->

<!--        &:last-child {-->
<!--          p {-->
<!--            line-height: 150%;-->
<!--          }-->

<!--          @include media-breakpoint-down(md) {-->
<!--            width: 25%;-->
<!--          }-->

<!--          @include media-breakpoint-down(xs) {-->
<!--            width: 100%;-->
<!--          }-->
<!--        }-->
<!--      }-->

<!--      &-text {-->
<!--        font-weight: 400;-->
<!--        font-size: 16px;-->
<!--        line-height: 150%;-->
<!--        color: #b83333;-->
<!--        margin: 30px 0 16px;-->
<!--      }-->

<!--      .v-btn {-->
<!--        width: 264px;-->
<!--        height: 48px;-->
<!--        margin-bottom: 30px;-->

<!--        @include media-breakpoint-down(xs) {-->
<!--          width: 100%;-->
<!--        }-->
<!--      }-->

<!--      &-icon {-->
<!--        height: 48px;-->
<!--        display: flex;-->
<!--      }-->

<!--      &-svg {-->
<!--        width: 48px;-->
<!--        height: 48px;-->
<!--        padding: 16px 16px;-->

<!--        svg {-->
<!--          width: 100%;-->
<!--          height: 100%;-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->
