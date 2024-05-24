<script setup>
import UITabs from '@/components/UI/UITabs.vue';
import { tabsData } from '@/components/Data/TabsData.js';
import { ref } from 'vue';
import AdminTournaments from '@/components/Pages/Admin/AdminTournaments.vue';
import AdminTeams from '@/components/Pages/Admin/AdminTeams.vue';
import AdminPlay from '@/components/Pages/Admin/AdminPlay.vue';
import AdminLeagues from '@/components/Pages/Admin/AdminLeagues.vue';
import AdminCalendar from '@/components/Pages/Admin/AdminCalendar.vue';
import AdminNews from '@/components/Pages/Admin/AdminNews.vue';
import AdminGames from '@/components/Pages/Admin/AdminGames.vue';
import AdminPayments from '@/components/Pages/Admin/AdminPayments.vue';
import BasePopUp from '@/components/Base/BasePopUp.vue';
import { isPopUp, popUpType } from '@/composable/useShowPopUp.js';
import InfoPopUp from '@/components/Pages/PopUp/InfoPopUp.vue';
import AddGamePopUp from '@/components/Pages/PopUp/AddGamePopUp.vue';

const selectedTab = ref('Tournaments');
const { adminTabs } = tabsData();
const changeTab = (tab) => {
  selectedTab.value = tab;
};
</script>
<template>
  <main class="main">
    <section class="panel">
      <div class="container">
        <BasePopUp v-if="isPopUp">
          <InfoPopUp v-if="popUpType === 'info'" />
          <AddGamePopUp v-if="popUpType === 'Add Game'" />
        </BasePopUp>

        <UITabs :selected-tab="selectedTab" :names="adminTabs" @change-tab="changeTab">
          <AdminTournaments v-if="selectedTab === 'Tournaments'" />
          <AdminTeams v-if="selectedTab === 'Teams'" />
          <AdminPlay v-if="selectedTab === 'Players'" />
          <AdminLeagues v-if="selectedTab === 'Leagues'" />
          <AdminCalendar v-if="selectedTab === 'Calendar'" />
          <AdminNews v-if="selectedTab === 'News'" />
          <AdminGames v-if="selectedTab === 'Games'" />
          <AdminPayments v-if="selectedTab === 'Payments'" />
        </UITabs>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
.panel {
  margin: 50px 0 0 0;

  .container {
    max-width: 1210px;
  }

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
    width: 146px;
    height: 77px;
    background: #0f1215;
    border: 2px solid #20252b;
    font-weight: 700;
    font-size: 17px;
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
