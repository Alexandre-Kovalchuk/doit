<script setup>
import Header from '@/components/BASE/TheHeader.vue';
import AsideMenu from '@/components/BASE/TheAsideMenu.vue';
import SvgManager from '@/components/icons/IconSvgManager.vue';
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
