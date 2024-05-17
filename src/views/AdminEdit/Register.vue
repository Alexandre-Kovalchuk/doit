<!--<script setup>-->
<!--import BaseCheckbox from '@/components/Base/BaseCheckbox.vue';-->
<!--import UIBtn from '@/components/UI/UIBtn.vue';-->
<!--import BaseDropdown from '@/components/Base/BaseDropdown.vue';-->
<!--const props = defineProps({-->
<!--  modify: {-->
<!--    type: String,-->
<!--    default: '',-->
<!--  },-->
<!--});-->

<!--const date = ['21.03.2020', '22.03.2020', '26.03.2020'];-->
<!--const time = ['02:30 AM', '03:00 AM', '03:30 AM'];-->
<!--const min = [-->
<!--  '15 minute',-->
<!--  '30 minute',-->
<!--  '45 minute',-->
<!--  '15 minute',-->
<!--  '30 minute',-->
<!--  '45 minute',-->
<!--  '15 minute',-->
<!--  '30 minute',-->
<!--  '45 minute',-->
<!--  '15 minute',-->
<!--  '30 minute',-->
<!--  '45 minute',-->
<!--];-->
<!--</script>-->

<!--<template>-->
<!--  <div class="register">-->
<!--    <h2 class="register__title">Registration*</h2>-->

<!--    <div class="register__btns">-->
<!--      <UIBtn label="Free" />-->

<!--      <UIBtn label="Paid" />-->

<!--      <UIBtn label="Premium" />-->

<!--      <UIBtn label="Private" />-->
<!--    </div>-->

<!--    <div class="register__dropdown">-->
<!--      <BaseDropdown :options="date" title="Start time*" />-->
<!--      <BaseDropdown :options="time" />-->
<!--    </div>-->

<!--    <div class="register__dropdown register__dropdown_end">-->
<!--      <BaseDropdown :options="date" title="Estimated end*" />-->
<!--      <BaseDropdown :options="time" />-->
<!--    </div>-->

<!--    <BaseCheckbox label="Checkin Time" name="time" />-->

<!--    <div class="register__dropdown register__dropdown_time">-->
<!--      <BaseDropdown :options="min" />-->
<!--    </div>-->

<!--    <p class="register__text">-->
<!--      (GMT -05:00) Eastern time — set the time zone from your <span>settings</span>-->
<!--    </p>-->
<!--  </div>-->
<!--</template>-->

<!--<style lang="scss">-->
<!--.register {-->
<!--  margin: 0 14px;-->
<!--  &__check {-->
<!--    opacity: 0;-->
<!--    &_act {-->
<!--      opacity: 1;-->
<!--      position: absolute;-->
<!--      top: 30px;-->
<!--      left: 36%;-->
<!--    }-->
<!--  }-->

<!--  &__title {-->
<!--    font-weight: 700;-->
<!--    font-size: 16px;-->
<!--    line-height: 100%;-->
<!--    color: #cccdcd;-->
<!--    margin-bottom: 16px;-->
<!--  }-->

<!--  &__btns {-->
<!--    display: flex;-->
<!--    justify-content: space-between;-->
<!--    width: 436px;-->

<!--    .v-btn {-->
<!--      &:nth-child(1) {-->
<!--        width: 80px;-->
<!--        height: 40px;-->
<!--      }-->

<!--      &:nth-child(2) {-->
<!--        width: 80px;-->
<!--        height: 40px;-->
<!--      }-->

<!--      &:nth-child(3) {-->
<!--        width: 131px;-->
<!--        height: 40px;-->
<!--      }-->

<!--      &:nth-child(4) {-->
<!--        width: 112px;-->
<!--        height: 40px;-->
<!--      }-->

<!--      &__btn {-->
<!--        font-weight: 700;-->
<!--        font-size: 16px;-->
<!--        line-height: 100%;-->
<!--        text-align: center;-->
<!--        color: #0a61e1;-->
<!--      }-->
<!--    }-->
<!--  }-->

<!--  &__dropdown {-->
<!--    display: flex;-->
<!--    justify-content: space-between;-->
<!--    align-items: center;-->
<!--    width: 336px;-->
<!--    margin: 30px 0 21px;-->

<!--    &_end {-->
<!--      margin: 0 0 23px;-->
<!--    }-->

<!--    &_time {-->
<!--      margin: 15px 0 29px;-->

<!--      .dropdown {-->
<!--        &:last-child {-->
<!--          margin-top: 0 !important;-->
<!--        }-->
<!--      }-->

<!--      .dropdown__options {-->
<!--        max-height: 50px;-->
<!--      }-->
<!--    }-->

<!--    .dropdown {-->
<!--      width: 160px;-->
<!--      margin: 0;-->
<!--      &:last-child {-->
<!--        margin-top: 27px;-->
<!--      }-->

<!--      &__selected {-->
<!--        height: 40px;-->
<!--        border: 2px solid #20252b;-->
<!--        border-radius: 4px;-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->
