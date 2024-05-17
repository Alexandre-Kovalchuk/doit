<!--<script setup>-->
<!--import BaseInput from '@/components/Base/BaseInput.vue';-->
<!--import UIBtn from '@/components/UI/UIBtn.vue';-->

<!--const gameInfo = [-->
<!--  { id: 1, name: 'Riot Games account', type: 'text', nameClass: 'game' },-->
<!--  { id: 2, name: 'Battlenet', type: 'text', nameClass: 'game' },-->
<!--  { id: 3, name: 'SteamID', type: 'number', nameClass: 'game' },-->
<!--  { id: 4, name: 'GameAccount', type: 'text', nameClass: 'game' },-->
<!--  { id: 5, name: 'GameAccount', type: 'text', nameClass: 'game' },-->
<!--  { id: 6, name: 'GameAccount', type: 'text', nameClass: 'game' },-->
<!--];-->
<!--</script>-->

<!--<template>-->
<!--  <div class="game">-->
<!--    <div class="game__content">-->
<!--      <h1 class="game__title">Game profile</h1>-->
<!--      <div class="game__info">-->
<!--        <h2 class="game__title-sub">Game profile</h2>-->

<!--        <div class="game__inp">-->
<!--          <BaseInput-->
<!--            v-for="inp in gameInfo"-->
<!--            :key="inp.id"-->
<!--            placeholder=""-->
<!--            name="name"-->
<!--            value=""-->
<!--            :label="inp.name"-->
<!--            :modify="inp.nameClass"-->
<!--            :type="inp.type"-->
<!--          />-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="game__btn">-->
<!--        <UIBtn label="Save Profile" />-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<style lang="scss">-->
<!--@import '@/assets/style/breakpoints/media-breakpoints';-->
<!--.game {-->
<!--  margin-bottom: 100px;-->
<!--  margin-left: 20px;-->
<!--  @include media-breakpoint-down(xs) {-->
<!--    margin: 0 auto;-->
<!--  }-->

<!--  &__title {-->
<!--    font-weight: 700;-->
<!--    font-size: 48px;-->
<!--    line-height: 137%;-->
<!--    text-align: center;-->
<!--    margin-bottom: 30px;-->

<!--    @include media-breakpoint-down(xs) {-->
<!--      font-size: 40px;-->
<!--    }-->

<!--    &-sub {-->
<!--      font-weight: 500;-->
<!--      font-size: 22px;-->
<!--      line-height: 100%;-->
<!--      margin-bottom: 44px;-->
<!--    }-->
<!--  }-->

<!--  &__info {-->
<!--    max-width: 628px;-->
<!--    width: 100%;-->
<!--    padding: 44px 58px;-->
<!--    border: 1px solid #20252b;-->
<!--    margin: 0 auto;-->

<!--    @include media-breakpoint-down(xs) {-->
<!--      padding: 20px;-->
<!--    }-->
<!--  }-->

<!--  &__btn {-->
<!--    width: 159px;-->
<!--    height: 51px;-->
<!--    margin: 33px auto;-->
<!--  }-->
<!--}-->
<!--</style>-->
