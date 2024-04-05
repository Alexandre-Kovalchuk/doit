<script setup>
import BaseSvg from '@/components/Base/BaseSvg.vue';
import { ref } from 'vue';
</script>

<template>
  <div class="pop-up">
    <div class="pop-up__content">
      <div class="pop-up__btns">
        <button class="pop-up__btns-back"><BaseSvg :id="'arrow'" /></button>
        <button class="pop-up__btns-close">
          <BaseSvg :id="'close'" />
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
  position: absolute;
  top: 11%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.9);
  visibility: hidden;
  z-index: -1;
  max-width: 698px;
  width: 100%;
  height: 698px;
  background: #0b1729;
  padding: 16px 16px 62px;

  &_active {
    visibility: visible;
    z-index: 20;
  }

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
