<script setup>
import UITabs from '@/components/UI/UITabs.vue';
import { ref, watchEffect } from 'vue';
import AdminTournaments from '@/views/Admins/AdminTournaments.vue';
import AdminTeams from '@/views/Admins/AdminTeams.vue';
import { useRouter } from 'vue-router';
import { changeTabs } from '@/composable/useChangeTabs.js';
import { useWatchTabs } from '@/composable/useWatchEffectTabs.js';
import AdminPlay from '@/views/Admins/AdminPlay.vue';
import { adminTabs } from '@/components/Data/Admin/adminTabs.js';
import AdminPayments from '@/views/Admins/AdminPayments.vue';
import AdminGames from '@/views/Admins/AdminGames.vue';
import AdminNews from '@/views/Admins/AdminNews.vue';
import AdminCalendar from '@/views/Admins/AdminCalendar.vue';
import AdminLeagues from '@/views/Admins/AdminLeagues.vue';

const selectedTab = ref('Tournaments');
const router = useRouter();
const q = ref('');

const changeAdminTabs = (tabName) => {
  changeTabs(selectedTab, tabName, router, '');
};

watchEffect(() => {
  useWatchTabs(q, router, selectedTab);
});
</script>

<template>
  <main class="main">
    <section class="panel">
      <div class="container">
        <UITabs :selected-tab="selectedTab" :names="adminTabs" @change-tab="changeAdminTabs">
          <AdminTournaments v-if="q === 'Tournaments'" />
          <AdminPlay v-if="q === 'Players'" />
          <AdminPayments v-if="q === 'Payments'" />
          <AdminGames v-if="q === 'Games'" />
          <AdminNews v-if="q === 'News'" />
          <AdminTeams v-if="q === 'Teams'" />
          <AdminCalendar v-if="q === 'Calendar'" />
          <AdminLeagues v-if="q === 'Leagues'" />
        </UITabs>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
.panel {
  .container {
    max-width: 1210px;
  }
  margin: 30px 0 0 0;
  .tabs__row {
    margin: 0;
  }
  .tabs__btns {
    max-width: 100%;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 8px;
      background: #121f33;
      border-radius: 2px;
      height: 8px;
      cursor: e-resize;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background: #627ca3;
      height: 24px;
    }
  }
  .tabs__btns-item {
    width: 243px;
    height: 90px;
    background: #0f1215;
    border: 2px solid #20252b;
    font-weight: 700;
    font-size: 30px;
    line-height: 100%;
    text-align: center;
    color: #f5f5f5;

    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(6),
    &:nth-child(7) {
      border-right: none;
    }

    &_act {
      background: #d8dfeb;
      color: #0f1215;
    }
  }

  .tabs__content {
    margin-left: 0;
  }
}
</style>
