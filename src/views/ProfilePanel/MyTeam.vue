<script setup>
import UIBtn from '@/components/UI/UIBtn.vue';
import { useRouter } from 'vue-router';
import { ref, watch } from 'vue';
import {
  teamBtn,
  teamBlacer,
  teamManage,
  updateTitle,
  createTeamAndEditTeam,
} from '@/components/JSFiles/Profile/Profile.js';
import BaseInput from '@/components/Base/BaseInput.vue';
import BaseDropdown from '@/components/Base/BaseDropdown.vue';
import { games } from '@/components/JSFiles/Profile/Setting.js';

const routers = useRouter();
const q = ref('');
const title = ref('My Team');
const fileName = ref('logo url');
const param = (link) => {
  routers.push({ path: '/profile', query: { q: link } });
};

watch(() => {
  q.value = routers.currentRoute.value.query.q;
  updateTitle(q.value, title);
});

const updateFileName = (e) => {
  const selectedFile = e.target.files[0];
  selectedFile ? (fileName.value = selectedFile.name) : fileName.value;
};
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
        <div class="team__create-basic">
          <h2 class="team__title-sub">Basic info</h2>

          <div
            class="team__create-item"
            v-for="(item, index) in createTeamAndEditTeam[0].creatTeam.slice(0, 1)"
            :key="index"
          >
            <BaseInput :placeholder="item.label" name="name" :label="item.label" />
          </div>

          <div class="team__create-item">
            <p class="team__create-text">Main Game</p>
            <BaseDropdown :options="games" modify="default" />
          </div>

          <div
            class="team__create-item"
            v-for="(item, index) in createTeamAndEditTeam[0].creatTeam.slice(1, 5)"
            :key="index"
          >
            <BaseInput :placeholder="item.label" name="name" :label="item.label" />
          </div>

          <div class="team__create-item">
            <p class="team__create-text">URL</p>

            <div class="team__create-row">
              <p class="team__create-text-sub">Doit.gg/team</p>
              <BaseInput placeholder="" name="name" />
            </div>
          </div>
        </div>

        <div class="team__create-advance">
          <h2 class="team__title-sub team__title-sub_advance">Basic info</h2>

          <p class="team__create-text">logo 128 x 128</p>

          <div class="team__create-file">
            <p class="team__create-text-file">{{ fileName }}</p>

            <BaseInput
              placeholder=""
              name="file"
              label="upload"
              type="file"
              modify="file"
              v-model="file"
              @change="updateFileName"
            />
          </div>
        </div>

        <div class="team__create-btns">
          <UIBtn
            v-for="(btn, index) in createTeamAndEditTeam[0].btn.slice(0, 2)"
            :key="index"
            :label="btn.label"
          />
        </div>
      </div>

      <div v-show="q === 'Edit Team'" class="team__edit">
        <div class="team__create-basic">
          <h2 class="team__title-sub">Basic info</h2>

          <div
            class="team__create-item"
            v-for="(item, index) in createTeamAndEditTeam[0].editTeam.slice(0, 2)"
            :key="index"
          >
            <BaseInput :placeholder="item.label" name="name" :label="item.label" />
          </div>

          <div class="team__create-item">
            <p class="team__create-text">Main Game</p>
            <BaseDropdown :options="games" modify="default" />
          </div>

          <div
            class="team__create-item"
            v-for="(item, index) in createTeamAndEditTeam[0].editTeam.slice(2, 5)"
            :key="index"
          >
            <BaseInput :placeholder="item.label" name="name" :label="item.label" />
          </div>

          <div class="team__create-item">
            <p class="team__create-text">URL</p>

            <div class="team__create-row">
              <p class="team__create-text-sub">Doit.gg/team</p>
              <BaseInput placeholder="" name="name" />
            </div>
          </div>
        </div>

        <div class="team__create-players">
          <h2 class="team__title-sub team__title-sub_players">Players</h2>
          <div class="team__create-btns team__create-btns_players">
            <UIBtn
              v-for="(btn, index) in createTeamAndEditTeam[0].btn.slice(2, 4)"
              :key="index"
              :label="btn.label"
            />
          </div>
        </div>

        <div class="team__create-advance">
          <h2 class="team__title-sub team__title-sub_advance">Basic info</h2>

          <p class="team__create-text">logo 128 x 128</p>

          <div class="team__create-file">
            <p class="team__create-text-file">{{ fileName }}</p>

            <BaseInput
              placeholder=""
              name="file"
              label="upload"
              type="file"
              modify="file"
              v-model="file"
              @change="updateFileName"
            />
          </div>
        </div>

        <div class="team__create-btns">
          <UIBtn
            v-for="(btn, index) in createTeamAndEditTeam[0].btn.slice(0, 2)"
            :key="index"
            :label="btn.label"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';
