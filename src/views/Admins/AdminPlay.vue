<script setup>
import UITable from '@/components/UI/UITable.vue';
import { nameBtn, nameTh, nameTd } from '@/components/Data/Admin/AdminPlayers.js';
import UISearch from '@/components/UI/UISearch.vue';
import { computed } from 'vue';
import { useSearch } from '@/composable/useSearch.js';
import { useSort } from '@/composable/useSort.js';
import {
  searchName,
  isDisable,
  editTable,
  sortVal,
} from '@/composable/useOfVariablesAndFunctions.js';
import UIBtn from '@/components/UI/UIBtn.vue';

const searchItem = computed(() => {
  return useSearch(nameTd.value, 'nickname', searchName.value);
});

const sortTable = () => {
  useSort(sortVal, nameTd, 'nickname', 'nickname');
};
</script>

<template>
  <div class="admin-players">
    <UISearch :name-btn="nameBtn" v-model:value="searchName">
      <UIBtn :label="isDisable === true ? 'Edit mode' : 'Cancel'" @click="editTable" />

      <router-link :to="{ path: `/admin-panel/add-player` }">
        <UIBtn :label="isDisable === true ? '+ Add player' : 'Save changes'" />
      </router-link>
    </UISearch>

    <UITable :data-td="searchItem" :th="nameTh" @sort="sortTable" :is-disabled="isDisable" />
  </div>
</template>

<style lang="scss"></style>
