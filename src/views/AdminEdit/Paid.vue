<script setup>
import BaseInput from '@/components/Base/BaseInput.vue';
</script>

<template>
  <div class="paid">
    <BaseInput placeholder="" name="paid" label="Register cost" />
  </div>
</template>

<style lang="scss">
.paid {
  margin: 0 14px;

  .inp {
    display: flex;
    align-items: center;

    &__label {
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      color: #cccdcd;
      margin: 0 13px 0 0;
    }

    &__text {
      border: 2px solid #20252b;
      border-radius: 4px;
      width: 214px;
      height: 25px;
    }
  }
}
</style>
