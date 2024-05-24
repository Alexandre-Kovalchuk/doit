<script setup>
import { lobbyData } from '@/components/Data/LobbyData.js';
import BaseImage from '@/components/Base/BaseImage.vue';
import BaseSvg from '@/components/Base/BaseSvg.vue';
import UIBtn from '@/components/UI/UIBtn.vue';
import { ref } from 'vue';

const { firstTeam, secondTeam, titleTeam, details } = lobbyData();

const counterFirst = ref(0);
const counterSecond = ref(0);
</script>

<template>
  <div class="lobby">
    <div class="lobby__column">
      <div class="lobby__side">
        <h2 class="lobby__title">Team 1</h2>

        <div class="lobby__side-item" v-for="(item, index) in firstTeam" :key="index">
          <BaseImage :srcset="item.webp" :src="item.png" alt="avatar" />

          <div class="lobby__side-block">
            <p class="lobby__side-name">{{ item.name }}</p>
            <p class="lobby__side-nickname">{{ item.nickname }}</p>
          </div>

          <div class="lobby__side-svg" v-if="item.svg">
            <BaseSvg :id="item.svg" />
          </div>
        </div>
      </div>

      <div class="lobby__middle">
        <div class="lobby__middle-details">
          <h3 class="lobby__middle-title">lobby details</h3>

          <div class="lobby__middle-item" v-for="(item, index) in details" :key="index">
            <p class="lobby__middle-txt">{{ item.txtName }}</p>
            <p class="lobby__middle-txt">{{ item.name }}</p>
            <p class="lobby__middle-txt">{{ item.txtPsd }}</p>
            <p class="lobby__middle-txt">{{ item.psd }}</p>
            <p class="lobby__middle-txt">{{ item.txtIp }}</p>
            <p class="lobby__middle-txt">{{ item.ip }}</p>
          </div>

          <div class="lobby__middle-btn">
            <UIBtn label="CONNECT" color="blue" />
          </div>
        </div>

        <div class="lobby__middle-report">
          <h3 class="lobby__middle-subtitle">Report scores</h3>

          <div class="lobby__middle-row">
            <div class="lobby__middle-side">
              <h4 class="lobby__middle-name">Team 1</h4>

              <div class="lobby__middle-subrow">
                <p
                  :class="[
                    'lobby__middle-minus',
                    { 'lobby__middle-minus_disable': counterFirst === 0 },
                  ]"
                  @click="counterFirst--"
                >
                  -
                </p>

                <span class="lobby__middle-counter">{{ counterFirst }}</span>

                <p class="lobby__middle-plus" @click="counterFirst++">+</p>
              </div>
            </div>

            <div class="lobby__middle-side">
              <h4 class="lobby__middle-name">Team 2</h4>
              <div class="lobby__middle-subrow">
                <p
                  :class="[
                    'lobby__middle-minus',
                    { 'lobby__middle-minus_disable': counterSecond === 0 },
                  ]"
                  @click="counterSecond--"
                >
                  -
                </p>

                <span class="lobby__middle-counter">{{ counterSecond }}</span>

                <p class="lobby__middle-plus" @click="counterSecond++">+</p>
              </div>
            </div>
          </div>

          <h3 class="lobby__middle-subtitle lobby__middle-subtitle_sub">Verify the winer</h3>

          <div class="lobby__middle-subbtn">
            <UIBtn label="TEAM 1" />
            <UIBtn label="Tie" />
            <UIBtn label="TEAM 2" />
          </div>
        </div>

        <div class="lobby__middle-submit">
          <UIBtn label="Submit scores" color="blue" />
        </div>
      </div>

      <div class="lobby__side">
        <h2 class="lobby__title">Team 2</h2>
        <div
          class="lobby__side-item lobby__side-item_right"
          v-for="(item, index) in secondTeam"
          :key="index"
        >
          <BaseImage :srcset="item.webp" :src="item.png" alt="avatar" />

          <div class="lobby__side-block lobby__side-block_right">
            <p class="lobby__side-name lobby__side-name_right">{{ item.name }}</p>
            <p class="lobby__side-nickname lobby__side-nickname_right">{{ item.nickname }}</p>
          </div>

          <div class="lobby__side-svg lobby__side-svg_right" v-if="item.svg">
            <BaseSvg :id="item.svg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';

