<script setup>
import BaseSvg from '@/components/Base/BaseSvg.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { partners } from '@/components/JSFiles/MainPage/PartnersData.js';

const swiperOptions = {
  modules: [Pagination],
  pagination: true,
};
</script>

<template>
  <section class="partners">
    <div class="container">
      <div class="partners__content">
        <h2 class="partners__title">Partners</h2>

        <swiper
          :slides-per-view="'auto'"
          :loop="true"
          :spaceBetween="30"
          :pagination="{ clickable: true }"
          :modules="[Pagination]"
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
    </div>
  </section>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';
.partners {
  margin-bottom: 77px;

  @include media-breakpoint-down(lg) {
    padding-left: 114px;
  }

  @include media-breakpoint-down(md) {
    padding-left: 0;
  }

  &__title {
    font-weight: 700;
    font-size: 44px;
    line-height: 100%;
    color: #f5f5f5;
    margin-bottom: 53px;
  }

  &__content {
    margin: 0 23px;
  }

  &__slide {
    height: 70px;

    svg {
      width: 100%;
      height: 100%;
    }

    &_google {
      width: 130px;
      height: 48px;
    }

    &_nasa {
      width: 70px;
      height: 70px;
    }

    &_navi {
      width: 64px;
      height: 64px;
    }

    &_airbnb {
      width: 154px;
      height: 48px;
    }

    &_telegram,
    &_pepsi {
      width: 56px;
      height: 56px;
    }

    &_youtube {
      width: 80px;
      height: 56px;
    }

    &_behance {
      width: 52px;
      height: 52px;
    }
  }

  .swiper {
    height: 90px;

    &-wrapper {
      align-items: center;
      justify-content: space-between;
    }
    &-slide {
      width: fit-content !important;
    }

    &-pagination-bullet {
      width: 13px;
      height: 17px;
      border-radius: 0;
      background: #20272e;

      &-active {
        background: #4f5f70;
      }

      @include media-breakpoint-down(sm) {
        width: 6px;
        height: 8px;
      }
    }
  }
}
</style>
