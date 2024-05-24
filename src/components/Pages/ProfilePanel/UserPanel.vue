<script setup>
import UIBtn from '@/components/UI/UIBtn.vue';
import { useRouter } from 'vue-router';

const profileMenu = [
  { id: 1, name: 'My profile', label: 'My profile' },
  { id: 2, name: 'My team', label: 'My team' },
  { id: 3, name: 'Deposit/Withdraw', label: 'Deposit' },
  { id: 4, name: 'Deposit/Withdraw', label: 'Withdraw' },
  { id: 5, name: 'Premium', label: 'Premium' },
  { id: 6, name: 'Statistics', label: 'Statistics' },
  { id: 7, name: 'Support', label: 'Support' },
  { id: 8, name: 'Settings', label: 'Settings' },
  { id: 9, name: 'Game profile', label: 'Game profile' },
  { id: 10, name: 'Logout', label: 'Logout' },
];

const routers = useRouter();

const param = (link) => {
  routers.push({ path: '/profile', query: { q: link } });
};
</script>

<template>
  <div class="user-panel">
    <h1 class="user-panel__title">User Panel</h1>
    <div class="user-panel__btns">
      <UIBtn
        v-for="btn in profileMenu"
        :key="btn.id"
        :label="btn.label"
        color="panel"
        @click="param(btn.name)"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';

.user-panel {
  width: 100%;

  &__title {
    font-weight: 700;
    font-size: 48px;
    line-height: 137%;
    text-align: center;
    margin-bottom: 59px;
  }

  &__btns {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px 64px;
    //max-width: 836px;
    //width: 100%;

    @include media-breakpoint-down(lg) {
      //gap: 20px;
      //margin-left: 20px;
    }

    @include media-breakpoint-down(xs) {
      margin-left: 0;
      gap: 40px;
      margin-bottom: 100px;
    }

    .v-btn {
      width: 236px;
      height: 82px;
    }
  }
}
</style>
