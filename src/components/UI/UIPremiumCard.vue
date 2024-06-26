<script setup>
import UIBtn from '@/components/UI/UIBtn.vue';
import { ref } from 'vue';

const props = defineProps({
  item: Object,
});

const isMobile = ref(window.innerWidth <= 576);
</script>

<template>
  <div class="premium-card">
    <div :class="['premium-card__item', `premium-card__item_${item.color}`]">
      <p v-if="isMobile || item.popular" class="premium-card__popular">{{ item.popular }}</p>

      <h2 :class="['premium-card__title', `premium-card__title_${item.color}`]">
        {{ item.title }}
      </h2>

      <h3 class="premium_-card_title-sub">{{ item.subTitle }}</h3>

      <p v-if="item.txt" class="premium-card__txt">{{ item.txt }}</p>

      <ul v-if="item.list" class="premium-card__list">
        <li v-for="li in item.list">{{ li.li }}</li>
      </ul>

      <div class="premium-card__btn">
        <UIBtn :label="item.btn" :color="item.color" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';

.premium-card {
  display: flex;

  &__item {
    padding: 100px 16px 84px 22px;
    width: 371px;
    height: 540px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include media-breakpoint-down(xs) {
      width: 329px;
      height: 446px;
      padding: 30px 16px 42px;
    }

    @include media-breakpoint-down(xxs) {
      width: 280px;
    }

    &_blue {
      background: radial-gradient(
          330.73% 321.53% at -142.43% -152.09%,
          rgba(20, 114, 255) 0%,
          rgba(20, 114, 255, 0) 95.84%
        ),
        #181b1f;
    }

    &_yellow {
      background: radial-gradient(
          330.73% 321.53% at -142.43% -152.09%,
          rgb(245, 200, 31) 0%,
          rgb(245, 200, 31, 0) 95.84%
        ),
        #181b1f;
    }

    &_green {
      background: radial-gradient(
          335.33% 349.75% at -142.43% -152.09%,
          rgb(66, 232, 128) 0%,
          rgb(66, 232, 128, 0) 84.89%
        ),
        #181b1f;
    }
  }

  &__popular {
    font-weight: 400;
    font-size: 22px;
    line-height: 100%;
    color: #0f1215;
    position: absolute;
    top: 23px;

    @include media-breakpoint-down(xs) {
      top: 8px;
    }
  }

  &__title {
    font-weight: 700;
    font-size: 42px;
    line-height: 100%;
    margin-bottom: 42px;

    @include media-breakpoint-down(xs) {
      margin-bottom: 30px;
    }

    &_blue {
      background: linear-gradient(180deg, #2788f6 0%, #0960e0 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      @include media-breakpoint-down(xs) {
      }
    }

    &_yellow {
      background: linear-gradient(180deg, #ffd321 0%, #9c6c0d 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &_green {
      background: linear-gradient(180deg, #46f48c 0%, #2b9d37 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      @include media-breakpoint-down(xs) {
      }
    }

    &-sub {
      font-weight: 500;
      font-size: 22px;
      line-height: 100%;
      margin-bottom: 16px;
      opacity: 0.88;

      @include media-breakpoint-down(xs) {
        margin-bottom: 22px;
      }
    }
  }

  &__txt {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #67707a;
    margin-bottom: 60px;

    @include media-breakpoint-down(xs) {
      margin-bottom: 63px;
    }
  }

  &__list {
    height: 140px;
    margin-bottom: 46px;
    li {
      font-weight: 400;
      font-size: 16px;
      line-height: 173%;
      color: #67707a;
    }
  }

  &__btn {
    width: 136px;
    height: 48px;

    @include media-breakpoint-down(xs) {
      width: 100%;
    }
  }
}
</style>
