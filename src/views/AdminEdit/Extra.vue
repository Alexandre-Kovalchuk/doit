<!--<script setup>-->
<!--import BaseInput from '@/components/Base/BaseInput.vue';-->
<!--import BaseCheckbox from '@/components/Base/BaseCheckbox.vue';-->
<!--const nameInp = ['Lobby', 'Mode', 'VETO'];-->
<!--const urlInp = [-->
<!--  'Discord URL',-->
<!--  'Facebook URL',-->
<!--  'Twitter URL',-->
<!--  'VK URL',-->
<!--  'Twitch URL',-->
<!--  'Youtube URL',-->
<!--];-->
<!--const region = [-->
<!--  { label: 'europe nordic & east ', name: 'nordic' },-->
<!--  { label: 'Europe West', name: 'west' },-->
<!--  { label: 'Australia & Oceania', name: 'australia' },-->
<!--  { label: 'china', name: 'china' },-->
<!--  { label: 'Asia', name: 'asia' },-->
<!--  { label: 'Amercia', name: 'amercia' },-->
<!--];-->
<!--const platform = [-->
<!--  { label: 'PC', name: 'ps' },-->
<!--  { label: 'Xbox one', name: 'xbox' },-->
<!--  { label: 'ps4', name: 'ps4' },-->
<!--  { label: 'nintendo switch', name: 'nintendo' },-->
<!--  { label: 'ps5', name: 'ps5' },-->
<!--  { label: 'Xbox Series X', name: 'xbox-x' },-->
<!--];-->
<!--</script>-->

<!--<template>-->
<!--  <div class="extra">-->
<!--    <div class="extra__column-inp">-->
<!--      <BaseInput-->
<!--        v-for="(item, index) in nameInp"-->
<!--        :key="index"-->
<!--        placeholder=""-->
<!--        :name="item"-->
<!--        :label="item"-->
<!--      />-->
<!--    </div>-->

<!--    <div class="extra__column-check">-->
<!--      <div class="extra__column-region">-->
<!--        <h2 class="extra__title">Server region</h2>-->
<!--        <BaseCheckbox-->
<!--          v-for="(item, index) in region"-->
<!--          :key="index"-->
<!--          :label="item.label"-->
<!--          :name="item.name"-->
<!--        />-->
<!--      </div>-->
<!--      <div class="extra__column-platform">-->
<!--        <h2 class="extra__title">Platform</h2>-->
<!--        <BaseCheckbox-->
<!--          v-for="(item, index) in platform"-->
<!--          :key="index"-->
<!--          :label="item.label"-->
<!--          :name="item.name"-->
<!--        />-->
<!--      </div>-->
<!--    </div>-->

<!--    <div class="extra__column-inp extra__column-inp_sub">-->
<!--      <BaseInput-->
<!--        v-for="(item, index) in urlInp"-->
<!--        :key="index"-->
<!--        placeholder=""-->
<!--        :name="item"-->
<!--        :label="item"-->
<!--      />-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<style lang="scss">-->
<!--.extra {-->
<!--  margin: 0 14px;-->

<!--  &__column-inp {-->
<!--    &_sub {-->
<!--      margin-top: 31px;-->
<!--    }-->
<!--    .inp {-->
<!--      margin-bottom: 12px;-->

<!--      &:last-child {-->
<!--        margin-bottom: 16px;-->
<!--      }-->
<!--      &__label {-->
<!--        font-weight: 700;-->
<!--        font-size: 16px;-->
<!--        line-height: 100%;-->
<!--        color: #cccdcd;-->
<!--        margin-bottom: 12px;-->
<!--      }-->

<!--      &__text {-->
<!--        height: 40px;-->
<!--      }-->
<!--    }-->
<!--  }-->

<!--  &__column-check {-->
<!--    display: flex;-->
<!--    justify-content: space-between;-->
<!--  }-->

<!--  &__column-region,-->
<!--  &__column-platform {-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    justify-content: space-between;-->
<!--    height: 228px;-->

<!--    label {-->
<!--      line-height: 150% !important;-->
<!--      text-transform: uppercase;-->
<!--      color: #67707a !important;-->

<!--      &:after {-->
<!--        top: -4px !important;-->
<!--      }-->
<!--    }-->
<!--  }-->

<!--  &__title {-->
<!--    font-weight: 500;-->
<!--    font-size: 24px;-->
<!--    line-height: 133%;-->
<!--    color: #f5f5f5;-->
<!--    margin-bottom: 12px;-->
<!--  }-->
<!--}-->
<!--</style>-->
