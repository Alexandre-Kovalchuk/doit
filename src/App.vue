<script setup>
import Header from '@/components/BASE/TheHeader.vue';
import AsideMenu from '@/components/BASE/TheAsideMenu.vue';
import SvgManager from '@/components/icons/SvgManager.vue';
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
@import '@/assets/style/style.scss';
#app {
}

h1 {
  color: white;
  background: white;
  width: 100%;
}
</style>
