<script setup>
import { faqsData } from '@/components/Data/FaqsData/FaqsData.js';
import BaseDropdown from '@/components/Base/BaseDropdown.vue';
import { computed, ref } from 'vue';
import BaseInput from '@/components/Base/BaseInput.vue';
import UIAccordion from '@/components/UI/UIAccordion.vue';
import { useSearch } from '@/composable/new/useSearch.js';
import BaseSvg from '@/components/Base/BaseSvg.vue';
import { gameData } from '@/components/Data/mainData/gamesData.js';

const { faqsInfoData, faqsAccordionsData, faqsInfoDataMobile } = faqsData();
const { games } = gameData();

const selectedBtn = ref(0);
const isMobile = ref(window.innerWidth <= 767);
const isOpen = ref(null);
const searchAccordionVal = ref('');
const newFaqsInfoData = ref([...faqsInfoData.value]);

const handleBtn = (index) => {
  selectedBtn.value = index;
};

const changingDisplayLocationBtnName = (index) => {
  const removedItem = newFaqsInfoData.value.splice(index, 1)[0];
  faqsInfoDataMobile.value.push(removedItem);
};

function openedAccordion(index) {
  isOpen.value = index;
}

const searchAccordion = computed(() => {
  return useSearch(faqsAccordionsData, 'title', searchAccordionVal.value);
});

window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth <= 767;
});
</script>

