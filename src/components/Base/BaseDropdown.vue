<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import BaseSvg from '@/components/Base/BaseSvg.vue';

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  modelValue: {
    default: null,
  },

  modify: {
    type: String,
    default: '',
  },

  title: {
    type: String,
    default: '',
  },

  label: {
    type: String,
    default: '',
  },
});
const emit = defineEmits(['update:modelValue']);
const dropDown = ref(null);
const selectedOption = ref(null);
const isDropDownVisible = ref(false);

const mappedSelectionOption = computed(() => {
  return selectedOption.value?.name || selectedOption.value || props.label;
});

const toggleOptionSelect = (option) => {
  selectedOption.value = option;
  emit('update:modelValue', option);

  setTimeout(() => {
    isDropDownVisible.value = false;
  }, 300);
};

const closeDropDown = (element) => {
  if (!dropDown.value.contains(element.target)) {
    isDropDownVisible.value = false;
  }
};

onMounted(() => {
  window.addEventListener('click', closeDropDown);
});

onBeforeUnmount(() => {
  window.removeEventListener('click', closeDropDown);
});
</script>

<template>
  <div class="dropdown" ref="dropDown">
    <h3 class="dropdown__title" v-if="title !== ''">{{ title }}</h3>
    <div
      :class="[
        'dropdown__selected',
        modify ? `dropdown__selected-${modify}` : '',
        { dropdown__selected_act: isDropDownVisible },
      ]"
      @click="isDropDownVisible = true"
    >
      <div :class="['dropdown__arrow', { dropdown__arrow_act: isDropDownVisible }]">
        <BaseSvg id="arrow-down" />
      </div>
      {{ mappedSelectionOption }}
    </div>
    <transition name="slide-fade">
      <ul v-if="isDropDownVisible" class="dropdown__options">
        <li
          v-for="(option, index) in props.options"
          :key="index"
          class="dropdown__option"
          @click="toggleOptionSelect(option)"
        >
          {{ option.name || option }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<style lang="scss">
.dropdown {
  cursor: pointer;
  width: 100%;
  margin: 0 auto;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: #627ca3;
  position: relative;

  &__title {
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    color: #cccdcd;
    margin-bottom: 12px;
  }

  &__selected {
    padding: 12px 16px;
    border: 1px solid #1c2f4d;
    border-radius: 2px;
    margin-bottom: 4px;
    //position: relative;

    &-default {
      border: 2px solid #20252b;
      border-radius: 4px;
      text-align: left;
      color: #cccdcd;
      line-height: 100%;
      font-weight: 400;
      padding: 10px 16px;
    }

    &_act {
      background: #16263d;
      border: 1px solid #1472ff;
    }
  }

  &__arrow {
    position: absolute;
    right: 16px;
    transition: 0.3s ease-in;

    svg {
      width: 14px;
      height: 7px;
    }

    &_act {
      transform: rotate(-180deg);
    }
  }

  &__options {
    display: block;
    border: 1px solid #1472ff;
    border-radius: 2px;
    width: 100%;
    max-height: 250px;
    height: auto;
    overflow: auto;
    position: absolute;
    background: #0f1215;
    z-index: 30;

    &::-webkit-scrollbar {
      width: 8px;
      background: #121f33;
      border-radius: 2px;
      height: 208px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 2px 0 0 2px;
      background: #627ca3;
      height: 24px;
    }
  }

  &__option {
    padding: 12px 16px;
    color: #fff;

    &:hover {
      background: #1472ff;
    }

    &:last-of-type {
      border-bottom-left-radius: 2px;
      border-bottom-right-radius: 2px;
    }
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-4px);
  opacity: 0;
}
</style>
