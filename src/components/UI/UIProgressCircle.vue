<script setup>
const props = defineProps({
  percent: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    default: 'primary',
  },
});
</script>

<template>
  <div class="progress-circle">
    <span class="progress-circle__percent" :style="[{ color: `${color}` }]">{{ percent }}</span>
    <svg width="70" height="70" viewBox="0 0 120 120" class="progress-circle-svg">
      <circle cx="60" cy="60" r="54" fill="none" :stroke="'#2B353F'" stroke-width="2" />
      <circle
        class="progress-circle__line"
        :style="[{ 'stroke-dashoffset': `calc(100 - ${percent})` }]"
        cx="60"
        cy="60"
        r="54"
        fill="none"
        :stroke="`${color}`"
        stroke-width="4"
        pathLength="100"
      />
    </svg>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';
.progress-circle {
  position: relative;
  margin-bottom: 20px;
  width: 70px;
  height: 70px;

  &-svg {
    transform: rotate(-90deg);
  }

  @include media-breakpoint-down(xs) {
    display: none;
  }

  &__percent {
    position: absolute;
    left: 0;
    width: 100%;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 18px;
  }

  &__line {
    stroke-dasharray: 100;
    transition: 0.5s;
  }
}
</style>
