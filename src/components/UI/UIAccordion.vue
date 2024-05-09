<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['openedAccordion']);

const handleClick = () => {
  emit('openedAccordion');
};
</script>

<template>
  <div class="accordion" @click="handleClick">
    <div class="accordion__row">
      <h2 class="accordion__title">{{ name }}</h2>
      <p class="accordion__plus">{{ isActive ? '-' : '+' }}</p>
    </div>

    <transition name="accordion">
      <div class="accordion__content" v-if="isActive" @click.stop>
        <slot />
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
.accordion {
  padding: 30px 30px 20px;
  width: 602px;
  border: 1px solid #20252b;
  margin-bottom: 12px;
  overflow: hidden;
  //position: relative;

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    //margin-bottom: 44px;
    cursor: pointer;
  }

  &__title {
    font-weight: 500;
    font-size: 22px;
    line-height: 100%;
    text-transform: uppercase;
    color: #cccdcd;
  }

  &__plus {
    font-weight: 500;
    font-size: 22px;
    line-height: 100%;
    text-align: center;
    color: #cccdcd;
    transition: 0.3s;
  }

  &__content {
    padding: 44px 0 0;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}

.accordion-enter-from {
  max-height: 0;
}

.accordion-enter-to {
  max-height: 1000px;
}

.accordion-enter-active {
  transition: max-height 0.3s;
}

.accordion-leave-from {
  max-height: 1000px;
}

.accordion-leave-to {
  max-height: 0;
}

.accordion-leave-active {
  transition: max-height 0.3s;
}
</style>
