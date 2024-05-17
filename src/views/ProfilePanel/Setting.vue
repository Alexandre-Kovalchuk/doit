<!--<script setup>-->
<!--import UIBtn from '@/components/UI/UIBtn.vue';-->
<!--import BaseInput from '@/components/Base/BaseInput.vue';-->
<!--import {-->
<!--  settingBtn,-->
<!--  updateSettingTitle,-->
<!--  edit,-->
<!--  countries,-->
<!--  gender,-->
<!--  games,-->
<!--} from '@/components/Data/Setting.js';-->
<!--import { ref, watch } from 'vue';-->
<!--import { useRouter } from 'vue-router';-->
<!--import BaseDropdown from '@/components/Base/BaseDropdown.vue';-->

<!--const routers = useRouter();-->
<!--const q = ref('');-->
<!--const title = ref('Settings');-->
<!--const param = (link) => {-->
<!--  routers.push({ path: '/profile', query: { q: link } });-->
<!--};-->

<!--watch(() => {-->
<!--  q.value = routers.currentRoute.value.query.q;-->
<!--  updateSettingTitle(q.value, title);-->
<!--});-->

<!--const optionsCountry = ref(countries);-->
<!--const optionsTeam = ref(games);-->
<!--const optionsGender = ref(gender);-->

<!--const parentSelectedOption = ref(null);-->
<!--</script>-->

<!--<template>-->
<!--  <div class="setting">-->
<!--    <h1 class="setting__title">{{ title }}</h1>-->

<!--    <div v-show="q === 'Settings'" class="setting__btns">-->
<!--      <UIBtn-->
<!--        v-for="btn in settingBtn"-->
<!--        :key="btn.id"-->
<!--        :label="btn.name"-->
<!--        color="panel"-->
<!--        @click="param(btn.name)"-->
<!--      />-->
<!--    </div>-->

<!--    <div v-show="q === 'Edit account details'" class="setting__account">-->
<!--      <div class="setting__account-item">-->
<!--        <BaseInput placeholder="Username" name="name" label="Username" modify="email" />-->
<!--      </div>-->

<!--      <div class="setting__account-item">-->
<!--        <BaseInput placeholder="Name" name="name" label="Name" modify="email" />-->
<!--      </div>-->

<!--      <div class="setting__account-item">-->
<!--        <p class="setting__account-text">Country</p>-->
<!--        <BaseDropdown :options="optionsCountry" v-model="parentSelectedOption" />-->
<!--      </div>-->

<!--      <div class="setting__account-item">-->
<!--        <p class="setting__account-text">Main Team</p>-->
<!--        <BaseDropdown :options="optionsTeam" v-model="parentSelectedOption" />-->
<!--      </div>-->

<!--      <div class="setting__account-item">-->
<!--        <p class="setting__account-text">Sex</p>-->
<!--        <BaseDropdown :options="optionsGender" v-model="parentSelectedOption" />-->
<!--      </div>-->

<!--      <div class="setting__account-item setting__account-item_last">-->
<!--        <p class="setting__account-text">Date of birth</p>-->

<!--        <div class="setting__account-item-sub">-->
<!--          <BaseInput placeholder="Day" name="name" type="number" modify="email" />-->

<!--          <BaseInput placeholder="Month" name="name" type="number" modify="email" />-->

<!--          <BaseInput placeholder="Year" name="name" type="number" modify="email" />-->
<!--        </div>-->
<!--      </div>-->

<!--      <UIBtn label="Change details" color="blue" />-->
<!--    </div>-->

<!--    <div v-for="item in edit" :key="item.id" v-show="q === item.q" class="setting__psd">-->
<!--      <div class="setting__inp">-->
<!--        <BaseInput-->
<!--          :placeholder="item.label"-->
<!--          name="name"-->
<!--          :label="item.label"-->
<!--          :type="item.type"-->
<!--          modify="email"-->
<!--        />-->

<!--        <BaseInput-->
<!--          :placeholder="item.subLabel"-->
<!--          name="name"-->
<!--          :label="item.subLabel"-->
<!--          :type="item.type"-->
<!--          modify="email"-->
<!--        />-->
<!--      </div>-->

<!--      <UIBtn :label="item.btn" color="blue" />-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<style lang="scss">-->
<!--@import '@/assets/style/breakpoints/media-breakpoints';-->
<!--.setting {-->
<!--  margin-bottom: 100px;-->
<!--  padding: 0 0 0 91px;-->

<!--  @include media-breakpoint-down(md) {-->
<!--    padding: 0;-->
<!--  }-->

<!--  &__title {-->
<!--    font-weight: 700;-->
<!--    font-size: 48px;-->
<!--    line-height: 137%;-->
<!--    text-align: center;-->
<!--    margin-bottom: 65px;-->

<!--    @include media-breakpoint-down(md) {-->
<!--      margin-bottom: 30px;-->
<!--    }-->

<!--    @include media-breakpoint-down(xs) {-->
<!--      font-size: 40px;-->
<!--    }-->
<!--  }-->

<!--  &__btns {-->
<!--    display: flex;-->
<!--    flex-wrap: wrap;-->
<!--    justify-content: center;-->
<!--    width: 100%;-->
<!--    gap: 50px 64px;-->
<!--    margin: 0 auto;-->

<!--    .v-btn {-->
<!--      width: 236px;-->
<!--      height: 79px;-->

<!--      &__btn {-->
<!--        font-size: 19px;-->
<!--      }-->
<!--    }-->
<!--  }-->

<!--  &__psd {-->
<!--    max-width: 339px;-->
<!--    width: 100%;-->
<!--    margin: 0 auto;-->

<!--    @include media-breakpoint-down(xs) {-->
<!--      max-width: 100%;-->
<!--    }-->

<!--    .v-btn {-->
<!--      &__btn {-->
<!--        height: 44px;-->
<!--      }-->
<!--    }-->
<!--  }-->

<!--  &__inp {-->
<!--    max-width: 241px;-->
<!--    width: 100%;-->
<!--    height: 136px;-->
<!--    margin: 0 auto 22px;-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    justify-content: space-between;-->

<!--    @include media-breakpoint-down(xs) {-->
<!--      max-width: 100%;-->
<!--    }-->
<!--  }-->

<!--  &__account {-->
<!--    max-width: 241px;-->
<!--    width: 100%;-->
<!--    margin: 0 auto;-->

<!--    &-item {-->
<!--      margin-bottom: 16px;-->

<!--      &_last {-->
<!--        margin-bottom: 22px;-->
<!--      }-->

<!--      &-sub {-->
<!--        display: grid;-->
<!--        grid-template-columns: repeat(3, 1fr);-->
<!--        grid-column-gap: 12px;-->
<!--      }-->
<!--    }-->

<!--    &-text {-->
<!--      font-weight: 400;-->
<!--      font-size: 14px;-->
<!--      line-height: 100%;-->
<!--      color: #fff;-->
<!--      margin-bottom: 6px;-->
<!--    }-->

<!--    .v-btn {-->
<!--      &__btn {-->
<!--        height: 44px;-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->
