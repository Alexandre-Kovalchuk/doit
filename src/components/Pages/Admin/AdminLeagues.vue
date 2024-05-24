<script setup>
import {
  editTable,
  isDisable,
  searchName,
  sortVal,
} from '@/composable/useOfVariablesAndFunctions.js';
import { computed } from 'vue';
import { useSearch } from '@/composable/useSearch.js';
import { useSort } from '@/composable/useSort.js';
import UISearch from '@/components/UI/UISearch.vue';
import UIBtn from '@/components/UI/UIBtn.vue';
import UITable from '@/components/UI/UITable.vue';
import { adminLeaguesData } from '@/components/Data/Admin/AdminLeagues.js';

const { nameBtn, nameTd, nameTh } = adminLeaguesData();

const searchItem = computed(() => {
  return useSearch(nameTd.value, 'entry', searchName.value);
});

const sortTable = () => {
  useSort(sortVal, nameTd, 'name', 'name');
};
</script>

<template>
  <div class="admin-leagues">
    <UISearch :name-btn="nameBtn" v-model:value="searchName">
      <UIBtn :label="isDisable === true ? 'Edit mode' : 'Cancel'" @click="editTable" />

      <router-link :to="{ path: `/admin-panel/add-leagues` }">
        <UIBtn :label="isDisable === true ? '+ Add Leagues' : 'Save changes'" />
      </router-link>
    </UISearch>

    <UITable :data-td="searchItem" :th="nameTh" @sort="sortTable" :is-disabled="isDisable" />
  </div>
</template>

<style lang="scss">
.admin-leagues {
  margin-bottom: 30px;

  .search {
    margin-top: 35px;
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

    &__signed {
      margin-left: 106px;
    }

    &__start {
      width: 85px;
      margin-left: 110px;
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
