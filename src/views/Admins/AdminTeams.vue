<script setup>
import UITable from '@/components/UI/UITable.vue';
import { nameBtn, nameTh, nameTd } from '@/components/Data/Admin/AdminTeams.js';
import {
  searchName,
  isDisable,
  editTable,
  sortVal,
} from '@/composable/useOfVariablesAndFunctions.js';
import UIBtn from '@/components/UI/UIBtn.vue';
import UISearch from '@/components/UI/UISearch.vue';
import { computed } from 'vue';
import { useSearch } from '@/composable/useSearch.js';
import { useSort } from '@/composable/useSort.js';

const searchItem = computed(() => {
  return useSearch(nameTd.value, 'game', searchName.value);
});

const sortTable = () => {
  useSort(sortVal, nameTd, 'team', 'team');
};
</script>

<template>
  <div class="admin-teams">
    <UISearch :name-btn="nameBtn" v-model:value="searchName">
      <UIBtn :label="isDisable === true ? 'Edit mode' : 'Cancel'" @click="editTable" />

      <router-link :to="{ path: `/admin-panel/add-team` }">
        <UIBtn :label="isDisable === true ? 'Add Team' : 'Save changes'" />
      </router-link>
    </UISearch>

    <UITable :data-td="searchItem" :th="nameTh" @sort="sortTable" :is-disabled="isDisable" />
  </div>
</template>

<style lang="scss"></style>
