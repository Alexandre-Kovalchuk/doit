<script setup>
import UITourCard from '@/components/UI/UITourCard.vue';
import { tour } from '@/components/JSFiles/MainPage/TournamentsData.js';
import UIFilter from '@/components/UI/UIFilter.vue';
const gameMode = [{ title: 'Game mode', name: '1v1' }, { name: '2v2' }, { name: '5v5' }];
</script>

<template>
  <main class="main">
    <section class="tour">
      <div class="container">
        <div class="tour__content">
          <div class="tour__column">
            <div class="tour__card" v-for="item in tour[0].dota">
              <UITourCard :tour-card="item" />
            </div>
          </div>
          <div class="tour__filter">
            <div class="tour__filter-row">
              <UIFilter :arr="tour[0].filter.mode" />
              <UIFilter :arr="tour[0].filter.status" />
              <UIFilter :arr="tour[0].filter.platform" />
              <!--              <UIFilter :arr="tour[0].filter.mode" />-->
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
.tour {
  &__content {
    display: flex;
    justify-content: space-between;
  }

  &__column {
    max-width: 859px;
    width: 100%;
  }

  &__filter {
    display: flex;
  }
}
</style>
