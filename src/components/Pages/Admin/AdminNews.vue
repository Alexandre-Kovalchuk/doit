<script setup>
import { computed } from 'vue';
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
import { adminNewsData } from '@/components/Data/Admin/AdminNews.js';

const { nameBtn, nameTd, nameTh } = adminNewsData();
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
  margin-bottom: 30px;

  .search {
    margin-top: 42px;
  }

  .table {
    margin-top: 27px;

    &__head {
      padding: 22px 80px 22px 48px;

      &-row {
        &:first-child {
          width: 515px;
        }
      }
    }
  }

  .inp {
    &__name {
      width: 460px;
    }

    &__author {
      width: 85px;
      margin-left: 110px;
    }

    &__category {
      width: 85px;
      margin-left: 104px;
    }

    &__date {
      width: 85px;
      margin-left: 99px;
    }
  }
}
</style>
