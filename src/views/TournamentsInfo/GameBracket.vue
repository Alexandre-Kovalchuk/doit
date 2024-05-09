<script setup>
import { ref, onMounted } from 'vue';
import BaseImage from '@/components/Base/BaseImage.vue';
import { logo } from '@/components/Data/UseLogoAndAvatar.js';
import BaseSvg from '@/components/Base/BaseSvg.vue';

const nameRound = ['Round 8', 'Semi-final', 'Final'];
const currentIndex = ref(2);

// onMounted(() => {
//   updateDisplayedRounds();
// });
//
// function updateDisplayedRounds() {
//   displayedRounds.value = nameRound.value.slice(currentIndex.value, currentIndex.value + 3);
// }
//
// function moveForward() {
//   if (currentIndex.value < nameRound.value.length - 3) {
//     currentIndex.value++;
//     updateDisplayedRounds();
//   }
// }
//
// function moveBackward() {
//   if (currentIndex.value > 0) {
//     currentIndex.value--;
//     updateDisplayedRounds();
//   }
// }

const nameTeams = [
  {
    id: 1,
    name: 'Walkower',
    score: 6,
    webp: new URL('../../assets/img/flagFirst.webp', import.meta.url),
    png: new URL('../../assets/img/flagFirst.png', import.meta.url),
    number: 4,
  },
  {
    id: 2,
    name: 'BF’s Squad',
    score: 8,
    webp: new URL('../../assets/img/flagSecond.webp', import.meta.url),
    png: new URL('../../assets/img/flagSecond.png', import.meta.url),
    win: true,
    number: 21,
  },
  {
    id: 3,
    name: 'Walkower',
    score: 6,
    webp: new URL('../../assets/img/flagFirst.webp', import.meta.url),
    png: new URL('../../assets/img/flagFirst.png', import.meta.url),
    number: 13,
  },
  {
    id: 4,
    name: 'BF’s Squad',
    score: 8,
    webp: new URL('../../assets/img/flagSecond.webp', import.meta.url),
    png: new URL('../../assets/img/flagSecond.png', import.meta.url),
    win: true,
    number: 8,
  },
  {
    id: 5,
    name: 'Walkower',
    score: 6,
    webp: new URL('../../assets/img/flagFirst.webp', import.meta.url),
    png: new URL('../../assets/img/flagFirst.png', import.meta.url),
    number: 13,
  },
  {
    id: 6,
    name: 'BF’s Squad',
    score: 8,
    webp: new URL('../../assets/img/flagSecond.webp', import.meta.url),
    png: new URL('../../assets/img/flagSecond.png', import.meta.url),
    win: true,
    number: 12,
  },
  {
    id: 7,
    name: 'Walkower',
    score: 6,
    webp: new URL('../../assets/img/flagFirst.webp', import.meta.url),
    png: new URL('../../assets/img/flagFirst.png', import.meta.url),
    number: 1,
  },
  {
    id: 8,
    name: 'BF’s Squad',
    score: 8,
    webp: new URL('../../assets/img/flagSecond.webp', import.meta.url),
    png: new URL('../../assets/img/flagSecond.png', import.meta.url),
    win: true,
    number: 5,
  },
];

const pairedTeams = () => {
  const pairs = [];
  for (let i = 0; i < nameTeams.length; i += 2) {
    pairs.push([nameTeams[i], nameTeams[i + 1]]);
  }
  return pairs;
};

const oneEighth = pairedTeams();
const oneHalf = pairedTeams().splice(0, 2);
const final = pairedTeams().splice(0, 1);
console.log(final);
</script>

