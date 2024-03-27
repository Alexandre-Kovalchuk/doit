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
</script>

<template>
  <div class="v-btn">
    <button :class="['v-btn__btn', `v-btn__btn_${color}`]">{{ label }}</button>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';
.v-btn {
  &__btn {
    font-weight: 700;
    font-size: 16px;
    color: #f5f5f5;
    padding: 12px 30px;
    @include media-breakpoint-down(xs) {
      padding: 16px 0;
      width: 100%;
    }
    &_primary {
      background: #1a222d;
    }

    &_blue {
      background: linear-gradient(180deg, #2788f6 0%, #0960e0 100%);
    }
  }
}
</style>
