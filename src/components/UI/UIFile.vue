<script setup>
import BaseInput from '@/components/Base/BaseInput.vue';
import { ref } from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
});

const fileName = ref('banner url');
const updateFileName = (e) => {
  const selectedFile = e.target.files[0];
  selectedFile ? (fileName.value = selectedFile.name) : fileName.value;
};
</script>

<template>
  <div class="file">
    <h3 v-if="label !== ''" class="file__title">{{ label }}</h3>

    <div class="file__row">
      <p class="file__name">{{ fileName }}</p>

      <BaseInput
        placeholder=""
        name="file"
        label="upload"
        type="file"
        modify="file"
        v-model="file"
        @change="updateFileName"
      />
    </div>
  </div>
</template>

<style lang="scss">
.file {
  &__title {
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    color: #cccdcd;
    margin-bottom: 12px;
  }

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .inp {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      margin: 0;
      width: fit-content;

      &__label_file {
        padding: 16px 44px;
        background: #1a222d;
        font-weight: 700;
        font-size: 10px;
        text-align: center;
        margin: 0 0 0 16px;
        width: 157px;
      }

      &__text_file {
        display: none;
      }
    }
  }

  &__name {
    border: 2px solid #20252b;
    border-radius: 4px;
    max-width: 339px;
    width: 100%;
    height: 40px;
    font-weight: 400;
    font-size: 16px;
    color: #3c434d;
    padding: 7px 0 0 14px;
  }
}
</style>
