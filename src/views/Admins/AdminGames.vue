<!--<script setup>-->
<!--import { nameTd, nameBtn, nameTh } from '@/components/Data/Admin/AdminGames.js';-->
<!--import { computed } from 'vue';-->
<!--import { useSearch } from '@/composable/new/useSearch.js';-->
<!--import { useSort } from '@/composable/new/useSort.js';-->
<!--import UISearch from '@/components/UI/UISearch.vue';-->
<!--import UITable from '@/components/UI/UITable.vue';-->
<!--import UIBtn from '@/components/UI/UIBtn.vue';-->
<!--import {-->
<!--  searchName,-->
<!--  isDisable,-->
<!--  editTable,-->
<!--  sortVal,-->
<!--} from '@/composable/useOfVariablesAndFunctions.js';-->

<!--const searchItem = computed(() => {-->
<!--  return useSearch(nameTd.value, 'name', searchName.value);-->
<!--});-->

<!--const sortTable = () => {-->
<!--  useSort(sortVal, nameTd, 'name', 'name');-->
<!--};-->
<!--</script>-->

<!--<template>-->
<!--  <div class="admin-games">-->
<!--    <UISearch :name-btn="nameBtn" v-model:value="searchName">-->
<!--      <UIBtn :label="isDisable === true ? 'Edit mode' : 'Cancel'" @click="editTable" />-->

<!--      <router-link :to="{ path: `/admin-panel/add-game` }">-->
<!--        <UIBtn :label="isDisable === true ? 'Add Game' : 'Save changes'" />-->
<!--      </router-link>-->
<!--    </UISearch>-->

<!--    <UITable :data-td="searchItem" :th="nameTh" @sort="sortTable" :is-disabled="isDisable" />-->
<!--  </div>-->
<!--</template>-->

<!--<style lang="scss">-->
<!--.admin-games {-->
<!--  .table__row {-->
<!--    display: flex;-->
<!--    justify-content: flex-start;-->
<!--    align-items: center;-->
<!--    padding: 22px 0;-->
<!--    margin-left: 51px;-->
<!--    width: 220px;-->
<!--  }-->

<!--  .table {-->
<!--  }-->
<!--}-->
<!--</style>-->
