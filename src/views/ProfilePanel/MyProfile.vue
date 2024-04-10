<script setup>
import UIProgressBar from '@/components/UI/UIProgressBar.vue';
import UIProgressCircle from '@/components/UI/UIProgressCircle.vue';

const aboutUser = [
  {
    id: 1,
    userData: {
      dataId: 'ID',
      dataName: 'Name',
      dataNickname: 'Nickname',
      dataDate: 'With us from',
      dataSex: 'Sex / Age',
      dataNationality: 'Nationality',
      dataCountry: 'Country',
      dataSite: 'Web-site',
    },
    userInfo: {
      userId: 7917450,
      userName: 'Nikodem Świder',
      userNickname: 'BlacerLordTV',
      userDate: '28/08/13',
      userSex: 'Male / 22',
      userNationality: 'Ukraine',
      userCountry: 'Ukraine',
      userSite: 'http://blacerTV.com',
    },
  },
];
const aboutGame = [
  {
    id: 1,
    name: 'StarCraft II',
    currentVal: 30,
    class: 'star',
    color: '#55aaff',
  },
  {
    id: 2,
    name: 'Dota II',
    currentVal: 25,
    class: 'dota',
    color: '#55ff8f',
  },
  {
    id: 3,
    name: 'CS:GO',
    currentVal: 35,
    class: 'cs',
    color: '#b455ff',
  },

  {
    id: 4,
    name: 'League of Legends',
    currentVal: 40,
    class: 'lol',
    color: '#ff9255',
  },

  {
    id: 5,
    name: 'Fortnite',
    currentVal: 10,
    class: 'fortnine',
    color: '#ff5555',
  },

  {
    id: 6,
    name: 'FIFA 2020',
    currentVal: 55,
    class: 'fifa',
    color: '#55ffeb',
  },

  {
    id: 7,
    name: 'Metro',
    currentVal: 40,
    class: 'metro',
    color: '#ffdd55',
  },

  {
    id: 8,
    name: 'Valorant',
    currentVal: 10,
    class: 'valorant',
    color: '#ff55c4',
  },

  {
    id: 9,
    name: 'S.T.A.L.K.E.R 2',
    currentVal: 90,
    class: 'stalker',
    color: '#ff5555',
  },
];
</script>

<template>
  <div class="my-profile">
    <div class="my-profile__row">
      <div class="my-profile__content">
        <h2 class="my-profile__title">Profile</h2>
        <div class="my-profile__user">
          <div class="my-profile__user-data">
            <p v-for="(data, key) in aboutUser[0].userData" :key="key">
              {{ data }}
            </p>
          </div>

          <div class="my-profile__user-info">
            <p v-for="(info, key) in aboutUser[0].userInfo" :key="key">
              {{ info }}
            </p>
          </div>
        </div>
      </div>
      <div class="my-profile__level">
        <h2 class="my-profile__title my-profile__title_level">Level and awards</h2>
        <div class="my-profile__sub-row">
          <div class="my-profile__progress-bar">
            <UIProgressBar
              v-for="item in aboutGame"
              :percent="item.currentVal"
              :name-class="item.class"
              :current-val="item.currentVal"
              :name="item.name"
              :color="item.color"
              :width="item.currentVal"
              :class="item.color"
            />
          </div>
          <div class="my-profile__progress-circle">
            <UIProgressCircle
              v-for="item in aboutGame"
              :key="item.id"
              :percent="item.currentVal"
              :color="item.color"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';

.my-profile {
  width: 100%;

  &__row {
    display: flex;
    justify-content: space-between;
    //margin-left: 60px;
    width: 100%;
    padding: 62px 0 0 61px;

    @include media-breakpoint-down(lg) {
      padding: 62px 0 0 20px;
    }

    @include media-breakpoint-down(md) {
      flex-direction: column;
    }
  }

  &__content {
    max-width: 326px;
    width: 100%;

    @include media-breakpoint-down(lg) {
      max-width: 260px;
    }

    @include media-breakpoint-down(md) {
      max-width: 100%;
    }
  }

  &__title {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.4px;
    margin-bottom: 22px;

    &_level {
      margin: 8px 0 23px 12px;
    }
  }

  &__user {
    display: flex;
    justify-content: space-between;
    max-width: 326px;
    width: 100%;

    @include media-breakpoint-down(lg) {
      max-width: 260px;
    }

    @include media-breakpoint-down(md) {
      max-width: 100%;
    }

    &-data {
      min-width: 105px;
      width: 100%;
      p {
        color: #67707a;
        margin-bottom: 15px;
      }
    }

    &-info {
      margin-left: 10px;
      p {
        margin-bottom: 15px;
      }
    }
  }

  &__level {
    max-width: 410px;
    width: 100%;
    padding: 0 0 0 48px;
    @include media-breakpoint-down(lg) {
      padding: 0 0 0 20px;
    }

    @include media-breakpoint-down(md) {
      max-width: 100%;
      margin-bottom: 100px;
      padding: 0;
    }
  }

  &__sub-row {
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
    min-width: 355px;

    @include media-breakpoint-down(md) {
      margin: 0;
    }

    @include media-breakpoint-down(xs) {
      min-width: auto;
    }
  }

  &__progress-bar {
    max-width: 270px;
    width: 100%;
    margin-right: 10px;

    @include media-breakpoint-down(xs) {
      max-width: 100%;
    }
  }

  &__progress-circle {
    height: 450px;
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
