<script setup>
import { ref, onMounted } from 'vue';
import BaseImage from '@/components/Base/BaseImage.vue';
import { logo } from '@/components/Data/UseLogoAndAvatar.js';
import BaseSvg from '@/components/Base/BaseSvg.vue';

const nameRound = ref(['Round 32', 'Round 16', 'Round 8', 'Semi-final', 'Final']);
const currentIndex = ref(2);

const displayedRounds = ref([]);

onMounted(() => {
  updateDisplayedRounds();
});

function updateDisplayedRounds() {
  displayedRounds.value = nameRound.value.slice(currentIndex.value, currentIndex.value + 3);
}

function moveForward() {
  if (currentIndex.value < nameRound.value.length - 3) {
    currentIndex.value++;
    updateDisplayedRounds();
  }
}

function moveBackward() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
    updateDisplayedRounds();
  }
}

const nameTeams = [
  {
    id: 1,
    name: 'Walkower',
    score: 6,
    webp: new URL('../../assets/img/flagFirst.webp', import.meta.url),
    png: new URL('../../assets/img/flagFirst.png', import.meta.url),
  },
  {
    id: 2,
    name: 'BF’s Squad',
    score: 8,
    webp: new URL('../../assets/img/flagSecond.webp', import.meta.url),
    png: new URL('../../assets/img/flagSecond.png', import.meta.url),
    win: true,
  },
  {
    id: 3,
    name: 'Walkower',
    score: 6,
    webp: new URL('../../assets/img/flagFirst.webp', import.meta.url),
    png: new URL('../../assets/img/flagFirst.png', import.meta.url),
  },
  {
    id: 4,
    name: 'BF’s Squad',
    score: 8,
    webp: new URL('../../assets/img/flagSecond.webp', import.meta.url),
    png: new URL('../../assets/img/flagSecond.png', import.meta.url),
    win: true,
  },
  {
    id: 5,
    name: 'Walkower',
    score: 6,
    webp: new URL('../../assets/img/flagFirst.webp', import.meta.url),
    png: new URL('../../assets/img/flagFirst.png', import.meta.url),
  },
  {
    id: 6,
    name: 'BF’s Squad',
    score: 8,
    webp: new URL('../../assets/img/flagSecond.webp', import.meta.url),
    png: new URL('../../assets/img/flagSecond.png', import.meta.url),
    win: true,
  },
  {
    id: 7,
    name: 'Walkower',
    score: 6,
    webp: new URL('../../assets/img/flagFirst.webp', import.meta.url),
    png: new URL('../../assets/img/flagFirst.png', import.meta.url),
  },
  {
    id: 8,
    name: 'BF’s Squad',
    score: 8,
    webp: new URL('../../assets/img/flagSecond.webp', import.meta.url),
    png: new URL('../../assets/img/flagSecond.png', import.meta.url),
    win: true,
  },
  {
    id: 9,
    name: 'Walkower',
    score: 6,
    webp: new URL('../../assets/img/flagFirst.webp', import.meta.url),
    png: new URL('../../assets/img/flagFirst.png', import.meta.url),
  },
  {
    id: 10,
    name: 'BF’s Squad',
    score: 8,
    webp: new URL('../../assets/img/flagSecond.webp', import.meta.url),
    png: new URL('../../assets/img/flagSecond.png', import.meta.url),
    win: true,
  },
  {
    id: 11,
    name: 'Walkower',
    score: 6,
    webp: new URL('../../assets/img/flagFirst.webp', import.meta.url),
    png: new URL('../../assets/img/flagFirst.png', import.meta.url),
  },
  {
    id: 12,
    name: 'BF’s Squad',
    score: 8,
    webp: new URL('../../assets/img/flagSecond.webp', import.meta.url),
    png: new URL('../../assets/img/flagSecond.png', import.meta.url),
    win: true,
  },
  {
    id: 13,
    name: 'Walkower',
    score: 6,
    webp: new URL('../../assets/img/flagFirst.webp', import.meta.url),
    png: new URL('../../assets/img/flagFirst.png', import.meta.url),
  },
  {
    id: 14,
    name: 'BF’s Squad',
    score: 8,
    webp: new URL('../../assets/img/flagSecond.webp', import.meta.url),
    png: new URL('../../assets/img/flagSecond.png', import.meta.url),
    win: true,
  },
  {
    id: 15,
    name: 'Walkower',
    score: 6,
    webp: new URL('../../assets/img/flagFirst.webp', import.meta.url),
    png: new URL('../../assets/img/flagFirst.png', import.meta.url),
  },
  {
    id: 16,
    name: 'BF’s Squad',
    score: 8,
    webp: new URL('../../assets/img/flagSecond.webp', import.meta.url),
    png: new URL('../../assets/img/flagSecond.png', import.meta.url),
    win: true,
  },
];

const pairedTeams = () => {
  const pairs = [];
  for (let i = 0; i < nameTeams.length; i += 2) {
    pairs.push([nameTeams[i], nameTeams[i + 1]]);
  }
  return pairs;
};

const pairedTeamsEight = () => {
  const pairs = [];
  for (let i = 0; i < nameTeams.length; i += 2) {
    pairs.push([nameTeams[i], nameTeams[i + 1]]);
  }
  return pairs.splice(0, 4);
};

