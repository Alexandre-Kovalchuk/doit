<script setup>
import UIFile from '@/components/UI/UIFile.vue';
import { filterData } from '@/components/Data/mainData/tournamentsData.js';
import { gameData } from '@/components/Data/mainData/gamesData.js';
import BaseDropdown from '@/components/Base/BaseDropdown.vue';
import BaseRadio from '@/components/Base/BaseRadio.vue';
import BaseCheckbox from '@/components/Base/BaseCheckbox.vue';

const { mode } = filterData();

const { games } = gameData();

const radio = [{ name: 'Single stage tournament' }, { name: 'Two stage tournament' }];
</script>

<template>
  <div class="new-game">
    <div class="new-game__dropdown">
      <BaseDropdown :options="games.map((item) => item.txt)" title="Game" />
    </div>

    <BaseRadio :arr="radio" label="Type" />

    <div class="new-game__dropdown new-game__dropdown_format">
      <BaseDropdown :options="games.map((item) => item.txt)" title="Format*" />
    </div>

    <BaseCheckbox label="Include a match for 3rd place" name="include" />

    <div class="new-game__row">
      <div class="new-game__dropdown new-game__dropdown_mode">
        <BaseDropdown :options="mode.map((item) => item.name)" title="Mode*" />
      </div>

      <div class="new-game__dropdown new-game__dropdown_game">
        <BaseDropdown :options="games.map((item) => item.txt)" title="Map voting system" />
      </div>
    </div>

    <div class="new-game__file">
      <UIFile label="Main Banner 370x200*" />
    </div>

    <div class="new-game__file new-game__file_sub">
      <UIFile label="Torunamnet background min 2000 x 3000" />
    </div>
  </div>
</template>

<style lang="scss">
.new-game {
  margin: 0 14px;

  &__dropdown {
    margin-bottom: 25px;

    &_format {
      margin-top: 15px;
    }

    &_mode {
      width: 108px;
    }

    &_game {
      width: 276px;
    }
  }

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 13px;
  }

  &__file {
    &_sub {
      margin-top: 19px;
    }
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

  .dropdown__options {
    max-height: 150px;
  }

  .dropdown__arrow {
    width: 12px;
    height: 8px;
  }
}
</style>
