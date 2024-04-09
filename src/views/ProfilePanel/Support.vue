<script setup>
import BaseInput from '@/components/Base/BaseInput.vue';
import BaseDropdown from '@/components/Base/BaseDropdown.vue';
import { ref } from 'vue';
import UIBtn from '@/components/UI/UIBtn.vue';

const optionsSubject = ref([
  {
    name: 'Subject',
  },
]);
</script>

<template>
  <div class="support">
    <h1 class="support__title">Support</h1>
    <div class="support__column">
      <BaseInput placeholder="Name" name="name" />

      <BaseInput placeholder="Topic" name="name" />

      <BaseDropdown :options="optionsSubject" modify="default" />

      <textarea class="support__textarea" placeholder="Your problem..."></textarea>

      <UIBtn label="Submit" color="blue" />
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';

.support {
  margin-left: 20px;
  margin-bottom: 100px;
  @include media-breakpoint-down(xs) {
    margin-left: 0;
  }
  &__title {
    font-weight: 700;
    font-size: 48px;
    line-height: 137%;
    text-align: center;
    margin-bottom: 42px;

    @include media-breakpoint-down(xs) {
      font-size: 40px;
    }
  }

  &__column {
    max-width: 512px;
    width: 100%;
    margin: 0 auto;

    .inp {
      &:nth-child(2) {
        margin: 9px 0 13px;
      }
    }

    .v-btn {
      margin: 25px auto 0;
      width: 254px;
      height: 44px;
    }
  }

  &__textarea {
    margin-top: 10px;
    width: 100%;
    resize: none;
    border-radius: 4px;
    border: 2px solid #20252b;
    background: #0f1215;
    aspect-ratio: 1 / 0.635;
    padding: 26px 16px;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    line-height: 100%;

    &::placeholder {
      color: #cccdcd66;
    }
  }
}
</style>
