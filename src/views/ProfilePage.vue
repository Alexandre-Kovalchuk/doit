<script setup>
import UIProfile from '@/components/UI/UIProfile.vue';
import UserPanel from '@/views/ProfilePanel/UserPanel.vue';
import MyProfile from '@/views/ProfilePanel/MyProfile.vue';
import MyTeam from '@/views/ProfilePanel/MyTeam.vue';
import Premium from '@/views/ProfilePanel/Premium.vue';
import Statistic from '@/views/ProfilePanel/Statistic.vue';
import { useRouter } from 'vue-router';
import { ref, watch } from 'vue';
import Game from '@/views/ProfilePanel/Game.vue';

const router = useRouter();
const q = ref('');

watch(() => {
  q.value = router.currentRoute.value.query.q;
});
</script>

<template>
  <main class="main">
    <UIProfile>
      <UserPanel v-if="q === 'User Panel'" />
      <MyProfile v-if="q === 'My profile'" />
      <MyTeam v-if="q === 'My team'" />
      <Premium v-if="q === 'Premium'" />
      <Statistic v-if="q === 'Statistics'" />
      <Game v-if="q === 'Game profile'" />
    </UIProfile>
  </main>
</template>

<style lang="scss"></style>
