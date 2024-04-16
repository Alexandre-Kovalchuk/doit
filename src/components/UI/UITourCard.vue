<script setup>
import BaseImage from '@/components/Base/BaseImage.vue';
import UIFilter from '@/components/UI/UIFilter.vue';

const props = defineProps({
  tourCard: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="tour-card">
    <div class="tour-card__content">
      <div class="tour-card__info">
        <div class="tour-card__info-img">
          <BaseImage :srcset="tourCard.webp" :src="tourCard.png" :alt="tourCard.title" />
          <p
            :class="[
              'tour-card__info-status',
              { 'tour-card__info-status_past': tourCard.status === 'Finished' },
            ]"
          >
            {{ tourCard.status }}
          </p>
        </div>
        <div class="tour-card__info-row">
          <h2 class="tour-card__info-title">
            {{ tourCard.title }} {{ tourCard.mode }} #2 - {{ tourCard.day }}
          </h2>
          <div class="tour-card__info-item">
            <div class="tour-card__info-sub-row" v-for="item in tourCard.labelSecond">
              <h3 class="tour-card__info-sub-title">{{ item.name }}</h3>
              <p class="tour-card__info-txt">{{ item.txt }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';

.tour-card {
  &__row {
    display: flex;
    justify-content: space-between;
  }
  &__title {
    font-weight: 700;
    font-size: 34px;
    line-height: 165%;
    margin-bottom: 16px;

    @include media-breakpoint-down(xs) {
      font-size: 28px;
      line-height: 100%;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;
  }

  &__info {
    max-width: 859px;
    width: 100%;
    border: 2px solid #20252b;
    display: flex;
    margin-bottom: 16px;

    @include media-breakpoint-down(xs) {
      max-width: 100%;
      flex-direction: column;
      border: none;
    }

    &-img {
      max-width: 116px;
      height: 128px;
      position: relative;

      @include media-breakpoint-down(xs) {
        max-width: 100%;
        height: 165px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &-status {
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

    &-row {
      padding: 22px 33px 22px 30px;
      width: 100%;

      @include media-breakpoint-down(md) {
        padding: 10px 15px 10px 15px;
      }
    }

    &-title {
      font-weight: 500;
      font-size: 24px;
      line-height: 100%;
      margin-bottom: 16px;

      @include media-breakpoint-down(xs) {
        font-size: 22px;
      }
    }

    &-item {
      display: flex;
      justify-content: space-between;

      @include media-breakpoint-down(xs) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-row-gap: 14px;
      }
    }

    &-sub-row {
      //display: flex;
    }

    &-sub-title {
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      text-transform: uppercase;
      color: #67707a;

      @include media-breakpoint-down(lg) {
        font-size: 12px;
      }
    }

    &-txt {
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;

      @include media-breakpoint-down(lg) {
        font-size: 12px;
      }
    }
  }

  &__filter {
    border: 2px solid #20252b;
  }
}
</style>
