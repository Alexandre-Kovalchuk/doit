<script setup>
import UIBtn from '@/components/UI/UIBtn.vue';
import { useRouter } from 'vue-router';
import { ref, watch } from 'vue';
import {
  teamBtn,
  teamBlacer,
  teamManage,
  updateTitle,
  createTeam,
} from '@/components/JSFiles/Profile/Profile.js';
import BaseInput from '@/components/Base/BaseInput.vue';
import BaseDropdown from '@/components/Base/BaseDropdown.vue';
import { games } from '@/components/JSFiles/Profile/Setting.js';

const routers = useRouter();
const q = ref('');
const title = ref('My Team');
const param = (link) => {
  routers.push({ path: '/profile', query: { q: link } });
};

watch(() => {
  q.value = routers.currentRoute.value.query.q;
  updateTitle(q.value, title);
});
</script>

<template>
  <div class="team">
    <div class="team__content">
      <h1 class="team__title">{{ title }}</h1>
      <div v-show="q === 'My team'" class="team__btn">
        <UIBtn
          v-for="btn in teamBtn"
          :key="btn.id"
          :label="btn.name"
          color="panel"
          @click="param(btn.name)"
        />
      </div>

      <div v-show="q === 'Team Blacer'" class="team__blacer">
        <UIBtn
          v-for="btn in teamBlacer"
          :key="btn.id"
          :label="btn.name"
          color="panel"
          @click="param(btn.name)"
        />
      </div>

      <div v-show="q === 'Manage Team'" class="team__manage">
        <UIBtn
          v-for="btn in teamManage"
          :key="btn.id"
          :label="btn.name"
          color="panel"
          @click="param(btn.name)"
        />
      </div>

      <div v-show="q === 'Create Team'" class="team__create">
        <div class="team__create-column">
          <h2 class="team__title-sub">Basic info</h2>

          <div class="team__create-item">
            <BaseInput placeholder="Team name" name="name" label="Team name" />
          </div>

          <div class="team__create-item">
            <p class="team__create-text">Main Game</p>
            <BaseDropdown :options="games" modify="default" />
          </div>

          <div class="team__create-item" v-for="item in createTeam" :key="item.id">
            <BaseInput :placeholder="item.label" name="name" :label="item.label" />
          </div>

          <div class="team__create-item team__create-item_last">
            <p class="team__create-text">URL</p>
            <div class="team__create-item-sub">
              <p class="team__create-text team__create-text_last">Main Game</p>
              <BaseInput placeholder="URL" name="name" modify="url" />
            </div>
          </div>
        </div>

        <div class="team__create-advance">
          <h2 class="team__title-sub">Advance</h2>
          <p class="team__create-text">logo 128 x 128</p>
          <BaseInput placeholder="" name="file" label="" type="file" modify="file" />
        </div>
      </div>

      <div v-show="q === 'Edit Team'" class="team__edit"></div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';
.team {
  margin-left: 20px;
  margin-bottom: 100px;

  &__title {
    font-weight: 700;
    font-size: 48px;
    line-height: 137%;
    text-align: center;
    margin-bottom: 40px;

    @include media-breakpoint-down(xs) {
      font-size: 40px;
    }

    &-sub {
      font-weight: 500;
      font-size: 22px;
      line-height: 100%;
      color: #cccdcd;
      margin-bottom: 44px;
    }
  }

  &__btn,
  &__blacer,
  &__manage {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    gap: 50px 64px;
    margin: 0 auto;

    .v-btn {
      width: 236px;
      height: 82px;
    }
  }

  &__create {
    &-column {
      padding: 44px;
      max-width: 600px;
      width: 100%;
      border: 1px solid #20252b;
      margin: 0 auto 24px;
    }

    &-item {
      min-height: 68px;
      height: auto;

      &-sub {
        display: flex;
        align-items: center;
        height: 40px;
      }
    }

    &-text {
      font-weight: 700;
      font-size: 16px;
      line-height: 100%;
      color: #cccdcd;
      margin-bottom: 12px;

      &_last {
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        color: #78828f;
        background: #20252b;
        border: 2px solid #20252b;
        border-radius: 4px 0 0 4px;
        padding: 12px 0 0 16px;
        height: 40px;
        width: 140px;
        margin-bottom: 10px;
      }
    }

    .inp {
      margin-bottom: 22px;
      width: 100%;

      &__label {
        font-weight: 700;
        font-size: 16px;
        color: #cccdcd;
        margin-bottom: 12px;
      }

      &__text {
        height: 40px;
      }

      &__text_url {
        border-radius: 0 4px 4px 0;
        height: 40px;
      }
    }

    .dropdown {
      margin-bottom: 22px;
    }

    &-advance {
      padding: 30px 52px 113px 30px;
      max-width: 600px;
      width: 100%;
      border: 1px solid #20252b;
      margin: 0 auto;
    }
  }
}
</style>
