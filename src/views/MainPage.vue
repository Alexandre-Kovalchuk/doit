<script setup>
import UIBtnBtn from '@/components/UI/UIBtn.vue';
import BaseSvg from '@/components/Base/BaseSvg.vue';

import UITabs from '@/components/UI/UITabs.vue';
import BaseImage from '@/components/Base/BaseImage.vue';
import MainTournament from '@/views/Main/MainTournament.vue';
import MainNews from '@/views/Main/MainNews.vue';
import MainStreams from '@/views/Main/MainStreams.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import UICard from '@/components/UI/UICard.vue';
import { ref } from 'vue';
import { tabs } from '@/components/JSFiles/mainPage/TabsData.js';
import {
  starCraftInfo,
  dotaInfo,
  lolInfo,
  fortniteInfo,
  csInfo,
} from '@/components/JSFiles/mainPage/TournamentsData.js';
import {
  starCraNews,
  dotaNews,
  lolNews,
  fortniteNews,
  csNews,
} from '@/components/JSFiles/mainPage/NewsData.js';

import {
  streamsImgDota,
  streamsImgFortnite,
  streamsImgLol,
  streamsImgCs,
  streamsImgStarCraft,
} from '@/components/JSFiles/mainPage/StreamsData.js';
import { partners } from '@/components/JSFiles/mainPage/PartnersData.js';
import { games } from '@/components/JSFiles/mainPage/GamesData.js';

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

// const selectedTournamentTab = ref('Dota');
//
// const changeTournamentTabs = (tabName) => {
//   selectedTournamentTab.value = tabName;
// };
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

    <MainTournament />
    <MainNews />
    <MainStreams />

    <section class="partners">
      <div class="container">
        <div class="partners__content">
          <h2 class="partners__title">Partners</h2>

          <swiper
            :slides-per-view="'auto'"
            :loop="true"
            :spaceBetween="4"
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
          >
            <swiper-slide v-for="item in partners" :key="item.id">
              <div :class="['partners__slide', `partners__slide_${item.name}`]">
                <a :href="item.link">
                  <BaseSvg :id="item.name" />
                </a>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <svg>
          <use></use>
        </svg>
      </div>
    </section>

    <section class="games">
      <div class="container">
        <div class="ganes__content">
          <h2 class="games__title">Games</h2>

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
          >
            <swiper-slide v-for="item in games" :key="games.id">
              <BaseImage :srcset="item.webp" :src="item.img" :alt="item.txt" />
              <p class="games__text">{{ item.txt }}</p>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';

.beta {
  height: 936px;

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

//

//.partners {
//  &__title {
//    font-weight: 700;
//    font-size: 44px;
//    line-height: 100%;
//    color: #f5f5f5;
//    margin-bottom: 44px;
//  }
//
//  &__slide {
//    height: 70px;
//
//    svg {
//      width: 100%;
//      height: 100%;
//    }
//
//    &_google {
//      width: 130px;
//      height: 48px;
//    }
//
//    &_nasa {
//      width: 70px;
//      height: 70px;
//    }
//
//    &_navi {
//      width: 64px;
//      height: 64px;
//    }
//
//    &_airbnb {
//      width: 154px;
//      height: 48px;
//    }
//
//    &_telegram {
//      width: 56px;
//      height: 56px;
//    }
//
//    &_youtube {
//      width: 80px;
//      height: 56px;
//    }
//
//    &_behance {
//      width: 52px;
//      height: 52px;
//    }
//  }
//
//  .swiper {
//    &-wrapper {
//      align-items: center;
//      justify-content: space-between;
//    }
//    &-slide {
//      width: fit-content !important;
//    }
//  }
//}
//
//.games {
//  margin-bottom: 100px;
//  &__title {
//    font-weight: 700;
//    font-size: 44px;
//    line-height: 100%;
//    color: #f5f5f5;
//    margin-bottom: 44px;
//  }
//
//  &__text {
//    position: absolute;
//    bottom: 30px;
//    left: 50%;
//    transform: translateX(-50%);
//    font-weight: 700;
//    font-size: 30px;
//    line-height: 100%;
//    color: #f5f5f5;
//  }
//
//  .swiper {
//    height: 547px;
//    &-slide {
//      width: 387px !important;
//      height: 500px;
//      position: relative;
//      img {
//        width: 100%;
//        height: 100%;
//        //object-fit: cover;
//        //object-position: center;
//      }
//    }
//
//    &-pagination-bullet {
//      width: 13px;
//      height: 17px;
//      border-radius: 0;
//      background: #20272e;
//
//      @include media-breakpoint-down(sm) {
//        width: 6px;
//        height: 8px;
//      }
//    }
//  }
//}

@keyframes rotation {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}
</style>
