<script setup>
import UISearch from '@/components/UI/UISearch.vue';
import { computed } from 'vue';
import { useSearch } from '@/composable/useSearch.js';
import { useSort } from '@/composable/useSort.js';
import UITable from '@/components/UI/UITable.vue';
import {
  searchName,
  isDisable,
  editTable,
  sortVal,
} from '@/composable/useOfVariablesAndFunctions.js';
import UIBtn from '@/components/UI/UIBtn.vue';
import { adminPaymentsData } from '@/components/Data/Admin/AdminPayments.js';
import { showPopUp, popUpType } from '@/composable/useShowPopUp.js';

const { nameBtn, nameTd, nameTh } = adminPaymentsData();

const searchItem = computed(() => {
  return useSearch(nameTd.value, 'user', searchName.value);
});

const sortTable = () => {
  useSort(sortVal, nameTd, 'user', 'user');
};

const showPopUpInfo = (name) => {
  showPopUp();
  popUpType.value = name;
};

const showPopUpAddGame = (name) => {
  showPopUp();
  popUpType.value = name;
};
</script>

<template>
  <div class="admin-payments">
    <UISearch :name-btn="nameBtn" v-model:value="searchName">
      <UIBtn :label="isDisable === true ? 'Edit mode' : 'Cancel'" @click="editTable" />
      <UIBtn
        :label="isDisable === true ? 'Add Game' : 'Save changes'"
        @click="showPopUpAddGame('Add Game')"
      />
    </UISearch>

    <UITable
      :data-td="searchItem"
      :th="nameTh"
      @sort="sortTable"
      :is-disabled="isDisable"
      @popup="showPopUpInfo($event)"
    />
  </div>
</template>

<style lang="scss">
.admin-payments {
  margin-bottom: 30px;

  .search {
    margin-top: 35px;
  }

  .table {
    &__head {
      padding: 22px 51px 22px 43px;

      &-row {
        &:nth-child(1) {
          width: 122px;
        }

        &:nth-child(3) {
          width: 87px;
          margin-left: 30px;
        }
      }
    }

    &__body {
      padding: 17px 43px 0 43px;

      &-edit {
        margin-left: 5px;
      }
    }
  }

  .inp {
    &__user {
      width: 130px;
    }

    &__balance {
      width: 116px;
      margin-left: 40px;
    }

    &__deposit {
      width: 71px;
      margin-left: 60px;
    }

    &__payout {
      width: 71px;
      text-align: center;
      margin-left: 100px;
    }

    &__system {
      width: 50px;
      margin-left: 80px;
    }

    &__datePay {
      width: 65px;
      margin: 0 40px 0 100px;
    }
  }
}
</style>
