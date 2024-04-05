<script setup>
import UIProfile from '@/components/UI/UIProfile.vue';
import UserPanel from '@/views/ProfilePanel/UserPanel.vue';
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';

const router = useRouter();
// const q = ref('');

onMounted(() => {
  let q = router.currentRoute.value.query.q;
  console.log(q);
});
</script>
<template>
  <main class="main">
    <UIProfile>
      <UserPanel />
    </UIProfile>
  </main>
</template>

<style lang="scss"></style>
