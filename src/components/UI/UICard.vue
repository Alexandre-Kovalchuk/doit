<script setup>
import BaseImage from '@/components/BASE/BaseImage.vue';
const props = defineProps({
  card: {
    type: Object,
    required: true,
  },
  addClass: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="card" :class="{ card_color: addClass }">
    <div class="card__img">
      <BaseImage :srcset="card.imgWebp" :src="card.img" alt="img" />
    </div>

    <div class="card__item">
      <h3 class="card__title">{{ card.title }}</h3>

      <div class="card__row" v-if="card.label">
        <div v-for="(item, index) in card.label" :key="index" class="card__column">
          <h4 class="card__column-title">
            {{ item.subTitle }}
          </h4>

          <p class="card__column-text">{{ item.text }}</p>
        </div>
      </div>

      <p class="card__column-subtext" v-else>{{ card.subText }}</p>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';
.card {
  margin-top: 35px;
  width: 370px;
  background: #151a1f;

  &_color {
    background: #e1e6eb;
  }

  @include media-breakpoint-down(xs) {
    width: 329px;
  }

  @include media-breakpoint-down(xxs) {
    width: 270px;
  }

  &__img {
    width: 370px;
    height: 200px;

    @include media-breakpoint-down(xs) {
      width: 329px;
    }

    @include media-breakpoint-down(xxs) {
      width: 270px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__item {
    padding: 30px 22px;
    height: 188px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include media-breakpoint-down(xs) {
      height: 152px;
      padding: 22px 16px 30px;
    }
  }

  &__title {
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    color: #e6e8eb;

    @include media-breakpoint-down(xs) {
      font-weight: 700;
      font-size: 16px;
    }
  }

  &__row {
    display: flex;
    justify-content: space-between;
  }

  &__column {
    &-title {
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      color: #8996a3;
      margin-bottom: 8px;

      @include media-breakpoint-down(xs) {
        font-size: 14px;
      }
    }

    &-text {
      font-weight: 500;
      font-size: 16px;
      line-height: 100%;
      //text-align: right;
    }

    &-subtext {
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: #5e656b;
    }
  }
}
</style>
