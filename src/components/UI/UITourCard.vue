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
    <h1 class="tour-card__title" v-if="tourCard.mainTitle">
      {{ tourCard.mainTitle }}: TOURNAMNETS
    </h1>

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

    &-img {
      max-width: 116px;

      height: 128px;
      position: relative;

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
    }

    &-title {
      font-weight: 500;
      font-size: 24px;
      line-height: 100%;
      margin-bottom: 16px;
    }

    &-item {
      display: flex;
      justify-content: space-between;
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
    }

    &-txt {
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
    }
  }

  &__filter {
    border: 2px solid #20252b;
  }
}
</style>
