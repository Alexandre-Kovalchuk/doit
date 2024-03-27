<script setup>
const props = defineProps(['srcset', 'src', 'alt']);
</script>

<template>
  <picture>
    <source :srcset="`doit/src/assets/img/${srcset}`" type="image/webp" />
    <img :src="`doit/src/assets/img/${src}`" :alt="alt" />
  </picture>
</template>
