<script setup>
import BaseInput from '@/components/Base/BaseInput.vue';
import BaseImage from '@/components/Base/BaseImage.vue';
import { games } from '@/components/JSFiles/MainPage/GamesData.js';
import { ref, computed } from 'vue';

const searchGame = ref('');

const filterGames = computed(() => {
  if (searchGame.value.length > 0) {
    document.body.style.overflowY = 'scroll';
  }
  return games.filter((game) => {
    return game.txt.toLowerCase().includes(searchGame.value.toLowerCase());
  });
});
</script>

<template>
  <main class="main">
    <section class="game">
      <div class="container">
        <div class="game__row">
          <h1 class="game__title">Games</h1>

          <div class="game__inp">
            <BaseInput name="name" placeholder="Search the game" v-model:value="searchGame" />
          </div>
        </div>

        <div class="game__card">
          <div v-for="item in filterGames" :key="item.id" class="game__card-item">
            <BaseImage :srcset="item.webp" :src="item.img" :alt="item.txt" />
            <p class="game__card-txt">{{ item.txt }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';

.game {
  margin: 60px 0;

  @include media-breakpoint-down(lg) {
    padding-left: 114px;
  }

  @include media-breakpoint-down(md) {
    padding-left: 0;
    margin: 95px 0;
  }

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 19px;
    margin-left: 23px;

    @include media-breakpoint-down(sm) {
      flex-direction: column;
      align-items: flex-start;
      margin: 0;
    }
  }

  &__title {
    font-weight: 700;
    font-size: 44px;
    line-height: 100%;
    color: #f5f5f5;
    @include media-breakpoint-down(sm) {
      margin-bottom: 32px;
    }
  }

  &__inp {
    max-width: 512px;
    width: 100%;
    height: 40px;

    @include media-breakpoint-down(sm) {
      margin-bottom: 25px;
    }
  }

  &__card {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @include media-breakpoint-down(md) {
      grid-template-columns: repeat(2, 1fr);

      width: fit-content;
      margin: 0 auto;
    }

    @include media-breakpoint-down(sm) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px 0;
      width: auto;
    }

    &-item {
      position: relative;
      border-radius: 2px;
      max-width: 387px;
      width: 100%;
      height: 500px;

      @include media-breakpoint-down(xs) {
        max-width: 329px;
        height: 128px;
      }

      img {
        width: 100%;
        height: 100%;

        @include media-breakpoint-down(xs) {
          object-fit: cover;
        }
      }
    }

    &-txt {
      position: absolute;
      bottom: 30px;
      left: 0;
      right: 0;
      margin: 0 auto;
      font-weight: 700;
      font-size: 30px;
      line-height: 100%;
      color: #f5f5f5;
      width: fit-content;
      @include media-breakpoint-down(xs) {
        bottom: auto;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
}
</style>
