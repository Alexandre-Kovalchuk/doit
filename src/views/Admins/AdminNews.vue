<script setup>
import { nameBtn, nameTd, nameTh } from '@/components/Data/Admin/AdminNews.js';
import { computed, ref } from 'vue';
import { useSearch } from '@/composable/useSearch.js';
import { useSort } from '@/composable/useSort.js';
import UISearch from '@/components/UI/UISearch.vue';
import UITable from '@/components/UI/UITable.vue';
import BaseInput from '@/components/Base/BaseInput.vue';
import {
  searchName,
  isDisable,
  editTable,
  sortVal,
} from '@/composable/useOfVariablesAndFunctions.js';
import UIBtn from '@/components/UI/UIBtn.vue';

const searchItem = computed(() => {
  return useSearch(nameTd.value, 'category', searchName.value);
});

const sortTable = () => {
  useSort(sortVal, nameTd, 'category', 'category');
};
</script>

<template>
  <div class="admin-news">
    <UISearch :name-btn="nameBtn" v-model:value="searchName">
      <UIBtn :label="isDisable === true ? 'Edit mode' : 'Cancel'" @click="editTable" />
      <UIBtn :label="isDisable === true ? '+ Add tournament' : 'Save changes'" />
    </UISearch>

    <UITable :data-td="searchItem" :th="nameTh" @sort="sortTable" :is-disabled="isDisable" />
  </div>
</template>

<style lang="scss">
.admin-news {
  .table {
    tr {
      th {
        &:nth-child(1) {
          .table__row {
            justify-content: flex-start;
            margin-left: 51px;
          }
        }
      }
    }
  }
}
</style>
