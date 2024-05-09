<script setup>
import MainBeta from '@/views/Main/MainBeta.vue';
import MainTournament from '@/views/Main/MainTournament.vue';
import MainNews from '@/views/Main/MainNews.vue';
import BasePopUp from '@/components/Base/BasePopUp.vue';
import PopUpLogin from '@/views/PopUp/PopUpLogin.vue';
import MainStreams from '@/views/Main/MainStreams.vue';
import MainPartners from '@/views/Main/MainPartners.vue';
import MainGames from '@/views/Main/MainGames.vue';
</script>

<template>
  <main class="main">
    <div class="container">
      <BasePopUp> <PopUpLogin /> </BasePopUp>

      <MainBeta />
      <MainTournament />
      <MainNews />
      <MainStreams />
      <MainPartners />
      <MainGames />
    </div>
  </main>
</template>

<style lang="scss"></style>
