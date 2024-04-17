<script setup>
import BaseImage from '@/components/Base/BaseImage.vue';
import UIFilter from '@/components/UI/UIFilter.vue';
import BaseSvg from '@/components/Base/BaseSvg.vue';
import { ref } from 'vue';

const props = defineProps({
  tourCard: {
    type: Object,
    required: true,
  },
});

const isOpen = ref(false);
const isMobile = ref(window.innerWidth <= 575);
const toggleInfo = () => {
  isOpen.value = !isOpen.value;
};

window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth <= 575;
});
</script>

<template>
  <div :class="['tour-card', { 'tour-card_act': isOpen }]">
    <div class="tour-card__img">
      <BaseImage :srcset="tourCard.webp" :src="tourCard.png" :alt="tourCard.title" />

      <p
        :class="['tour-card__status', { 'tour-card__status_past': tourCard.status === 'Finished' }]"
        v-if="!isMobile"
      >
        {{ tourCard.status }}
      </p>
    </div>

    <div class="tour-card__card">
      <div class="tour-card__row" @click="toggleInfo">
        <h2 class="tour-card__title">
          {{ tourCard.title }} {{ tourCard.mode }} #2 - {{ tourCard.day }}
        </h2>

        <div :class="['tour-card__arrow', { 'tour-card__arrow_act': isOpen }]" v-if="isMobile">
          <BaseSvg id="arrow-down" />
        </div>
      </div>

      <div class="tour-card__info">
        <div class="tour-card__info-row" v-for="item in tourCard.labelSecond">
          <h3 class="tour-card__info-title">{{ item.name }}</h3>
          <p class="tour-card__info-txt">{{ item.txt }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';

.tour-card {
  display: flex;
  border: 2px solid #20252b;
  max-width: 859px;
  width: 100%;
  margin-bottom: 16px;
  position: relative;
  transition: 0.4s ease;

  @include media-breakpoint-down(lg) {
    min-width: 620px;
  }

  @include media-breakpoint-down(md) {
    min-width: 100%;
  }

  @include media-breakpoint-down(sm) {
    flex-direction: column;
  }

  @include media-breakpoint-down(xs) {
    background: #151a1f;
    border: none;
    max-height: 66px;
    overflow: hidden;

    &_act {
      max-height: 353px;
    }
  }

  &__img {
    max-width: 116px;
    height: 128px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @include media-breakpoint-down(sm) {
      max-width: 100%;
      height: 165px;
    }
  }

  &__status {
    position: absolute;
    top: 6px;
    left: 6px;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    padding: 4px 13px;
    background: #0a68f5;

    &_past {
      background: #b83333;
    }
  }

  &__card {
    padding: 20px 33px 20px 30px;
    width: 100%;

    @include media-breakpoint-down(lg) {
      padding: 15px 16px 22px;
    }
  }

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include media-breakpoint-down(xs) {
      position: absolute;
      top: 54%;
      transform: translateY(-50%);
      width: 90%;
    }
  }

  &__title {
    font-weight: 500;
    font-size: 24px;
    line-height: 100%;
    opacity: 0.88;
    margin-bottom: 16px;

    @include media-breakpoint-down(sm) {
      font-size: 22px;
    }

    @include media-breakpoint-down(xs) {
      margin-bottom: 0;
    }
  }

  &__arrow {
    width: 20px;
    height: 20px;
    transition: 0.4s ease;

    svg {
      width: 100%;
      height: 100%;
    }

    &_act {
      transform: rotate(-180deg);
    }
  }

  &__info {
    display: flex;
    justify-content: space-between;

    @include media-breakpoint-down(sm) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px 0;
      padding-top: 40px;
    }
  }

  &__info-title {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-transform: uppercase;
    color: #67707a;

    @include media-breakpoint-down(lg) {
      font-size: 10px;
      line-height: 100%;
      margin-bottom: 4px;
    }
  }

  &__info-txt {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;

    @include media-breakpoint-down(lg) {
      font-size: 14px;
      line-height: 100%;
    }
  }
}
</style>
