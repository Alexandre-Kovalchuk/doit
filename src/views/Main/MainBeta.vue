<script setup>
import BaseSvg from '@/components/Base/BaseSvg.vue';
import UIBtnBtn from '@/components/UI/UIBtn.vue';
import { useRoute } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';

const mainTitle = 'DOIT BETA';
const mainTxt = `Prepare for your esports career and get ready for awesome tournaments with big prize pools and much fun!<br />Register Now!`;
const commingTxt = 'We are working hard to provide you the best experience on our platform';
const mainOtherTxt =
  'Fermentum amet quis in at euismod pellentesque. Id diam amet non at ornare mollis nunc. Rutrum hendrerit erat pretium, senectus orci in dui.';
const svg = [
  {
    id: 'triangle-first',
    class: 'first',
  },
  {
    id: 'triangle-second',
    class: 'second',
  },
  {
    id: 'triangle-third',
    class: 'third',
  },
  {
    id: 'triangle-little',
    class: 'little',
  },
];

const route = useRoute().path;
const isLaptop = ref(window.innerWidth <= 1023);
const isMobile = ref(window.innerWidth <= 575);
const isComming = ref(route === '/cooming');
const title = ref(isComming.value ? 'Comming soon' : mainTitle);
const txt = ref(isComming.value ? commingTxt : mainTxt);
const showBtnMainPage = ref(!isComming.value);

const updateText = () => {
  if (isLaptop.value) {
    txt.value = mainOtherTxt;
  }
  if (isMobile.value) {
    title.value = mainTitle.slice(0, 4);
  }

  if (route === '/cooming') {
    title.value = 'Comming soon';
    txt.value = commingTxt;
  }
};

const handleResize = () => {
  isLaptop.value = window.innerWidth <= 1023;
  isMobile.value = window.innerWidth <= 575;
  updateText();
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

updateText();
</script>

<template>
  <section class="beta">
    <div class="container">
      <div class="beta__content">
        <h1 :class="['beta__title', { beta__title_comming: isComming }]" v-if="!isMobile">
          {{ title }}
        </h1>
        <h1 :class="['beta__title', { beta__title_comming: isComming }]" v-else>{{ title }}</h1>

        <p :class="['beta__text', { beta__text_comming: isComming }]" v-html="txt"></p>

        <div class="beta__btn" v-if="!isLaptop && showBtnMainPage">
          <UIBtnBtn label="Login" />
          <UIBtnBtn label="Sign up" color="blue" @click="showPopUp" />
        </div>

        <div v-for="item in svg" :class="['beta__svg', `beta__svg_${item.class}`]">
          <BaseSvg :id="item.id" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';

.beta {
  height: 936px;

  @include media-breakpoint-down(lg) {
    padding-left: 114px;
  }

  @include media-breakpoint-down(md) {
    padding-left: 0;
  }

  @include media-breakpoint-down(sm) {
    height: 731px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  &__title {
    font-weight: 700;
    font-size: clamp(84px, 7vw, 125px);
    line-height: 100%;
    text-align: center;
    margin-bottom: 17px;
    color: #f5f5f5;
    padding-top: 170px;

    &_comming {
      font-size: 66px;

      @include media-breakpoint-down(md) {
        font-size: 58px;
      }

      @include media-breakpoint-down(sm) {
        font-size: 50px;
      }

      @include media-breakpoint-down(xs) {
        font-size: 42px;
      }
    }

    @include media-breakpoint-down(sm) {
      padding-top: 243px;
    }

    @include media-breakpoint-down(xs) {
      margin-bottom: 8px;
    }
  }

  &__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    color: #ccc;
    max-width: 463px;
    width: 100%;
    margin-bottom: 14px;

    &_comming {
      font-weight: 700;
      font-size: 13px;
      line-height: 100%;
      color: #6a6767;

      @include media-breakpoint-down(xs) {
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        color: #ccc;
      }
    }
    @include media-breakpoint-down(xs) {
      font-size: 14px;
    }
  }

  &__btn {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 8px;
    max-width: 233px;
    width: 100%;
    height: 44px;
  }

  &__svg {
    position: absolute;
    z-index: -1;

    &_first {
      max-width: 1008px;
      width: 100%;
      height: 761px;
      top: 30px;
      animation: rotation 5s infinite linear;

      @include media-breakpoint-down(xs) {
        max-width: 310px;
        top: -41px;
      }
      svg {
        width: 100%;
        height: 100%;
      }
    }

    &_second {
      max-width: 1017px;
      width: 100%;
      height: 783px;
      top: 15px;
      left: 88px;
      animation: rotation 4.5s infinite linear;

      @include media-breakpoint-down(lg) {
        left: auto;
      }

      @include media-breakpoint-down(xs) {
        max-width: 310px;
        top: -54px;
      }

      svg {
        width: 100%;
        height: 100%;
      }
    }

    &_third {
      max-width: 1017px;
      width: 100%;
      height: 779px;
      top: 22px;
      left: 106px;
      animation: rotation 3.5s infinite linear;

      @include media-breakpoint-down(lg) {
        left: auto;
      }

      @include media-breakpoint-down(xs) {
        max-width: 310px;
        top: -51px;
      }

      svg {
        width: 100%;
        height: 100%;
      }
    }

    &_little {
      max-width: 634px;
      width: 100%;
      height: 479px;
      top: 120px;
      animation: rotation 2.5s infinite linear;

      @include media-breakpoint-down(xs) {
        max-width: 194px;
        top: 83px;
      }

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
}
@keyframes rotation {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}
</style>
