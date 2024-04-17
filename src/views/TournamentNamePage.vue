<script setup>
import { useRoute } from 'vue-router';
import BaseImage from '@/components/Base/BaseImage.vue';
import { nameGame } from '@/components/JSFiles/MainPage/TournamentsData.js';
import BaseSvg from '@/components/Base/BaseSvg.vue';

const namePath = useRoute().path.slice(12, -2);

const title = nameGame[0][namePath].title;
const webp = nameGame[0][namePath].webp;
const png = nameGame[0][namePath].png;

console.log(title);
</script>

<template>
  <main class="main">
    <section class="tourney-info">
      <div class="container">
        <div class="tourney-info__content">
          <div class="tourney-info__row">
            <div class="tourney-info__back">
              <router-link :to="{ path: '/tournament', query: { q: namePath } }">
                <BaseSvg id="back" />

                <p>Back</p>
              </router-link>
            </div>

            <div class="tourney-info__logo">
              <BaseImage :srcset="webp" :src="png" :alt="title" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
.tourney-info {
  &__row {
    display: flex;
    justify-content: space-between;
  }

  &__back {
    a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 65px;
    }
    svg {
      display: block;
      width: 24px;
      height: 24px;
    }
    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: #9fb1cc;
    }
  }

  &__logo {
    width: 253px;
    height: 45px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
