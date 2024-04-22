<script setup>
import BaseSvg from '@/components/Base/BaseSvg.vue';

const props = defineProps({
  label: {
    type: String,
    default: 'Title',
  },
  names: {
    type: Array,
    required: true,
  },
  selectedTab: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['changeTab']);

const clickOnTabs = (nameTab) => {
  emit('changeTab', nameTab);
};
</script>

<template>
  <div class="tabs">
    <div class="container">
      <div class="tabs__row">
        <h2 class="tabs__title">
          {{ label }}
          <span v-if="label === 'Streams'"> <BaseSvg :id="'streams'" /> </span>
        </h2>

        <div class="tabs__btns">
          <button
            v-for="(tab, index) in names"
            :key="index"
            :class="['tabs__btns-item', { 'tabs__btns-item_act': tab.name === selectedTab }]"
            @click="clickOnTabs(tab.name)"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>
      <div class="tabs__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';

.tabs {
  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 23px;

    @include media-breakpoint-down(md) {
      flex-direction: column;
      align-items: flex-start;
      margin: 0;
    }
  }

  &__title {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 44px;
    line-height: 100%;
    color: #f5f5f5;

    span {
      svg {
        width: 32px;
        height: 32px;
        margin-left: 16px;
      }
    }

    @include media-breakpoint-down(sm) {
      font-size: 36px;
    }

    @include media-breakpoint-down(xs) {
      font-size: 30px;
    }
  }

  &__btns {
    display: flex;
    justify-content: space-between;
    max-width: 538px;
    width: 100%;

    @include media-breakpoint-down(md) {
      margin-top: 30px;
    }

    @include media-breakpoint-down(xs) {
      justify-content: flex-start;
      overflow: auto;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    &-item {
      font-weight: 500;
      font-size: 18px;
      line-height: 133%;
      color: #a0a5ad;
      padding: 16px;
      background: #14191f;
      white-space: nowrap;

      @include media-breakpoint-down(sm) {
        font-size: 16px;
        padding: 10px 16px;
      }

      @include media-breakpoint-down(xs) {
        margin-right: 10px;
      }

      &:hover {
        color: #0f1215;
        background: #d8dfeb;
      }

      &_act {
        color: #0f1215;
        background: #d8dfeb;
      }
    }
  }

  &__content {
    margin-left: 23px;

    @include media-breakpoint-down(md) {
      margin-left: 0;
    }
  }
}
</style>
