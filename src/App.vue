<script setup>
import Header from '@/components/BASE/TheHeader.vue';
import AsideMenu from '@/components/BASE/TheAsideMenu.vue';
import SvgManager from '@/components/icons/svgManager.vue';
</script>

<template>
  <div class="wrapper">
    <Header />
    <AsideMenu />
    <div class="container">
      <router-view />
    </div>
    <SvgManager />
  </div>
</template>

<style lang="scss">
@import 'assets/style/style.scss';
#app {
}

h1 {
  color: white;
}
</style>
