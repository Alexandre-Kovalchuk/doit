<script setup>
import { ref } from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  arr: {
    type: Array,
    required: true,
  },
});

const selectedRadio = ref(-1);
const emit = defineEmits(['changeRadio']);

const handleRadio = (name, index) => {
  emit('changeRadio', name);
  selectedRadio.value = index;
};
</script>

<template>
  <div class="radio">
    <h3 v-if="label !== ''" class="radio__title">{{ label }}</h3>
    <button
      :class="['radio__btn', { radio__btn_act: selectedRadio === index }]"
      v-for="(item, index) in arr"
      :key="index"
      @click="handleRadio(item.name, index)"
    >
      <span></span>
      {{ item.name || item }}
    </button>
  </div>
</template>

<style lang="scss">
.radio {
  &__title {
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    color: #cccdcd;
    margin-bottom: 11px;
  }
  &__btn {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: #cccdcd;
    margin-bottom: 11px;

    span {
      border: 2px solid #20252b;
      width: 20px;
      height: 20px;
      position: relative;
      margin-right: 8px;
      border-radius: 50%;
    }

    &_act {
      span {
        &:after {
          content: '';
          width: 8px;
          height: 8px;
          background: #0a68f5;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
        }
      }
    }

    &:last-child {
      margin: 0;
    }
  }
}
</style>
