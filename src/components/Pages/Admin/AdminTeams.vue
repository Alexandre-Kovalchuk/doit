<script setup>
import UITable from '@/components/UI/UITable.vue';
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
import { adminTeamsData } from '@/components/Data/Admin/AdminTeams.js';

const { nameBtn, nameTh, nameTd } = adminTeamsData();

const searchItem = computed(() => {
  return useSearch(nameTd.value, 'game', searchName.value);
});

const sortTable = () => {
  useSort(sortVal, nameTd, 'team', 'team');
};

//
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

<style lang="scss">
.admin-teams {
  margin-bottom: 30px;

  .search {
    margin-top: 43px;
  }

  .table {
    margin-top: 27px;

    &__head {
      justify-content: flex-start;
      padding: 27px 0 18px 47px;

      &-row {
        &:nth-child(2) {
          margin: 0 71px 0 123px;
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
    &__team {
      width: 230px;
    }

    &__date {
      margin-left: 43px;
    }
  }
}
</style>
