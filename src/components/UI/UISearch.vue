<script setup>
import BaseImage from '@/components/Base/BaseImage.vue';
import UIBtn from '@/components/UI/UIBtn.vue';
import BaseInput from '@/components/Base/BaseInput.vue';
import BaseSvg from '@/components/Base/BaseSvg.vue';

const icon = [
  {
    webp: new URL('../../assets/img/admin/SC.webp', import.meta.url),
    png: new URL('../../assets/img/admin/SC.png', import.meta.url),
  },
  {
    webp: new URL('../../assets/img/admin/Fortnite.webp', import.meta.url),
    png: new URL('../../assets/img/admin/Fortnite.png', import.meta.url),
  },
];

const props = defineProps({
  nameBtn: {
    type: Array,
    required: true,
  },
  value: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:value']);
const updateVal = (e) => {
  emit('update:value', e.target.value);
};
</script>

<template>
  <div class="search">
    <div class="search__row">
      <div class="search__icon">
        <BaseImage :srcset="icon[0].webp" :src="icon[0].png" alt="icon" />
        <BaseImage :srcset="icon[1].webp" :src="icon[1].png" alt="icon" />
        <BaseImage
          :srcset="icon[0].webp"
          :src="icon[0].png"
          alt="icon"
          v-for="index in 4"
          :key="index"
        />
      </div>

      <div class="search__inp">
        <BaseInput
          placeholder="Search by name, prize, signed, etc."
          name="name"
          :value="value"
          @input="updateVal"
        />

        <div class="search__svg">
          <BaseSvg id="search-icon" />
        </div>
      </div>
    </div>

    <div class="search__btn">
      <!--      <UIBtn v-for="(item, index) in nameBtn" :key="index" :label="item.label || item" />-->
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 46px;

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 640px;
  }

  &__icon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 304px;
  }

  &__inp {
    position: relative;
    width: 244px;
  }

  .inp {
    height: 28px;
    width: 100%;

    &__text {
      border-top: transparent;
      border-left: transparent;
      border-right: transparent;
      border-bottom: 2px solid #20252b;
      border-radius: 0;
      padding: 0 30px 0 5px;
      &::placeholder {
        font-weight: 400;
        font-size: 12px;
        line-height: 100%;
        color: #434951;
      }
    }
  }

  &__svg {
    width: 24px;
    height: 24px;
    position: absolute;
    right: 0;
    top: 0;
    svg {
      width: 100%;
      height: 100%;
      fill: #20252b;

      use {
        width: 100%;
        height: 100%;
      }
    }
  }

  &__btn {
    width: fit-content;
    display: flex;

    .v-btn {
      width: fit-content;
      height: fit-content;
      margin-right: 16px;

      &:last-child {
        margin-right: 0;
      }

      &__btn {
        padding: 16px 44px;
      }
    }
  }
}
</style>
