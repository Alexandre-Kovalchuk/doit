<script setup>
import BaseCheckbox from '@/components/Base/BaseCheckbox.vue';
import UIBtn from '@/components/UI/UIBtn.vue';
import BaseInput from '@/components/Base/BaseInput.vue';

const account = [
  { label: 'PSN Account', name: 'PSN' },
  { label: 'Xbox Account', name: 'Xbox' },
  { label: 'Steam Account', name: 'Steam' },
  { label: 'League of Legends Account', name: 'League' },
  { label: 'Blizzard Account', name: 'Blizzard' },
  { label: 'Steam Account', name: 'Steam' },
];
</script>

<template>
  <div class="additional">
    <div class="additional__column">
      <BaseCheckbox
        v-for="(item, index) in account"
        :key="index"
        :label="item.label"
        :name="item.name"
      />
    </div>
    <div class="additional__column additional__column_sub">
      <div class="additional__row">
        <p>Country:</p>
        <UIBtn label="Choose country" />
      </div>

      <div class="additional__row">
        <BaseInput placeholder="" name="" label="Min Age:" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.additional {
  display: flex;
  margin: 0 14px;

  &__column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 183px;

    &_sub {
      height: 75px;
      margin-left: 20px;
    }
  }

  &__row {
    display: flex;
    align-items: center;

    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      color: #cccdcd;
      margin-right: 8px;
    }

    .v-btn {
      width: 145px;
      height: 40px;
    }

    .inp {
      display: flex;
      align-items: center;

      &__label {
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        color: #cccdcd;
        margin: 0 8px 0 0;
      }

      &__text {
        width: 176px;
        height: 25px;
      }
    }
  }
}
</style>
