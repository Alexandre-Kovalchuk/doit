<script setup>
import BaseInput from '@/components/Base/BaseInput.vue';

const props = defineProps({
  arr: {
    type: Array,
    required: true,
  },
});

const title = (index) => {
  switch (index) {
    case 0:
      return 'Game mode';

    case 1:
      return 'Status';

    case 2:
      return 'Platform';

    case 3:
      return 'Server region';
  }
};
</script>

<template>
  <div class="filter">
    <div class="filter__column">
      <h2 class="filter__title">{{ title(index) }}</h2>
      <div class="filter__item">
        <div class="filter__row" v-for="item in arr">
          <BaseInput placeholder="" name="checbox" type="checkbox" :label="item.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.filter {
  &__title {
    font-weight: 500;
    font-size: 24px;
    line-height: 133%;
    margin-bottom: 12px;
  }

  &__column {
    //display: flex;
    //flex-direction: column;
  }

  &__item {
    //display: flex;
  }

  .inp {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    &__label {
      display: inline-block;
      margin: 0;
    }
  }
}
</style>
