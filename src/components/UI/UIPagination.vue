<script setup>
import BaseSvg from '@/components/Base/BaseSvg.vue';

const props = defineProps({
  totalPages: {
    type: Number,
    required: true,
  },

  setPage: {
    type: Function,
    required: true,
  },

  currentPage: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="pagination">
    <div class="pagination__row">
      <button class="pagination__arrow-left" @click="setPage(currentPage - 1)">
        <BaseSvg id="double-arrow" />
      </button>

      <button class="pagination__arrow-left" @click="setPage(currentPage - 1)">
        <BaseSvg id="pagination-arrow" />
      </button>

      <span
        :class="['pagination__number', { pagination__number_act: num === currentPage }]"
        v-for="num in totalPages"
        :key="num"
        @click="setPage((currentPage = num))"
      >
        {{ num }}
      </span>

      <button class="pagination__arrow-right" @click="setPage(currentPage + 1)">
        <BaseSvg id="pagination-arrow" />
      </button>

      <button class="pagination__arrow-right" @click="setPage(currentPage + 1)">
        <BaseSvg id="double-arrow" />
      </button>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';

.pagination {
  margin: 0 auto;

  &__row {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  &__arrow-left,
  &__arrow-right {
    svg {
      display: block;
      width: 24px;
      height: 24px;
    }
  }

  &__arrow-right {
    transform: rotate(-180deg);
  }

  &__number {
    margin: 0 53px;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    text-align: center;
    color: #fff;

    &_act {
      font-weight: 500;
      font-size: 22px;
      line-height: 100%;
      text-align: center;
      color: #2787f6;
    }

    @include media-breakpoint-down(xs) {
      margin: 0 auto;
    }
  }
}
</style>
