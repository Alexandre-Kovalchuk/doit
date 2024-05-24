<script setup>
import UIBtn from '@/components/UI/UIBtn.vue';
import { showPopUp } from '@/composable/useShowPopUp.js';

function infoPopUpData() {
  const tableTitleData = ['User', 'System', 'Amount', 'Payment Adress'];

  const tableData = ['Player 1', 'PayPal', '100 USD', 'paypal@paypal.com'];

  return { tableTitleData, tableData };
}

const { tableTitleData, tableData } = infoPopUpData();

const closePopUp = () => {
  showPopUp();
};
</script>

<template>
  <div class="info-popup">
    <h2 class="info-popup__title">Info</h2>

    <p class="info-popup__text">if not sent automatically probably need to send manually</p>

    <div class="info-popup__table">
      <div class="info-popup__table-head">
        <h3 class="info-popup__table-title" v-for="(item, index) in tableTitleData" :key="index">
          {{ item }}
        </h3>
      </div>

      <div class="info-popup__table-body">
        <div class="info-popup__table-row">
          <p class="info-popup__table-text" v-for="(item, index) in tableData" :key="index">
            {{ item }}
          </p>
        </div>
      </div>
    </div>

    <div class="info-popup__table-btn">
      <UIBtn label="Sent" color="blue" @click="closePopUp" />
      <UIBtn label="Decline" color="blue" @click="closePopUp" />
    </div>
  </div>
</template>

<style lang="scss">
.info-popup {
  margin-top: 50px;
  width: 100%;
  &__title {
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
    color: #f5f5f5;
    text-align: center;
    margin-bottom: 4px;
  }

  &__text {
    font-weight: 300;
    font-size: 10px;
    text-transform: uppercase;
    text-align: center;
    color: #f5f5f5;
    opacity: 0.37;
    margin-bottom: 55px;
  }

  &__table-head {
    background: #162438;
    padding: 16px 97px 18px 49px;
    display: flex;
    justify-content: space-between;
  }

  &__table-title {
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    color: #fff;
  }

  &__table-row {
    padding: 17px 78px 25px 37px;
    border-bottom: 1px solid #162438;
    display: flex;
    justify-content: space-between;
  }

  &__table-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    color: #9fb1cc;
  }

  &__table-btn {
    width: 330px;
    margin: 80px auto 0;
    display: flex;
    justify-content: space-between;
  }

  .v-btn__btn {
    padding: 16px 42px;
    width: fit-content;
    border-radius: 2px;
  }

  .pop-up {
    &__content {
      width: 698px;
      height: 508px;
      padding: 16px 0 62px;
    }

    &__btns {
      margin: 0 16px;

      &-back {
        display: none;
      }

      &-close {
        margin-left: auto;
      }
    }

    &__column {
      margin: 0;
    }
  }
}
</style>
