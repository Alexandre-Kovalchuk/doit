<script setup>
import MainBeta from '@/views/Main/MainBeta.vue';
import MainTournament from '@/views/Main/MainTournament.vue';
import MainNews from '@/views/Main/MainNews.vue';
import BasePopUp from '@/components/Base/BasePopUp.vue';
import PopUpLogin from '@/views/PopUp/PopUpLogin.vue';
</script>

<template>
  <main class="main">
    <BasePopUp> <PopUpLogin /> </BasePopUp>

    <MainBeta />
    <MainTournament />
    <MainNews />
  </main>
</template>

<style lang="scss"></style>
