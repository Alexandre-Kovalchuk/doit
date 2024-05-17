<script setup>
import BaseSvg from '@/components/Base/BaseSvg.vue';

const svgIcon = ['knight', 'trophy', 'growth', 'network', 'target', 'megaphone'];
</script>

<template>
  <aside class="aside">
    <ul class="aside__list">
      <li v-for="(item, index) in svgIcon" :key="index" class="aside__list-item">
        <BaseSvg :id="item" />
      </li>
    </ul>
  </aside>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';

.aside {
  width: 114px;
  position: fixed;
  left: 0;
  z-index: 60;
  height: 100vh;
  border-right: 2px solid #20252b;
  padding: 229px 40px 234px;
  background-color: #0f1215;

  @include media-breakpoint-down(l) {
    padding: 229px 30px 234px;
    width: 100px;
  }

  @include media-breakpoint-down(md) {
    bottom: 0;
    width: 100%;
    height: 55px;
    border-right: none;
    border-top: 2px solid #20252b;
    padding: 16px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    @include media-breakpoint-down(md) {
      flex-direction: revert;
    }

    &-item {
      width: 32px;
      height: 32px;

      @include media-breakpoint-down(md) {
        width: 32px;
        height: 22px;
      }

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
