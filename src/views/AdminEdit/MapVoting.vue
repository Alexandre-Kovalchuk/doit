<!--<script setup>-->
<!--import BaseRadio from '@/components/Base/BaseRadio.vue';-->
<!--import BaseInput from '@/components/Base/BaseInput.vue';-->
<!--import UIFile from '@/components/UI/UIFile.vue';-->
<!--import UIBtn from '@/components/UI/UIBtn.vue';-->

<!--const radioData = ['No', 'Yes'];-->
<!--const mapData = ['Map 1', 'Map 2'];-->
<!--</script>-->

<!--<template>-->
<!--  <div class="map">-->
<!--    <BaseRadio :arr="radioData" label="Active" />-->

<!--    <div class="map__row">-->
<!--      <div class="map__item">-->
<!--        <BaseInput-->
<!--          v-for="(item, index) in mapData"-->
<!--          :key="index"-->
<!--          placeholder=""-->
<!--          name="name"-->
<!--          modify="panel"-->
<!--          :label="item"-->
<!--        />-->
<!--      </div>-->

<!--      <div class="map__item">-->
<!--        <UIFile v-for="index in 2" :key="index" />-->
<!--      </div>-->
<!--    </div>-->

<!--    <div class="map__btn">-->
<!--      <UIBtn label="+ Add Map" />-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<style lang="scss">-->
<!--.map {-->
<!--  margin: 0 14px;-->

<!--  &__row {-->
<!--    display: flex;-->
<!--    justify-content: space-between;-->
<!--    align-items: center;-->
<!--    margin-bottom: 39px;-->
<!--  }-->

<!--  &__item {-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    justify-content: space-between;-->
<!--    height: 140px;-->
<!--    &:first-child {-->
<!--      width: 161px;-->
<!--    }-->

<!--    &:last-child {-->
<!--      padding-top: 22px;-->
<!--    }-->
<!--  }-->

<!--  &__btn {-->
<!--    width: 187px;-->
<!--    height: 51px;-->
<!--    margin: 0 auto 35px;-->
<!--  }-->

<!--  .radio {-->
<!--    margin-bottom: 29px;-->
<!--  }-->

<!--  .inp {-->
<!--    &__label {-->
<!--      margin-bottom: 7px;-->
<!--    }-->

<!--    &__text {-->
<!--      height: 40px;-->
<!--    }-->
<!--  }-->

<!--  .file {-->
<!--    margin-bottom: 34px;-->

<!--    &__name {-->
<!--      width: 171px;-->
<!--    }-->
<!--    .inp {-->
<!--      margin-bottom: 0;-->

<!--      &__label {-->
<!--        margin-bottom: 0;-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->
