<script setup>
import BaseImage from '@/components/Base/BaseImage.vue';
import { accountIcon } from '@/components/Data/UseLogoAndAvatar.js';
import { deposit } from '@/components/Data/Deposit.js';
import { ref } from 'vue';
import BaseInput from '@/components/Base/BaseInput.vue';
import UIBtn from '@/components/UI/UIBtn.vue';

const selectedTab = ref('Withdraw');
const selectedWithdraw = ref('Paypal');

const clickOnBtn = (nameBtn) => {
  selectedTab.value = nameBtn;
};
</script>

<template>
  <div class="deposit">
    <h1 class="deposit__title">Deposit/Witdraw</h1>

    <div class="deposit__content">
      <div class="deposit__column">
        <div class="deposit__info">
          <div class="deposit__info-avatar">
            <BaseImage :srcset="accountIcon.webp" :src="accountIcon.img" />
          </div>

          <div class="deposit__info-user">
            <p class="deposit__info-nickname">BlacerLordTV</p>
            <p class="deposit__info-balance">Balance: $1000</p>
            <p class="deposit__info-balance">DOIT POINTS: 400</p>
          </div>
        </div>

        <div class="deposit__tabs">
          <button
            :class="['deposit__tabs-btn', { 'deposit__tabs-btn_act': btn.name === selectedTab }]"
            v-for="(btn, index) in deposit[0].depositTab"
            :key="index"
            @click="clickOnBtn(btn.name)"
          >
            {{ btn.label }}
          </button>
        </div>
      </div>

      <Transition name="slide-up">
        <div class="deposit__withdraw" v-if="selectedTab === 'Withdraw'">
          <div class="deposit__withdraw-btns">
            <button
              :class="[
                'deposit__withdraw-tab',
                { 'deposit__withdraw-tab_act': btn.name === selectedWithdraw },
              ]"
              v-for="(btn, index) in deposit[0].withdrawTab"
              :key="index"
            >
              {{ btn.label }}
            </button>
          </div>

          <div class="deposit__withdraw-inp">
            <BaseInput
              v-for="inp in deposit[0].withdrawInp.slice(0, 3)"
              :key="inp.id"
              :placeholder="inp.label"
              name="name"
              :label="inp.label"
            />

            <UIBtn :label="selectedTab === 'Deposit' ? 'Deposit' : 'Withdraw'" color="blue" />
          </div>
        </div>
      </Transition>

      <Transition name="slide-up">
        <div class="deposit__deposit" v-if="selectedTab === 'Deposit'">
          <div class="deposit__withdraw-btns">
            <button
              :class="[
                'deposit__withdraw-tab',
                { 'deposit__withdraw-tab_act': btn.name === selectedWithdraw },
              ]"
              v-for="(btn, index) in deposit[0].withdrawTab"
              :key="index"
              @click="clickOnBtn(btn.name)"
            >
              {{ btn.label }}
            </button>
          </div>

          <div class="deposit__withdraw-inp">
            <BaseInput
              v-for="inp in deposit[0].withdrawInp.slice(3, 5)"
              :key="inp.id"
              :placeholder="inp.label"
              name="name"
              :label="inp.label"
            />

            <UIBtn :label="selectedTab === 'Deposit' ? 'Deposit' : 'Withdraw'" color="blue" />
          </div>
        </div>
      </Transition>

      <Transition name="slide-up">
        <div class="deposit__history" v-if="selectedTab === 'History'">
          <p
            class="deposit__history-text"
            v-for="title in deposit[0].depositHistory"
            :key="title.id"
          >
            {{ title.name }}
          </p>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';

.deposit {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 11px 0 0 61px;

  &__title {
    font-weight: 700;
    font-size: 48px;
    line-height: 137%;
    text-align: center;
    margin-bottom: 14px;
  }

  &__content {
    max-width: 928px;
    width: 100%;
  }

  &__column {
    width: 100%;
    background: #0d1d2c;
    padding: 22px 0 0 31px;
    height: 182px;
  }

  &__info {
    display: flex;
    margin-bottom: 37px;

    &-avatar {
      border-radius: 4px;
      width: 86px;
      height: 83px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    &-user {
      margin-left: 20px;
    }

    &-nickname {
      font-weight: 700;
      font-size: 24px;
      line-height: 130%;
      margin-bottom: 5px;
    }

    &-balance {
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      text-transform: uppercase;
      color: #37b7fa;
    }
  }

  &__tabs {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 124px 0 85px;

    &-btn {
      font-weight: 700;
      font-size: 24px;
      line-height: 130%;
      color: #bcbcbc;
      background: transparent;
      width: fit-content;
      padding: 0;
      position: relative;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;

      &::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 4px;
        bottom: -8px;
        left: 0;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
        background-color: #fff;
      }

      &:hover::after {
        transform-origin: bottom left;
        transform: scaleX(1);
      }

      &_act::after {
        transform-origin: bottom left;
        transform: scaleX(1);
        color: #fff;
      }

      &_act {
        transform-origin: bottom left;
        transform: scaleX(1);
        color: #fff;
      }

      &:hover {
        transform-origin: bottom left;
        color: #fff;
      }
    }

    .tabs__row {
      width: 100%;
      margin: 0;
    }

    .tabs__btns {
      max-width: 79.5%;
    }

    .tabs__title {
      display: none;
    }
  }

  &__withdraw,
  &__deposit {
    padding: 20px 42px;
    background: #0d1d2c;
    margin-top: 37px;

    &-btns {
      display: flex;
      justify-content: space-between;
      border-radius: 2px;
      max-width: 311px;
      width: 100%;
      background: #0f1215;
      margin-bottom: 32px;
    }

    &-inp {
      max-width: 512px;
      width: 100%;
      .inp {
        &__label {
          font-weight: 700;
          font-size: 16px;
          line-height: 100%;
          color: #cccdcd;
        }

        &__text {
          background: #0f1215;
          height: 40px;
          margin-bottom: 19px;
        }
      }

      .v-btn {
        width: 160px;
        height: 29px;
        margin-left: auto;
        margin-right: 13px;

        &__btn {
          font-weight: 400;
          font-size: 14px;
          line-height: 100%;
        }
      }
    }

    &-tab {
      font-weight: 400;
      font-size: 14px;
      line-height: 100%;
      color: #7a8899;
      padding: 8px 17px 8px;

      &_act {
        color: #f5f5f5;
        background: linear-gradient(180deg, #2788f6 0%, #0960e0 100%);
      }
    }
  }

  &__history {
    padding: 20px 42px;
    background: #0d1d2c;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    &-text {
      font-weight: 700;
      font-size: 16px;
      line-height: 130%;
      color: #bcbcbc;
    }
  }

  .slide-up-enter-active,
  .slide-up-leave-active {
    transition: all 0.25s ease-out;
  }

  .slide-up-enter-from {
    opacity: 0;
    transform: translateY(30px);
  }

  .slide-up-leave-to {
    opacity: 0;
    transform: translateY(-30px);
  }
}
</style>