<template>
  <div class="game-bracket bracket">
    <div class="bracket__row">
      <BaseSvg id="arrow" />

      <p class="bracket__row-text" v-for="(name, index) in nameRound" :key="index">
        {{ name }}
      </p>

      <BaseSvg id="arrow" />
    </div>
    <!--1/8-->
    <div class="bracket__content">
      <div class="bracket__teams">
        <div class="bracket__teams-block">
          <div class="bracket__teams-column" v-for="(group, index) in oneEighth" :key="index">
            <div class="bracket__teams-info" v-for="item in group">
              <p class="bracket__teams-number">{{ item.number }}</p>

              <div :class="['bracket__teams-row', { 'bracket__teams-row_win': item.win }]">
                <BaseImage :srcset="item.webp" :src="item.png" alt="flag" />

                <p class="bracket__teams-name">{{ item.name }}</p>

                <p :class="['bracket__teams-score', { 'bracket__teams-score_win': item.win }]">
                  {{ item.score }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="bracket__teams-line">
          <div class="bracket__teams-icon" v-for="line in 2">
            <BaseSvg id="teams-line" />
          </div>
        </div>
      </div>

      <!--1/2-->
      <div class="bracket__teams bracket__teams_half">
        <div class="bracket__teams-block">
          <div
            class="bracket__teams-column bracket__teams-column_half"
            v-for="(group, index) in oneHalf"
            :key="index"
          >
            <div class="bracket__teams-info" v-for="item in group">
              <div :class="['bracket__teams-row', { 'bracket__teams-row_win': item.win }]">
                <BaseImage :srcset="item.webp" :src="item.png" alt="flag" />

                <p class="bracket__teams-name">{{ item.name }}</p>

                <p :class="['bracket__teams-score', { 'bracket__teams-score_win': item.win }]">
                  {{ item.score }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="bracket__teams-line bracket__teams-line_half">
          <div class="bracket__teams-icon bracket__teams-icon_half" v-for="line in 1">
            <BaseSvg id="teams-big-line" />
          </div>
        </div>
      </div>

      <!--final-->
      <div class="bracket__teams bracket__teams_final">
        <div class="bracket__teams-block">
          <div
            class="bracket__teams-column bracket__teams-column_half"
            v-for="(group, index) in final"
            :key="index"
          >
            <div class="bracket__teams-info" v-for="item in group">
              <div :class="['bracket__teams-row', { 'bracket__teams-row_win': item.win }]">
                <BaseImage :srcset="item.webp" :src="item.png" alt="flag" />

                <p class="bracket__teams-name">{{ item.name }}</p>

                <p :class="['bracket__teams-score', { 'bracket__teams-score_win': item.win }]">
                  {{ item.score }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';

.bracket {
  border: 2px solid #20252b;
  max-width: 812px;
  width: 100%;
  padding: 95px 90px 130px 33px;
  height: 100%;

  @include media-breakpoint-down(md) {
    padding: 50px 20px 70px;
  }

  @include media-breakpoint-down(xs) {
    border: none;
    padding: 50px 0 70px;
  }

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 24px;

    svg {
      width: 25px;
      height: 25px;
      fill: transparent;

      &:last-child {
        transform: rotate(-180deg);
      }
    }

    &-text {
      font-weight: 500;
      font-size: 16px;
      line-height: 100%;
      text-transform: uppercase;
      color: #fff;

      @include media-breakpoint-down(xs) {
        font-weight: 700;

        &:nth-child(2),
        &:nth-child(4) {
          font-weight: 400;
          font-size: 10px;
          line-height: 100%;
          color: #9fb1cc;
        }
      }
    }
  }

  &__content {
    display: flex;
    width: 100%;
    overflow: auto;
  }

  &__teams {
    display: flex;

    &_half {
      margin-top: 44px;
    }

    &_final {
      margin-top: 135px;
    }

    &-column {
      margin-bottom: 16px;

      &_half {
        margin-bottom: 108px;
      }
    }

    &-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 198px;
      width: 100%;
    }

    &-number {
      display: block;
      width: 36px;
      padding: 10px 0;
      font-weight: 400;
      font-size: 14px;
      line-height: 100%;
      text-align: center;
      color: #fff;
    }

    &-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 38px;
      border: 1px solid #20272e;
      border-radius: 2px 2px 0 0;
      padding-left: 16px;
      opacity: 0.5;
      width: 168px;

      &_win {
        opacity: 1;
        border: 1px solid #2c95ff;
        border-radius: 2px 2px 0 0;
      }

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

      &_half {
        margin: 35px 17px 0 17px;
      }
    }

    &-icon {
      width: 58px;
      height: 92px;
      margin-bottom: 90px;

      &_half {
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