.lobby {
  border: 2px solid #20252b;
  padding: 7px 31px 85px 35px;

  @include media-breakpoint-down(md) {
    padding: 7px 15px 85px 15px;
  }

  @include media-breakpoint-down(md) {
    border: none;
  }

  &__title {
    font-weight: 700;
    font-size: 32px;
    line-height: 175%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    text-align: center;
    color: #fff;
  }

  &__column {
    display: flex;
    justify-content: space-between;

    @include media-breakpoint-down(sm) {
      flex-direction: column;
    }
  }

  &__side-item {
    display: flex;
    border: 2px solid #20252b;
    width: 239px;
    height: 60px;
    margin-bottom: 13px;
    padding: 16px 14px;
    background: #151a1f;

    @include media-breakpoint-down(sm) {
      width: 100%;
    }

    &_right {
      flex-direction: row-reverse;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__side-name {
    font-weight: 700;
    font-size: 14px;
    line-height: 100%;
    color: #e6e8eb;

    &_right {
      text-align: right;
    }
  }

  &__side-block {
    margin-left: 10px;

    &_right {
      margin: 0 10px 0 0;
    }
  }

  &__side-nickname {
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    color: #9fb1cc;

    &_right {
      text-align: right;
    }
  }

  &__side-svg {
    width: 18px;
    height: 18px;
    margin-left: auto;

    svg {
      width: 100%;
      height: 100%;
    }

    &_right {
      margin: 0 auto 0 0;
    }
  }

  &__middle {
    margin-top: 56px;

    @include media-breakpoint-down(sm) {
      margin: 20px auto;
    }
  }

  &__middle-details {
    border: 1px solid #1c2025;
    border-radius: 2px 2px 3px 3px;
    width: 205px;
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  &__middle-item {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 12px;

    padding: 0 11px;
  }

  &__middle-title {
    font-weight: 700;
    font-size: 13px;
    text-transform: uppercase;
    text-align: center;
    margin-top: 11px;
  }

  &__middle-txt {
    font-weight: 400;
    font-size: 9px;
    line-height: 100%;
    color: #9fb1cc;

    &:nth-child(5),
    &:nth-child(6) {
      font-size: 11px;
    }
  }

  &__middle-btn {
    height: 38px;

    .v-btn__btn {
      font-size: 10px;
    }
  }

  &__middle-report {
    border: 1px solid #1c2025;
    border-radius: 2px 2px 3px 3px;
    width: 200px;
    height: 185px;
  }

  &__middle-subtitle {
    font-weight: 700;
    font-size: 9px;
    text-transform: uppercase;
    color: #f5f5f5;
    text-align: center;
    margin: 8px 0 20px;

    &_sub {
      width: 80px;
      margin: 23px auto 17px;
      font-size: 10px;
    }
  }

  &__middle-row {
    display: flex;
    justify-content: space-between;
  }

  &__middle-name {
    font-weight: 500;
    font-size: 10px;
    line-height: 100%;
    color: #9fb1cc;
    text-align: center;
    margin-bottom: 11px;
  }

  &__middle-subrow {
    display: flex;
    align-items: center;
    padding: 0 15px;
  }

  &__middle-counter {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    text-align: center;
    border: 1px solid #1c2025;
    border-radius: 2px;
    width: 35px;
    height: 24px;
    background: #151a1f;
    color: #9fb1cc;
  }

  &__middle-minus,
  &__middle-plus {
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    color: #67707a;
    cursor: pointer;

    &_disable {
      pointer-events: none;
    }
  }

  &__middle-minus {
    margin-right: 5px;
  }

  &__middle-plus {
    margin-left: 5px;
  }

  &__middle-subbtn {
    display: flex;
    height: 23px;
    margin: 0 6px;

    .v-btn__btn {
      font-weight: 400;
      font-size: 9px;
      line-height: 100%;
      color: #0b1729;
    }
  }

  &__middle-submit {
    border-radius: 0 0 2px 2px;
    width: 205px;
    height: 44px;
    margin-top: 15px;
  }
}
</style>
