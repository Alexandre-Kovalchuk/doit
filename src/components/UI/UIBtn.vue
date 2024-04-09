<script setup>
const props = defineProps({
  label: {
    type: String,
    default: 'Button',
  },
  color: {
    type: String,
    default: 'primary',
  },
});

const emit = defineEmits(['click']);
const clickOnBtn = () => {
  emit('click');
};
</script>

<template>
  <div class="v-btn">
    <button :class="['v-btn__btn', `v-btn__btn_${color}`]" @click="clickOnBtn">
      {{ label }}
    </button>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';
.v-btn {
  height: 100%;
  width: 100%;

  &__btn {
    font-weight: 700;
    font-size: 16px;
    color: #f5f5f5;
    width: 100%;
    height: 100%;

    &_primary {
      background: #1a222d;
    }

    &_blue {
      background: linear-gradient(180deg, #2788f6 0%, #0960e0 100%);
    }

    &_yellow {
      background: linear-gradient(180deg, #ffd321 0%, #9c6c0d 100%);
    }

    &_green {
      background: linear-gradient(180deg, #46f48c 0%, #2b9d37 100%);
    }

    &_panel {
      background: transparent;
      font-weight: 700;
      font-size: 22px;
      line-height: 100%;
      border: 2px solid #20252b;

      &:hover {
        background: #001f3e;
      }
    }
  }
}
</style>
