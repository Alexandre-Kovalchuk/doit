<script setup>
import { computed } from 'vue';
import { useSearch } from '@/composable/useSearch.js';
import { useSort } from '@/composable/useSort.js';
import UISearch from '@/components/UI/UISearch.vue';
import UITable from '@/components/UI/UITable.vue';
import UIBtn from '@/components/UI/UIBtn.vue';
import {
  searchName,
  isDisable,
  editTable,
  sortVal,
} from '@/composable/useOfVariablesAndFunctions.js';
import { adminGamesData } from '@/components/Data/Admin/AdminGames.js';

const { nameTd, nameBtn, nameTh } = adminGamesData();
const searchItem = computed(() => {
  return useSearch(nameTd.value, 'name', searchName.value);
});

const sortTable = () => {
  useSort(sortVal, nameTd, 'name', 'name');
};
</script>

<template>
  <div class="admin-games">
    <UISearch :name-btn="nameBtn" v-model:value="searchName">
      <UIBtn :label="isDisable === true ? 'Edit mode' : 'Cancel'" @click="editTable" />

      <router-link :to="{ path: `/admin-panel/add-game` }">
        <UIBtn :label="isDisable === true ? 'Add Game' : 'Save changes'" />
      </router-link>
    </UISearch>

    <UITable :data-td="searchItem" :th="nameTh" @sort="sortTable" :is-disabled="isDisable" />
  </div>
</template>

<style lang="scss">
.admin-games {
  margin-bottom: 30px;

  .table {
    margin-top: 27px;

    &__head {
      justify-content: flex-start;
      padding: 22px 0 21px 47px;

      &-row {
        &:nth-child(2) {
          margin: 0 71px 0 185px;
        }
      }
    }
  }

  .inp {
    &__name {
    }

    &__act {
      width: 80px;
      margin-left: 103px;
    }
  }
}
</style>
