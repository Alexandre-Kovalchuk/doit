<script setup>
import BaseSvg from '@/components/Base/BaseSvg.vue';
import { showPopUp } from '@/composable/useShowPopUp.js';

const closePopUp = () => {
  showPopUp();
};
</script>

<template>
  <div class="pop-up">
    <div class="pop-up__content">
      <div class="pop-up__btns">
        <button class="pop-up__btns-back"><BaseSvg id="arrow" /></button>
        <button class="pop-up__btns-close" @click="closePopUp">
          <BaseSvg id="close" />
        </button>
      </div>

      <div class="pop-up__column">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.pop-up {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    max-width: 698px;
    width: 100%;
    height: 698px;
    background: #0b1729;
    padding: 16px 16px 62px;
  }

  &__btns {
    display: flex;
    justify-content: space-between;

    &-back,
    &-close {
      width: 32px;
      height: 32px;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  &__column {
    display: flex;
    justify-content: center;
    margin-top: 16px;
  }
}
</style>
