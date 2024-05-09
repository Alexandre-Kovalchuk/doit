<script setup>
import UITable from '@/components/UI/UITable.vue';
import UISearch from '@/components/UI/UISearch.vue';
import { nameBtn, nameTd, nameTh } from '@/components/Data/Admin/AdminTournament.js';
import UIBtn from '@/components/UI/UIBtn.vue';
import {
  searchName,
  isDisable,
  editTable,
  sortVal,
} from '@/composable/useOfVariablesAndFunctions.js';
import { computed } from 'vue';
import { useSearch } from '@/composable/useSearch.js';
import { useSort } from '@/composable/useSort.js';

const searchItem = computed(() => {
  return useSearch(nameTd.value, 'entry', searchName.value);
});

const sortTable = () => {
  useSort(sortVal, nameTd, 'name', 'name');
};
</script>

<template>
  <div class="admin-tourney">
    <UISearch :name-btn="nameBtn" v-model:value="searchName">
      <UIBtn :label="isDisable === true ? 'Edit mode' : 'Cancel'" @click="editTable" />
      <router-link :to="{ path: `/admin-panel/add-tournament` }">
        <UIBtn :label="isDisable === true ? '+ Add tournament' : 'Save changes'" />
      </router-link>
    </UISearch>

    <UITable :data-td="searchItem" :th="nameTh" @sort="sortTable" :is-disabled="isDisable" />
  </div>
</template>

<style lang="scss">
.admin-tourney {
  &__header {
  }
}
</style>
