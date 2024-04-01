<script setup>
import Header from '@/components/Base/TheHeader.vue';
import AsideMenu from '@/components/Base/TheAsideMenu.vue';
import SvgManager from '@/components/Base/SvgManager.vue';
</script>

<template>
  <div class="wrapper">
    <Header />
    <AsideMenu />

    <router-view />

    <SvgManager />
  </div>
</template>

<style lang="scss">
@import '@/assets/style/style';
@import '@/assets/style/fonts/fonts';
#app {
}
</style>
