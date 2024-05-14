<script setup>
import UIProfile from '@/components/UI/UIProfile.vue';
import UserPanel from '@/views/ProfilePanel/UserPanel.vue';
import MyProfile from '@/views/ProfilePanel/MyProfile.vue';
import MyTeam from '@/views/ProfilePanel/MyTeam.vue';
import Premium from '@/views/ProfilePanel/Premium.vue';
import Statistic from '@/views/ProfilePanel/Statistic.vue';
import Game from '@/views/ProfilePanel/Game.vue';
import Setting from '@/views/ProfilePanel/Setting.vue';
import { useRouter } from 'vue-router';
import { ref, watch } from 'vue';
import Support from '@/views/ProfilePanel/Support.vue';
import Deposit from '@/views/ProfilePanel/Deposit.vue';

const router = useRouter();
const q = ref('');
const title = ref('My Team');

watch(() => {
  q.value = router.currentRoute.value.query.q;
});

const showMyTeam = (q) => {
  switch (q) {
    case 'My team':
    case 'Team Blacer':
    case 'Team Scorpio':
    case 'About Team':
    case 'Manage Team':
    case 'Players':
    case 'Tournaments':
    case 'Edit info':
    case 'Add Players':
    case 'Team Ez game':
    case 'Create Team':
    case 'Edit Team':
      return true;
    default:
      return false;
  }
};

const showSetting = (q) => {
  switch (q) {
    case 'Settings':
    case 'Edit account details':
    case 'Change adress email':
    case 'Change password':
    case 'Manage preferences':
      return true;
    default:
      return false;
  }
};
</script>

<template>
  <main class="main">
    <UIProfile>
      <UserPanel v-if="q === 'User Panel'" />
      <MyProfile v-if="q === 'My profile'" />
      <MyTeam v-if="showMyTeam(q)" />
      <Deposit v-if="q === 'Deposit/Withdraw'" />
      <Premium v-if="q === 'Premium'" />
      <Statistic v-if="q === 'Statistics'" />
      <Support v-if="q === 'Support'" />
      <Setting v-if="showSetting(q)" />
      <Game v-if="q === 'Game profile'" />
    </UIProfile>
  </main>
</template>

<style lang="scss"></style>
