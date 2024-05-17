<!--<script setup>-->
<!--import BaseInput from '@/components/Base/BaseInput.vue';-->
<!--import BaseDropdown from '@/components/Base/BaseDropdown.vue';-->
<!--import { nameTd } from '@/components/Data/Admin/AdminGames.js';-->

<!--const teamData = ['team name', 'id', 'team leader', 'country', 'web-site'];-->
<!--console.log(teamData);-->
<!--</script>-->

<!--<template>-->
<!--  <div class="team">-->
<!--    <div class="team">-->
<!--      <BaseInput-->
<!--        v-for="(inp, index) in teamData.slice(0, 2)"-->
<!--        :key="index"-->
<!--        :placeholder="inp"-->
<!--        name="name"-->
<!--        :label="inp"-->
<!--        modify="panel"-->
<!--      />-->

<!--      <BaseDropdown :options="nameTd.map((item) => item.name)" title="Main Game" />-->

<!--      <BaseInput-->
<!--        v-for="(inp, index) in teamData.slice(2, 5)"-->
<!--        :key="index"-->
<!--        :placeholder="inp"-->
<!--        name="name"-->
<!--        :label="inp"-->
<!--        modify="panel"-->
<!--      />-->

<!--      <div class="player-edit__url">-->
<!--        <p class="player-edit__text">Url</p>-->
<!--        <div class="player-edit__row">-->
<!--          <p class="player-edit__host">Doit.gg/user</p>-->
<!--          <BaseInput placeholder="" name="host" modify="panel" />-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<style lang="scss">-->
<!--.team {-->
<!--  margin: 0 14px;-->

<!--  .inp {-->
<!--    margin-bottom: 22px;-->

<!--    &__label {-->
<!--      text-transform: capitalize;-->
<!--    }-->
<!--  }-->

<!--  .dropdown {-->
<!--    &__selected {-->
<!--      border: 2px solid #20252b;-->
<!--      border-radius: 4px;-->
<!--      height: 40px;-->
<!--      color: #f5f5f5;-->
<!--    }-->
<!--  }-->

<!--  .player-edit__row {-->
<!--    .inp {-->
<!--      margin-bottom: 0;-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->
