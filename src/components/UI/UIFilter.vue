<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: false,
  },
  arr: {
    type: Array,
    required: true,
  },
  selectedBtn: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(['click']);

const handleBtn = (name) => {
  emits('click', name);
};
</script>

<template>
  <div class="filter">
    <div class="filter__column">
      <h2 class="filter__title">{{ label }}</h2>

      <div class="filter__btns">
        <button
          :class="['filter__btn', { filter__btn_act: item.name === selectedBtn }]"
          v-for="(item, index) in arr"
          :key="index"
          @click="handleBtn(item.name)"
        >
          <span></span>{{ item.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';
.filter {
  &__title {
    font-weight: 500;
    font-size: 24px;
    line-height: 133%;
    margin-bottom: 12px;
  }

  &__btn {
    color: #67707a;
    min-width: 54px;
    height: 24px;
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-transform: uppercase;

    span {
      border: 1px solid #67707a;
      width: 16px;
      height: 16px;
      position: relative;
      margin-right: 8px;
    }

    &_act {
      color: #0a68f5;
      span {
        border: 1px solid #0a68f5;
        &:after {
          content: '';
          width: 8px;
          height: 8px;
          background: #0a68f5;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }

    @include media-breakpoint-down(sm) {
      font-size: 14px;
      line-height: 171%;
    }
  }
}
</style>
