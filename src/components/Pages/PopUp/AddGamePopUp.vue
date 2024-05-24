<script setup>
import UIBtn from '@/components/UI/UIBtn.vue';
import BaseInput from '@/components/Base/BaseInput.vue';
import { ref } from 'vue';
import { showPopUp } from '@/composable/useShowPopUp.js';

const counter = ref(0);

const closePopUp = () => {
  showPopUp();
};
</script>

<template>
  <div class="game-popup">
    <h2 class="game-popup__title">Add payment</h2>
    <h3 class="game-popup__subtitle">add/withdraw</h3>

    <div class="game-popup__btn">
      <UIBtn label="add" color="blue" />
      <UIBtn label="withdraw" />
    </div>

    <h3 class="game-popup__subtitle">if withdraw chose system</h3>

    <div class="game-popup__subbtn">
      <UIBtn label="Paypal" color="blue" />
      <UIBtn label="BTC" />
    </div>

    <div class="game-popup__column">
      <div class="game-popup__row">
        <p class="game-popup__text">Amount</p>

        <div class="game-popup__counter">
          <p
            :class="['game-popup__minus', { 'game-popup__minus_disable': counter === 0 }]"
            @click="counter--"
          >
            -
          </p>

          <span class="game-popup__current">{{ counter }}</span>

          <p
            :class="['game-popup__plus', { 'game-popup__plus_disable': counter === 10 }]"
            @click="counter++"
          >
            +
          </p>
        </div>
      </div>

      <div class="game-popup__row">
        <p class="game-popup__text">User</p>
        <BaseInput placeholder="" name="user" />
      </div>

      <div class="game-popup__row">
        <p class="game-popup__text">payment adress</p>
        <BaseInput placeholder="" name="payment" />
      </div>
    </div>

    <div class="game-popup__send">
      <UIBtn label="Send" color="blue" @click="closePopUp" />
    </div>
  </div>
</template>

<style lang="scss">
.game-popup {
  margin-top: 9px;

  &__title {
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
    text-align: center;
    color: #f5f5f5;
    margin-bottom: 25px;
  }

  &__subtitle {
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    text-align: center;
    color: #f5f5f5;
  }

  &__btn {
    border: 1px solid #1f334d;
    border-radius: 3px;
    margin: 25px auto;
    display: flex;
    width: 175px;
  }

  &__subbtn {
    border: 1px solid #1f334d;
    border-radius: 3px;
    margin: 6px auto;
    display: flex;
    width: 159px;
  }

  &__column {
    width: 358px;
    margin-top: 56px;
  }

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:nth-child(2) {
      margin: 24px 0 9px;
    }
  }

  &__text,
  &__minus,
  &__plus,
  &__current {
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    text-align: center;
    color: #9fb1cc;

    &_disable {
      pointer-events: none;
    }
  }

  &__counter {
    display: flex;
    align-items: center;
  }

  &__current {
    border: 1px solid #1f334d;
    border-radius: 2px;
    padding: 8px 12px;
    width: 41px;
    margin: 0 8px;
  }

  &__send {
    width: 125px;
    margin: 82px auto 0;
    .v-btn__btn {
      width: 100%;
      font-weight: 700;
      font-size: 16px;
    }
  }

  .pop-up {
    &__content {
      width: 698px;
      height: 698px;
    }
  }

  .v-btn__btn {
    width: fit-content;
    padding: 12px 22px;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
  }

  .inp {
    width: 136px;
    height: 33px;
  }
}
</style>
