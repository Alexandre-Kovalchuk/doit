<script setup>
import UIBtnBtn from '@/components/UI/UIBtn.vue';
import BaseSvg from '@/components/BASE/BaseSvg.vue';
import UITabs from '@/components/UI/UITabs.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import UICard from '@/components/UI/UICard.vue';
import { ref } from 'vue';
import {
  tabs,
  starCraftInfo,
  dotaInfo,
  lolInfo,
  fortniteInfo,
  csInfo,
  starCraNews,
  dotaNews,
  lolNews,
  fortniteNews,
  csNews,
} from '@/components/JSFile/tournamentData.js';

const svg = [
  {
    id: 'triangle-first',
    class: 'first',
  },
  {
    id: 'triangle-second',
    class: 'second',
  },
  {
    id: 'triangle-third',
    class: 'third',
  },
  {
    id: 'triangle-little',
    class: 'little',
  },
];

const swiperOptions = {
  modules: [Pagination],
  pagination: true,
};

const selectedTournamentTab = ref('Dota');

const changeTournamentTabs = (tabName) => {
  selectedTournamentTab.value = tabName;
};

const selectedNewsTab = ref('Dota');

const changeNewsTabs = (tabName) => {
  selectedNewsTab.value = tabName;
};
</script>

<template>
  <main class="main">
    <section class="beta">
      <div class="container">
        <div class="beta__content">
          <h1 class="beta__title">DOIT <span>BETA</span></h1>

          <p class="beta__text beta__text_first">
            Prepare for your esports career and get ready for awesome tournaments with big prize
            pools and many fun! <br />
            Register Now!
          </p>

          <p class="beta__text beta__text_second">
            Fermentum amet quis in at euismod pellentesque. Id diam amet non at ornare mollis nunc.
            Rutrum hendrerit erat pretium, senectus orci in dui.
          </p>

          <div class="beta__btn">
            <UIBtnBtn label="Login" />
            <UIBtnBtn label="Sign up" color="blue" />
          </div>

          <div v-for="item in svg" :class="['beta__svg', `beta__svg_${item.class}`]">
            <BaseSvg :id="item.id" />
          </div>
        </div>
      </div>
    </section>

    <section class="tournaments">
      <div class="container">
        <div class="tournaments__content">
          <UITabs
            label="Tournaments"
            :names="tabs"
            :selectedTab="selectedTournamentTab"
            @changeTab="changeTournamentTabs"
          >
            <swiper
              :slides-per-view="'auto'"
              :loop="true"
              :spaceBetween="30"
              :pagination="{
                clickable: true,
              }"
              :modules="[Pagination]"
              :breakpoints="{
                320: {
                  spaceBetween: 16,
                },
                576: {
                  spaceBetween: 20,
                },
              }"
              v-if="selectedTournamentTab === 'Dota' || selectedTournamentTab === 'All'"
            >
              <swiper-slide v-for="dota in dotaInfo" :key="dota.id">
                <UICard :card="dota" />
              </swiper-slide>
            </swiper>

            <swiper
              :slides-per-view="'auto'"
              :loop="true"
              :spaceBetween="30"
              :pagination="{
                clickable: true,
              }"
              :modules="[Pagination]"
              :breakpoints="{
                320: {
                  spaceBetween: 16,
                },
                576: {
                  spaceBetween: 20,
                },
              }"
              v-if="selectedTournamentTab === 'Fortnite' || selectedTournamentTab === 'All'"
            >
              <swiper-slide v-for="fortnite in fortniteInfo" :key="fortnite.id">
                <UICard :card="fortnite" />
              </swiper-slide>
            </swiper>

            <swiper
              :slides-per-view="'auto'"
              :loop="true"
              :spaceBetween="30"
              :pagination="{
                clickable: true,
              }"
              :modules="[Pagination]"
              :breakpoints="{
                320: {
                  spaceBetween: 16,
                },
                576: {
                  spaceBetween: 20,
                },
              }"
              v-if="selectedTournamentTab === 'LOL' || selectedTournamentTab === 'All'"
            >
              <swiper-slide v-for="lol in lolInfo" :key="lol.id">
                <UICard :card="lol" />
              </swiper-slide>
            </swiper>

            <swiper
              :slides-per-view="'auto'"
              :loop="true"
              :spaceBetween="30"
              :pagination="{
                clickable: true,
              }"
              :modules="[Pagination]"
              :breakpoints="{
                320: {
                  spaceBetween: 16,
                },
                576: {
                  spaceBetween: 20,
                },
              }"
              v-if="selectedTournamentTab === 'CS' || selectedTournamentTab === 'All'"
            >
              <swiper-slide v-for="cs in csInfo" :key="cs.id">
                <UICard :card="cs" />
              </swiper-slide>
            </swiper>

            <swiper
              :slides-per-view="'auto'"
              :loop="true"
              :spaceBetween="30"
              :pagination="{
                clickable: true,
              }"
              :modules="[Pagination]"
              :breakpoints="{
                320: {
                  spaceBetween: 16,
                },
                576: {
                  spaceBetween: 20,
                },
              }"
              v-if="selectedTournamentTab === 'StarCraft' || selectedTournamentTab === 'All'"
            >
              <swiper-slide v-for="starCraft in starCraftInfo" :key="starCraft.id">
                <UICard :card="starCraft" />
              </swiper-slide>
            </swiper>
          </UITabs>
        </div>
      </div>
    </section>

    <section class="news">
      <div class="container">
        <div class="News__content">
          <UITabs
            label="News"
            :names="tabs"
            :selectedTab="selectedNewsTab"
            @changeTab="changeNewsTabs"
          >
            <swiper
              :slides-per-view="'auto'"
              :loop="true"
              :spaceBetween="30"
              :pagination="{
                clickable: true,
              }"
              :modules="[Pagination]"
              :breakpoints="{
                320: {
                  spaceBetween: 16,
                },
                576: {
                  spaceBetween: 20,
                },
              }"
              v-if="selectedNewsTab === 'Dota' || selectedNewsTab === 'All'"
            >
              <swiper-slide v-for="dota in dotaNews" :key="dota.id">
                <UICard :card="dota" :addClass="true" />
              </swiper-slide>
            </swiper>

            <swiper
              :slides-per-view="'auto'"
              :loop="true"
              :spaceBetween="30"
              :pagination="{
                clickable: true,
              }"
              :modules="[Pagination]"
              :breakpoints="{
                320: {
                  spaceBetween: 16,
                },
                576: {
                  spaceBetween: 20,
                },
              }"
              v-if="selectedNewsTab === 'Fortnite' || selectedNewsTab === 'All'"
            >
              <swiper-slide v-for="fortnite in fortniteNews" :key="fortnite.id">
                <UICard :card="fortnite" :addClass="true" />
              </swiper-slide>
            </swiper>

            <swiper
              :slides-per-view="'auto'"
              :loop="true"
              :spaceBetween="30"
              :pagination="{
                clickable: true,
              }"
              :modules="[Pagination]"
              :breakpoints="{
                320: {
                  spaceBetween: 16,
                },
                576: {
                  spaceBetween: 20,
                },
              }"
              v-if="selectedNewsTab === 'LOL' || selectedNewsTab === 'All'"
            >
              <swiper-slide v-for="lol in lolNews" :key="lol.id">
                <UICard :card="lol" :addClass="true" />
              </swiper-slide>
            </swiper>

            <swiper
              :slides-per-view="'auto'"
              :loop="true"
              :spaceBetween="30"
              :pagination="{
                clickable: true,
              }"
              :modules="[Pagination]"
              :breakpoints="{
                320: {
                  spaceBetween: 16,
                },
                576: {
                  spaceBetween: 20,
                },
              }"
              v-if="selectedNewsTab === 'CS' || selectedNewsTab === 'All'"
            >
              <swiper-slide v-for="cs in csNews" :key="cs.id">
                <UICard :card="cs" :addClass="true" />
              </swiper-slide>
            </swiper>

            <swiper
              :slides-per-view="'auto'"
              :loop="true"
              :spaceBetween="30"
              :pagination="{
                clickable: true,
              }"
              :modules="[Pagination]"
              :breakpoints="{
                320: {
                  spaceBetween: 16,
                },
                576: {
                  spaceBetween: 20,
                },
              }"
              v-if="selectedNewsTab === 'StarCraft' || selectedNewsTab === 'All'"
            >
              <swiper-slide v-for="starCraft in starCraNews" :key="starCraft.id">
                <UICard :card="starCraft" :addClass="true" />
              </swiper-slide>
            </swiper>
          </UITabs>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';

