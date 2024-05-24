<script setup>
import { adminGamesData } from '@/components/Data/Admin/AdminGames.js';
import BaseDropdown from '@/components/Base/BaseDropdown.vue';
import BaseInput from '@/components/Base/BaseInput.vue';
const { nameTd } = adminGamesData();
</script>

<template>
  <div class="game-edit">
    <BaseDropdown :options="nameTd.map((item) => item.name)" title="Main Game" />

    <div class="player-edit__url">
      <p class="player-edit__text">Url</p>
      <div class="player-edit__row">
        <p class="player-edit__host">Doit.gg/user</p>
        <BaseInput placeholder="" name="host" modify="panel" />
      </div>
    </div>

    <div class="basic__quick">
      <h3 class="basic__title">Description</h3>
      <textarea
        class="basic__textarea"
        placeholder="You can write here somebody about your tournament...."
      ></textarea>
    </div>
  </div>
</template>

<style lang="scss">
.game-edit {
  margin: 0 14px;

  .dropdown {
    margin-bottom: 22px;
    &__selected {
      border: 2px solid #20252b;
      border-radius: 4px;
      height: 40px;
      color: #f5f5f5;
    }
  }

  .player-edit__row {
    .inp {
      margin-bottom: 0;
    }
  }

  .basic__quick {
    margin-bottom: 22px;
  }

  .dropdown {
    color: #cccdcd;
    border: none;
    padding: 0;
  }

  .dropdown__selected {
    padding: 12px 16px;
    border: 2px solid #20252b;
    border-radius: 4px;
    height: 40px;
  }
}
</style>
