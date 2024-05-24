<script setup>
import UIAccordion from '@/components/UI/UIAccordion.vue';
import { ref } from 'vue';
import {
  accordion,
  accordionPlayer,
  accordionTeam,
  accordionGame,
} from '@/components/Data/AccordionData.js';
import { useRoute } from 'vue-router';

const accordions = ref(accordion);
const accordionsPlayers = ref(accordionPlayer);
const accordionTeams = ref(accordionTeam);
const accordionGames = ref(accordionGame);

let title = null;
const urlPath = useRoute().path;
const namePath = urlPath.split('/');

if (namePath.length > 2) {
  title = namePath[2].substring(4);
}
if (title) {
  title = title.charAt(0).toUpperCase() + title.slice(1);
}

function openedAccordion(index) {
  accordions.value[index].isOpen = !accordions.value[index].isOpen;
}

function activeAccordion(index) {
  return accordions.value[index].isOpen;
}
</script>

<template>
  <main class="main">
    <section class="new-tournament new">
      <div class="container">
        <div class="new__content">
          <h1 class="new__title">New/Edit</h1>

          <UIAccordion
            v-for="(accordion, index) in accordions"
            :key="index"
            :name="accordion.name"
            @openedAccordion="openedAccordion(index)"
            :is-active="activeAccordion(index)"
            v-if="
              urlPath === '/admin-panel/add-leagues' || urlPath === '/admin-panel/add-tournament'
            "
          >
            <component :is="accordion.component" />
          </UIAccordion>

          <UIAccordion
            v-for="(accordion, index) in accordionsPlayers"
            :key="index"
            :name="accordion.name"
            @openedAccordion="openedAccordion(index)"
            :is-active="activeAccordion(index)"
            v-if="urlPath === '/admin-panel/add-player'"
          >
            <component :is="accordion.component" />
          </UIAccordion>

          <UIAccordion
            v-for="(accordion, index) in accordionTeams"
            :key="index"
            :name="accordion.name"
            @openedAccordion="openedAccordion(index)"
            :is-active="activeAccordion(index)"
            v-if="urlPath === '/admin-panel/add-team'"
          >
            <component :is="accordion.component" />
          </UIAccordion>

          <UIAccordion
            v-for="(accordion, index) in accordionGames"
            :key="index"
            :name="accordion.name"
            @openedAccordion="openedAccordion(index)"
            :is-active="activeAccordion(index)"
            v-if="urlPath === '/admin-panel/add-game'"
          >
            <component :is="accordion.component" />
          </UIAccordion>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
.new {
  overflow: hidden;
  margin-bottom: 100px;
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    font-weight: 700;
    font-size: 22px;
    line-height: 100%;
    text-align: center;
    color: #0f1215;
    padding: 30px 0;
    width: 657px;
    background: #d8dfeb;
    margin-bottom: 30px;
  }

  &__accordion {
    overflow: hidden;
  }
}
</style>
