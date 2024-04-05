<script setup>
import UIBtn from '@/components/UI/UIBtn.vue';
const profileMenu = [
  { id: 1, name: 'My profile', label: 'My profile' },
  { id: 2, name: 'My team', label: 'My team' },
  { id: 3, name: 'Deposit', label: 'Deposit' },
  { id: 4, name: 'Withdraw', label: 'Withdraw' },
  { id: 5, name: 'Premium', label: 'Premium' },
  { id: 6, name: 'Statistics', label: 'Statistics' },
  { id: 7, name: 'Support', label: 'Support' },
  { id: 8, name: 'Settings', label: 'Settings' },
  { id: 9, name: 'Game profile', label: 'Game profile' },
  { id: 10, name: 'Logout', label: 'Logout' },
];
</script>

<template>
  <div class="user-panel">
    <h1 class="user-panel__title">User Panel</h1>
    <div class="user-panel__btns">
      <UIBtn v-for="btn in profileMenu" :key="btn.id" :label="btn.label" color="panel" />
    </div>
  </div>
</template>

<style lang="scss">
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
    width: 100%;

    .v-btn {
      width: 236px;
      height: 82px;
      margin-right: 64px;
      margin-bottom: 50px;

      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9),
      &:nth-child(10) {
        margin-right: 0;
      }
    }
  }
}
</style>
