<script setup>
import { useRoute } from 'vue-router';
import { contact } from '@/components/JSFiles/Contact.js';
import BaseSvg from '@/components/Base/BaseSvg.vue';
const namePath = useRoute().path;
</script>

<template>
  <div class="contact">
    <h1 class="contact__title">{{ namePath === '/about' ? 'About us' : 'Contact us' }}</h1>

    <div class="contact__content">
      <div class="contact__location">
        <div class="contact__svg">
          <BaseSvg id="location" />
        </div>

        <p class="contact__text" v-for="item in contact[0].location">{{ item.text }}</p>
      </div>

      <div class="contact__phone">
        <div class="contact__svg">
          <BaseSvg id="phone" />
        </div>

        <div class="contact__row contact__row_phone" v-for="item in contact[0].phone">
          <p class="contact__text">
            {{ item.text }}
          </p>
          <a href="tel: {{ item.phoneNumber}} " class="contact__number">{{ item.phoneNumber }}</a>
        </div>
      </div>

      <div class="contact__mess">
        <div class="contact__svg">
          <BaseSvg id="mess" />
        </div>

        <div class="contact__row contact__row_mess">
          <p class="contact__sub-text" v-for="(text, index) in contact[0].mess" :key="index">
            {{ text.text }}<span>{{ text.email }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';

.main {
  @include media-breakpoint-down(md) {
    padding: 104px 0 0;
  }
}

.contact {
  margin: 195px 0 0 0;
  @include media-breakpoint-down(lg) {
    padding-left: 100px;
  }

  @include media-breakpoint-down(md) {
    padding-left: 0;
    margin: 0 0 100px 0;
  }

  &__title {
    font-weight: 700;
    font-size: 48px;
    line-height: 117%;
    color: #fff;
    margin-bottom: 48px;
    margin-left: 23px;

    @include media-breakpoint-down(md) {
      font-size: 40px;
    }

    @include media-breakpoint-down(xs) {
      font-size: 32px;
      margin: 0 0 42px 2px;
    }
  }

  &__content {
    max-width: 578px;
    width: 100%;
    margin-left: 14px;
    position: relative;
    z-index: 10;

    &:after {
      content: '';
      border-radius: 1px;
      width: 2px;
      height: 256px;
      background: #151a1f;
      position: absolute;
      left: 23px;
      top: 48px;
      z-index: 1;
    }

    @include media-breakpoint-down(md) {
      margin-left: 2px;
    }
  }

  &__location,
  &__phone,
  &__row_phone {
    display: flex;
    align-items: center;
  }

  &__phone {
    margin: 42px 0;

    @include media-breakpoint-down(xs) {
      margin: 29px 0;
    }
  }

  &__mess {
    display: flex;
  }

  &__svg {
    width: 48px;
    height: 48px;
    padding: 8px;
    border: 2px solid #151a1f;
    border-radius: 4px;
    margin-right: 16px;
    position: relative;
    z-index: 10;
    background: #0f1215;

    svg {
      width: 32px;
      height: 32px;
    }
  }

  &__text {
    font-weight: 400;
    font-size: 22px;
    line-height: 100%;
    opacity: 0.5;
    color: #ccc;

    @include media-breakpoint-down(xs) {
      font-size: 16px;
      line-height: 130%;
    }
  }

  &__number {
    font-weight: 400;
    font-size: 22px;
    line-height: 100%;
    color: #f5f5f5;
    margin-left: 5px;

    @include media-breakpoint-down(xs) {
      font-size: 16px;
    }
  }

  &__sub-text {
    font-weight: 400;
    font-size: 22px;
    line-height: 100%;

    span {
      color: #707880;
    }

    &:nth-child(2) {
      margin: 22px 0;

      @include media-breakpoint-down(xs) {
        margin: 16px 0;
      }
    }

    @include media-breakpoint-down(xs) {
      font-size: 16px;
    }
  }

  &__row_mess {
    margin-top: 13px;
    @include media-breakpoint-down(xs) {
      margin-top: 19px;
    }
  }
}
</style>