console.log(pairedTeamsEight());
</script>

<template>
  <div class="game-bracket bracket">
    <div class="bracket__row">
      <div @click="moveBackward">◀</div>

      <p class="bracket__row-text" v-for="(name, index) in displayedRounds" :key="index">
        {{ name }}
      </p>

      <div @click="moveForward">▶</div>
    </div>

    <div class="bracket__content">
      <div class="bracket__teams">
        <div class="bracket__teams-block">
          <div class="bracket__teams-column" v-for="(group, index) in pairedTeams()" :key="index">
            <div
              :class="['bracket__teams-info', { 'bracket__teams-info_win': item.win }]"
              v-for="item in group"
            >
              <div class="bracket__teams-row">
                <BaseImage :srcset="item.webp" :src="item.png" alt="flag" />
                <p class="bracket__teams-name">{{ item.name }}</p>
              </div>

              <p :class="['bracket__teams-score', { 'bracket__teams-score_win': item.win }]">
                {{ item.score }}
              </p>
            </div>
          </div>
        </div>

        <div class="bracket__teams-line">
          <div class="bracket__teams-icon" v-for="line in 4">
            <BaseSvg id="teams-line" />
          </div>
        </div>
      </div>

      <!--1/8-->
      <div class="bracket__teams bracket__teams_eight">
        <div class="bracket__teams-block">
          <div
            class="bracket__teams-column bracket__teams-column_eight"
            v-for="(group, index) in pairedTeamsEight()"
            :key="index"
          >
            <div
              :class="['bracket__teams-info', { 'bracket__teams-info_win': item.win }]"
              v-for="item in group"
            >
              <div class="bracket__teams-row">
                <BaseImage :srcset="item.webp" :src="item.png" alt="flag" />
                <p class="bracket__teams-name">{{ item.name }}</p>
              </div>

              <p :class="['bracket__teams-score', { 'bracket__teams-score_win': item.win }]">
                {{ item.score }}
              </p>
            </div>
          </div>
        </div>

        <div class="bracket__teams-line bracket__teams-line_big">
          <div class="bracket__teams-icon bracket__teams-icon_big" v-for="line in 2">
            <BaseSvg id="teams-big-line" />
          </div>
        </div>
      </div>

      <!--1/2-->

      <div class="bracket__teams bracket__teams_eight">
        <div class="bracket__teams-block">
          <div
            class="bracket__teams-column bracket__teams-column_eight"
            v-for="(group, index) in pairedTeamsEight()"
            :key="index"
          >
            <div
              :class="['bracket__teams-info', { 'bracket__teams-info_win': item.win }]"
              v-for="item in group"
            >
              <div class="bracket__teams-row">
                <BaseImage :srcset="item.webp" :src="item.png" alt="flag" />
                <p class="bracket__teams-name">{{ item.name }}</p>
              </div>

              <p :class="['bracket__teams-score', { 'bracket__teams-score_win': item.win }]">
                {{ item.score }}
              </p>
            </div>
          </div>
        </div>

        <div class="bracket__teams-line bracket__teams-line_big">
          <div class="bracket__teams-icon bracket__teams-icon_big" v-for="line in 2">
            <BaseSvg id="teams-big-line" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.bracket {
  border: 2px solid #20252b;
  max-width: 812px;
  width: 100%;
  padding: 100px 90px 130px 33px;
  height: 100%;

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 36px;

    &-text {
      font-weight: 500;
      font-size: 16px;
      line-height: 100%;
      text-transform: uppercase;
      color: #fff;
    }
  }

  &__content {
    display: flex;
  }

  &__teams {
    display: flex;

    &_eight {
      margin-top: 44px;
    }

    &-block {
      max-width: 162px;
      width: 100%;
    }

    &-column {
      margin-bottom: 16px;

      &_eight {
        margin-bottom: 108px;
      }
    }

    &-info {
      border: 1px solid #20272e;
      border-radius: 2px 2px 0 0;
      padding-left: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      opacity: 0.5;

      &_win {
        opacity: 1;
        border: 1px solid #2c95ff;
        border-radius: 2px 2px 0 0;
      }
    }

    &-row {
      display: flex;
      align-items: center;
      height: 12px;

      img {
        display: block;
        width: 14px;
        height: 12px;
      }
    }

    &-name {
      font-weight: 400;
      font-size: 14px;
      line-height: 100%;
      color: #f5f5f5;
      margin-left: 8px;
    }

    &-score {
      font-weight: 400;
      font-size: 14px;
      line-height: 100%;
      text-align: center;
      color: #f5f5f5;
      border-radius: 0 1px 0 0;
      width: 38px;
      height: 36px;
      padding: 12px 14px;
      background: #20272e;

      &_win {
        font-weight: 500;
        color: #0f1215;
        background: #2c95ff;
      }
    }

    &-line {
      margin: 38px 17px 0 17px;

      &_big {
        margin: 35px 17px 0 17px;
      }
    }

    &-icon {
      width: 58px;
      height: 92px;
      margin-bottom: 90px;

      &_big {
        width: 58px;
        height: 190px;
        margin-bottom: 175px;
      }

      &:last-child {
        margin: 0;
      }

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
