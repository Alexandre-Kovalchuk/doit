<script setup>
import BaseImage from '@/components/Base/BaseImage.vue';
import { accountIcon } from '@/components/JSFiles/UseLogoAndAvatar.js';
import UITabs from '@/components/UI/UITabs.vue';
import { depositTabs } from '@/components/JSFiles/DepositTabs.js';
import { ref } from 'vue';

const selectedTab = ref('Withdraw');

const changeNewsTabs = (tabName) => {
  selectedTab.value = tabName;
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
          <UITabs
            :names="depositTabs"
            label=""
            :selectedTab="selectedTab"
            @changeTab="changeNewsTabs"
          >
          </UITabs>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.deposit {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    font-weight: 700;
    font-size: 48px;
    line-height: 137%;
    text-align: center;
    margin-bottom: 22px;
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
    margin-left: 140px;

    .tabs {
      width: 100%;
    }
    .tabs__btns-item {
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
        bottom: -9px;
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
      max-width: 65%;
    }

    .tabs__title {
      display: none;
    }
  }
}
</style>
