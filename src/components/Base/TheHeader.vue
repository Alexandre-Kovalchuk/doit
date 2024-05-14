<script setup>
import { ref, watch } from 'vue';
import BaseImage from '@/components/Base/BaseImage.vue';
import UIBtn from '../UI/UIBtn.vue';
import { logo } from '@/components/Data/UseLogoAndAvatar.js';
import { showPopUp } from '@/composable/test.js';
import { useRouter } from 'vue-router';

const links = ref([
  { name: 'Play', href: 'play' },
  { name: 'News', href: 'news' },
  { name: 'Games', href: 'games' },
  { name: 'Shop', href: 'shop' },
  { name: 'Sponsorship', href: 'sponsorship' },
]);

const isOpenMenu = ref(false);
const routers = useRouter();
const q = ref('');

const param = (name) => {
  routers.push({ path: '/', query: { q: name } });

  showPopUp();
};

watch(() => {
  q.value = routers.currentRoute.value.query.q;
});
const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value;
};
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <div class="header__logo">
          <router-link to="/">
            <BaseImage :srcset="logo.webp" :src="logo.img" alt="logo" />
          </router-link>
        </div>

        <div class="header__menu">
          <div
            :class="['header__menu-icon', { 'header__menu-icon_act': isOpenMenu }]"
            @click="toggleMenu"
          >
            <span></span>
          </div>

          <div :class="['header__menu-row', { 'header__menu-row_act': isOpenMenu }]">
            <nav class="header__menu-nav">
              <ul class="header__menu-list">
                <li v-for="item in links" :key="item.name">
                  <router-link :to="item.href" class="header__menu-link" @click="toggleMenu">{{
                    item.name
                  }}</router-link>
                </li>
              </ul>
            </nav>

            <div class="header__menu-btn">
              <UIBtn label="Login" @click="param('Login')" />
              <UIBtn label="Sign up" color="blue" @click="param('Sign up 1/2')" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';

.header {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 50;
  min-height: 64px;
  padding: 32px 0;
  background-color: #0f1215;

  @include media-breakpoint-down(lg) {
    padding-left: 114px;
  }

  @include media-breakpoint-down(md) {
    padding-left: 0;
  }

  @include media-breakpoint-down(xs) {
    padding: 24px 0 24px;
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }

  &__logo {
    position: relative;
    z-index: 40;

    @include media-breakpoint-down(md) {
      position: absolute;
      right: 0;

      img {
        width: 56px;
        height: 48px;
      }
    }
  }

  &__menu {
    width: 100%;

    @include media-breakpoint-down(md) {
      width: fit-content;
      &-icon {
        z-index: 60;
        position: relative;
        width: 27px;
        height: 32px;
        cursor: pointer;
        top: -6px;
        //padding: 8px 4px;

        span,
        &::before,
        &::after {
          right: 0;
          position: absolute;
          height: 10%;
          width: 100%;
          transition: all 0.3s ease 0s;
          background-color: #fff;
        }

        &::before,
        &::after {
          content: '';
          height: 2px;
        }

        &::before {
          top: 8px;
        }

        &::after {
          bottom: 8px;
          height: 2px;
        }

        span {
          height: 2px;
          top: 50%;
          transform: scale(1) translate(0px, -50%);
        }
        &_act span {
          transform: rotate(45deg) scale(0) translate(0px, -50%);
        }

        &_act::before {
          top: 50%;
          transform: rotate(-45deg) translate(0px, -50%);
        }

        &_act::after {
          bottom: 50%;
          transform: rotate(45deg) translate(0px, 50%);
        }
      }
    }

    &-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      @include media-breakpoint-down(md) {
        position: fixed;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background-color: #0f1215;
        padding: 80px 20px;
        transition: left 0.3s ease 0s;
        overflow: auto;
        opacity: 0.98;
        flex-direction: column;
        justify-content: flex-start;

        &_act {
          left: 0;
        }
      }
    }

    &-nav {
      max-width: 567px;
      width: 100%;
      margin-right: auto;
      margin-left: 56px;

      @include media-breakpoint-down(lg) {
        margin-left: 20px;
      }

      @include media-breakpoint-down(md) {
        margin: 0 auto;
      }
    }

    &-list {
      display: flex;
      justify-content: space-between;
      @include media-breakpoint-down(md) {
        height: 220px;
        flex-direction: column;
      }

      @include media-breakpoint-down(md) {
        li {
          text-align: center;
        }
      }
    }

    &-link {
      font-weight: 700;
      font-size: 20px;
      color: #f5f5f5;
    }

    &-btn {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 8px;
      max-width: 233px;
      width: 100%;
      height: 44px;

      .v-btn {
        &:last-child {
        }
      }

      @include media-breakpoint-down(lg) {
        margin-left: 20px;
      }

      @include media-breakpoint-down(md) {
        margin: 84px 0 0;
      }

      @include media-breakpoint-down(xs) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 1fr);
        grid-row-gap: 12px;
        max-width: 100%;
        height: 108px;
      }
    }
  }
}
</style>