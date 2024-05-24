<script setup>
import UITable from '@/components/UI/UITable.vue';
import UISearch from '@/components/UI/UISearch.vue';
import { computed } from 'vue';
import { useSearch } from '@/composable/useSearch.js';
import { useSort } from '@/composable/useSort.js';
import {
  searchName,
  isDisable,
  editTable,
  sortVal,
} from '@/composable/useOfVariablesAndFunctions.js';
import UIBtn from '@/components/UI/UIBtn.vue';
import { adminPlayersData } from '@/components/Data/Admin/AdminPlayers.js';

const { nameBtn, nameTh, nameTd } = adminPlayersData();

const searchItem = computed(() => {
  return useSearch(nameTd.value, 'nickname', searchName.value);
});

const sortTable = () => {
  useSort(sortVal, nameTd, 'nickname', 'nickname');
};
</script>

<template>
  <div class="admin-players">
    <UISearch :name-btn="nameBtn" v-model:value="searchName">
      <UIBtn :label="isDisable === true ? 'Edit mode' : 'Cancel'" @click="editTable" />

      <router-link :to="{ path: `/admin-panel/add-player` }">
        <UIBtn :label="isDisable === true ? '+ Add player' : 'Save changes'" />
      </router-link>
    </UISearch>

    <UITable :data-td="searchItem" :th="nameTh" @sort="sortTable" :is-disabled="isDisable" />
  </div>
</template>

<style lang="scss">
.admin-players {
  margin-bottom: 30px;

  .search {
    margin-top: 35px;

    &__row {
      flex-direction: row-reverse;
      width: 700px;
    }
  }

  .table {
    &__head {
      padding: 24px 47px 24px 43px;

      &-title {
        font-size: 16px;
        text-transform: uppercase;
      }
    }
  }

  .inp {
    &__nickname {
      width: 150px;
    }

    &__psd {
      width: 85px;
      margin-left: 40px;
    }

    &__country,
    &__firstTeam {
      width: 85px;
      margin-left: 92px;
    }

    &__firstName {
      width: 85px;
      margin-left: 56px;
    }

    &__created {
      width: 75px;
      margin-left: 59px;
    }

    &__age {
      width: 40px;
      margin-left: 111px;
    }

    .inp__text_age {
    }
  }
}
</style>
