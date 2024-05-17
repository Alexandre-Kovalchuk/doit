<!--<script setup>-->
<!--import { nameBtn, nameTd, nameTh } from '@/components/Data/Admin/AdminPayments.js';-->
<!--import UISearch from '@/components/UI/UISearch.vue';-->
<!--import { computed } from 'vue';-->
<!--import { useSearch } from '@/composable/new/useSearch.js';-->
<!--import { useSort } from '@/composable/new/useSort.js';-->
<!--import UITable from '@/components/UI/UITable.vue';-->
<!--import {-->
<!--  searchName,-->
<!--  isDisable,-->
<!--  editTable,-->
<!--  sortVal,-->
<!--} from '@/composable/useOfVariablesAndFunctions.js';-->
<!--import UIBtn from '@/components/UI/UIBtn.vue';-->

<!--const searchItem = computed(() => {-->
<!--  return useSearch(nameTd.value, 'user', searchName.value);-->
<!--});-->

<!--const sortTable = () => {-->
<!--  useSort(sortVal, nameTd, 'user', 'user');-->
<!--};-->
<!--</script>-->

<!--<template>-->
<!--  <div class="admin-payments">-->
<!--    <UISearch :name-btn="nameBtn" v-model:value="searchName">-->
<!--      <UIBtn :label="isDisable === true ? 'Edit mode' : 'Cancel'" @click="editTable" />-->
<!--      <UIBtn :label="isDisable === true ? 'Add Game' : 'Save changes'" />-->
<!--    </UISearch>-->

<!--    <UITable :data-td="searchItem" :th="nameTh" @sort="sortTable" :is-disabled="isDisable" />-->
<!--  </div>-->
<!--</template>-->

<!--<style lang="scss"></style>-->
