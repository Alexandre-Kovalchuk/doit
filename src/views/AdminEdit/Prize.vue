<!--<script setup>-->
<!--import BaseInput from '@/components/Base/BaseInput.vue';-->
<!--import BaseCheckbox from '@/components/Base/BaseCheckbox.vue';-->
<!--import BaseRadio from '@/components/Base/BaseRadio.vue';-->

<!--const place = ['1st place:', '2nd place:', '3rd place:', '4th place:'];-->
<!--const ro = ['Ro16', 'Ro32', 'Ro64', 'Ro128', 'Ro256', 'Ro512'];-->
<!--const type = ['Money', 'Thing', 'Money + Thing', 'Nothing', 'Qualifers'];-->
<!--const donation = ['Active', 'No Active'];-->
<!--</script>-->

<!--<template>-->
<!--  <div class="prize">-->
<!--    <div class="prize__header">-->
<!--      <BaseInput placeholder="" name="pool" label="Prize pool:" />-->
<!--      <BaseInput placeholder="" name="max" label="MAX players/teams number:" />-->
<!--    </div>-->

<!--    <BaseCheckbox label="3rd place turn on?" name="place" />-->

<!--    <div class="prize__row">-->
<!--      <div class="prize__row-side-a">-->
<!--        <BaseInput-->
<!--          v-for="(item, index) in place"-->
<!--          :key="index"-->
<!--          placeholder=""-->
<!--          :name="item"-->
<!--          :label="item"-->
<!--        />-->
<!--        <div class="prize__row-radio prize__row-radio_a">-->
<!--          <BaseRadio :arr="type" label="Type" />-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="prize__row-side-b">-->
<!--        <BaseInput-->
<!--          v-for="(item, index) in ro"-->
<!--          :key="index"-->
<!--          placeholder=""-->
<!--          :name="item"-->
<!--          :label="item"-->
<!--        />-->
<!--        <div class="prize__row-radio prize__row-radio_b">-->
<!--          <BaseRadio :arr="donation" label="Donations" />-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<style lang="scss">-->
<!--.prize {-->
<!--  margin: 0 14px;-->

<!--  &__header {-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    justify-content: space-between;-->
<!--    width: 350px;-->
<!--    height: 70px;-->
<!--    margin-bottom: 11px;-->

<!--    .inp {-->
<!--      display: flex;-->
<!--      justify-content: space-between;-->
<!--      align-items: center;-->

<!--      &__label {-->
<!--        font-weight: 700;-->
<!--        font-size: 16px;-->
<!--        line-height: 100%;-->
<!--        color: #cccdcd;-->
<!--        margin: 0;-->
<!--      }-->
<!--      &__text {-->
<!--        width: 119px;-->
<!--        height: 25px;-->
<!--      }-->
<!--    }-->
<!--  }-->

<!--  &__row {-->
<!--    display: flex;-->
<!--    justify-content: space-between;-->
<!--    width: 457px;-->
<!--    margin: 21px 0 0 0;-->

<!--    &-side-a {-->
<!--      width: 207px;-->

<!--      .inp {-->
<!--        display: flex;-->
<!--        justify-content: space-between;-->
<!--        align-items: center;-->
<!--        margin-bottom: 7px;-->

<!--        &__label {-->
<!--          font-weight: 700;-->
<!--          font-size: 16px;-->
<!--          line-height: 100%;-->
<!--          color: #cccdcd;-->
<!--          margin: 0;-->
<!--        }-->
<!--        &__text {-->
<!--          width: 119px;-->
<!--          height: 25px;-->
<!--        }-->
<!--      }-->
<!--    }-->

<!--    &-side-b {-->
<!--      width: 188px;-->

<!--      .inp {-->
<!--        display: flex;-->
<!--        justify-content: space-between;-->
<!--        align-items: center;-->
<!--        margin-bottom: 10px;-->

<!--        &__label {-->
<!--          font-weight: 700;-->
<!--          font-size: 16px;-->
<!--          line-height: 100%;-->
<!--          color: #cccdcd;-->
<!--          margin: 0;-->
<!--        }-->
<!--        &__text {-->
<!--          width: 119px;-->
<!--          height: 25px;-->
<!--        }-->
<!--      }-->
<!--    }-->

<!--    &-radio {-->
<!--      margin-top: 26px;-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->
