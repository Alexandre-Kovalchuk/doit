<script setup>
import BaseImage from '@/components/Base/BaseImage.vue';
import BaseSvg from '@/components/Base/BaseSvg.vue';
import BaseInput from '@/components/Base/BaseInput.vue';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { accountIcon } from '@/components/Data/UseLogoAndAvatar.js';

const profileMenu = [
  { id: 1, name: 'User Panel', label: 'User Panel' },
  { id: 2, name: 'My profile', label: 'My profile' },
  { id: 3, name: 'My team', label: 'My team' },
  { id: 4, name: 'Deposit/Withdraw', label: 'Deposit/Withdraw' },
  { id: 5, name: 'Premium', label: 'Premium' },
  { id: 6, name: 'Statistics', label: 'Statistics' },
  { id: 7, name: 'Support', label: 'Support' },
  { id: 8, name: 'Settings', label: 'Settings' },
  { id: 9, name: 'Game profile', label: 'Game profile' },
];

const routers = useRouter();
const isActive = ref(false);
let q = routers.currentRoute.value.query.q;
const isOpenAside = ref(false);

const param = (link) => {
  routers.push({ path: '/profile', query: { q: link } });
};

const toggleAsideMenu = () => {
  isOpenAside.value = !isOpenAside.value;
};
const handelClicked = (click) => {
  toggleAsideMenu();
  isActive.value = click;
};

watch(() => {
  q = routers.currentRoute.value.query.q;
  if (q) {
    isActive.value = q;
  }
});

watch(isActive, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    isOpenAside.value = false;
  }
});
</script>

<template>
  <section class="profile">
    <div class="container">
      <div class="profile__content">
        <aside
          :class="['profile__aside', { profile__aside_act: isOpenAside }]"
          @click="toggleAsideMenu"
        >
          <div :class="['profile__aside-arrow', { 'profile__aside-arrow_act': isOpenAside }]">
            <BaseSvg id="arrow-down" />
          </div>

          <div :class="['profile__aside-row', { 'profile__aside-row_act': isOpenAside }]">
            <div class="profile__aside-avatar">
              <BaseImage :srcset="accountIcon.webp" :src="accountIcon.img" />
            </div>

            <div class="profile__aside-info">
              <p class="profile__aside-name">Nikodem Świder</p>

              <p class="profile__aside-nickname">BlacerLordTV</p>

              <p class="profile__aside-team">Blacer team</p>

              <p class="profile__aside-balance">Balance: $1000</p>

              <div class="profile__aside-icon">
                <button class="profile__aside-add"><BaseSvg :id="'plus-circle'" /></button>
                <button class="profile__aside-mail"><BaseSvg :id="'mail'" /></button>
              </div>

              <nav class="profile__aside-menu">
                <ul class="profile__aside-list">
                  <li
                    v-for="link in profileMenu"
                    :key="link.id"
                    :class="[
                      'profile__aside-item',
                      { 'profile__aside-item_active': isActive === link.label },
                    ]"
                    @click="handelClicked(link.label)"
                  >
                    <BaseInput
                      placeholder=""
                      :name="link.label"
                      type="radio"
                      :label="link.label"
                      :value="link.label"
                      modify="radio"
                      @click="param(link.name)"
                    />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </aside>
        <div class="profile__block">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';

.profile {
  margin-top: 48px;

  @include media-breakpoint-down(lg) {
    padding-left: 114px;
  }

  @include media-breakpoint-down(md) {
    padding-left: 0;
    margin: 0;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    padding-left: 23px;
    @include media-breakpoint-down(lg) {
      padding: 0;
    }

    @include media-breakpoint-down(sm) {
      flex-direction: column;
    }
  }

  &__aside {
    max-width: 240px;
    width: 100%;
    border-right: 2px solid #1a1f24;
    position: relative;
    padding-top: 66px;

    @include media-breakpoint-down(sm) {
      border: none;
      width: 20px;
      position: fixed;
      left: 0;
      top: 50%;
      z-index: 40;
      background: #2b353f;
      height: 50px;
      transition: 0.4s ease-in;
      border-radius: 0 5px 5px 0;
      &_act {
        top: 0;
        max-width: 100%;
        width: 100%;
        height: 100%;
      }
    }

    &-arrow {
      display: none;

      @include media-breakpoint-down(sm) {
        display: block;
        position: absolute;
        top: 50%;
        right: 0;
        z-index: 50;
        transform: translateY(-50%) rotate(-90deg);
        transition: 0.4s ease-in;

        svg {
          width: 20px;
          height: 20px;
        }

        &_act {
          right: 20px;
          transform: rotate(90deg);
        }
      }
    }

    &-row {
      @include media-breakpoint-down(sm) {
        position: fixed;
        top: 0;
        left: -100%;
        transition: 0.4s ease-in;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 50px;
        overflow: auto;
        padding: 165px 0 90px;

        &::-webkit-scrollbar {
          display: none;
        }

        &_act {
          left: 50%;
          transform: translateX(-50%);

          margin-bottom: 50px;
          height: 100%;
        }
      }
    }

    &-avatar {
      width: 104px;
      height: 104px;
      margin-bottom: 23px;
      border: 1px solid red;

      img {
        width: 100%;
        height: 100%;
      }
    }

    &-name {
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: #909aa3;
      margin-bottom: 5px;
    }

    &-nickname {
      font-weight: 700;
      font-size: 24px;
      line-height: 130%;
      margin-bottom: 8px;
    }

    &-team,
    &-balance {
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      text-transform: uppercase;
      color: #37b7fa;
    }

    &-balance {
      margin-bottom: 6px;
    }

    &-icon {
      display: flex;
      justify-content: space-between;
      width: 60px;
      margin-bottom: 21px;
    }

    &-add,
    &-mail {
      background: transparent;
      width: 24px;
      height: 24px;

      svg {
        width: 100%;
        height: 100%;
      }
    }

    &-item {
      cursor: pointer;
      position: relative;
      padding-left: 12px;

      &::before {
        content: '';
        position: absolute;
        width: 11px;
        height: 11px;
        background: #ffffff;
        left: 0;
        border-radius: 50%;
      }

      &::after {
        content: '';
        position: absolute;
        border-radius: 50%;
        width: 9px;
        height: 9px;
        background: #151a1f;
        left: 1px;
        top: 1px;
      }

      &_active {
        &::after,
        &::before {
          background: #37b7fa;
        }

        .inp__label {
          color: #37b7fa;
        }
      }

      &_active:hover::before,
      ::after,
      &:hover::before,
      ::after {
        background: #37b7fa;
      }

      .inp {
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;
        width: 165px;

        &__text {
          display: none;
        }

        &__label {
          font-size: 16px;
          //color: #37b7fa;
          margin: 0 0 24px 8px;
          cursor: pointer;

          &:hover {
            color: #37b7fa;
          }
        }
      }
    }
  }

  &__block {
    width: 100%;
  }
}
</style>