<template>
  <main class="main">
    <section class="faqs">
      <div class="container">
        <div class="faqs__content">
          <div class="faqs__column faqs__column_left">
            <div class="faqs__search faqs__search_mobile" v-if="isMobile">
              <BaseInput
                name="search"
                placeholder="How can we help you?"
                v-model:value="searchAccordionVal"
              />

              <div class="faqs__search-svg">
                <BaseSvg id="search-icon" />
              </div>
            </div>

            <div class="faqs__dropdown">
              <BaseDropdown :options="games.map((item) => item.txt)" label="Counter Strike GO" />
            </div>

            <div class="faqs__btn-info">
              <button
                :class="['faqs__btn', 'faqs__btn-mobile', { faqs__btn_act: selectedBtn === index }]"
                v-for="(btn, index) in isMobile ? faqsInfoDataMobile : faqsInfoData"
                :key="index"
                @click="handleBtn(index)"
              >
                {{ btn }}
              </button>
            </div>
          </div>

          <div class="faqs__column faqs__column_right">
            <div class="faqs__search" v-if="!isMobile">
              <BaseInput
                name="search"
                placeholder="How can we help you?"
                v-model:value="searchAccordionVal"
              />
            </div>

            <div class="faqs__accordion">
              <UIAccordion
                v-for="(accordion, index) in searchAccordion"
                :name="accordion.title"
                @opened-accordion="openedAccordion(index)"
                :is-active="isOpen === index"
              >
                <p class="faqs__accordion-text">{{ accordion.txt }}</p>
                <p class="faqs__accordion-text">{{ accordion.txtMedium }}</p>
                <p class="faqs__accordion-text">{{ accordion.txtSub }}</p>
              </UIAccordion>
            </div>

            <div class="faqs__btn-info faqs__btn-info_sub" v-if="isMobile">
              <button
                :class="['faqs__btn', { faqs__btn_act: selectedBtn === index }]"
                v-for="(btn, index) in newFaqsInfoData"
                :key="index"
                @click="changingDisplayLocationBtnName(index)"
              >
                {{ btn }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';

.main {
  @include media-breakpoint-down(sm) {
    padding: 100px 0 0;
  }

  @include media-breakpoint-down(xs) {
    padding: 89px 0 0;
  }
}

.faqs {
  margin: 64px 0 80px;

  @include media-breakpoint-down(lg) {
    padding-left: 114px;
  }

  @include media-breakpoint-down(md) {
    padding-left: 0;
  }

  @include media-breakpoint-down(sm) {
    margin-top: 0;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    margin: 0 23px;

    @include media-breakpoint-down(lg) {
      margin: 0;
    }

    @include media-breakpoint-down(sm) {
      flex-direction: column;
    }
  }

  &__column {
    &_left {
      max-width: 400px;
      width: 100%;

      @include media-breakpoint-down(sm) {
        max-width: 100%;
      }
    }

    &_right {
      max-width: 735px;
      width: 100%;
      margin-left: 31px;

      @include media-breakpoint-down(sm) {
        margin: 0;
      }
    }
  }

  &__search {
    position: relative;
    height: 60px;
    margin-bottom: 14px;

    @include media-breakpoint-down(xs) {
      height: 36px;
      margin-bottom: 34px;
    }
  }

  &__search-svg {
    position: absolute;
    right: 26px;
    top: 8px;
    width: 16px;
    height: 16px;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &__dropdown {
    margin-bottom: 14px;

    @include media-breakpoint-down(sm) {
      margin-bottom: 10px;
    }
  }

  &__btn-info {
    border: 2px solid #20252b;
    width: 100%;
    padding: 30px 15px 30px 20px;

    @include media-breakpoint-down(sm) {
      border: none;
      padding: 12px 0 0 3px;
    }
  }

  &__btn {
    display: block;
    font-weight: 500;
    font-size: 18px;
    color: #e6e8eb;
    margin-bottom: 35px;
    width: 304px;
    padding-left: 19px;
    text-align: left;

    &:last-child {
      margin-bottom: 0;
    }

    &_act {
      border-radius: 3px;
      background: linear-gradient(180deg, #2788f6 0%, #0960e0 100%);
      width: 100%;
      height: 51px;
      text-align: left;
      padding-left: 20px;
      margin-bottom: 19px;

      @include media-breakpoint-down(sm) {
        background: none;
        border-radius: 0;
      }
    }
  }

  &__btn-mobile {
    @include media-breakpoint-down(sm) {
      font-weight: 700;
      line-height: 130%;
      color: #2787f6;
      padding: 0;
    }
  }

  &__accordion {
    margin-top: 15px;

    @include media-breakpoint-down(xs) {
      margin-top: 24px;
    }
  }

  &__accordion-text {
    font-weight: 300;
    font-size: 16px;
    line-height: 160%;
    color: #ccc;
    margin-bottom: 27px;

    @include media-breakpoint-down(sm) {
      font-size: 14px;
      margin-bottom: 20px;
    }
  }

  // components
  .dropdown {
    &__selected {
      padding: 17px 0 15px 30px;
      font-weight: 500;
      font-size: 20px;
      line-height: 120%;
      color: #e6e8eb;
      border: 2px solid #20252b;
      height: 60px;

      @include media-breakpoint-down(sm) {
        font-weight: 500;
        font-size: 22px;
        line-height: 120%;
        padding: 0 0 15px 0;
        border: 2px solid transparent;
        border-bottom: 2px solid #20252b;
        height: 51px;
      }

      &_act {
        font-weight: 500;
        font-size: 20px;
        line-height: 120%;
        color: #e6e8eb;
      }
    }
  }

  .inp {
    border-radius: 3px;
    height: 60px;

    @include media-breakpoint-down(xs) {
      height: 36px;
    }

    &__text {
      @include media-breakpoint-down(sm) {
        font-size: 14px;
        padding: 8px 11px;
      }

      &::placeholder {
        font-weight: 400;
        font-size: 16px;
        line-height: 120%;
        color: #29313b;

        @include media-breakpoint-down(sm) {
          font-size: 14px;
        }
      }
    }
  }

  .accordion {
    width: 100%;
    margin-bottom: 0;

    padding: 0;
    background: #0f1215;

    @include media-breakpoint-down(sm) {
      border: none;
      margin-bottom: 8px;
    }

    &__row {
      background: #151a1f;
      height: 81px;
      padding: 0 40px 0 24px;

      @include media-breakpoint-down(sm) {
        height: 64px;
        padding: 0 40px 0 20px;
      }
    }

    &__title {
      font-weight: 400;
      font-size: 18px;
      color: #e6e8eb;
      text-transform: none;

      @include media-breakpoint-down(sm) {
        font-size: 16px;
      }
    }

    &__content {
      padding: 30px 58px 0 24px;

      @include media-breakpoint-down(sm) {
        padding: 10px 10px 0 20px;
      }
    }
  }
}
</style>