.beta {
  height: 938px;

  @include media-breakpoint-down(sm) {
    height: 800px;
  }

  @include media-breakpoint-down(sm) {
    height: 731px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  &__title {
    font-weight: 700;
    font-size: clamp(84px, 7vw, 125px);
    line-height: 100%;
    text-align: center;
    margin-bottom: 17px;
    color: #f5f5f5;
    padding-top: 170px;

    @include media-breakpoint-down(sm) {
      padding-top: 243px;
    }

    @include media-breakpoint-down(xs) {
      margin-bottom: 8px;
      span {
        display: none;
      }
    }
  }

  &__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    color: #ccc;
    max-width: 463px;
    width: 100%;
    margin-bottom: 14px;

    &_second {
      display: none;

      @include media-breakpoint-down(xs) {
        display: block;
        font-size: 14px;
      }
    }

    &_first {
      @include media-breakpoint-down(xs) {
        display: none;
      }
    }
  }

  &__btn {
    display: flex;
    justify-content: space-between;
    max-width: 233px;
    width: 100%;

    @include media-breakpoint-down(xs) {
      display: none;
    }
  }

  &__svg {
    position: absolute;
    z-index: -1;

    &_first {
      max-width: 1008px;
      width: 100%;
      height: 761px;
      top: 30px;
      animation: rotation 5s infinite linear;

      @include media-breakpoint-down(xs) {
        max-width: 310px;
        top: -41px;
      }
      svg {
        width: 100%;
        height: 100%;
      }
    }

    &_second {
      max-width: 1017px;
      width: 100%;
      height: 783px;
      top: 15px;
      left: 88px;
      animation: rotation 4.5s infinite linear;

      @include media-breakpoint-down(lg) {
        left: auto;
      }

      @include media-breakpoint-down(xs) {
        max-width: 310px;
        top: -54px;
      }

      svg {
        width: 100%;
        height: 100%;
      }
    }

    &_third {
      max-width: 1017px;
      width: 100%;
      height: 779px;
      top: 22px;
      left: 106px;
      animation: rotation 3.5s infinite linear;

      @include media-breakpoint-down(lg) {
        left: auto;
      }

      @include media-breakpoint-down(xs) {
        max-width: 310px;
        top: -51px;
      }

      svg {
        width: 100%;
        height: 100%;
      }
    }

    &_little {
      max-width: 634px;
      width: 100%;
      height: 479px;
      top: 120px;
      animation: rotation 2.5s infinite linear;

      @include media-breakpoint-down(xs) {
        max-width: 194px;
        top: 83px;
      }

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.tournaments {
  margin-bottom: 147px;

  @include media-breakpoint-down(sm) {
    margin-bottom: 100px;
  }
  &__content {
    margin: 0 23px;

    @include media-breakpoint-down(md) {
      margin: 0;
    }
  }

  .swiper {
    height: 465px;
    @include media-breakpoint-down(xs) {
      height: 430px;
    }
    &-slide {
      width: 370px !important;

      @include media-breakpoint-down(xs) {
        width: 329px !important;
      }

      @include media-breakpoint-down(xxs) {
        width: 270px !important;
      }
    }

    &-pagination-bullet {
      width: 13px;
      height: 17px;
      border-radius: 0;
      background: #20272e;

      @include media-breakpoint-down(sm) {
        width: 6px;
        height: 8px;
      }
    }
  }
}

.news {
  margin-bottom: 100px;
  &__content {
    margin: 0 23px;

    @include media-breakpoint-down(md) {
      margin: 0;
    }
  }

  .swiper {
    height: 465px;
    @include media-breakpoint-down(xs) {
      height: 430px;
    }
    &-slide {
      width: 370px !important;

      @include media-breakpoint-down(xs) {
        width: 329px !important;
      }

      @include media-breakpoint-down(xxs) {
        width: 270px !important;
      }
    }

    &-pagination-bullet {
      width: 13px;
      height: 17px;
      border-radius: 0;
      background: #20272e;

      @include media-breakpoint-down(sm) {
        width: 6px;
        height: 8px;
      }
    }
  }
}

@keyframes rotation {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}
</style>
