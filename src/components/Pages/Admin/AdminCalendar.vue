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
import { adminCalendarData } from '@/components/Data/Admin/AdminCalendar.js';

const { nameBtn, nameTh, nameTd } = adminCalendarData();
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

<style lang="scss">
.admin-calendar {
  margin-bottom: 30px;

  .search {
    margin-top: 25px;
  }

  .table {
    &__head {
      justify-content: flex-start;
      padding: 24px 0 19px 43px;

      &-row {
        &:nth-child(2) {
          margin: 0 90px 0 137px;
        }

        &:nth-child(4) {
          margin-left: 65px;
        }
      }
    }

    &__body {
      padding: 26px 41px 0;

      &-edit {
        margin-left: auto;
      }
    }
  }

  .inp {
    &__name {
      width: 300px;
    }

    &__pool,
    &__signed,
    &__entry {
      width: 80px;
    }

    &__entry {
      margin-left: 61px;
    }

    &__pool {
      margin-left: 137px;
    }

    &__website {
      margin-left: 94px;
    }

    &__start {
      width: 85px;
      margin-left: 4px;
    }

    &__text {
      &_entry,
      &_pool,
      &_signed,
      &_start {
        text-align: right;
      }
    }
  }
}
</style>
