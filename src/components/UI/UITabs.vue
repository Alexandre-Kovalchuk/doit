<script setup>
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
    <div class="tabs__row">
      <h2 class="tabs__title">{{ label }}</h2>

      <div class="tabs__btns">
        <button
          v-for="tab in names"
          :key="tab.name"
          :class="['tabs__btns-item', { 'tabs__btns-item_act': tab.name === selectedTab }]"
          @click="clickOnTabs(tab.name)"
        >
          {{ tab.label }}
        </button>
      </div>
    </div>
    <div class="tabs__swiper">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.tabs {
  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-weight: 700;
    font-size: 44px;
    line-height: 100%;
    color: #f5f5f5;
  }

  &__btns {
    display: flex;
    justify-content: space-between;
    max-width: 538px;
    width: 100%;

    &-item {
      font-weight: 500;
      font-size: 18px;
      line-height: 133%;
      color: #a0a5ad;
      padding: 16px;
      background: #14191f;

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
}
</style>
