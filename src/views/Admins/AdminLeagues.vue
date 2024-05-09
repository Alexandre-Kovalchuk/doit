<script setup>
import { nameBtn, nameTd, nameTh } from '@/components/Data/Admin/AdminTournament.js';
import {
  editTable,
  isDisable,
  searchName,
  sortVal,
} from '@/composable/useOfVariablesAndFunctions.js';
import { computed } from 'vue';
import { useSearch } from '@/composable/useSearch.js';
import { useSort } from '@/composable/useSort.js';
import UISearch from '@/components/UI/UISearch.vue';
import UIBtn from '@/components/UI/UIBtn.vue';
import UITable from '@/components/UI/UITable.vue';

const searchItem = computed(() => {
  return useSearch(nameTd.value, 'entry', searchName.value);
});

const sortTable = () => {
  useSort(sortVal, nameTd, 'name', 'name');
};
</script>

<template>
  <div class="admin-leagues">
    <UISearch :name-btn="nameBtn" v-model:value="searchName">
      <UIBtn :label="isDisable === true ? 'Edit mode' : 'Cancel'" @click="editTable" />

      <router-link :to="{ path: `/admin-panel/add-leagues` }">
        <UIBtn :label="isDisable === true ? '+ Add Leagues' : 'Save changes'" />
      </router-link>
    </UISearch>

    <UITable :data-td="searchItem" :th="nameTh" @sort="sortTable" :is-disabled="isDisable" />
  </div>
</template>

<style lang="scss"></style>
