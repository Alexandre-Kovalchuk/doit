<script setup>
import BaseRadio from '@/components/Base/BaseRadio.vue';
import BaseDropdown from '@/components/Base/BaseDropdown.vue';
import { adminGamesData } from '@/components/Data/Admin/AdminGames.js';
const { nameTd } = adminGamesData();
const radioData = ['No', 'Yes'];
</script>

<template>
  <div class="system">
    <BaseRadio :arr="radioData" label="Active" />

    <BaseDropdown :options="nameTd.map((item) => item.name)" title="Servers system" />
  </div>
</template>

<style lang="scss">
.system {
  margin: 0 14px;
  .radio {
    margin-bottom: 29px;
  }

  .dropdown {
    margin-bottom: 40px;
    border: none;
    padding: 0;
    &__selected {
      border: 2px solid #20252b;
      border-radius: 4px;
      height: 40px;
      color: #f5f5f5;
      padding: 12px 16px;
    }
  }
}
</style>
