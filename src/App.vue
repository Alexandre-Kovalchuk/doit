<script setup>
import Header from '@/components/Base/TheHeader.vue';
import AsideMenu from '@/components/Base/TheAsideMenu.vue';
import SvgManager from '@/components/Base/SvgManager.vue';
import BasePopUp from '@/components/Base/BasePopUp.vue';
import { isPopUp } from '@/composable/useShowPopUp.js';
import PopUpLogin from '@/components/Pages/PopUp/PopUpLogin.vue';
</script>

<template>
  <div class="wrapper">
    <Header />
    <AsideMenu />

    <router-view />

    <BasePopUp v-if="isPopUp">
      <PopUpLogin />
    </BasePopUp>

    <SvgManager />
  </div>
</template>

<style lang="scss">
@import '@/assets/style/style';
@import '@/assets/style/fonts/fonts';
</style>
