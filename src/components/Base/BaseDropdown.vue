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

const toggleOptionSelect = async (option) => {
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

    <div class="dropdown__selected" @click="isDropDownVisible = true">
      <p class="dropdown__current">{{ mappedSelectionOption }}</p>

      <div :class="['dropdown__arrow', { dropdown__arrow_act: isDropDownVisible }]">
        <BaseSvg id="arrow-down" />
      </div>
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

    <p class="dropdown__error">{{ error }}</p>
  </div>
</template>

<style lang="scss">
.dropdown {
  cursor: pointer;
  width: 100%;
  margin: 0 auto;
  position: relative;
  border: 1px solid #1c2f4d;
  border-radius: 2px;
  padding: 12px 16px;

  &__title {
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    color: #cccdcd;
    margin-bottom: 12px;
  }

  &__selected {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &_act {
      background: #16263d;
      border: 1px solid #1472ff;
    }
  }

  &__current {
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: #627ca3;
  }

  &__arrow {
    width: 22px;
    height: 13px;
    transition: 0.3s ease-in;

    &_act {
      transform: rotate(-180deg);
    }

    svg {
      width: 100%;
      height: 100%;
      fill: #f5f5f5;
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
    top: 100%;
    background: #0f1215;
    z-index: 30;
    margin-top: 4px;

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
