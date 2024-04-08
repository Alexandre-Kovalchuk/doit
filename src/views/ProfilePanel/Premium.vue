<script setup>
import UIPremium from '@/components/UI/UIPremium.vue';
</script>

<template>
  <div class="panel-premium">
    <h1 class="panel-premium__title">Premium</h1>
    <div class="panel-premium__slide"><UIPremium /></div>
  </div>
</template>

<style lang="scss">
.panel-premium {
  &__title {
    font-weight: 700;
    font-size: 48px;
    line-height: 137%;
    text-align: center;
    margin-bottom: 73px;
  }

  &__slide {
    margin-left: 69px;
  }
}
</style>
