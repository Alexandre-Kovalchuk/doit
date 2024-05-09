<script setup>
import { nameBtn, nameTh, nameTd } from '@/components/Data/Admin/AdminCalendar.js';
import { computed, ref } from 'vue';
import { useSearch } from '@/composable/useSearch.js';
import { useSort } from '@/composable/useSort.js';
import UISearch from '@/components/UI/UISearch.vue';
import UITable from '@/components/UI/UITable.vue';
import {
  searchName,
  isDisable,
  editTable,
  sortVal,
} from '@/composable/useOfVariablesAndFunctions.js';

import UIBtn from '@/components/UI/UIBtn.vue';

const searchItem = computed(() => {
  return useSearch(nameTd.value, 'name', searchName.value);
});

const sortTable = () => {
  useSort(sortVal, nameTd, 'name', 'name');
};
</script>

<template>
  <div class="admin-calendar">
    <UISearch :name-btn="nameBtn" v-model:value="searchName">
      <UIBtn :label="isDisable === true ? 'Edit mode' : 'Cancel'" @click="editTable" />
      <UIBtn :label="isDisable === true ? 'Add Event' : 'Save changes'" />
    </UISearch>

    <UITable :data-td="searchItem" :th="nameTh" @sort="sortTable" :is-disabled="isDisable" />
  </div>
</template>

<style scoped lang="scss"></style>