.team {
  margin-bottom: 100px;
  padding: 0 0 0 87px;

  @include media-breakpoint-down(md) {
    padding: 0 0 0 20px;
  }

  @include media-breakpoint-down(xs) {
    padding: 0 0 0 0;
  }

  &__title {
    font-weight: 700;
    font-size: 48px;
    line-height: 137%;
    text-align: center;
    margin-bottom: 29px;

    @include media-breakpoint-down(xs) {
      font-size: 40px;
    }

    &-sub {
      font-weight: 500;
      font-size: 22px;
      line-height: 100%;
      color: #cccdcd;
      margin-bottom: 44px;

      &_advance {
        margin-bottom: 35px;
      }

      &_players {
        margin-bottom: 16px;
      }
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

  &__create,
  &__edit {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-basic,
    &-advance,
    &-players {
      padding: 44px 44px 44px 30px;
      max-width: 600px;
      width: 100%;
      border: 1px solid #20252b;

      @include media-breakpoint-down(xs) {
        padding: 20px;
      }
    }

    &-item {
      margin-left: 14px;
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
      }

      .dropdown {
        margin-bottom: 22px;
      }
    }

    &-text {
      font-weight: 700;
      font-size: 16px;
      line-height: 100%;
      color: #cccdcd;
      margin-bottom: 12px;
    }

    &-row {
      display: flex;
      align-items: center;
      height: 40px;

      .inp {
        margin-bottom: 0;

        &__label {
          margin-bottom: 0;
        }

        &__text {
          border-radius: 0 4px 4px 0;
        }
      }
    }

    &-text-sub {
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      color: #78828f;
      background: #20252b;
      border: 2px solid #20252b;
      border-radius: 4px 0 0 4px;
      padding: 10px 10px 10px 16px;
    }

    &-advance {
      margin: 24px 0 31px;
    }

    &-text-file {
      border: 2px solid #20252b;
      border-radius: 4px;
      max-width: 339px;
      width: 100%;
      height: 40px;
      font-weight: 400;
      font-size: 16px;
      color: #3c434d;
      padding: 8px 0 0 14px;
    }

    &-file {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .inp {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        margin: 0;
        width: fit-content;

        &__label_file {
          padding: 16px 44px;
          background: #1a222d;
          font-weight: 700;
          font-size: 10px;
          text-align: center;
          margin: 0 0 0 16px;
          width: 157px;
          @include media-breakpoint-down(xs) {
            padding: 16px 20px;
            width: 100px;
          }
        }

        &__text_file {
          display: none;
        }
      }
    }

    &-btns {
      display: flex;
      justify-content: center;
      width: 100%;
      .v-btn {
        height: 51px;
        &:first-child {
          max-width: 187px;
          width: 100%;
        }
        &:last-child {
          max-width: 159px;
          width: 100%;
          margin-left: 44px;
          @include media-breakpoint-down(xs) {
            margin-left: 20px;
          }
        }
      }

      &_players {
        justify-content: flex-start;
        @include media-breakpoint-down(xs) {
          flex-direction: column;
          //margin-left: 20px;
        }
        .v-btn {
          height: 40px;
          &:first-child {
            max-width: 145px;
            width: 100%;
          }
          &:last-child {
            max-width: 188px;
            width: 100%;
            margin-left: 19px;

            @include media-breakpoint-down(xs) {
              margin: 19px 0 0;
            }
          }
          &__btn {
            color: #0a61e1;
            line-height: 100%;
          }
        }
      }
    }

    &-players {
      margin-top: 22px;
      padding: 30px;
    }
  }
}
</style>
